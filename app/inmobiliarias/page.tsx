import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CircleAlert,
  Clock3,
  MessageCircleMore,
  MessagesSquare,
  SearchCheck,
  UsersRound,
} from "lucide-react"
import WhatsAppCTA from "@/components/whatsapp-cta"
import styles from "./page.module.css"

const whatsappUrl =
  "https://wa.me/5491156578922?text=Hola%20Flor%2C%20quiero%20ver%20c%C3%B3mo%20funcionar%C3%ADa%20el%20seguimiento%20de%20consultas%20en%20mi%20inmobiliaria."

export const metadata: Metadata = {
  title: "Seguimiento de consultas para inmobiliarias",
  description:
    "Ayudamos a inmobiliarias a ordenar el seguimiento de consultas para detectar oportunidades que necesitan atención antes de que se enfríen.",
  alternates: {
    canonical: "/inmobiliarias",
  },
  openGraph: {
    title: "Seguimiento de consultas para inmobiliarias | Flow Automation Studio",
    description:
      "Una forma más ordenada de acompañar cada consulta, incluso cuando llega por distintos canales y la atienden diferentes agentes.",
    url: "/inmobiliarias",
  },
}

const problems = [
  {
    title: "Las consultas llegan por distintos lugares",
    text: "WhatsApp, redes sociales y portales abren conversaciones que después cuesta ver en conjunto.",
    icon: MessagesSquare,
  },
  {
    title: "El seguimiento depende de cada agente",
    text: "Entre visitas, publicaciones y nuevas consultas, retomar una conversación puede quedar para después.",
    icon: UsersRound,
  },
  {
    title: "Las oportunidades se enfrían sin una señal clara",
    text: "Cuando nadie detecta qué conversación necesita atención, un potencial cliente puede avanzar con otra inmobiliaria.",
    icon: Clock3,
  },
]

const outcomes = [
  "Tener más claridad sobre qué consultas siguen abiertas.",
  "Detectar conversaciones que necesitan atención.",
  "Ayudar a que cada agente sepa qué seguimiento tiene pendiente.",
  "Reducir la dependencia de la memoria y las revisiones manuales.",
]

