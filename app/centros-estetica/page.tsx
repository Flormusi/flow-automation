import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
  Check,
  MessageCircleMore,
  RefreshCw,
} from "lucide-react"
import styles from "./page.module.css"

const whatsappUrl =
  "https://wa.me/5491156578922?text=Hola%20Flor%2C%20quiero%20ver%20c%C3%B3mo%20funcionar%C3%ADa%20el%20seguimiento%20de%20turnos%20y%20consultas%20en%20mi%20centro."

export const metadata: Metadata = {
  title: "Seguimiento de turnos y consultas",
  description:
    "Una solución para centros de estética y spas que ayuda a recordar turnos, recuperar ausencias y dar seguimiento a consultas.",
}

const problems = [
  "El equipo confirma turnos uno por uno.",
  "Algunas consultas quedan perdidas entre mensajes.",
  "Cuando alguien falta, nadie vuelve a contactarlo.",
  "El dueño no sabe cuántas oportunidades se perdieron.",
]

const includes = [
  "Registro de turnos y consultas",
  "Recordatorio el día anterior",
  "Segundo aviso cerca del turno",
  "Mensaje para ayudar a reprogramar una ausencia",
  "Seguimiento de consultas sin respuesta",
  "Resumen semanal para el dueño",
]

export default function CentrosEsteticaPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Volver a Flow Automation Studio">
          <img src="/flow-automation-mark.svg" alt="" width="38" height="38" />
          <span><strong>Flow Automation</strong><small>Studio</small></span>
        </Link>
        <Link className={styles.back} href="/"><ArrowLeft size={16} /> Volver al inicio</Link>
      </header>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>Para centros de estética y spas</p>
          <h1>Menos turnos olvidados. <span>Menos consultas sin respuesta.</span></h1>
          <p className={styles.lead}>
            Organizamos los recordatorios y seguimientos para que tu equipo intervenga solo cuando hace falta,
            usando las herramientas que ya conoce.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={whatsappUrl} target="_blank" rel="noreferrer">
              Verlo aplicado a mi centro <ArrowRight size={18} />
            </a>
            <a className={styles.secondary} href="#como-funciona">Ver cómo funciona</a>
          </div>
          <p className={styles.microcopy}>Conversación de 20 minutos · Sin costo · Sin compromiso</p>
        </div>

        <div className={styles.demoCard} aria-label="Ejemplo del seguimiento automático">
          <div className={styles.demoTop}><span>Centro Estético Magnolia</span><span>Ejemplo</span></div>
          <div className={styles.demoRow}><CalendarCheck size={20} /><div><small>Viernes · 15:30</small><strong>Turno de Camila</strong></div><b>Confirmado</b></div>
          <div className={styles.timeline}>
            <div><span>24 h antes</span><p>Recordatorio enviado</p></div>
            <div><span>2 h antes</span><p>Segundo aviso</p></div>
            <div><span>Si no asiste</span><p>Ayuda para reprogramar</p></div>
          </div>
          <div className={styles.demoNote}><MessageCircleMore size={18} /><p>El equipo atiende las respuestas. El sistema se ocupa de recordar.</p></div>
        </div>
      </section>

      <section className={styles.problemSection}>
        <div>
          <p className={styles.eyebrow}>Cuando todo depende del equipo</p>
          <h2>El problema no es agendar. Es acordarse de todo lo que viene después.</h2>
        </div>
        <div className={styles.problemList}>
          {problems.map((problem) => <div key={problem}><span>×</span><p>{problem}</p></div>)}
        </div>
      </section>

      <section className={styles.flowSection} id="como-funciona">
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Así funciona</p>
          <h2>El seguimiento avanza aunque nadie tenga que acordarse.</h2>
        </div>
        <div className={styles.flowGrid}>
          <article><span>01</span><CalendarCheck size={23} /><h3>Entra un turno o consulta</h3><p>La información queda registrada automáticamente en un solo lugar.</p></article>
          <article><span>02</span><RefreshCw size={23} /><h3>El sistema hace seguimiento</h3><p>Envía los avisos acordados y se detiene cuando la persona responde.</p></article>
          <article><span>03</span><MessageCircleMore size={23} /><h3>Tu equipo atiende lo importante</h3><p>Recibe las respuestas y sabe qué caso necesita atención.</p></article>
        </div>
      </section>

      <section className={styles.includesSection}>
        <div>
          <p className={styles.eyebrow}>Qué incluye</p>
          <h2>Una primera versión lista para probar en una semana.</h2>
          <p>Antes de construirla, revisamos cómo trabajan y adaptamos el recorrido a sus herramientas.</p>
        </div>
        <div className={styles.includesList}>
          {includes.map((item) => <div key={item}><Check size={18} /><span>{item}</span></div>)}
        </div>
      </section>

      <section className={styles.pilotSection}>
        <div>
          <p className={styles.eyebrow}>Programa piloto</p>
          <h2>Buscamos tres centros para probar esta solución.</h2>
          <p>La adaptamos a tu forma de trabajar, la probamos con vos y corregimos lo necesario antes de dejarla funcionando.</p>
        </div>
        <div className={styles.priceCard}>
          <span>Precio para los primeros 3 centros</span>
          <strong>USD 150 <small>instalación</small></strong>
          <strong>USD 79 <small>por mes</small></strong>
          <p>Sin permanencia mínima. Los servicios de mensajería, si los hubiera, se pagan aparte.</p>
          <a className={styles.primary} href={whatsappUrl} target="_blank" rel="noreferrer">
            Quiero conocer el piloto <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div><p className={styles.eyebrow}>Preguntas frecuentes</p><h2>Antes de conversar</h2></div>
        <div>
          <details><summary>¿Tengo que cambiar el sistema que ya uso?</summary><p>No necesariamente. Primero vemos si podemos conectar y aprovechar mejor lo que ya tienen.</p></details>
          <details><summary>¿Funciona solamente por correo?</summary><p>No. La demostración usa correo, pero podemos revisar WhatsApp u otros canales según el caso y sus costos.</p></details>
          <details><summary>¿Es otra plataforma para aprender?</summary><p>La idea es evitarlo. El sistema trabaja por detrás y el equipo sigue usando herramientas conocidas.</p></details>
          <details><summary>¿Qué pasa si mi centro trabaja de otra manera?</summary><p>La primera conversación sirve justamente para conocer ese recorrido y decidir qué vale la pena adaptar.</p></details>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div><p className={styles.eyebrow}>Una charla simple</p><h2>Mostrame cómo trabajan hoy y te cuento cómo lo aplicaríamos.</h2></div>
        <a className={styles.lightButton} href={whatsappUrl} target="_blank" rel="noreferrer">Conversar con Flor <ArrowRight size={18} /></a>
      </section>
    </main>
  )
}
