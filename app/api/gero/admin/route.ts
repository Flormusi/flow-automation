import { timingSafeEqual } from "node:crypto"
import { getDatabase } from "@/lib/db"
import { getConnectedCalendar } from "@/lib/google-calendar"

export const runtime = "nodejs"

function isAuthorized(request: Request) {
  const received = request.headers.get("x-admin-pin") ?? ""
  const expected = process.env.GERO_ADMIN_PIN ?? ""
  if (!received || !expected || received.length !== expected.length) return false
  return timingSafeEqual(Buffer.from(received), Buffer.from(expected))
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: "Código incorrecto." }, { status: 401 })
  }

  const sql = getDatabase()
  const bookings = await sql`
    SELECT id, name, email, phone, notes, starts_at, ends_at, status, expires_at
    FROM bookings
    WHERE starts_at >= NOW() - INTERVAL '1 day'
      AND status IN ('pending_deposit', 'confirmed')
    ORDER BY starts_at ASC
    LIMIT 100
  `
  return Response.json({ bookings })
}

export async function POST(request: Request) {
  if (!isAuthorized(request)) {
    return Response.json({ error: "Código incorrecto." }, { status: 401 })
  }

  const body = await request.json() as { id?: string; action?: "confirm" | "cancel" }
  if (!body.id || !["confirm", "cancel"].includes(body.action ?? "")) {
    return Response.json({ error: "Acción no válida." }, { status: 400 })
  }

  const sql = getDatabase()
  const rows = await sql`
    SELECT id, name, email, phone, notes, google_event_id, status
    FROM bookings WHERE id = ${body.id} LIMIT 1
  `
  const booking = rows[0]
  if (!booking) return Response.json({ error: "No encontramos la reserva." }, { status: 404 })

  const calendar = await getConnectedCalendar()
  const eventId = booking.google_event_id as string | null

  if (body.action === "confirm") {
    if (!eventId) return Response.json({ error: "La reserva no tiene evento asociado." }, { status: 409 })

    await calendar.events.patch({
      calendarId: "primary",
      eventId,
      sendUpdates: "all",
      requestBody: {
        summary: `Turno confirmado · ${booking.name}`,
        attendees: [{ email: booking.email as string }],
        description: [
          `WhatsApp: ${booking.phone}`,
          `Email: ${booking.email}`,
          booking.notes ? `Observación: ${booking.notes}` : null,
          "Seña recibida. Turno confirmado.",
          "Recordá venir con ropa cómoda.",
        ].filter(Boolean).join("\n"),
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 },
            { method: "popup", minutes: 24 * 60 },
          ],
        },
        extendedProperties: { private: { bookingId: body.id, status: "confirmed" } },
      },
    })
    await sql`UPDATE bookings SET status = 'confirmed', updated_at = NOW() WHERE id = ${body.id}`
    return Response.json({ ok: true, status: "confirmed" })
  }

  if (eventId) {
    await calendar.events.delete({ calendarId: "primary", eventId, sendUpdates: "all" })
      .catch((error) => console.warn("Could not remove cancelled calendar event", error))
  }
  await sql`UPDATE bookings SET status = 'cancelled', updated_at = NOW() WHERE id = ${body.id}`
  return Response.json({ ok: true, status: "cancelled" })
}
