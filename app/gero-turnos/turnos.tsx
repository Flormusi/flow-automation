"use client"

import { FormEvent, useState } from "react"
import styles from "./turnos.module.css"

type Booking = {
  id: string
  name: string
  email: string
  phone: string
  notes: string | null
  starts_at: string
  status: "pending_deposit" | "confirmed"
  expires_at: string
}

export default function GeroTurnos() {
  const [pin, setPin] = useState("")
  const [bookings, setBookings] = useState<Booking[]>([])
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  async function loadBookings(event?: FormEvent) {
    event?.preventDefault()
    setLoading(true)
    setError("")
    const response = await fetch("/api/gero/admin", { headers: { "x-admin-pin": pin }, cache: "no-store" })
    const data = await response.json()
    if (!response.ok) {
      setError(data.error ?? "No pudimos cargar los turnos.")
      setLoading(false)
      return
    }
    setBookings(data.bookings)
    setAuthenticated(true)
    setLoading(false)
  }

  async function updateBooking(id: string, action: "confirm" | "cancel") {
    setLoading(true)
    setError("")
    const response = await fetch("/api/gero/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-pin": pin },
      body: JSON.stringify({ id, action }),
    })
    const data = await response.json()
    if (!response.ok) setError(data.error ?? "No pudimos actualizar el turno.")
    else await loadBookings()
    setLoading(false)
  }

  if (!authenticated) {
    return <main className={styles.page}>
      <form className={styles.login} onSubmit={loadBookings}>
        <img src="/geronimo-jorge.jpg" alt="Gerónimo Jorge" />
        <p>Panel privado</p>
        <h1>Mis turnos</h1>
        <label>Código de acceso<input type="password" value={pin} onChange={(event) => setPin(event.target.value)} required /></label>
        {error && <span className={styles.error}>{error}</span>}
        <button disabled={loading}>{loading ? "Ingresando…" : "Ingresar"}</button>
      </form>
    </main>
  }

  return <main className={styles.page}>
    <section className={styles.dashboard}>
      <header><div><p>Gerónimo Jorge</p><h1>Próximos turnos</h1></div><button onClick={() => loadBookings()} disabled={loading}>Actualizar</button></header>
      {error && <span className={styles.error}>{error}</span>}
      <div className={styles.list}>
        {bookings.length === 0 && <div className={styles.empty}>Todavía no hay reservas próximas.</div>}
        {bookings.map((booking) => {
          const date = new Intl.DateTimeFormat("es-AR", { weekday: "long", day: "numeric", month: "long", hour: "2-digit", minute: "2-digit", timeZone: "America/Argentina/Buenos_Aires" }).format(new Date(booking.starts_at))
          return <article key={booking.id}>
            <div className={styles.top}><strong>{booking.name}</strong><span className={booking.status === "confirmed" ? styles.confirmed : styles.pending}>{booking.status === "confirmed" ? "Confirmado" : "Esperando seña"}</span></div>
            <h2>{date}</h2>
            <p>{booking.phone} · {booking.email}</p>
            {booking.notes && <p className={styles.notes}>{booking.notes}</p>}
            <div className={styles.actions}>
              {booking.status === "pending_deposit" && <button className={styles.confirm} onClick={() => updateBooking(booking.id, "confirm")} disabled={loading}>Confirmar seña</button>}
              <button className={styles.cancel} onClick={() => updateBooking(booking.id, "cancel")} disabled={loading}>Cancelar turno</button>
            </div>
          </article>
        })}
      </div>
    </section>
  </main>
}
