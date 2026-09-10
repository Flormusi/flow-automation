import { getDatabase } from "@/lib/db"
import {
  ARGENTINA_TIME_ZONE,
  availableStartsForDate,
  isValidDate,
  MAX_BOOKINGS_PER_DAY,
  overlaps,
  slotInterval,
} from "@/lib/geronimo-booking"
import { getConnectedCalendar } from "@/lib/google-calendar"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get("date") ?? ""
  if (!isValidDate(date)) {
    return Response.json({ error: "La fecha no es válida." }, { status: 400 })
  }

  try {
    const sql = getDatabase()
    const calendar = await getConnectedCalendar()
    const dayStart = new Date(`${date}T00:00:00-03:00`)
    const dayEnd = new Date(`${date}T23:59:59-03:00`)

    const expired = await sql`
      SELECT id, google_event_id
      FROM bookings
      WHERE status = 'pending_deposit' AND expires_at <= NOW()
    `
    await Promise.all(expired.map(async (booking) => {
      if (booking.google_event_id) {
        await calendar.events.delete({ calendarId: "primary", eventId: booking.google_event_id as string })
          .catch((error) => console.warn("Could not remove expired calendar hold", error))
      }
    }))
    if (expired.length > 0) {
      await sql`
        UPDATE bookings SET status = 'expired', updated_at = NOW()
        WHERE status = 'pending_deposit' AND expires_at <= NOW()
      `
    }

    const freeBusy = await calendar.freebusy.query({
      requestBody: {
        timeMin: dayStart.toISOString(),
        timeMax: dayEnd.toISOString(),
        timeZone: ARGENTINA_TIME_ZONE,
        items: [{ id: "primary" }],
      },
    })

    const calendarBusy = freeBusy.data.calendars?.primary?.busy ?? []
    const busy = calendarBusy.filter(
      (period): period is { start: string; end: string } => Boolean(period.start && period.end),
    )

    if (busy.length >= MAX_BOOKINGS_PER_DAY) {
      return Response.json({ date, slots: [] })
    }

    const now = new Date()
    const slots = availableStartsForDate(date).filter((time) => {
      const { start, end } = slotInterval(date, time)
      return start > now && !busy.some((period) => overlaps(start, end, period.start, period.end))
    })

    return Response.json({ date, slots })
  } catch (error) {
    console.error("Could not load availability", error)
    return Response.json({ error: "No pudimos consultar los horarios." }, { status: 500 })
  }
}
