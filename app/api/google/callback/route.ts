import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/db"
import { createGoogleOAuthClient, GOOGLE_CALENDAR_PROVIDER } from "@/lib/google-calendar"

export const runtime = "nodejs"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  const state = url.searchParams.get("state")
  const cookieStore = await cookies()
  const expectedState = cookieStore.get("google_oauth_state")?.value

  if (!code || !state || !expectedState || state !== expectedState) {
    return NextResponse.json({ error: "La autorización no es válida o venció." }, { status: 400 })
  }

  try {
    const oauthClient = createGoogleOAuthClient()
    const { tokens } = await oauthClient.getToken(code)

    if (!tokens.refresh_token) {
      throw new Error("Google did not return a refresh token")
    }

    oauthClient.setCredentials(tokens)
    const sql = getDatabase()

    await sql`
      INSERT INTO calendar_connections (provider, email, refresh_token, scope, updated_at)
      VALUES (
        ${GOOGLE_CALENDAR_PROVIDER},
        ${null},
        ${tokens.refresh_token},
        ${tokens.scope ?? null},
        NOW()
      )
      ON CONFLICT (provider) DO UPDATE SET
        email = EXCLUDED.email,
        refresh_token = EXCLUDED.refresh_token,
        scope = EXCLUDED.scope,
        updated_at = NOW()
    `

    cookieStore.delete("google_oauth_state")
    return NextResponse.redirect(new URL("/reserva-gero?calendar=connected", request.url))
  } catch (error) {
    console.error("Could not complete Google OAuth", error)
    return NextResponse.json({ error: "No se pudo conectar Google Calendar." }, { status: 500 })
  }
}
