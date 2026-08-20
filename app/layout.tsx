import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import "./globals.css"

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
  return <html lang="es"><body className={GeistSans.variable}>{children}</body></html>
}
