import fs from "node:fs"
import path from "node:path"
import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  BellRing,
  Check,
  CircleAlert,
  Inbox,
  KeyRound,
  MessageCircleMore,
  MessagesSquare,
  PhoneMissed,
  Settings2,
  UsersRound,
} from "lucide-react"
import WhatsAppCTA from "@/components/whatsapp-cta"
import styles from "./page.module.css"

const whatsappUrl =
  "https://wa.me/5491156578922?text=Hola%20Flor%2C%20llegu%C3%A9%20desde%20la%20web%20y%20quiero%20ordenar%20la%20atenci%C3%B3n%20de%20mi%20negocio."

const demoVideo = "/demo-atencion-ordenada.mp4"
const hasDemoVideo = fs.existsSync(path.join(process.cwd(), "public", demoVideo))

export const metadata: Metadata = {
  title: "Atención ordenada en 10 días",
  description:
    "Todas las consultas en un solo lugar, respuesta inicial inmediata, reparto en el equipo y aviso cuando algo se demora.",
  alternates: {
    canonical: "/atencion-ordenada",
  },
  openGraph: {
    title: "Atención ordenada en 10 días | Flow Automation Studio",
    description:
      "Una implementación para ordenar la atención, repartir consultas y detectar demoras.",
    url: "/atencion-ordenada",
  },
}

const problems = [
  {
    title: "Las consultas llegan por varios lados",
    text: "WhatsApp, correo, redes y llamadas: cada una queda en su app y nadie ve el conjunto.",
    icon: MessagesSquare,
  },
  {
    title: "Nadie sabe qué quedó sin contestar",
    text: "Con el volumen del día, algunas respuestas se pierden entre los mensajes nuevos.",
    icon: CircleAlert,
  },
  {
    title: "El cliente reclama antes de que te enteres",
    text: "Cuando alguien escribe para quejarse, ya lleva horas o días esperando.",
    icon: PhoneMissed,
  },
]

const included = [
  "WhatsApp y un canal más (correo, Instagram o Messenger) en una sola bandeja.",
  "Respuesta inicial inmediata, escrita con el tono de tu negocio.",
  "Reparto de consultas entre hasta 3 personas del equipo.",
  "Estados para saber qué está pendiente, qué espera datos y qué está resuelto.",
  "Aviso cuando una consulta supera el tiempo de respuesta acordado.",
  "Capacitación al equipo y guía de uso.",
]

const steps = [
  { title: "Videollamada de 15 minutos", text: "Nos contás cómo entran hoy las consultas y quién las atiende.", icon: MessageCircleMore },
  { title: "Nos pasás los accesos", text: "WhatsApp, el otro canal elegido y los datos del equipo.", icon: KeyRound },
  { title: "Configuramos tu bandeja", text: "Canales, respuestas iniciales, reparto, estados y tiempos de aviso.", icon: Settings2 },
  { title: "Probamos con tu equipo", text: "Revisamos el recorrido con consultas reales y ajustamos lo necesario.", icon: UsersRound },
  { title: "Queda funcionando", text: "Tu equipo atiende desde la bandeja y vos ves qué está pendiente.", icon: Inbox },
]