export default function InmobiliariasPage() {
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
          <p className={styles.eyebrow}>Para inmobiliarias con equipos comerciales</p>
          <h1>Cada consulta puede ser una oportunidad. <span>Que ninguna quede sin seguimiento.</span></h1>
          <p className={styles.lead}>
            Ayudamos a ordenar el seguimiento para que el equipo pueda detectar qué conversaciones necesitan atención
            y actuar antes de que un potencial cliente pierda interés.
          </p>
          <div className={styles.actions}>
            <WhatsAppCTA
              className={styles.primary}
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              contentName="inmobiliarias_hero_whatsapp"
            >
              Ver cómo funcionaría en mi inmobiliaria <ArrowRight size={18} />
            </WhatsAppCTA>
            <a className={styles.secondary} href="#como-funcionaria">Ver el recorrido</a>
          </div>
          <p className={styles.microcopy}>Sin costo · Aplicado a tu forma de trabajar</p>
        </div>

        <div className={styles.followUpCard} aria-label="Ejemplo visual del seguimiento de consultas">
          <div className={styles.cardTop}>
            <span>Consultas de hoy</span>
            <span className={styles.liveStatus}><i /> Vista de ejemplo</span>
          </div>
          <div className={styles.inquiry}>
            <div className={styles.propertyIcon}><Building2 size={21} /></div>
            <div><small>Portal inmobiliario · Departamento 3 ambientes</small><strong>Consulta de Lucía</strong></div>
            <b>Necesita atención</b>
          </div>
          <div className={styles.activity}>
            <div><span><Check size={14} /></span><p><strong>Consulta recibida</strong><small>El interés queda identificado.</small></p></div>
            <div><span><UsersRound size={14} /></span><p><strong>Agente responsable</strong><small>El equipo sabe quién continúa.</small></p></div>
            <div className={styles.pending}><span><CircleAlert size={14} /></span><p><strong>Seguimiento pendiente</strong><small>La conversación vuelve a estar visible.</small></p></div>
          </div>
          <div className={styles.cardNote}><SearchCheck size={18} /><p>Flow Automation ayuda al equipo a ver dónde hace falta actuar, sin reemplazar su criterio comercial.</p></div>
        </div>
      </section>

      <section className={styles.problemSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Cuando las consultas se dispersan</p>
          <h2>El problema no es recibir contactos. Es sostener cada conversación.</h2>
          <p>Con varios canales y agentes, es fácil perder de vista quién preguntó, qué propiedad le interesó y cuándo conviene volver a contactarlo.</p>
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

      <section className={styles.flowSection} id="como-funcionaria">
        <div className={styles.flowIntro}>
          <p className={styles.eyebrow}>Cómo trabajamos</p>
          <h2>Un seguimiento más ordenado, adaptado a cómo trabaja tu inmobiliaria.</h2>
          <p>Primero entendemos el recorrido actual. Después definimos una forma simple de hacer visibles las consultas que requieren atención.</p>
        </div>
        <div className={styles.flowGrid}>
          <article><span>01</span><MessageCircleMore size={23} /><h3>Revisamos cómo llegan las consultas</h3><p>Identificamos los canales, la información disponible y cómo se distribuyen hoy entre los agentes.</p></article>
          <article><span>02</span><UsersRound size={23} /><h3>Definimos qué significa hacer seguimiento</h3><p>Acordamos responsables, momentos y señales según el proceso comercial real del equipo.</p></article>
          <article><span>03</span><SearchCheck size={23} /><h3>Hacemos visibles los pendientes</h3><p>Diseñamos una forma de detectar qué conversación necesita atención para que el agente pueda retomarla.</p></article>
        </div>
      </section>

      <section className={styles.outcomeSection}>
        <div>
          <p className={styles.eyebrow}>El resultado para tu equipo</p>
          <h2>Menos consultas sin seguimiento. Más oportunidades en movimiento.</h2>
          <p>No se trata de sumar otra tarea. Se trata de darle al equipo una visión más clara para concentrarse en las conversaciones que pueden avanzar.</p>
          <WhatsAppCTA
            className={styles.primary}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            contentName="inmobiliarias_mid_whatsapp"
          >
            Ver cómo funcionaría en mi inmobiliaria <ArrowRight size={18} />
          </WhatsAppCTA>
        </div>
        <div className={styles.outcomeList}>
          {outcomes.map((outcome) => <div key={outcome}><Check size={18} /><span>{outcome}</span></div>)}
        </div>
      </section>

      <section className={styles.fitSection}>
        <div>
          <p className={styles.eyebrow}>Para quién es</p>
          <h2>Cuando hay varios agentes, confiar en la memoria deja de funcionar.</h2>
        </div>
        <div className={styles.fitGrid}>
          <article><strong>Varios agentes</strong><p>Las consultas se reparten y cada persona gestiona diferentes conversaciones.</p></article>
          <article><strong>Publicación activa</strong><p>El equipo recibe contactos nuevos con frecuencia desde una o más fuentes.</p></article>
          <article><strong>Seguimiento manual</strong><p>Los pendientes viven en chats, notas, planillas o en la memoria de cada agente.</p></article>
          <article><strong>Falta de visibilidad</strong><p>Cuesta saber qué oportunidades siguen abiertas y cuáles necesitan una acción.</p></article>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div><p className={styles.eyebrow}>Preguntas frecuentes</p><h2>Antes de conversar</h2></div>
        <div>
          <details><summary>¿Tengo que cambiar las herramientas que usa mi equipo?</summary><p>No necesariamente. Primero revisamos cómo trabajan hoy y qué información tienen disponible. A partir de eso definimos la forma más simple de ordenar el seguimiento.</p></details>
          <details><summary>¿La propuesta responde consultas automáticamente?</summary><p>No necesariamente. El foco es ordenar el seguimiento y ayudar al equipo a detectar dónde hace falta intervenir.</p></details>
          <details><summary>¿Puede contemplar consultas de diferentes canales?</summary><p>Revisamos cómo llegan las consultas desde WhatsApp, redes sociales y portales. La forma de trabajar con cada canal se define según las herramientas y posibilidades del caso.</p></details>
          <details><summary>¿Sirve si cada agente trabaja de una manera distinta?</summary><p>Sí. Entendemos cómo trabaja el equipo y definimos qué parte del seguimiento conviene ordenar sin quitarle criterio comercial a cada agente.</p></details>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <p className={styles.eyebrow}>Una conversación concreta</p>
          <h2>Mostrame cómo reciben y siguen las consultas hoy.</h2>
          <p>Te mostramos cómo ordenar el seguimiento para que las oportunidades no se pierdan entre canales y personas.</p>
        </div>
        <WhatsAppCTA
          className={styles.lightButton}
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          contentName="inmobiliarias_final_whatsapp"
        >
          Ver cómo funcionaría en mi inmobiliaria <ArrowRight size={18} />
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
