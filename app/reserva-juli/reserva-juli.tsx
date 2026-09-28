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

type Day = { key: string; weekday: string; day: string; month: string; weekend: boolean }

function getNextDays(): Day[] {
  const result: Day[] = []
  const cursor = new Date()
  cursor.setHours(12, 0, 0, 0)

  while (result.length < 5) {
    cursor.setDate(cursor.getDate() + 1)
    if (cursor.getDay() === 0) continue
    result.push({
      key: `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(cursor.getDate()).padStart(2, "0")}`,
      weekday: new Intl.DateTimeFormat("es-AR", { weekday: "short" }).format(cursor).replace(".", ""),
      day: String(cursor.getDate()),
      month: new Intl.DateTimeFormat("es-AR", { month: "short" }).format(cursor).replace(".", ""),
      weekend: cursor.getDay() === 6,
    })
  }

  return result
}

const WEEKDAY_SLOTS = ["10:00", "11:15", "12:30", "16:00", "17:15", "18:30", "19:15"]
const SATURDAY_SLOTS = ["10:00", "11:15", "12:30"]

export default function ReservaJuli() {
  const days = useMemo(getNextDays, [])
  const [dayKey, setDayKey] = useState(days[0]?.key ?? "")
  const [time, setTime] = useState("")
  const [step, setStep] = useState<"schedule" | "details" | "preview">("schedule")
  const selectedDay = days.find((day) => day.key === dayKey) ?? days[0]
  const slots = selectedDay?.weekend ? SATURDAY_SLOTS : WEEKDAY_SLOTS

  function submitPreview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStep("preview")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className={styles.page}>
      <div className={styles.demoBar}>Vista previa · La agenda todavía no recibe reservas reales</div>
      <header className={styles.header}>
        <div className={styles.identity}>
          <img className={styles.logo} src="/renova-terapia-manual.jpg" alt="Logo de Renova Terapia Manual" />
          <div><strong>Renova</strong><small>Terapia Manual</small></div>
        </div>
        <span className={styles.secure}><ShieldCheck size={16} /> Reserva segura</span>
      </header>

      <section className={styles.layout}>
        <aside className={styles.summary}>
          <p className={styles.kicker}>Renová tu bienestar</p>
          <h1>Reservá tu sesión</h1>
          <p className={styles.description}>Elegí el momento que mejor te quede para una sesión personalizada, enfocada en aliviar molestias y recuperar movilidad.</p>
          <div className={styles.brandPanel}>
            <img src="/consultorio-renova.jpg" alt="Consultorio de Renova Terapia Manual" />
          </div>
          <div className={styles.facts}>
            <div><Clock3 size={19} /><span><strong>60 minutos</strong><small>Con 15 minutos entre turnos</small></span></div>
            <div><MapPin size={19} /><span><strong>Av. Juan Bautista Alberdi 4494</strong><small>Dentro del gimnasio · Caseros</small></span></div>
            <div><CalendarDays size={19} /><span><strong>Hasta 5 turnos por día</strong><small>Solo vas a ver horarios disponibles</small></span></div>
          </div>
          <div className={styles.includes}>
            <span>Antes de reservar</span>
            <p><Check size={15} /> Podés dejar una observación o consulta</p>
            <p><Check size={15} /> Recibirás el turno en tu calendario</p>
            <p><Check size={15} /> Recordatorio automático antes de la sesión</p>
            <div className={styles.policy}>Las cancelaciones con menos de 24 horas de anticipación tienen un cargo del 50% de la sesión.</div>
          </div>
        </aside>

        <section className={styles.bookingCard}>
          {step === "schedule" && <>
            <div className={styles.cardHeading}>
              <span>Paso 1 de 2</span>
              <h2>Elegí tu turno</h2>
              <p>Los horarios ocupados en Google Calendar no aparecerán disponibles.</p>
            </div>
            <div className={styles.days}>
              {days.map((item) => (
                <button type="button" key={item.key} className={dayKey === item.key ? styles.selectedDay : ""} onClick={() => { setDayKey(item.key); setTime("") }}>
                  <small>{item.weekday}</small><strong>{item.day}</strong><span>{item.month}</span>
                </button>
              ))}
            </div>
            <p className={styles.slotLabel}>Horarios de referencia</p>
            <div className={styles.slots}>
              {slots.map((slot) => <button type="button" key={slot} className={time === slot ? styles.selectedSlot : ""} onClick={() => setTime(slot)}>{slot}</button>)}
            </div>
            <button type="button" className={styles.primary} disabled={!time} onClick={() => setStep("details")}>Continuar <ArrowRight size={18} /></button>
          </>}

          {step === "details" && <>
            <button type="button" className={styles.back} onClick={() => setStep("schedule")}><ArrowLeft size={16} /> Cambiar horario</button>
            <div className={styles.chosen}><CalendarDays size={18} /><span><strong>{selectedDay.weekday} {selectedDay.day} de {selectedDay.month} · {time}</strong><small>Duración aproximada: 60 minutos</small></span></div>
            <div className={styles.cardHeading}>
              <span>Paso 2 de 2</span>
              <h2>Completá tus datos</h2>
              <p>Renova los usará únicamente para gestionar tu turno.</p>
            </div>
            <form className={styles.form} onSubmit={submitPreview}>
              <label>Nombre y apellido<input required name="name" placeholder="Ej.: María López" /></label>
              <div className={styles.twoColumns}>
                <label>WhatsApp<input required name="phone" type="tel" placeholder="11 1234 5678" /></label>
                <label>Email<input required name="email" type="email" placeholder="nombre@email.com" /></label>
              </div>
              <label>Observación o consulta <small>Opcional</small><textarea name="notes" rows={4} placeholder="Molestia, zona a tratar u otra información útil" /></label>
              <label className={styles.consent}><input required type="checkbox" /> Leí y acepto la política de cancelación.</label>
              <button className={styles.primary} type="submit">Probar solicitud <ArrowRight size={18} /></button>
            </form>
          </>}

          {step === "preview" && <div className={styles.preview}>
            <span className={styles.successIcon}><Check size={28} /></span>
            <p className={styles.kicker}>La experiencia funciona</p>
            <h2>Así vería la confirmación el paciente</h2>
            <p>Eligió el <strong>{selectedDay.weekday} {selectedDay.day} de {selectedDay.month} a las {time}</strong>. En la versión conectada, el turno se agregará automáticamente a ambos calendarios.</p>
            <div className={styles.previewNotice}><MessageSquareText size={18} /><span><strong>Esto fue solamente una prueba</strong><small>No se creó ningún turno real ni se guardaron tus datos.</small></span></div>
            <button className={styles.restart} type="button" onClick={() => { setStep("schedule"); setTime("") }}>Probar otro horario</button>
          </div>}
        </section>
      </section>
      <footer>Experiencia creada por <strong>Flow Automation Studio</strong></footer>
    </main>
  )
}
