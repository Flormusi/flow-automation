"use client"
import { useState } from "react"
import type React from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setError(null)

    const form = e.currentTarget
    const fd = new FormData(form)

    // ✅ Honeypot robusto (no lo autocompleta el navegador)
    const hp = String(fd.get("hp") || "")
    if (hp.trim() !== "") {
      setStatus("ok")
      form.reset()
      return // corta silencioso: spam bot/autofill indebido
    }

    const payload = {
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      const json = await res.json()
      if (!res.ok || !json.ok) throw new Error(json.error || "Error")
      setStatus("ok")
      form.reset()
    } catch (err: any) {
      setStatus("error")
      setError(err?.message ?? "Error desconocido")
    }
  }

  return (
    <form onSubmit={onSubmit} className="max-w-xl space-y-4">
      {/* Honeypot oculto, fuera del viewport, sin autofill */}
      <div
        style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
        aria-hidden="true"
      >
        <label htmlFor="hp">Dejar en blanco</label>
        <input id="hp" name="hp" type="text" autoComplete="new-password" tabIndex={-1} defaultValue="" />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="name">
          Nombre
        </label>
        <input id="name" name="name" required autoComplete="name" className="mt-1 w-full rounded-md border p-2" />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-md border p-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium" htmlFor="message">
          Mensaje
        </label>
        <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-md border p-2" />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
      >
        {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
      </button>

      {status === "ok" && <p className="text-green-600">¡Gracias! Recibimos tu mensaje y te responderemos pronto.</p>}
      {status === "error" && <p className="text-red-600">Hubo un problema: {error}</p>}
    </form>
  )
}
