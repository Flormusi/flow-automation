import type { Metadata } from "next"
import ReservaGero from "./reserva-gero"

export const metadata: Metadata = {
  title: "Reservar un turno con Gerónimo",
  description: "Elegí un horario disponible para tu sesión con Gerónimo.",
  robots: { index: false, follow: false },
}

export default function ReservaGeroPage() {
  return <ReservaGero />
}
