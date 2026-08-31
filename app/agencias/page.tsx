import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  Blocks,
  Bot,
  Check,
  Code2,
  GitBranch,
  MessageSquareMore,
  PlugZap,
  ShieldCheck,
  Wrench,
} from "lucide-react"
import styles from "./page.module.css"

const whatsappUrl =
  "https://wa.me/5491156578922?text=Hola%20Flor%2C%20quiero%20conversar%20sobre%20una%20posible%20colaboraci%C3%B3n%20t%C3%A9cnica%20con%20mi%20agencia."

export const metadata: Metadata = {
  title: "Implementación técnica para agencias",
  description:
    "Colaboración técnica white-label para agencias que necesitan implementar automatizaciones, integraciones y sistemas para sus clientes.",
  alternates: { canonical: "/agencias" },
}

const services = [
  {
    icon: GitBranch,
    title: "Seguimiento de leads",
    text: "Registro, clasificación, avisos y próximos pasos para que ninguna consulta quede olvidada.",
  },
  {
    icon: PlugZap,
    title: "Herramientas conectadas",
    text: "Datos que pasan entre formularios, planillas, calendarios, correo y CRM sin carga duplicada.",
  },
  {
    icon: Bot,
    title: "Flujos de conversación",
    text: "Clasificación, derivación y atención asistida. La conexión con WhatsApp se evalúa según la cuenta y la API disponible.",
  },
  {
    icon: Code2,
    title: "Sistemas internos",
    text: "Paneles y herramientas simples para procesos que no encajan bien en una plataforma genérica.",
  },
  {
    icon: Wrench,
    title: "Pruebas y correcciones",
    text: "Revisión de workflows, errores, datos incompletos y puntos donde un proceso puede detenerse.",
  },
  {
    icon: ShieldCheck,
    title: "Entrega y soporte",
    text: "Documentación, traspaso de accesos y acompañamiento para que la solución no dependa de una sola persona.",
  },
]

const examples = [
  {
    label: "Turnos y consultas",
    title: "Recordatorios y seguimiento para negocios con agenda",
    text: "Captura de turnos, avisos, recuperación de ausencias y seguimiento de consultas.",
    href: "/centros-estetica",
  },
  {
    label: "Prospección asistida",
    title: "Búsqueda, limpieza y revisión de leads",
    text: "Un flujo que reúne negocios, elimina duplicados y deja cada contacto listo para revisión humana.",
  },
  {
    label: "Operación comercial",
    title: "Seguimientos y reportes que no dependen de la memoria",
    text: "Estados, alertas y resúmenes para saber qué necesita atención y qué puede esperar.",
  },
]

const tools = ["n8n", "Make", "APIs", "Google Sheets", "Gmail", "Google Calendar", "React", "Next.js", "TypeScript"]

