import { ImageResponse } from "next/og"

export const alt = "Flow Automation Studio — Sistemas simples para negocios"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#071426",
          color: "#eef4ff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 68,
              height: 68,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 15,
              background: "#2563eb",
              color: "white",
              fontSize: 42,
              fontWeight: 800,
            }}
          >
            F
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 27, fontWeight: 750 }}>Flow Automation</span>
            <span style={{ color: "#60a5fa", fontSize: 16, letterSpacing: 5, textTransform: "uppercase" }}>Studio</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <span style={{ color: "#60a5fa", fontSize: 22, fontWeight: 700, marginBottom: 20 }}>
            Menos tareas manuales. Más tiempo para tu negocio.
          </span>
          <span style={{ fontSize: 64, lineHeight: 1.05, fontWeight: 760, letterSpacing: -2 }}>
            Tu negocio necesita funcionar mejor.
          </span>
        </div>
      </div>
    ),
    size,
  )
}
