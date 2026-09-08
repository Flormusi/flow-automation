import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import Script from "next/script"
import "./globals.css"

const metaPixelId = "1394376345398609"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://flowautomation.com.ar"),
  title: {
    default: "Flow Automation Studio | Sistemas simples para negocios",
    template: "%s | Flow Automation Studio",
  },
  description: "Vemos dónde tu negocio pierde tiempo, dinero o clientes y creamos una solución simple para resolverlo.",
  applicationName: "Flow Automation Studio",
  keywords: ["automatización de negocios", "sistemas a medida", "mejora de procesos", "Flow Automation Studio"],
  authors: [{ name: "Flow Automation Studio" }],
  creator: "Flow Automation Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Flow Automation Studio",
    title: "Flow Automation Studio | Sistemas simples para negocios",
    description: "Vemos dónde tu negocio pierde tiempo, dinero o clientes y creamos una solución simple para resolverlo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Automation Studio | Sistemas simples para negocios",
    description: "Vemos dónde tu negocio pierde tiempo, dinero o clientes y creamos una solución simple para resolverlo.",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={GeistSans.variable}>
        {children}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  )
}
