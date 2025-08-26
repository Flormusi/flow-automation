export async function GET() {
  const healthData = {
    ok: true,
    env: process.env.NODE_ENV || "development",
    time: new Date().toISOString(),
  }

  return new Response(JSON.stringify(healthData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
