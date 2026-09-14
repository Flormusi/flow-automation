import type { Metadata } from "next"
import GeroTurnos from "./turnos"

export const metadata: Metadata = {
  title: "Mis turnos | Gerónimo Jorge",
  robots: { index: false, follow: false },
}

export default function GeroTurnosPage() {
  return <GeroTurnos />
}
