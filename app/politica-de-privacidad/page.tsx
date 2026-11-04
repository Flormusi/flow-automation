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

        <section>
          <h2>1. Responsable del tratamiento</h2>
          <p>
            Los datos son tratados por <strong>María Florencia Musitani</strong>, titular de <strong>Flow Automation Studio</strong>, estudio de automatización de procesos que opera en Argentina.
          </p>
          <dl className={styles.details}>
            <div><dt>Nombre comercial</dt><dd>Flow Automation Studio</dd></div>
            <div><dt>Responsable</dt><dd>María Florencia Musitani</dd></div>
            <div><dt>Domicilio</dt><dd>Aristóteles 1824</dd></div>
            <div><dt>Contacto de privacidad</dt><dd><a href="mailto:flowautomationstudio@gmail.com">flowautomationstudio@gmail.com</a></dd></div>
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
            Flow Automation Studio utiliza servicios tecnológicos para recibir, gestionar y responder consultas comerciales.
          </p>
          <p>
            Los datos proporcionados mediante formularios de Facebook e Instagram son procesados inicialmente a través de las plataformas de Meta.
          </p>
          <p>
            Para gestionar las consultas, Flow Automation Studio podrá utilizar herramientas de correo electrónico, CRM y automatización comercial, según las necesidades operativas.
          </p>
          <p>
            Cuando corresponda, estos servicios podrán implicar el almacenamiento o tratamiento de información en servidores ubicados fuera de Argentina, sujeto a las garantías legales aplicables.
          </p>
          <p>Flow Automation Studio no vende los datos personales de sus potenciales clientes a terceros.</p>
        </section>

        <section>
          <h2>6. Conservación y seguridad</h2>
          <p>
            Flow Automation Studio conservará los datos personales de los interesados durante un plazo máximo de 12 meses desde la última interacción comercial, salvo que exista una relación contractual vigente, una obligación legal de conservación o una solicitud de eliminación que corresponda atender antes.
          </p>
          <p>
            Se aplicarán medidas razonables de seguridad para proteger la información contra accesos no autorizados, pérdida, alteración o divulgación indebida, incluyendo controles de acceso a las herramientas utilizadas para gestionar los contactos.
          </p>
          <p>
            Una vez cumplida la finalidad del tratamiento y los plazos aplicables, los datos serán eliminados o anonimizados.
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
            Podés enviar tu solicitud a <a href="mailto:flowautomationstudio@gmail.com">flowautomationstudio@gmail.com</a>. Indicá tu nombre, el derecho que querés ejercer y un medio para responderte. Podremos pedir información adicional para verificar tu identidad.
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
