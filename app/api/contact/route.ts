// app/api/contact/route.ts
type ContactBody = {
  name?: string
  email?: string
  message?: string
}

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as ContactBody

    // Validación mínima
    if (!data?.name || !data?.email || !data?.message) {
      return new Response(JSON.stringify({ ok: false, error: "Faltan campos requeridos." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // TODO: acá podés guardar en DB o enviar a un webhook/email
    // Por ahora, solo “simulamos” guardado:
    console.log("[CONTACT] ", data)

    return new Response(JSON.stringify({ ok: true, receivedAt: new Date().toISOString() }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: "JSON inválido o error interno." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
