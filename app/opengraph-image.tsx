import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const alt = "Tus procesos crecieron. Tu forma de trabajar, no."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpenGraphImage() {
  const [geistRegular, geistBold] = await Promise.all([
    readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf")),
    readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-Bold.ttf")),
  ])

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
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 68, height: 68, display: "flex", flexShrink: 0 }}>
            <svg width="68" height="68" viewBox="0 0 64 64" fill="none" aria-hidden="true">
              <rect width="64" height="64" rx="16" fill="#081A3A" />
              <path d="M15 17.5C15 15.567 16.567 14 18.5 14H49L42.3 20.7C41.269 21.731 39.87 22.31 38.412 22.31H15V17.5Z" fill="#3B82F6" />
              <path d="M15 28.1H39.9L33.4 34.6C32.369 35.631 30.97 36.21 29.512 36.21H15V28.1Z" fill="#2563EB" />
              <path d="M15 42H30.8L24.3 48.5C23.269 49.531 21.87 50.11 20.412 50.11H18.5C16.567 50.11 15 48.543 15 46.61V42Z" fill="#60A5FA" />
            </svg>
          </div>
          <div style={{ width: 340, display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 27, fontWeight: 750 }}>Flow Automation</span>
            <span style={{ color: "#60a5fa", fontSize: 16, letterSpacing: 5, textTransform: "uppercase" }}>Studio</span>
          </div>
        </div>

        <div style={{ width: 1040, display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#60a5fa", fontSize: 22, fontWeight: 700, marginBottom: 22 }}>
            Automatización de procesos para empresas
          </span>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", fontSize: 64, lineHeight: 1.02, fontWeight: 700, letterSpacing: -2.5 }}>
            <div style={{ display: "flex" }}>Tus procesos crecieron.</div>
            <div style={{ display: "flex" }}>Tu forma de trabajar, no.</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistBold, weight: 700, style: "normal" },
      ],
    },
  )
}
