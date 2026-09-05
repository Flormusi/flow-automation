"use client"

import { FormEvent, useMemo, useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clock3,
  MapPin,
  MessageSquareText,
  ShieldCheck,
} from "lucide-react"
import styles from "./reserva.module.css"

type Day = { key: string; weekday: string; day: string; month: string }

const slotsByDay: Record<string, string[]> = {
  "0": ["09:00", "10:30", "12:00", "15:00", "17:00", "18:30"],
  "1": ["10:00", "11:30", "14:00", "16:30", "18:30"],
  "2": ["09:00", "12:30", "14:30", "17:30"],
  "3": ["09:30", "11:00", "13:30", "16:00", "18:30"],
}

function getNextDays(): Day[] {
  const result: Day[] = []
  const cursor = new Date()
  cursor.setHours(12, 0, 0, 0)
  while (result.length < 4) {
    cursor.setDate(cursor.getDate() + 1)
    if (cursor.getDay() === 0) continue
    result.push({
      key: String(result.length),
      weekday: new Intl.DateTimeFormat("es-AR", { weekday: "short" }).format(cursor).replace(".", ""),
      day: String(cursor.getDate()),
      month: new Intl.DateTimeFormat("es-AR", { month: "short" }).format(cursor).replace(".", ""),
    })
  }
  return result
}

export default function ReservaGero() {
  const days = useMemo(getNextDays, [])
  const [dayKey, setDayKey] = useState("0")
  const [time, setTime] = useState("")
  const [step, setStep] = useState<"schedule" | "details" | "pending">("schedule")
  const [copied, setCopied] = useState(false)

  const selectedDay = days.find((day) => day.key === dayKey) ?? days[0]

  function continueToDetails() {
    if (time) setStep("details")
  }

  function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStep("pending")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className={styles.page}>
      <div className={styles.demoBar}>Versión de prueba · El turno no se reservará realmente</div>
      <header className={styles.header}>
        <div className={styles.identity}>
          <img className={styles.avatar} src="/geronimo-jorge.jpg" alt="Gerónimo Jorge" />
          <div><strong>Gerónimo Jorge</strong><small>Tu masajista de confianza</small></div>
        </div>
        <span className={styles.secure}><ShieldCheck size={16} /> Reserva segura</span>
      </header>

      <section className={styles.layout}>
        <aside className={styles.summary}>
          <p className={styles.kicker}>¿Qué onda, contracturad@?</p>
          <h1>Reservá tu sesión</h1>
          <p className={styles.description}>Elegí el horario que mejor te quede. La sesión se adapta a tus molestias y a lo que necesite tu cuerpo.</p>
          <img className={styles.heroPhoto} src="/geronimo-jorge.jpg" alt="Gerónimo Jorge" />
          <div className={styles.facts}>
            <div><Clock3 size={19} /><span><strong>60 minutos</strong><small>Sin tiempo de espera</small></span></div>
            <div><MapPin size={19} /><span><strong>Tata 5082, Caseros</strong><small>Atención presencial</small></span></div>
            <div><CalendarDays size={19} /><span><strong>Seña de $5.000</strong><small>El turno se confirma al recibirla</small></span></div>
          </div>
          <div className={styles.includes}>
            <span>La sesión puede incluir</span>
            <p><Check size={15} /> Masajes descontracturantes</p>
            <p><Check size={15} /> Ventosas y pistola de percusión</p>
            <p><Check size={15} /> Estiramientos y ajustes</p>
          </div>
        </aside>

        <section className={styles.bookingCard}>
          {step === "schedule" && <>
            <div className={styles.cardHeading}>
              <span>Paso 1 de 2</span>
              <h2>Elegí tu turno</h2>
              <p>Solo aparecen los horarios que todavía están disponibles.</p>
            </div>
            <div className={styles.days}>
              {days.map((item) => (
                <button key={item.key} className={dayKey === item.key ? styles.selectedDay : ""} onClick={() => { setDayKey(item.key); setTime("") }}>
                  <small>{item.weekday}</small><strong>{item.day}</strong><span>{item.month}</span>
                </button>
              ))}
            </div>
            <p className={styles.slotLabel}>Horarios disponibles</p>
            <div className={styles.slots}>
              {slotsByDay[dayKey].map((slot) => (
                <button key={slot} className={time === slot ? styles.selectedSlot : ""} onClick={() => setTime(slot)}>{slot}</button>
              ))}
            </div>
            <button className={styles.primary} disabled={!time} onClick={continueToDetails}>Continuar <ArrowRight size={18} /></button>
          </>}

          {step === "details" && <>
            <button className={styles.back} onClick={() => setStep("schedule")}><ArrowLeft size={16} /> Cambiar horario</button>
            <div className={styles.chosen}><CalendarDays size={18} /><span><strong>{selectedDay.weekday} {selectedDay.day} de {selectedDay.month} · {time}</strong><small>Duración: 60 minutos</small></span></div>
            <div className={styles.cardHeading}>
              <span>Paso 2 de 2</span>
              <h2>Completá tus datos</h2>
              <p>Los usamos únicamente para gestionar tu turno.</p>
            </div>
            <form className={styles.form} onSubmit={submitBooking}>
              <label>Nombre y apellido<input required placeholder="Ej.: María López" /></label>
              <div className={styles.twoColumns}>
                <label>WhatsApp<input required type="tel" placeholder="11 1234 5678" /></label>
                <label>Email<input required type="email" placeholder="nombre@email.com" /></label>
              </div>
              <label>¿Querés contarle algo antes de la sesión? <small>Opcional</small><textarea rows={4} placeholder="Molestia, zona a tratar u otra consulta" /></label>
              <button className={styles.primary} type="submit">Solicitar turno <ArrowRight size={18} /></button>
            </form>
          </>}

          {step === "pending" && <div className={styles.pending}>
            <span className={styles.successIcon}><Check size={28} /></span>
            <p className={styles.kicker}>Horario reservado por 2 horas</p>
            <h2>Solo falta enviar la seña</h2>
            <p>Para confirmar tu turno del <strong>{selectedDay.weekday} {selectedDay.day} de {selectedDay.month} a las {time}</strong>, transferí $5.000 y enviá el comprobante.</p>
            <div className={styles.alias}><small>Alias</small><strong>Geromasajes</strong><button type="button" onClick={async () => { await navigator.clipboard.writeText("Geromasajes"); setCopied(true) }}>{copied ? "Copiado" : "Copiar"}</button></div>
            <a className={styles.whatsapp} href="https://wa.me/5491171701274?text=Hola%20Gero%2C%20te%20env%C3%ADo%20el%20comprobante%20de%20la%20se%C3%B1a%20para%20mi%20turno." target="_blank" rel="noreferrer"><MessageSquareText size={18} /> Enviar comprobante por WhatsApp</a>
            <p className={styles.expiry}>Si la seña no se recibe dentro de las próximas 2 horas, el horario volverá a quedar disponible.</p>
            <button className={styles.restart} onClick={() => { setStep("schedule"); setTime("") }}>Volver a probar la demo</button>
          </div>}
        </section>
      </section>
      <footer>Propuesta piloto creada por <strong>Flow Automation Studio</strong></footer>
    </main>
  )
}
