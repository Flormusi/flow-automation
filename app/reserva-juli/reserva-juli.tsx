"use client"

import { FormEvent, useEffect, useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, MapPin, MessageSquareText, ShieldCheck } from "lucide-react"
import styles from "./reserva.module.css"

type Day = { key: string; weekday: string; day: string; month: string }
type Slot = { time: string; duration: number; recommended: boolean }

function getNextDays(): Day[] {
  const result: Day[] = []
  const cursor = new Date()
  cursor.setHours(12, 0, 0, 0)
  while (result.length < 6) {
    cursor.setDate(cursor.getDate() + 1)
    if ([0, 6].includes(cursor.getDay())) continue
    result.push({
      key: `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, "0")}-${String(cursor.getDate()).padStart(2, "0")}`,
      weekday: new Intl.DateTimeFormat("es-AR", { weekday: "short" }).format(cursor).replace(".", ""),
      day: String(cursor.getDate()),
      month: new Intl.DateTimeFormat("es-AR", { month: "short" }).format(cursor).replace(".", ""),
    })
  }
  return result
}

export default function ReservaJuli() {
  const days = useMemo(getNextDays, [])
  const [dayKey, setDayKey] = useState(days[0]?.key ?? "")
  const [time, setTime] = useState("")
  const [duration, setDuration] = useState(60)
  const [slots, setSlots] = useState<Slot[]>([])
  const [loadingSlots, setLoadingSlots] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [step, setStep] = useState<"schedule" | "details" | "success">("schedule")
  const selectedDay = days.find((day) => day.key === dayKey) ?? days[0]

  useEffect(() => {
    if (!dayKey) return
    const controller = new AbortController()
    setLoadingSlots(true); setError(""); setTime("")
    fetch(`/api/juli/availability?date=${encodeURIComponent(dayKey)}`, { cache: "no-store", signal: controller.signal })
      .then(async (response) => { const data = await response.json(); if (!response.ok) throw new Error(data.error ?? "No pudimos cargar los horarios."); setSlots(data.slots ?? []) })
      .catch((fetchError) => { if (fetchError.name !== "AbortError") setError(fetchError.message) })
      .finally(() => setLoadingSlots(false))
    return () => controller.abort()
  }, [dayKey])

  async function submitBooking(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setSubmitting(true); setError("")
    const form = new FormData(event.currentTarget)
    const response = await fetch("/api/juli/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ date: dayKey, time, name: form.get("name"), phone: form.get("phone"), email: form.get("email"), notes: form.get("notes") }) })
    const data = await response.json()
    if (!response.ok) { setError(data.error ?? "No pudimos enviar la solicitud."); setSubmitting(false); return }
    setStep("success"); setSubmitting(false); window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return <main className={styles.page}>
    <div className={styles.demoBar}>Agenda online · Solicitud sujeta a confirmación</div>
    <header className={styles.header}><div className={styles.identity}><img className={styles.logo} src="/renova-terapia-manual.jpg" alt="Logo de Renova Terapia Manual" /><div><strong>Renova</strong><small>Terapia Manual</small></div></div><span className={styles.secure}><ShieldCheck size={16} /> Reserva segura</span></header>
    <section className={styles.layout}>
      <aside className={styles.summary}>
        <p className={styles.kicker}>Renová tu bienestar</p><h1>Reservá tu sesión</h1><p className={styles.description}>Elegí el momento que mejor te quede para una sesión personalizada, enfocada en aliviar molestias y recuperar movilidad.</p>
        <div className={styles.brandPanel}><img src="/consultorio-renova.jpg" alt="Consultorio de Renova Terapia Manual" /></div>
        <div className={styles.facts}><div><Clock3 size={19} /><span><strong>60 minutos</strong><small>Con espacio entre turnos</small></span></div><div><MapPin size={19} /><span><strong>Av. Juan Bautista Alberdi 4494</strong><small>Dentro del gimnasio · Caseros</small></span></div><div><CalendarDays size={19} /><span><strong>Confirmación manual</strong><small>Juli revisará tu solicitud</small></span></div></div>
        <div className={styles.includes}><span>Antes de reservar</span><p><Check size={15} /> Podés dejar una observación o consulta</p><p><Check size={15} /> Recibirás la confirmación por email</p><p><Check size={15} /> Recordatorio automático antes de la sesión</p><div className={styles.policy}>Las cancelaciones con menos de 24 horas de anticipación tienen un cargo del 50% de la sesión.</div></div>
      </aside>
      <section className={styles.bookingCard}>
        {step === "schedule" && <><div className={styles.cardHeading}><span>Paso 1 de 2</span><h2>Elegí tu turno</h2><p>Solo aparecen los horarios que todavía están disponibles.</p></div><div className={styles.days}>{days.map((item) => <button type="button" key={item.key} className={dayKey === item.key ? styles.selectedDay : ""} onClick={() => setDayKey(item.key)}><small>{item.weekday}</small><strong>{item.day}</strong><span>{item.month}</span></button>)}</div><p className={styles.slotLabel}>Horarios disponibles</p>{loadingSlots ? <p className={styles.status}>Consultando agenda…</p> : error ? <p className={styles.error}>{error}</p> : slots.length === 0 ? <p className={styles.status}>No quedan horarios disponibles para este día.</p> : <div className={styles.slots}>{slots.map((slot) => <button type="button" key={slot.time} className={time === slot.time ? styles.selectedSlot : ""} onClick={() => { setTime(slot.time); setDuration(slot.duration) }}>{slot.time}{slot.recommended && <small>Recomendado</small>}</button>)}</div>}<button type="button" className={styles.primary} disabled={!time} onClick={() => { setError(""); setStep("details") }}>Continuar <ArrowRight size={18} /></button></>}
        {step === "details" && <><button type="button" className={styles.back} onClick={() => setStep("schedule")}><ArrowLeft size={16} /> Cambiar horario</button><div className={styles.chosen}><CalendarDays size={18} /><span><strong>{selectedDay.weekday} {selectedDay.day} de {selectedDay.month} · {time}</strong><small>Duración: {duration} minutos</small></span></div><div className={styles.cardHeading}><span>Paso 2 de 2</span><h2>Completá tus datos</h2><p>La solicitud quedará pendiente hasta que Juli la confirme.</p></div><form className={styles.form} onSubmit={submitBooking}><label>Nombre y apellido<input required name="name" placeholder="Ej.: María López" /></label><div className={styles.twoColumns}><label>WhatsApp<input required name="phone" type="tel" placeholder="11 1234 5678" /></label><label>Email<input required name="email" type="email" placeholder="nombre@email.com" /></label></div><label>Observación o consulta <small>Opcional</small><textarea name="notes" rows={4} placeholder="Molestia, zona a tratar u otra información útil" /></label><label className={styles.consent}><input required type="checkbox" /> Leí y acepto la política de cancelación.</label>{error && <p className={styles.error}>{error}</p>}<button className={styles.primary} type="submit" disabled={submitting}>{submitting ? "Enviando…" : "Solicitar turno"} <ArrowRight size={18} /></button></form></>}
        {step === "success" && <div className={styles.preview}><span className={styles.successIcon}><Check size={28} /></span><p className={styles.kicker}>Solicitud enviada</p><h2>Tu turno quedó pendiente</h2><p>Solicitaste el <strong>{selectedDay.weekday} {selectedDay.day} de {selectedDay.month} a las {time}</strong>. Juli revisará la solicitud y, cuando la confirme, recibirás el evento y el recordatorio por email.</p><div className={styles.previewNotice}><MessageSquareText size={18} /><span><strong>Todavía no está confirmado</strong><small>Esperá el email de confirmación antes de asistir.</small></span></div></div>}
      </section>
    </section><footer>Experiencia creada por <strong>Flow Automation Studio</strong></footer>
  </main>
}
