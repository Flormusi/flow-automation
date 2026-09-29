import { randomUUID } from "node:crypto"
import { ensureJuliBookingsTable, isValidJuliDate, juliSlotInterval, juliSlotsForDate } from "@/lib/juli-booking"
import { getConnectedCalendar, JULI_CALENDAR_PROVIDER } from "@/lib/google-calendar"

export const runtime = "nodejs"

type BookingBody = { date?: string; time?: string; name?: string; email?: string; phone?: string; notes?: string }

export async function POST(request: Request) {
  let body: BookingBody
  try { body = await request.json() } catch {
    return Response.json({ error: "Los datos enviados no son válidos." }, { status: 400 })
  }
  const date = body.date?.trim() ?? ""
  const time = body.time?.trim() ?? ""
  const name = body.name?.trim() ?? ""
  const email = body.email?.trim().toLowerCase() ?? ""
  const phone = body.phone?.trim() ?? ""
  const notes = body.notes?.trim().slice(0, 1000) || null
  if (!isValidJuliDate(date) || !juliSlotsForDate(date).some((slot) => slot.time === time) || name.length < 2 || phone.length < 6 || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ error: "Revisá los datos y el horario elegido." }, { status: 400 })
  }

  try {
    const availabilityResponse = await fetch(new URL(`/api/juli/availability?date=${encodeURIComponent(date)}`, request.url), { cache: "no-store" })
    const availability = await availabilityResponse.json() as { slots?: Array<{ time: string }> }
    if (!availability.slots?.some((slot) => slot.time === time)) {
      return Response.json({ error: "Ese horario acaba de ocuparse. Elegí otro." }, { status: 409 })
    }
    const interval = juliSlotInterval(date, time)
    if (!interval) return Response.json({ error: "El horario no es válido." }, { status: 400 })
    const id = randomUUID()
    const calendar = await getConnectedCalendar(JULI_CALENDAR_PROVIDER)
    const event = await calendar.events.insert({
      calendarId: "primary",
      requestBody: {
        summary: `Solicitud pendiente · ${name}`,
        description: [`WhatsApp: ${phone}`, `Email: ${email}`, notes ? `Observación: ${notes}` : null, "Pendiente de confirmación por Juli."].filter(Boolean).join("\n"),
        location: "Av. Juan Bautista Alberdi 4494, Caseros",
        start: { dateTime: interval.start.toISOString(), timeZone: "America/Argentina/Buenos_Aires" },
        end: { dateTime: interval.end.toISOString(), timeZone: "America/Argentina/Buenos_Aires" },
        extendedProperties: { private: { bookingId: id, status: "pending_confirmation", practitioner: "juli" } },
      },
    })
    const sql = await ensureJuliBookingsTable()
    await sql`
      INSERT INTO juli_bookings (id, name, email, phone, notes, starts_at, ends_at, google_event_id)
      VALUES (${id}, ${name}, ${email}, ${phone}, ${notes}, ${interval.start.toISOString()}, ${interval.end.toISOString()}, ${event.data.id ?? null})
    `
    return Response.json({ id }, { status: 201 })
  } catch (error) {
    console.error("Could not create Juli booking", error)
    return Response.json({ error: "No pudimos enviar la solicitud. Intentá nuevamente." }, { status: 500 })
  }
}
