import Link from "next/link"
import { ArrowRight, Check, MessagesSquare } from "lucide-react"
import WhatsAppCTA from "@/components/whatsapp-cta"
import styles from "./home.module.css"

const calendlyUrl = "https://calendly.com/flowautomationstudio/30min"
const whatsappUrl =
  "https://wa.me/5491156578922?text=Hola%20Flor%2C%20llegu%C3%A9%20desde%20la%20web%20de%20Flow%20Automation%20y%20quiero%20contarte%20c%C3%B3mo%20estamos%20haciendo%20el%20seguimiento%20comercial."

const process = [
  { number: "1", title: "Analizamos", text: "Reviso cómo llegan las consultas, quién las atiende y en qué parte se corta el seguimiento." },
  { number: "2", title: "Implementamos", text: "Configuro un circuito simple para centralizar, ordenar y dar continuidad a cada oportunidad." },
  { number: "3", title: "Acompañamos", text: "Lo probamos con tu equipo, ajustamos el uso real y dejo documentado cómo trabajar." },
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
          <a href="#proyectos">Caso real</a>
          <a href="#como">Cómo funciona</a>
        </nav>
        <WhatsAppCTA className="button button-small" href={whatsappUrl} target="_blank" rel="noreferrer" contentName="home_header_whatsapp">
          Hablemos <ArrowRight size={16} />
        </WhatsAppCTA>
      </header>

      <section className={styles.hero} id="inicio">
        <p className="eyebrow">Flow Sales Recovery</p>
        <h1>Tus consultas llegan.<br /><span>El seguimiento no siempre.</span></h1>
        <p className={styles.heroText}>
          Organizo tus consultas de WhatsApp, Instagram y Facebook, automatizo los seguimientos y te ayudo a retomar
          oportunidades comerciales que quedaron pendientes.
        </p>
        <div className={styles.actions}>
          <WhatsAppCTA className="button" href={whatsappUrl} target="_blank" rel="noreferrer" contentName="home_hero_whatsapp">
            Contame cómo hacen el seguimiento <ArrowRight size={18} />
          </WhatsAppCTA>
          <a className={styles.secondaryButton} href={calendlyUrl} target="_blank" rel="noreferrer">
            Agendar una charla de 30 min
          </a>
        </div>
        <p className={styles.microcopy}>Primero revisamos el proceso · Sin propuesta genérica</p>
      </section>

      <section className={styles.pains} aria-labelledby="pains-title">
        <div className={styles.inner}>
          <h2 id="pains-title">El problema no suele ser conseguir consultas. Es darles continuidad.</h2>
          <div className={styles.painGrid}>
            <article><h3>Canales separados</h3><p>WhatsApp, Instagram y Facebook se revisan por separado y cuesta tener una sola vista de lo pendiente.</p></article>
            <article><h3>Próximos pasos poco claros</h3><p>Una consulta recibe respuesta, pero después no siempre queda definido quién la sigue ni cuándo.</p></article>
            <article><h3>Contactos anteriores sin revisar</h3><p>Hay oportunidades que podrían retomarse si existen datos utilizables y permisos adecuados para volver a contactarlas.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section} id="servicios">
        <p className="eyebrow">Servicio principal</p>
        <h2>Un sistema comercial más ordenado, sin sumar otra herramienta para aprender por tu cuenta.</h2>
        <div className={styles.offerGrid}>
          <article className={`${styles.serviceCard} ${styles.primaryService}`}>
            <span>01 · FLOW SALES RECOVERY</span>
            <h3>Centralización y seguimiento comercial</h3>
            <p>Primero entiendo cómo trabaja tu equipo. Después implemento el circuito para reunir consultas, organizar oportunidades, definir responsables y automatizar los seguimientos que tenga sentido automatizar.</p>
            <ul>
              <li><Check size={17} /> Consultas de WhatsApp, Instagram y Facebook en un mismo lugar.</li>
              <li><Check size={17} /> Etapas, responsables y próximos pasos visibles.</li>
              <li><Check size={17} /> Seguimientos configurados según el proceso real.</li>
              <li><Check size={17} /> Revisión de contactos anteriores cuando los datos y permisos lo permiten.</li>
            </ul>
            <Link className="text-link" href="/flow-sales-recovery">Ver cómo funciona <ArrowRight size={16} /></Link>
          </article>
          <article className={styles.serviceCard}>
            <span>02 · SERVICIO SECUNDARIO</span>
            <h3>Automatizaciones a medida</h3>
            <p>Cuando el cuello de botella está en otro proceso, diseño una solución específica: reservas, carga de datos, avisos, reportes o tareas repetitivas.</p>
            <strong>La herramienta se elige después de entender el problema, no antes.</strong>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.projectsSection}`} id="proyectos">
        <p className="eyebrow">Caso real · Virtual Golf</p>
        <h2>Tres canales comerciales, una forma común de trabajar.</h2>
        <div className={styles.featuredProject}>
          <div>
            <div className={styles.tags}><span>WhatsApp</span><span>Instagram</span><span>Facebook Messenger</span></div>
            <h3>Virtual Golf</h3>
            <p><strong>El punto de partida:</strong> las consultas comerciales llegaban por tres canales y necesitaban un circuito compartido para ordenar cada oportunidad.</p>
            <p><strong>Lo implementado:</strong> conecté los tres canales en una sola bandeja y configuré etiquetas automáticas, etapas comerciales, responsables, campos de seguimiento y respuestas guardadas.</p>
          </div>
          <div className={styles.deliveredList}>
            <span><Check size={18} /> Recepción y respuesta probadas en los tres canales.</span>
            <span><Check size={18} /> Etapas y datos de seguimiento configurados.</span>
            <span><Check size={18} /> Respuestas guardadas para consultas habituales.</span>
            <span><Check size={18} /> Video tutorial, guía de uso y primera revisión.</span>
          </div>
        </div>
        <p className={styles.caseNote}>La recuperación de contactos históricos y las campañas salientes quedaron fuera de la implementación inicial y requieren validación de datos y permisos.</p>
      </section>

      <section className={styles.section} id="como">
        <p className="eyebrow">Cómo funciona</p>
        <h2>Primero el proceso. Después la implementación.</h2>
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
          <article><h3>Por qué trabajar con Flow</h3><p>No te entrego una herramienta vacía. Relevo el circuito, configuro las etapas y los seguimientos, pruebo los canales y acompaño al equipo para que el sistema se use.</p></article>
          <article><h3>Cuándo conviene conversar</h3><p>Cuando ya reciben consultas por varios canales y necesitan ordenar responsables, próximos pasos o contactos pendientes antes de sumar más volumen.</p></article>
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
          <p>Esa mezcla es la que traigo a cada proyecto: primero entiendo el proceso y después construyo la solución. Te acompaño desde la primera charla hasta que el circuito queda funcionando y documentado.</p>
          <a className="text-link" href="https://www.linkedin.com/company/flow-automation-studio/" target="_blank" rel="noreferrer">
            Ver Flow Automation Studio en LinkedIn <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div>
          <h2>¿Cómo siguen hoy una consulta después de responderla?</h2>
          <p>Contame cómo trabajan y revisamos si Flow Sales Recovery encaja con el problema. También podés agendar una charla de 30 minutos.</p>
        </div>
        <div className={styles.actions}>
          <WhatsAppCTA className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer" contentName="home_final_whatsapp">
            Escribirme por WhatsApp <MessagesSquare size={18} />
          </WhatsAppCTA>
          <a className={styles.lightSecondaryButton} href={calendlyUrl} target="_blank" rel="noreferrer">
            Agendar 30 min <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Flow Automation Studio · Argentina · Latinoamérica</span>
        <a href="/politica-de-privacidad">Política de privacidad</a>
        <span>© 2026</span>
      </footer>
    </main>
  )
}
