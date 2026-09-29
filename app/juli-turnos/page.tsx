import type { Metadata } from "next"
import JuliTurnos from "./turnos"

export const metadata: Metadata = { title: "Mis turnos | Renova Terapia Manual", robots: { index: false, follow: false } }

export default function JuliTurnosPage() { return <JuliTurnos /> }
