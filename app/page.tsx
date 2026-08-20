import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  MessagesSquare,
  RefreshCw,
  Search,
  WalletCards,
} from "lucide-react"

const whatsappUrl =
  "https://wa.me/5491156578922?text=Hola%20Flor%2C%20quiero%20contarte%20qu%C3%A9%20est%C3%A1%20pasando%20en%20mi%20negocio."

const pains = [
  { number: "01", title: "Todo termina pasando por vos", text: "Consultas, decisiones, seguimiento y tareas chicas que te sacan foco de lo importante.", icon: Clock3 },
  { number: "02", title: "La información vive en demasiados lugares", text: "WhatsApp, planillas, notas y aplicaciones que están desconectadas.", icon: RefreshCw },
  { number: "03", title: "Se pierden oportunidades en el camino", text: "Mensajes sin respuesta, seguimientos tardíos, cobros demorados y clientes que se enfrían.", icon: WalletCards },
]

const examples = [
  "Responder y ordenar consultas entrantes",
  "Hacer seguimiento sin depender de la memoria",
  "Recordar turnos, pagos y renovaciones",
  "Mantener actualizada la información en las aplicaciones que ya usás",
  "Recibir alertas cuando algo necesita atención",
  "Armar reportes sin copiar datos a mano",
]

const process = [
  { step: "01", title: "Te escuchamos", text: "Nos contás cómo trabajás, qué querés mejorar y qué tareas te están complicando." },
  { step: "02", title: "Elegimos por dónde empezar", text: "Buscamos el problema que más tiempo, dinero o clientes te está costando." },
  { step: "03", title: "Te mostramos la solución", text: "Te explicamos qué haríamos, cuánto tardaría y cuánto costaría. Sin sorpresas." },
  { step: "04", title: "La ponemos a funcionar", text: "Nos ocupamos de crearla, probarla y enseñarte a usarla." },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Flow Automation Studio, inicio">
          <img className="brand-mark" src="/flow-automation-mark.svg" alt="" width="38" height="38" />
          <span><strong>Flow Automation</strong><small>Studio</small></span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#problemas">El problema</a>
          <a href="#metodo">Cómo trabajamos</a>
          <a href="#servicio">El servicio</a>
          <a href="#sobre-mi">Sobre mí</a>
        </nav>
        <a className="button button-small" href={whatsappUrl} target="_blank" rel="noreferrer">Hablemos <ArrowRight size={16} /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Menos tareas manuales. Más tiempo para tu negocio.</p>
          <h1>Tu negocio no necesita otra herramienta.<span> Necesita funcionar mejor.</span></h1>
          <p className="hero-text">Vemos dónde perdés tiempo, dinero o clientes. Después creamos una solución simple para resolverlo.</p>
          <div className="hero-actions">
            <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Quiero ordenar mi negocio <ArrowRight size={18} /></a>
            <a className="text-link" href="#metodo">Ver cómo trabajamos <ChevronRight size={17} /></a>
          </div>
          <p className="microcopy">Primera conversación de 20 minutos · Sin costo · Sin propuesta genérica</p>
        </div>

        <div className="hero-system" aria-label="Ejemplo de un problema de negocio">
          <div className="system-topline"><span>Así vemos el problema</span><span className="status"><span /> en revisión</span></div>
          <div className="system-question">
            <Search size={20} />
            <div><small>La pregunta correcta</small><strong>¿Qué está frenando hoy al negocio?</strong></div>
          </div>
          <div className="system-flow">
            <div><span>01</span><p>Consultas llegan por WhatsApp</p></div><i />
            <div><span>02</span><p>Seguimiento manual e irregular</p></div><i />
            <div className="system-alert"><span>03</span><p>Ventas que se enfrían</p></div>
          </div>
          <div className="system-note"><span>Mejora encontrada</span><p>Ordenar las consultas y recordar cuándo volver a contactar a cada persona.</p></div>
        </div>
      </section>

      <section className="manifesto"><p>No empezamos por la IA. <strong>Empezamos por entender el negocio.</strong></p></section>

      <section className="section" id="problemas">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Cuando crecer empieza a pesar</p><h2>El problema rara vez es la falta de esfuerzo.</h2></div>
          <p>Muchas veces el negocio crece, pero la forma de trabajar queda igual. Entonces aparecen más tareas, más desorden y menos tiempo para avanzar.</p>
        </div>
        <div className="pain-grid">
          {pains.map(({ number, title, text, icon: Icon }) => (
            <article className="pain-card" key={number}>
              <div className="card-meta"><span>{number}</span><Icon size={22} /></div>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section method-section" id="metodo">
        <div className="section-heading centered-heading">
          <p className="eyebrow">Cómo trabajamos</p><h2>Primero entendemos qué pasa. Después vemos cómo resolverlo.</h2>
          <p>No usamos tecnología porque sí. Cada cambio tiene que hacerte el trabajo más fácil.</p>
        </div>
        <div className="process-list">
          {process.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="section service-section" id="servicio">
        <div className="section-heading service-heading">
          <div>
            <p className="eyebrow">Una forma simple de empezar</p>
            <h2>Del problema a una solución que funciona.</h2>
          </div>
          <p>
            No necesitás saber qué herramienta usar. Nos contás qué está pasando y vemos juntos si hay una forma clara
            de mejorarlo.
          </p>
        </div>
        <div className="service-grid">
          <article>
            <span className="service-number">01</span>
            <p className="service-kicker">Primera charla</p>
            <h3>Nos contás qué está pasando</h3>
            <p>Hablamos durante 20 minutos para conocer tu negocio y ver si podemos ayudarte.</p>
            <strong>Sin costo y sin compromiso</strong>
          </article>
          <article className="service-featured">
            <span className="service-number">02</span>
            <p className="service-kicker">Plan de trabajo</p>
            <h3>Te mostramos qué conviene hacer</h3>
            <p>Te explicamos qué problema resolveríamos primero, cómo lo haríamos, cuánto tardaría y cuánto costaría.</p>
            <strong>Vos decidís si querés avanzar</strong>
          </article>
          <article>
            <span className="service-number">03</span>
            <p className="service-kicker">Puesta en marcha</p>
            <h3>Nos ocupamos de hacerlo realidad</h3>
            <p>Creamos la solución, la probamos y te mostramos cómo usarla. Después podés elegir si querés que sigamos acompañándote.</p>
            <strong>Sabés qué hacemos en cada momento</strong>
          </article>
        </div>
        <div className="service-cta">
          <p>Cada negocio es distinto. El precio depende de lo que haya que resolver.</p>
          <a className="button" href={whatsappUrl} target="_blank" rel="noreferrer">Contarle mi problema a Flor <ArrowRight size={17} /></a>
        </div>
      </section>

      <section className="section examples-section" id="ejemplos">
        <div className="examples-copy">
          <p className="eyebrow">Algunos ejemplos</p><h2>¿Qué podríamos mejorar?</h2>
          <p>Podemos ayudarte a ahorrar tareas, ordenar la información y hacer seguimientos a tiempo. La solución depende de tu negocio.</p>
          <a className="text-link" href={whatsappUrl} target="_blank" rel="noreferrer">Contame qué te está pasando <ArrowRight size={17} /></a>
        </div>
        <div className="examples-list">
          {examples.map((example) => <div key={example}><Check size={18} /><span>{example}</span></div>)}
        </div>
      </section>

      <section className="section fit-section">
        <div className="fit-intro"><p className="eyebrow">Para quién es</p><h2>Trabajamos mejor con negocios que ya sienten el costo del desorden.</h2></div>
        <div className="fit-columns">
          <div><span className="fit-label good">Es para vos si</span><ul><li>Tu equipo repite tareas todos los días.</li><li>Hay ventas o clientes que se pierden por falta de seguimiento.</li><li>Querés ordenar antes de sumar más herramientas o personas.</li></ul></div>
          <div><span className="fit-label neutral">Probablemente no si</span><ul><li>Solo buscás comprar una herramienta sin revisar cómo trabajás.</li><li>Querés una solución instantánea sin contarnos cómo funciona tu negocio.</li><li>Todavía no hay un problema claro que quieras resolver.</li></ul></div>
        </div>
      </section>

      <section className="section founder-section" id="sobre-mi">
        <div className="founder-photo">
          <img src="/flor-musitani.png" alt="Flor, fundadora de Flow Automation Studio" width="300" height="300" />
          <small>Buenos Aires</small>
        </div>
        <div className="founder-copy">
          <p className="eyebrow">Quién está detrás</p>
          <h2>Hola, soy Flor.</h2>
          <p className="founder-lead">
            Creé Flow Automation Studio para resolver problemas reales de los negocios, no para sumar tecnología porque sí.
          </p>
          <p>
            Mi trabajo es entender cómo funciona tu negocio, encontrar qué se puede hacer mejor y crear una solución
            fácil de usar. Te acompaño desde la primera charla hasta que todo queda funcionando.
          </p>
          <div className="founder-tags"><span>Menos tareas manuales</span><span>Más orden</span><span>Mejor seguimiento</span></div>
          <a className="text-link" href="https://www.linkedin.com/company/flow-automation-studio/" target="_blank" rel="noreferrer">Ver Flow Automation Studio en LinkedIn <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="section faq-section">
        <div><p className="eyebrow">Preguntas frecuentes</p><h2>Antes de conversar</h2></div>
        <div className="faq-list">
          <details><summary>¿Necesito saber qué solución necesito?</summary><p>No. Nos contás el problema y nosotros te ayudamos a encontrar una forma simple de resolverlo.</p></details>
          <details><summary>¿Trabajan solamente con WhatsApp?</summary><p>No. También podemos ayudarte con consultas, clientes, pagos, tareas, información y reportes.</p></details>
          <details><summary>¿Cuánto cuesta un proyecto?</summary><p>Depende de lo que haya que resolver. Antes de empezar te decimos qué haríamos, cuánto tardaría y cuánto costaría.</p></details>
          <details><summary>¿Tengo que cambiar las aplicaciones que ya uso?</summary><p>No necesariamente. Primero vemos si podemos ordenar y aprovechar mejor lo que ya tenés.</p></details>
        </div>
      </section>

      <section className="final-cta" id="contacto">
        <div><p className="eyebrow">Empecemos por lo que hoy te complica</p><h2>¿Qué te gustaría que funcionara mejor?</h2><p>Contanos cómo trabajás y qué tarea te está quitando tiempo. La primera charla dura 20 minutos y no tiene costo.</p></div>
        <a className="button button-light" href={whatsappUrl} target="_blank" rel="noreferrer">Conversar con Flor <MessagesSquare size={18} /></a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><img className="brand-mark" src="/flow-automation-mark.svg" alt="" width="38" height="38" /><span><strong>Flow Automation</strong><small>Studio</small></span></a>
        <p>Sistemas simples para negocios que quieren funcionar mejor.</p>
        <div><span>Argentina · Latinoamérica</span><span>© 2026 Flow Automation Studio</span></div>
      </footer>
    </main>
  )
}
