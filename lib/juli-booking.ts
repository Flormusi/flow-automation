import { getDatabase } from "@/lib/db"

export const JULI_TIME_ZONE = "America/Argentina/Buenos_Aires"
export const JULI_MAX_BOOKINGS_PER_DAY = 5

const schedules: Record<number, Array<{ time: string; duration: number }>> = {
  1: [
    { time: "16:00", duration: 60 },
    { time: "17:00", duration: 60 },
    { time: "18:15", duration: 60 },
    { time: "19:15", duration: 60 },
  ],
  2: [
    { time: "10:00", duration: 60 }, { time: "11:00", duration: 60 },
    { time: "12:15", duration: 60 }, { time: "16:00", duration: 60 },
    { time: "17:00", duration: 60 }, { time: "18:15", duration: 60 },
    { time: "19:15", duration: 60 },
  ],
  3: [
    { time: "10:00", duration: 60 }, { time: "11:00", duration: 60 },
    { time: "12:15", duration: 60 }, { time: "16:00", duration: 60 },
    { time: "17:00", duration: 60 }, { time: "18:15", duration: 60 },
    { time: "19:15", duration: 60 },
  ],
  4: [
    { time: "10:00", duration: 60 }, { time: "11:00", duration: 60 },
    { time: "12:15", duration: 60 }, { time: "16:00", duration: 60 },
    { time: "17:00", duration: 60 }, { time: "18:15", duration: 60 },
    { time: "19:15", duration: 60 },
  ],
  5: [
    { time: "15:00", duration: 60 }, { time: "16:00", duration: 60 },
    { time: "17:00", duration: 90 }, { time: "18:30", duration: 60 },
  ],
}

export function isValidJuliDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false
  const parsed = new Date(`${date}T12:00:00-03:00`)
  const today = new Date()
  const lastDay = new Date()
  today.setHours(0, 0, 0, 0)
  lastDay.setDate(lastDay.getDate() + 60)
  return !Number.isNaN(parsed.getTime()) && parsed >= today && parsed <= lastDay
}

export function juliSlotsForDate(date: string) {
  const weekday = new Date(`${date}T12:00:00-03:00`).getUTCDay()
  return schedules[weekday] ?? []
}

export function juliSlotInterval(date: string, time: string) {
  const slot = juliSlotsForDate(date).find((item) => item.time === time)
  if (!slot) return null
  const start = new Date(`${date}T${time}:00-03:00`)
  return { start, end: new Date(start.getTime() + slot.duration * 60 * 1000), duration: slot.duration }
}

export function overlapsJuli(start: Date, end: Date, busyStart: string, busyEnd: string) {
  return start < new Date(busyEnd) && end > new Date(busyStart)
}

export async function ensureJuliBookingsTable() {
  const sql = getDatabase()
  await sql`
    CREATE TABLE IF NOT EXISTS juli_bookings (
      id UUID PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      phone TEXT NOT NULL,
      notes TEXT,
      starts_at TIMESTAMPTZ NOT NULL,
      ends_at TIMESTAMPTZ NOT NULL,
      google_event_id TEXT,
      status TEXT NOT NULL DEFAULT 'pending_confirmation',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `
  return sql
}
