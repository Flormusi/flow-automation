import { Resend } from "resend"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactBody = { name?: string; email?: string; message?: string }

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactBody
    const name = (data?.name || "").trim()
    const email = (data?.email || "").trim()
    const message = (data?.message || "").trim()

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ ok: false, error: "Faltan campos requeridos." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    console.log(`[CONTACT BACKEND] Nuevo mensaje → Nombre: ${name}, Email: ${email}, len: ${message.length}`)

    const to = process.env.CONTACT_TO!
    const from = process.env.CONTACT_FROM || "Flow Automation <onboarding@resend.dev>"

    await resend.emails.send({
      from,
      to: [to],
      reply_to: email,
      subject: `Nuevo contacto: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
      html: `<div style="font-family:system-ui,Segoe UI,Arial,sans-serif;line-height:1.5">
              <h2>Nuevo contacto</h2>
              <p><strong>Nombre:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Mensaje:</strong></p>
              <pre style="white-space:pre-wrap">${message}</pre>
            </div>`,
    })

    return new Response(JSON.stringify({ ok: true, receivedAt: new Date().toISOString() }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    console.error("[CONTACT BACKEND] error:", err)
    return new Response(JSON.stringify({ ok: false, error: "Error enviando el email." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function GET() {
  console.log("[CONTACT] GET ping")
  return new Response(JSON.stringify({ ok: true, method: "GET" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
