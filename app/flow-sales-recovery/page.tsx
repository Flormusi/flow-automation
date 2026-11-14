import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Check, MessagesSquare } from "lucide-react"
import WhatsAppCTA from "@/components/whatsapp-cta"
import styles from "../home.module.css"

const calendlyUrl = "https://calendly.com/flowautomationstudio/30min"
const whatsappUrl =
  "https://wa.me/5491156578922?text=Hola%20Flor%2C%20quiero%20contarte%20c%C3%B3mo%20estamos%20haciendo%20el%20seguimiento%20comercial."

export const metadata: Metadata = {
  title: "Flow Sales Recovery",
  description:
    "Centralizá consultas de WhatsApp, Instagram y Facebook, ordená oportunidades comerciales y configurá seguimientos según el proceso real de tu empresa.",
  alternates: { canonical: "/flow-sales-recovery" },
  openGraph: {
    title: "Flow Sales Recovery | Flow Automation Studio",
    description: "Un servicio de implementación para ordenar consultas, oportunidades y seguimientos comerciales.",
    url: "/flow-sales-recovery",
  },
}

const process = [
  { number: "1", title: "Analizamos", text: "Reviso los canales, las personas involucradas, las etapas y qué pasa después de cada consulta." },
  { number: "2", title: "Implementamos", text: "Configuro el circuito, conecto los canales acordados y pruebo cada paso con el equipo." },
  { number: "3", title: "Acompañamos", text: "Ayudo a incorporar la nueva forma de trabajo y ajusto lo necesario durante la puesta en marcha." },
]

export default function FlowSalesRecoveryPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className="brand" href="/" aria-label="Flow Automation Studio, inicio">
          <img className="brand-mark" src="/flow-automation-mark.svg" alt="" width="38" height="38" />
          <span><strong>Flow Automation</strong><small>Studio</small></span>
        </Link>
        <Link className={styles.secondaryButton} href="/"><ArrowLeft size={16} /> Volver al inicio</Link>
      </header>

      <section className={styles.hero}>
        <p className="eyebrow">Flow Sales Recovery</p>
        <h1>Tus consultas llegan.<br /><span>El seguimiento no siempre.</span></h1>
        <p className={styles.heroText}>
          Organizo tus consultas de WhatsApp, Instagram y Facebook, automatizo los seguimientos y te ayudo a retomar
          oportunidades comerciales que quedaron pendientes.
        </p>
        <div className={styles.actions}>
          <WhatsAppCTA className="button" href={whatsappUrl} target="_blank" rel="noreferrer" contentName="sales_recovery_hero_whatsapp">
            Contame cómo trabajan hoy <ArrowRight size={18} />
          </WhatsAppCTA>
          <a className={styles.secondaryButton} href={calendlyUrl} target="_blank" rel="noreferrer">Agendar una charla de 30 min</a>
        </div>
        <p className={styles.microcopy}>La primera conversación es para entender el proceso, no para venderte una herramienta.</p>
      </section>

      <section className={styles.pains}>
        <div className={styles.inner}>
          <h2>Responder una consulta no alcanza si nadie sabe cuál es el próximo paso.</h2>
          <div className={styles.painGrid}>
            <article><h3>Información fragmentada</h3><p>Cada canal muestra una parte de la conversación y el equipo no comparte una vista común.</p></article>
            <article><h3>Seguimientos informales</h3><p>Los recordatorios quedan en la memoria, un chat interno o una planilla que no siempre se actualiza.</p></article>
            <article><h3>Oportunidades pendientes</h3><p>Contactos anteriores pueden quedar sin revisar aun cuando existen datos y permisos adecuados para retomarlos.</p></article>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <p className="eyebrow">Qué implemento</p>
        <h2>El circuito completo para que cada oportunidad tenga contexto y continuidad.</h2>
        <div className={styles.offerGrid}>
          <article className={`${styles.serviceCard} ${styles.primaryService}`}>
            <span>CENTRALIZACIÓN Y ORDEN</span>
            <h3>Una forma común de trabajar</h3>
            <ul>
              <li><Check size={17} /> Canales comerciales reunidos en una sola operación.</li>
              <li><Check size={17} /> Etapas adaptadas al proceso de venta.</li>
              <li><Check size={17} /> Responsables y próximos pasos visibles.</li>
              <li><Check size={17} /> Respuestas habituales preparadas para el equipo.</li>
            </ul>
          </article>
          <article className={styles.serviceCard}>
            <span>SEGUIMIENTO Y RECUPERACIÓN</span>
            <h3>Automatizar sólo lo que tiene sentido</h3>
            <p>Configuro avisos o acciones de seguimiento según el proceso real. Si hay una base anterior, primero evalúo su calidad y si existen permisos adecuados antes de proponer una reactivación.</p>
            <strong>El alcance se define después del análisis inicial. No hay resultados comerciales garantizados.</strong>
          </article>
        </div>
      </section>

      <section className={`${styles.section} ${styles.projectsSection}`}>
        <p className="eyebrow">Implementación real · Virtual Golf</p>
        <h2>La diferencia está en configurar el proceso, no sólo la plataforma.</h2>
        <div className={styles.featuredProject}>
          <div>
            <div className={styles.tags}><span>WhatsApp Business</span><span>Instagram</span><span>Messenger</span></div>
            <h3>Virtual Golf</h3>
            <p>Centralicé los tres canales en una sola bandeja. Configuré etiquetas automáticas por origen, etapas comerciales, responsables, campos de seguimiento y respuestas guardadas.</p>
          </div>
          <div className={styles.deliveredList}>
            <span><Check size={18} /> Conexiones probadas para recibir y responder.</span>
            <span><Check size={18} /> Proceso comercial configurado.</span>
            <span><Check size={18} /> Tutorial y guía entregados.</span>
            <span><Check size={18} /> Primera revisión de uso realizada.</span>
          </div>
        </div>
        <p className={styles.caseNote}>No se publican métricas de ventas ni resultados económicos porque todavía no existen resultados verificados para comunicar.</p>
      </section>

      <section className={styles.section}>
        <p className="eyebrow">Cómo funciona</p>
        <h2>Analizamos, implementamos y acompañamos.</h2>
        <div className={styles.processGrid}>
          {process.map((item) => (
            <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>
          ))}
        </div>
        <div className={styles.fitGrid}>
          <article><h3>Una implementación, no una licencia</h3><p>Diseño las etapas, conecto los canales, preparo el uso cotidiano y pruebo el recorrido antes de entregarlo.</p></article>
          <article><h3>Automatizaciones a medida, si hacen falta</h3><p>Si el análisis detecta otro cuello de botella, se puede definir un proyecto aparte sin forzarlo dentro de este servicio.</p></article>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div><h2>Revisemos dónde se corta hoy el seguimiento.</h2><p>Escribime por WhatsApp o reservá una charla de 30 minutos. Primero voy a entender cómo trabajan y qué necesitan ordenar.</p></div>
        <div className={styles.actions}>
          <WhatsAppCTA className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer" contentName="sales_recovery_final_whatsapp">
            Escribirme por WhatsApp <MessagesSquare size={18} />
          </WhatsAppCTA>
          <a className={styles.lightSecondaryButton} href={calendlyUrl} target="_blank" rel="noreferrer">Agendar 30 min <ArrowRight size={18} /></a>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>Flow Automation Studio · Argentina · Latinoamérica</span>
        <Link href="/politica-de-privacidad">Política de privacidad</Link>
        <span>© 2026</span>
      </footer>
    </main>
  )
}
