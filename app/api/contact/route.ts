export const runtime = "nodejs" // fuerza Serverless (logs en Runtime Logs / Serverless)
export const dynamic = "force-dynamic" // evita caché

type ContactBody = { name?: string; email?: string; message?: string }

async function parseBody(req: Request): Promise<ContactBody> {
  const ct = req.headers.get("content-type") || ""
  try {
    if (ct.includes("application/json")) {
      return (await req.json()) as ContactBody
    }
    if (ct.includes("application/x-www-form-urlencoded") || ct.includes("multipart/form-data")) {
      const fd = await req.formData()
      return {
        name: String(fd.get("name") || ""),
        email: String(fd.get("email") || ""),
        message: String(fd.get("message") || ""),
      }
    }
  } catch (e) {
    // caemos a objeto vacío
  }
  return {}
}

export async function POST(req: Request) {
  const data = await parseBody(req)

  if (!data?.name || !data?.email || !data?.message) {
    console.warn("[CONTACT] missing_fields", data)
    return new Response(JSON.stringify({ ok: false, error: "Faltan campos requeridos." }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Log estructurado (más fácil de encontrar en Vercel)
  console.log(
    "[CONTACT] received",
    JSON.stringify({
      name: data.name,
      email: data.email,
      len: data.message.length,
    }),
  )

  // TODO: guardar en DB o enviar a n8n/Make

  return new Response(JSON.stringify({ ok: true, receivedAt: new Date().toISOString(), echo: data }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
