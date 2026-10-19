import { ArrowRight, MessagesSquare } from "lucide-react"
import WhatsAppCTA from "@/components/whatsapp-cta"
import styles from "./home.module.css"

const calendlyUrl = "https://calendly.com/flowautomationstudio/30min"

const whatsappUrl =
  "https://wa.me/5491156578922?text=Hola%20Flor%2C%20quiero%20contarte%20qu%C3%A9%20est%C3%A1%20pasando%20en%20mi%20empresa."

const services = [
  {
    number: "01",
    title: "Diagnóstico de procesos",
    description: "Relevo cómo trabajan hoy, mido dónde se pierde tiempo o plata y te entrego un plan priorizado.",
    fit: "Ideal si sabés que algo no funciona, pero no por dónde empezar.",
  },
  {
    number: "02",
    title: "Seguimiento comercial ordenado",
    description: "Todas las consultas en una sola bandeja, conectada a tus canales, con recordatorios de cuándo volver a contactar.",
    fit: "Ideal si perdés ventas por responder tarde o no hacer seguimiento.",
  },
  {
    number: "03",
    title: "Tablero de indicadores",
    description: "Tus números clave en un solo lugar, actualizados automáticamente, sin copiar datos a mano.",
    fit: "Ideal si te enterás tarde de cómo viene el mes.",
  },
]

const process = [
  { number: "1", title: "Charla de 20 minutos", text: "Me contás qué está pasando. Sin costo y sin compromiso." },
  { number: "2", title: "Propuesta clara", text: "Te explico qué resolvería primero, cuánto tarda y cuánto cuesta. Vos decidís." },
  { number: "3", title: "Funcionando", text: "Lo construyo, lo pruebo con tu equipo y te enseño a usarlo." },
]

export default function Home() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <a className="brand" href="#inicio" aria-label="Flow Automation Studio, inicio">
          <img className="brand-mark" src="/flow-automation-mark.svg" alt="" width="38" height="38" />
          <span><strong>Flow Automation</strong><small>Studio</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#como">Cómo trabajo</a>
        </nav>
        <a className="button button-small" href={calendlyUrl} target="_blank" rel="noreferrer">
          Agendar 20 min <ArrowRight size={16} />
        </a>
      </header>

      <section className={styles.hero} id="inicio">
        <p className="eyebrow">Automatización de procesos para empresas</p>
        <h1>Tus procesos crecieron.<br /><span>Tu forma de trabajar, no.</span></h1>
        <p className={styles.heroText}>
          Encuentro dónde tu empresa pierde tiempo o plata entre planillas, WhatsApp y sistemas sueltos, y lo resuelvo
          con automatización a medida.
        </p>
        <div className={styles.actions}>
          <a className="button" href={calendlyUrl} target="_blank" rel="noreferrer">
            Agendar una charla de 20 min <ArrowRight size={18} />
          </a>
          <WhatsAppCTA className={styles.secondaryButton} href={whatsappUrl} target="_blank" rel="noreferrer" contentName="home_hero_whatsapp">
            Escribirme por WhatsApp
          </WhatsAppCTA>
        </div>
        <p className={styles.microcopy}>Sin costo · Sin propuesta genérica</p>
      </section>

      <section className={styles.pains} aria-labelledby="pains-title">
        <div className={styles.inner}>
          <h2 id="pains-title">Lo que frena a una empresa casi nunca es la falta de esfuerzo.</h2>
          <div className={styles.painGrid}>
            <article><h3>Datos en todos lados</h3><p>Planillas, mails y WhatsApp que nadie cruza. Los números llegan tarde o no llegan.</p></article>
            <article><h3>Tareas que se repiten</h3><p>Copiar, pegar, controlar y avisar a mano, todos los días.</p></article>
            <article><h3>Oportunidades que se enfrían</h3><p>Consultas sin seguimiento, cobros demorados y desvíos que se detectan cuando ya costaron.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section} id="servicios">
        <p className="eyebrow">Por dónde empezar</p>
        <h2>Tres formas concretas de arrancar</h2>
        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <article className={styles.serviceCard} key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <strong>{service.fit}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.section} ${styles.projectsSection}`} id="proyectos">
        <h2>Proyectos</h2>
        <div className={styles.projectGrid}>
          <article className={styles.projectCard}>
            <div className={styles.tags}><span>CRM omnicanal</span><span>Piloto en curso</span></div>
            <h3>Empresa de servicios</h3>
            <p><strong>El problema:</strong> las consultas llegaban por tres canales distintos y el seguimiento dependía de la memoria de cada persona.</p>
            <p><strong>Lo que hice:</strong> conecté los tres canales a una bandeja única con Chatwoot, con estados y responsables por conversación.</p>
          </article>
          <article className={styles.projectCard}>
            <div className={styles.tags}><span>Producto propio</span><span>Full stack</span></div>
            <h3>TrainFit</h3>
            <p>Plataforma para entrenadores personales, diseñada y desarrollada de punta a punta: turnos, clientes, rutinas y pagos.</p>
            <p>Es la prueba de que no solo conecto herramientas: también construyo sistemas completos cuando hace falta.</p>
          </article>
        </div>
      </section>

      <section className={styles.section} id="como">
        <h2>Cómo trabajo</h2>
        <div className={styles.processGrid}>
          {process.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.fitGrid}>
          <article><h3>Es para vos si</h3><p>Tu equipo repite tareas todos los días, perdés clientes por falta de seguimiento o querés ordenar antes de sumar gente.</p></article>
          <article><h3>Probablemente no si</h3><p>Buscás comprar una herramienta sin revisar cómo trabajás, o todavía no hay un problema claro para resolver.</p></article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.founder}`}>
        <div className={styles.founderPhoto}>
          <img src="/flor-musitani.png" alt="Flor, desarrolladora y fundadora de Flow Automation Studio" width="300" height="300" />
        </div>
        <div className={styles.founderCopy}>
          <p className="eyebrow">Quién está detrás</p>
          <h2>Hola, soy Flor.</h2>
          <p>Soy desarrolladora full stack y fundadora de Flow Automation Studio. Antes pasé más de 10 años en selección de perfiles técnicos, entendiendo cómo trabajan los equipos por dentro.</p>
          <p>Esa mezcla es la que traigo a cada proyecto: primero entiendo el proceso y los números, después construyo la solución. Te acompaño desde la primera charla hasta que todo queda funcionando.</p>
          <a className="text-link" href="https://www.linkedin.com/company/flow-automation-studio/" target="_blank" rel="noreferrer">
            Ver Flow Automation Studio en LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <h2>¿Qué te gustaría que funcionara mejor?</h2>
          <p>Contame qué tarea le está quitando tiempo a tu equipo. La primera charla dura 20 minutos y no tiene costo.</p>
        </div>
        <div className={styles.actions}>
          <a className="button button-light" href={calendlyUrl} target="_blank" rel="noreferrer">
            Agendar una charla <ArrowRight size={18} />
          </a>
          <WhatsAppCTA className={styles.lightSecondaryButton} href={whatsappUrl} target="_blank" rel="noreferrer" contentName="home_final_whatsapp">
            Escribirme por WhatsApp <MessagesSquare size={18} />
          </WhatsAppCTA>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Flow Automation Studio · Argentina · Latinoamérica</span>
        <span>© 2026</span>
      </footer>
    </main>
  )
}
