import { google } from "googleapis"
import { getDatabase } from "@/lib/db"

export const GOOGLE_CALENDAR_PROVIDER = "geronimo"

function getGoogleCredentials() {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  const redirectUri = process.env.GOOGLE_REDIRECT_URI

  if (!clientId || !clientSecret || !redirectUri) {
    throw new Error("Google Calendar credentials are not configured")
  }

  return { clientId, clientSecret, redirectUri }
}

export function createGoogleOAuthClient() {
  const { clientId, clientSecret, redirectUri } = getGoogleCredentials()
  return new google.auth.OAuth2(clientId, clientSecret, redirectUri)
}

export const googleCalendarScopes = [
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/calendar.freebusy",
]

export async function getConnectedCalendar() {
  const sql = getDatabase()
  const rows = await sql`
    SELECT refresh_token
    FROM calendar_connections
    WHERE provider = ${GOOGLE_CALENDAR_PROVIDER}
    LIMIT 1
  `

  const refreshToken = rows[0]?.refresh_token as string | undefined
  if (!refreshToken) throw new Error("Google Calendar is not connected")

  const auth = createGoogleOAuthClient()
  auth.setCredentials({ refresh_token: refreshToken })
  return google.calendar({ version: "v3", auth })
}
