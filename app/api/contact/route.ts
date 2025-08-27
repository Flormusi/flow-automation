// Fuerza logs en Serverless (no Edge)
export const runtime = "nodejs"
export const dynamic = "force-dynamic"

type ContactBody = { name?: string; email?: string; message?: string }

async function parseBody(req: Request): Promise<ContactBody> {
  const ct = req.headers.get("content-type") || ""
  try {
    if (ct.includes("application/json")) return (await req.json()) as ContactBody
    if (ct.includes("application/x-www-form-urlencoded") || ct.includes("multipart/form-data")) {
      const fd = await req.formData()
      return {
        name: String(fd.get("name") ?? ""),
        email: String(fd.get("email") ?? ""),
        message: String(fd.get("message") ?? ""),
      }
    }
  } catch {}
  return {}
}

export async function POST(req: Request) {
  try {
    const data = await parseBody(req)

    if (!data.name || !data.email || !data.message) {
      console.warn("[CONTACT] missing_fields", JSON.stringify(data))
      return new Response(JSON.stringify({ ok: false, error: "Faltan campos requeridos." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // 👇 este log debería verse sí o sí en Runtime Logs (Serverless)
    console.log(
      "[CONTACT] received",
      JSON.stringify({
        name: data.name,
        email: data.email,
        len: data.message.length,
      }),
    )

    console.log(
      `[CONTACT BACKEND] Nuevo mensaje → Nombre: ${data.name}, Email: ${data.email}, Mensaje: ${data.message}`,
    )

    return new Response(JSON.stringify({ ok: true, echo: data, at: new Date().toISOString() }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error(`[CONTACT BACKEND] error:`, error)
    return new Response(JSON.stringify({ ok: false, error: "Error interno del servidor." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

// (opcional) GET temporal para testear fácil desde el navegador
export async function GET() {
  console.log("[CONTACT] GET ping")
  return new Response(JSON.stringify({ ok: true, method: "GET" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
