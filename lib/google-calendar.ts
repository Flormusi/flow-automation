import { google } from "googleapis"

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
