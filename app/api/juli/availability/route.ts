import {
  isValidJuliDate,
  JULI_MAX_BOOKINGS_PER_DAY,
  JULI_TIME_ZONE,
  juliSlotInterval,
  juliSlotsForDate,
  overlapsJuli,
} from "@/lib/juli-booking"
import { getConnectedCalendar, JULI_CALENDAR_PROVIDER } from "@/lib/google-calendar"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const date = new URL(request.url).searchParams.get("date") ?? ""
  if (!isValidJuliDate(date)) {
    return Response.json({ error: "La fecha no es válida." }, { status: 400 })
  }

  try {
    const calendar = await getConnectedCalendar(JULI_CALENDAR_PROVIDER)
    const dayStart = new Date(`${date}T00:00:00-03:00`)
    const dayEnd = new Date(`${date}T23:59:59-03:00`)
    const freeBusy = await calendar.freebusy.query({
      requestBody: {
        timeMin: dayStart.toISOString(),
        timeMax: dayEnd.toISOString(),
        timeZone: JULI_TIME_ZONE,
        items: [{ id: "primary" }],
      },
    })
    const busy = (freeBusy.data.calendars?.primary?.busy ?? []).filter(
      (period): period is { start: string; end: string } => Boolean(period.start && period.end),
    )
    if (busy.length >= JULI_MAX_BOOKINGS_PER_DAY) return Response.json({ date, slots: [] })

    const now = new Date()
    const slots = juliSlotsForDate(date).flatMap((slot) => {
      const interval = juliSlotInterval(date, slot.time)
      if (!interval || interval.start <= now) return []
      if (busy.some((period) => overlapsJuli(interval.start, interval.end, period.start, period.end))) return []
      const recommended = busy.some((period) => {
        const busyStart = new Date(period.start).getTime()
        const busyEnd = new Date(period.end).getTime()
        const gapBefore = busyStart - interval.end.getTime()
        const gapAfter = interval.start.getTime() - busyEnd
        return (gapBefore >= 0 && gapBefore <= 15 * 60 * 1000) || (gapAfter >= 0 && gapAfter <= 15 * 60 * 1000)
      })
      return [{ time: slot.time, duration: slot.duration, recommended }]
    }).sort((a, b) => Number(b.recommended) - Number(a.recommended) || a.time.localeCompare(b.time))

    return Response.json({ date, slots })
  } catch (error) {
    console.error("Could not load Juli availability", error)
    return Response.json({ error: "No pudimos consultar los horarios." }, { status: 500 })
  }
}
