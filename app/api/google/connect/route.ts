import { randomBytes } from "node:crypto"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
import { createGoogleOAuthClient, googleCalendarScopes } from "@/lib/google-calendar"

export const runtime = "nodejs"

export async function GET() {
  try {
    const state = randomBytes(24).toString("hex")
    const cookieStore = await cookies()
    cookieStore.set("google_oauth_state", state, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: 10 * 60,
      path: "/",
    })

    const authorizationUrl = createGoogleOAuthClient().generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      scope: googleCalendarScopes,
      state,
    })

    return NextResponse.redirect(authorizationUrl)
  } catch (error) {
    console.error("Could not start Google OAuth", error)
    return NextResponse.json(
      { error: "Todavía falta configurar el acceso a Google Calendar." },
      { status: 500 },
    )
  }
}
