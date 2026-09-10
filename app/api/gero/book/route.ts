import { randomUUID } from "node:crypto"
import { getDatabase } from "@/lib/db"
import { availableStartsForDate, isValidDate, slotInterval } from "@/lib/geronimo-booking"
import { getConnectedCalendar } from "@/lib/google-calendar"

export const runtime = "nodejs"

type BookingBody = {
  date?: string
  time?: string
  name?: string
  email?: string
  phone?: string
  notes?: string
}

export async function POST(request: Request) {
  let body: BookingBody
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: "Los datos enviados no son válidos." }, { status: 400 })
  }

  const date = body.date?.trim() ?? ""
  const time = body.time?.trim() ?? ""
  const name = body.name?.trim() ?? ""
  const email = body.email?.trim().toLowerCase() ?? ""
  const phone = body.phone?.trim() ?? ""
  const notes = body.notes?.trim().slice(0, 1000) || null

  if (
    !isValidDate(date) ||
    !availableStartsForDate(date).includes(time) ||
    name.length < 2 ||
    phone.length < 6 ||
    !/^\S+@\S+\.\S+$/.test(email)
  ) {
    return Response.json({ error: "Revisá los datos y el horario elegido." }, { status: 400 })
  }

  try {
    const availabilityResponse = await fetch(
      new URL(`/api/gero/availability?date=${encodeURIComponent(date)}`, request.url),
      { cache: "no-store" },
    )
    const availability = (await availabilityResponse.json()) as { slots?: string[] }
    if (!availability.slots?.includes(time)) {
      return Response.json({ error: "Ese horario acaba de ocuparse. Elegí otro." }, { status: 409 })
    }

    const id = randomUUID()
    const confirmationToken = randomUUID()
    const { start, end } = slotInterval(date, time)
    const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000)
    const calendar = await getConnectedCalendar()

    const event = await calendar.events.insert({
      calendarId: "primary",
      requestBody: {
        summary: `Reserva pendiente · ${name}`,
        description: [
          `WhatsApp: ${phone}`,
          `Email: ${email}`,
          notes ? `Observación: ${notes}` : null,
          "Pendiente de seña. Vence en 2 horas.",
        ].filter(Boolean).join("\n"),
        location: "Tata 5082, Caseros",
        start: { dateTime: start.toISOString(), timeZone: "America/Argentina/Buenos_Aires" },
        end: { dateTime: end.toISOString(), timeZone: "America/Argentina/Buenos_Aires" },
        extendedProperties: { private: { bookingId: id, status: "pending_deposit" } },
      },
    })

    const sql = getDatabase()
    await sql`
      INSERT INTO bookings (
        id, name, email, phone, notes, starts_at, ends_at,
        google_event_id, confirmation_token, expires_at
      ) VALUES (
        ${id}, ${name}, ${email}, ${phone}, ${notes}, ${start.toISOString()},
        ${end.toISOString()}, ${event.data.id ?? null}, ${confirmationToken}, ${expiresAt.toISOString()}
      )
    `

    return Response.json({ id, expiresAt: expiresAt.toISOString() }, { status: 201 })
  } catch (error) {
    console.error("Could not create booking", error)
    return Response.json({ error: "No pudimos reservar el horario. Intentá nuevamente." }, { status: 500 })
  }
}