export default function AtencionOrdenadaPage() {
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
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>Para negocios que atienden por WhatsApp</p>
          <h1>Que ningún cliente quede <span>esperando una respuesta.</span></h1>
          <p className={styles.lead}>
            Ordenamos la atención de tu negocio para que cada consulta tenga una responsable, una respuesta inicial
            inmediata y un aviso si se demora. Sin cambiar de número y sin tocar tus otros sistemas.
          </p>
          <div className={styles.actions}>
            <WhatsAppCTA
              className={styles.primary}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              contentName="atencion_ordenada_hero_whatsapp"
            >
              Quiero ordenar la atención <ArrowRight size={18} />
            </WhatsAppCTA>
            <a className={styles.secondary} href="#alcance">Ver alcance</a>
          </div>
          <p className={styles.microcopy}>Primero una videollamada de 15 minutos, sin compromiso.</p>
        </div>

        <div className={styles.followUpCard} aria-label="Ejemplo visual de una consulta con aviso de demora">
          <div className={styles.cardTop}>
            <span>Consultas de hoy</span>
            <span className={styles.liveStatus}><i /> Vista de ejemplo</span>
          </div>
          <div className={styles.inquiry}>
            <div className={styles.propertyIcon}><MessagesSquare size={21} /></div>
            <div><small>WhatsApp · Pedido de presupuesto</small><strong>Consulta de Martina</strong></div>
            <b>Fuera de tiempo</b>
          </div>
          <div className={styles.activity}>
            <div><span><Check size={14} /></span><p><strong>Respuesta inicial enviada</strong><small>La clienta sabe que su consulta llegó.</small></p></div>
            <div><span><UsersRound size={14} /></span><p><strong>Asignada a Belén</strong><small>El equipo sabe quién la continúa.</small></p></div>
            <div className={styles.pending}><span><BellRing size={14} /></span><p><strong>Aviso de demora</strong><small>Pasó la hora acordada sin respuesta completa.</small></p></div>
          </div>
          <div className={styles.cardNote}><Inbox size={18} /><p>El aviso llega al equipo antes de que la clienta tenga que reclamar.</p></div>
        </div>
      </section>

      <section className={styles.problemSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Lo que pasa hoy</p>
          <h2>El problema no es responder. Es saber qué quedó sin responder.</h2>
          <p>Cuando las consultas llegan por varios canales y las atienden distintas personas, alguna siempre se pierde.</p>
        </div>
        <div className={styles.problemGrid}>
          {problems.map(({ title, text, icon: Icon }, index) => (
            <article key={title}>
              <div><span>0{index + 1}</span><Icon size={22} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.outcomeSection}>
        <div>
          <p className={styles.eyebrow}>Qué incluye</p>
          <h2>Todo lo que hace falta para que ninguna consulta se pierda.</h2>
          <p>Un alcance cerrado, pensado para resolver primero lo más urgente. Si después querés sumar más, lo vemos aparte.</p>
        </div>
        <div className={styles.outcomeList}>
          {included.map((item) => <div key={item}><Check size={18} /><span>{item}</span></div>)}
        </div>
      </section>

      <section className={styles.priceSection} id="alcance">
        <div>
          <p className={styles.eyebrow}>Alcance a confirmar</p>
          <h2>Primero revisamos los canales y el equipo que necesita usarlo.</h2>
          <p>El alcance y la propuesta se definen después de entender cómo funciona hoy la atención.</p>
        </div>
        <div className={styles.priceCard}>
          <span className={styles.launch}>IMPLEMENTACIÓN A MEDIDA DEL PROCESO</span>
          <p className={styles.anchor}>La cantidad de canales, personas, automatizaciones e información a importar cambia según cada negocio.</p>
          <ul>
            <li><Check size={16} /><span>Revisión inicial del circuito de atención.</span></li>
            <li><Check size={16} /><span>Propuesta con alcance, tiempos y condiciones antes de empezar.</span></li>
            <li><Check size={16} /><span>La cuenta queda a nombre de tu negocio.</span></li>
          </ul>
          <WhatsAppCTA
            className={styles.primary}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            contentName="atencion_ordenada_precio_whatsapp"
          >
            Coordinar la videollamada <ArrowRight size={18} />
          </WhatsAppCTA>
          <p className={styles.priceNote}>
            Las licencias externas, la importación de contactos, las campañas y las integraciones con otros sistemas
            se detallan por separado cuando corresponda.
          </p>
        </div>
      </section>

      <section className={styles.flowSection} id="como-funciona">
        <div className={styles.flowIntro}>
          <p className={styles.eyebrow}>Cómo funciona</p>
          <h2>De la primera charla a tu bandeja funcionando.</h2>
          <p>Cinco pasos, con fecha de entrega definida desde el principio.</p>
        </div>
        <div className={`${styles.flowGrid} ${styles.stepsGrid}`}>
          {steps.map(({ title, text, icon: Icon }, index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <Icon size={23} />
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {hasDemoVideo && (
        <section className={styles.demoSection}>
          <div>
            <p className={styles.eyebrow}>Así se ve</p>
            <h2>Una consulta, desde que entra hasta que alguien la responde.</h2>
            <p>Un recorrido de ejemplo: la bandeja única, la respuesta inicial, el reparto en el equipo y el aviso cuando algo se demora.</p>
          </div>
          <figure>
            <video src={demoVideo} controls playsInline preload="metadata" muted />
            <figcaption>Ejemplo con datos ficticios</figcaption>
          </figure>
        </section>
      )}

      <section className={styles.faqSection}>
        <div><p className={styles.eyebrow}>Preguntas frecuentes</p><h2>Antes de conversar</h2></div>
        <div>
          <details><summary>¿Tengo que cambiar de número de WhatsApp?</summary><p>No. Se conecta el mismo número que usa tu negocio hoy.</p></details>
          <details><summary>¿Y si después quiero sumar más cosas?</summary><p>Se puede. Integraciones, reportes o automatizaciones se cotizan aparte, una vez que la atención ya está ordenada.</p></details>
          <details><summary>¿El sistema es mío?</summary><p>Sí. La cuenta queda a nombre de tu negocio. Si en algún momento dejamos de trabajar juntos, no perdés nada.</p></details>
          <details><summary>¿Qué pasa con las llamadas?</summary><p>Se registran en la misma bandeja para que no se pierda lo que se habló.</p></details>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <p className={styles.eyebrow}>Una conversación concreta</p>
          <h2>Contame cómo entran hoy las consultas a tu negocio.</h2>
          <p>En 15 minutos vemos si esto resuelve lo que te está pasando. Si no lo resuelve, te lo decimos.</p>
        </div>
        <WhatsAppCTA
          className={styles.lightButton}
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          contentName="atencion_ordenada_final_whatsapp"
        >
          Quiero ordenar la atención <ArrowRight size={18} />
        </WhatsAppCTA>
      </section>

      <footer className={styles.footer}>
        <Link className={styles.brand} href="/">
          <img src="/flow-automation-mark.svg" alt="" width="38" height="38" />
          <span><strong>Flow Automation</strong><small>Studio</small></span>
        </Link>
        <p>Procesos más simples. Equipos con más tiempo.</p>
        <span>Argentina · Latinoamérica</span>
      </footer>
    </main>
  )
}
