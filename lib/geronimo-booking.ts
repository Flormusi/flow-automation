export const ARGENTINA_TIME_ZONE = "America/Argentina/Buenos_Aires"
export const MAX_BOOKINGS_PER_DAY = 6

export function isValidDate(date: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false
  const parsed = new Date(`${date}T12:00:00-03:00`)
  const today = new Date()
  const lastDay = new Date()
  today.setHours(0, 0, 0, 0)
  lastDay.setDate(lastDay.getDate() + 45)
  return !Number.isNaN(parsed.getTime()) && parsed >= today && parsed <= lastDay
}

export function availableStartsForDate(date: string) {
  const weekday = new Date(`${date}T12:00:00-03:00`).getUTCDay()
  if (weekday === 0) return []

  const openingMinutes = weekday === 6 ? 10 * 60 : 9 * 60
  const lastStartMinutes = weekday === 6 ? 15 * 60 : 18 * 60 + 30
  const slots: string[] = []

  for (let minutes = openingMinutes; minutes <= lastStartMinutes; minutes += 30) {
    const hour = String(Math.floor(minutes / 60)).padStart(2, "0")
    const minute = String(minutes % 60).padStart(2, "0")
    slots.push(`${hour}:${minute}`)
  }

  return slots
}

export function slotInterval(date: string, time: string) {
  const start = new Date(`${date}T${time}:00-03:00`)
  return { start, end: new Date(start.getTime() + 60 * 60 * 1000) }
}

export function overlaps(start: Date, end: Date, busyStart: string, busyEnd: string) {
  return start < new Date(busyEnd) && end > new Date(busyStart)
}
