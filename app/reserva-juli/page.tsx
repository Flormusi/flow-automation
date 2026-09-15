import type { Metadata } from "next"
import ReservaJuli from "./reserva-juli"

export const metadata: Metadata = {
  title: "Reservar un turno | Renova Terapia Manual",
  description: "Elegí un horario para tu sesión de terapia manual en Caseros.",
  robots: { index: false, follow: false },
}

export default function ReservaJuliPage() {
  return <ReservaJuli />
}