export default function AgenciasPage() {
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
          <p className={styles.eyebrow}>Colaboración técnica para agencias</p>
          <h1>La parte técnica de tus proyectos, <span>sin agrandar el equipo.</span></h1>
          <p className={styles.lead}>
            Trabajo junto a agencias que necesitan convertir una idea comercial en un sistema funcionando:
            automatizaciones, herramientas conectadas y procesos internos listos para usar.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href={whatsappUrl} target="_blank" rel="noreferrer">
              Conversar sobre un proyecto <ArrowRight size={18} />
            </a>
            <a className={styles.secondary} href="#trabajos">Ver ejemplos</a>
          </div>
          <p className={styles.microcopy}>Por proyecto · White-label o colaboración directa · Alcance definido antes de empezar</p>
        </div>

        <div className={styles.systemCard} aria-label="Ejemplo de colaboración entre agencia y Flow Automation">
          <div className={styles.systemTop}><span>Proyecto de agencia</span><b>En preparación</b></div>
          <div className={styles.brief}>
            <MessageSquareMore size={22} />
            <div><small>Pedido del cliente</small><strong>“Necesitamos ordenar los leads que entran por distintos canales.”</strong></div>
          </div>
          <div className={styles.systemFlow}>
            <div><span>01</span><p>La agencia define el objetivo</p></div>
            <i />
            <div><span>02</span><p>Flow construye y prueba</p></div>
            <i />
            <div className={styles.activeStep}><span>03</span><p>El cliente recibe el sistema</p></div>
          </div>
          <div className={styles.systemNote}><Blocks size={18} /><p>Me adapto al rol que necesite la agencia: detrás de marca, en reuniones técnicas o como apoyo puntual.</p></div>
        </div>
      </section>

      <section className={styles.promise}>
        <p><strong>La agencia conserva la relación con el cliente.</strong> Yo me ocupo de convertir el proceso acordado en algo que funcione.</p>
      </section>

      <section className={styles.section}>
        <div className={styles.splitHeading}>
          <div><p className={styles.eyebrow}>Qué podés delegar</p><h2>Una necesidad concreta, llevada hasta una solución usable.</h2></div>
          <p>No vendo una herramienta cerrada. Reviso el proceso, propongo una forma simple de resolverlo y construyo solo lo que el proyecto necesita.</p>
        </div>
        <div className={styles.serviceGrid}>
          {services.map(({ icon: Icon, title, text }, index) => (
            <article key={title}>
              <div><span>{String(index + 1).padStart(2, "0")}</span><Icon size={20} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.collaborationSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.eyebrow}>Formas de colaborar</p>
          <h2>Me sumo donde hoy falta capacidad técnica.</h2>
        </div>
        <div className={styles.collaborationGrid}>
          <article><span>White-label</span><h3>Detrás de la marca de la agencia</h3><p>La agencia lidera la relación y recibe avances, documentación y una entrega lista para presentar.</p></article>
          <article><span>Por proyecto</span><h3>Una implementación con principio y fin</h3><p>Definimos qué se construye, cómo se prueba, cuánto tarda y qué queda fuera antes de comenzar.</p></article>
          <article><span>Capacidad adicional</span><h3>Apoyo cuando el equipo está cargado</h3><p>Tomo una parte técnica puntual o ayudo a destrabar un workflow que necesita revisión.</p></article>
        </div>
      </section>

      <section className={styles.examplesSection} id="trabajos">
        <div className={styles.examplesIntro}>
          <p className={styles.eyebrow}>Ejemplos de soluciones</p>
          <h2>Procesos que puedo convertir en sistemas simples.</h2>
          <p>Son ejemplos y demostraciones propias, no casos de clientes. Sirven para mostrar cómo pienso un proceso, cómo lo divido y cómo lo llevo a una primera versión.</p>
        </div>
        <div className={styles.examplesList}>
          {examples.map((example, index) => (
            <article key={example.title}>
              <div><span>{example.label}</span><b>0{index + 1}</b></div>
              <h3>{example.title}</h3>
              <p>{example.text}</p>
              {example.href ? <Link href={example.href}>Ver ejemplo <ArrowRight size={16} /></Link> : <small>Ejemplo disponible para explicar en una llamada</small>}
            </article>
          ))}
        </div>
      </section>

      <section className={styles.processSection}>
        <div><p className={styles.eyebrow}>Cómo trabajamos</p><h2>Claridad antes de tocar el sistema.</h2></div>
        <ol>
          <li><span>01</span><div><h3>Brief técnico</h3><p>Entiendo el objetivo, el proceso actual, las herramientas y las restricciones del cliente.</p></div></li>
          <li><span>02</span><div><h3>Viabilidad y propuesta</h3><p>Defino qué se puede hacer, qué accesos hacen falta, los riesgos, el plazo y el presupuesto.</p></div></li>
          <li><span>03</span><div><h3>Construcción y prueba</h3><p>Trabajo con datos de prueba, reviso errores y muestro avances en momentos acordados.</p></div></li>
          <li><span>04</span><div><h3>Entrega y continuidad</h3><p>Documento lo construido y acordamos si la agencia, el cliente o Flow quedan a cargo del soporte.</p></div></li>
        </ol>
      </section>

      <section className={styles.stackSection}>
        <div><p className={styles.eyebrow}>Herramientas</p><h2>El stack se elige según el proyecto.</h2></div>
        <div className={styles.toolList}>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
      </section>

      <section className={styles.fitSection}>
        <div><p className={styles.eyebrow}>Para trabajar bien</p><h2>Lo que necesito antes de presupuestar.</h2></div>
        <div className={styles.checkList}>
          {["Un problema y un resultado esperado claros", "Acceso a la información técnica disponible", "Una persona responsable de validar avances", "Tiempo para probar antes de entregar al cliente"].map((item) => <p key={item}><Check size={17} />{item}</p>)}
        </div>
      </section>

      <section className={styles.faqSection}>
        <div><p className={styles.eyebrow}>Preguntas frecuentes</p><h2>Antes del primer proyecto</h2></div>
        <div>
          <details><summary>¿Podés trabajar sin aparecer frente al cliente?</summary><p>Sí. Podemos trabajar white-label, con la agencia como único punto de contacto, o participar únicamente en reuniones técnicas.</p></details>
          <details><summary>¿Podés conectar un sistema con WhatsApp?</summary><p>Sí, cuando la cuenta y la API lo permiten. Primero reviso la configuración de Meta, el proveedor y si se usará un número nuevo o uno existente. Esa viabilidad se confirma antes de prometer la conexión.</p></details>
          <details><summary>¿Cómo se cotiza?</summary><p>Por proyecto y según el proceso, las herramientas, la cantidad de conexiones, las pruebas y el soporte necesario. No cotizo sin entender antes qué debe quedar funcionando.</p></details>
          <details><summary>¿Tomás el mantenimiento?</summary><p>Puede incluirse como soporte mensual o entregarse documentado para que quede a cargo de la agencia. Se acuerda desde el comienzo.</p></details>
        </div>
      </section>

      <section className={styles.founderSection}>
        <div className={styles.photo}><img src="/flor-musitani.png" alt="Flor Musitani, fundadora de Flow Automation Studio" /></div>
        <div>
          <p className={styles.eyebrow}>Quién implementa</p>
          <h2>Trabajo técnico con criterio de negocio.</h2>
          <p className={styles.founderLead}>Soy Flor, fundadora de Flow Automation Studio.</p>
          <p>Trabajo en el cruce entre desarrollo, automatización y procesos. Mi foco es entender qué necesita resolver el cliente, construir una versión clara y dejarla preparada para que otra persona pueda operarla.</p>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div><p className={styles.eyebrow}>Próximo proyecto</p><h2>Contame qué necesita tu cliente y revisamos si puedo tomar la parte técnica.</h2></div>
        <a className={styles.lightButton} href={whatsappUrl} target="_blank" rel="noreferrer">Conversar con Flor <ArrowRight size={18} /></a>
      </section>
    </main>
  )
}
