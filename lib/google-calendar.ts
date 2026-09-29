import { google } from "googleapis"
import { getDatabase } from "@/lib/db"

export const GOOGLE_CALENDAR_PROVIDER = "geronimo"
export const JULI_CALENDAR_PROVIDER = "juli"
export type CalendarProvider = typeof GOOGLE_CALENDAR_PROVIDER | typeof JULI_CALENDAR_PROVIDER

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
  "https://www.googleapis.com/auth/userinfo.email",
]

export async function getConnectedCalendar(provider: CalendarProvider = GOOGLE_CALENDAR_PROVIDER) {
  const sql = getDatabase()
  const rows = await sql`
    SELECT refresh_token
    FROM calendar_connections
    WHERE provider = ${provider}
    LIMIT 1
  `

  const refreshToken = rows[0]?.refresh_token as string | undefined
  if (!refreshToken) throw new Error("Google Calendar is not connected")

  const auth = createGoogleOAuthClient()
  auth.setCredentials({ refresh_token: refreshToken })
  return google.calendar({ version: "v3", auth })
}
