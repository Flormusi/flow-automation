import type { Metadata } from "next"
import Link from "next/link"
import styles from "./politica.module.css"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Conocé cómo Flow Automation Studio recopila, utiliza y protege los datos personales de consultas comerciales y formularios de Meta.",
  alternates: {
    canonical: "/politica-de-privacidad",
  },
}

const whatsappUrl =
  "https://wa.me/5491156578922?text=Hola%20Flor%2C%20quiero%20hacer%20una%20consulta%20sobre%20mis%20datos%20personales."

export default function PoliticaDePrivacidad() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="Volver a Flow Automation Studio">
          <img src="/flow-automation-mark.svg" alt="" width="38" height="38" />
          <span><strong>Flow Automation</strong><small>Studio</small></span>
        </Link>
        <Link className={styles.backLink} href="/">Volver al inicio</Link>
      </header>

      <article className={styles.article}>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Información legal</p>
          <h1>Política de Privacidad</h1>
          <p>
            Esta política explica qué datos personales recopila Flow Automation Studio, para qué los usa y cómo podés ejercer tus derechos.
          </p>
          <p className={styles.updated}>Última actualización: 4 de noviembre de 2026</p>
        </div>

        <aside className={styles.pending} aria-labelledby="informacion-pendiente">
          <h2 id="informacion-pendiente">Información pendiente antes de publicar</h2>
          <p>
            Falta confirmar el nombre completo o razón social y el domicilio del responsable, además de un correo electrónico específico para consultas de privacidad. Estos datos deben incorporarse antes de usar esta página en formularios de Meta Ads.
          </p>
        </aside>

        <section>
          <h2>1. Responsable del tratamiento</h2>
          <p>
            Los datos son tratados por <strong>Flow Automation Studio</strong>, estudio de automatización de procesos que opera en Argentina.
          </p>
          <dl className={styles.details}>
            <div><dt>Nombre legal o razón social</dt><dd>Pendiente de confirmación</dd></div>
            <div><dt>Domicilio</dt><dd>Pendiente de confirmación</dd></div>
            <div><dt>Contacto de privacidad</dt><dd>Pendiente de confirmar un correo electrónico</dd></div>
          </dl>
        </section>

        <section>
          <h2>2. Qué información recopilamos</h2>
          <p>Podemos recibir los siguientes datos cuando completás un formulario o iniciás una consulta comercial:</p>
          <ul>
            <li>nombre completo;</li>
            <li>correo electrónico y número de teléfono;</li>
            <li>empresa, cargo u otra información profesional que decidas brindar;</li>
            <li>respuestas sobre cómo tu empresa gestiona sus oportunidades comerciales, cuáles son sus principales dificultades y cuándo evaluaría implementar una solución;</li>
            <li>el contenido de las comunicaciones que mantengas con Flow Automation Studio.</li>
          </ul>
          <p>No solicitamos datos sensibles a través de los formularios comerciales. Te pedimos que no los incluyas en campos de respuesta abierta.</p>
        </section>

        <section>
          <h2>3. Datos recibidos desde Facebook e Instagram</h2>
          <p>
            Cuando completás un formulario instantáneo de Facebook o Instagram, Meta puede completar algunos campos con información de tu cuenta. Al enviar el formulario, Flow Automation Studio recibe los datos y las respuestas que decidiste proporcionar.
          </p>
          <p>
            Meta trata información dentro de sus propias plataformas conforme a sus términos y políticas. Esta política se aplica al uso que Flow Automation Studio hace de los datos una vez recibidos.
          </p>
        </section>

        <section>
          <h2>4. Para qué usamos los datos</h2>
          <p>Usamos la información exclusivamente para:</p>
          <ul>
            <li>responder tu consulta y contactarte por email, teléfono o WhatsApp;</li>
            <li>comprender la situación y las necesidades comerciales de tu empresa;</li>
            <li>evaluar si los servicios de Flow Automation Studio pueden resultar adecuados;</li>
            <li>coordinar una conversación y, si corresponde, preparar una propuesta;</li>
            <li>organizar y dar seguimiento a la relación comercial iniciada por vos.</li>
          </ul>
          <p>
            Enviar una consulta no implica aceptar comunicaciones publicitarias futuras ajenas a esa consulta. Si en el futuro quisiéramos enviarte ese tipo de comunicaciones, solicitaríamos el consentimiento que corresponda.
          </p>
        </section>

        <section>
          <h2>5. Herramientas y proveedores tecnológicos</h2>
          <p>
            Para gestionar consultas podrían utilizarse herramientas de CRM, automatización, correo electrónico, mensajería, alojamiento web u otros servicios tecnológicos. Esos proveedores solo deberían acceder a los datos en la medida necesaria para prestar sus servicios.
          </p>
          <p className={styles.note}>
            Antes de publicar esta política debe confirmarse qué herramientas se usan efectivamente, dónde almacenan la información y si existen transferencias internacionales de datos.
          </p>
          <p>No vendemos los datos personales recibidos mediante formularios de generación de leads.</p>
        </section>

        <section>
          <h2>6. Conservación y seguridad</h2>
          <p>
            Los datos deben conservarse únicamente durante el tiempo necesario para atender la consulta, gestionar la relación comercial y cumplir las obligaciones legales aplicables. Cuando dejan de ser necesarios, corresponde eliminarlos o anonimizararlos, salvo que exista una obligación legal de conservación.
          </p>
          <p className={styles.note}>
            Flow Automation Studio debe confirmar y documentar el plazo o criterio interno de conservación y las medidas técnicas y organizativas que aplica antes de publicar esta política.
          </p>
        </section>

        <section>
          <h2>7. Tus derechos</h2>
          <p>
            Conforme a la Ley 25.326, podés solicitar el acceso a tus datos personales y, cuando corresponda, su rectificación, actualización o supresión. El ejercicio de estos derechos es gratuito y puede requerir que acredites tu identidad.
          </p>
          <p>
            El derecho de acceso debe responderse dentro de los diez días corridos desde una solicitud fehaciente. Las solicitudes de rectificación, actualización o supresión deben atenderse dentro de los cinco días hábiles, cuando resulten procedentes.
          </p>
        </section>

        <section>
          <h2>8. Cómo ejercer tus derechos</h2>
          <p>
            Hasta que se confirme un correo específico de privacidad, podés iniciar una solicitud por WhatsApp al <a href={whatsappUrl} target="_blank" rel="noreferrer">+54 9 11 5657-8922</a>. Indicá tu nombre, el derecho que querés ejercer y un medio para responderte. Podremos pedir información adicional para verificar tu identidad.
          </p>
          <p>
            Si no recibís una respuesta adecuada, podés presentar un reclamo ante la Agencia de Acceso a la Información Pública, autoridad de aplicación de la Ley 25.326.
          </p>
        </section>

        <section>
          <h2>9. Cambios en esta política</h2>
          <p>
            Esta política puede actualizarse para reflejar cambios en las prácticas de tratamiento o en la normativa aplicable. La versión vigente estará publicada en esta página con su fecha de última actualización.
          </p>
        </section>
      </article>

      <footer className={styles.footer}>
        <span>© 2026 Flow Automation Studio</span>
        <Link href="/">Volver al sitio</Link>
      </footer>
    </main>
  )
}
