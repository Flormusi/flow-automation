"use client"
import { useState } from "react"
import type React from "react"

import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setError(null)

    const form = e.currentTarget
    const formData = new FormData(form)

    // Honeypot anti-spam (campo oculto en el form)
    if (formData.get("company")) {
      setStatus("ok")
      form.reset()
      return
    }

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
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
      <div className="hidden">
        {/* Honeypot (dejar vacío) */}
        <input name="company" autoComplete="off" />
      </div>
      <div>
        <label className="block text-sm font-medium">Nombre</label>
        <input name="name" className="mt-1 w-full rounded-md border p-2" placeholder="Tu nombre completo" required />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          className="mt-1 w-full rounded-md border p-2"
          placeholder="tu@email.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Mensaje</label>
        <textarea
          name="message"
          rows={4}
          className="mt-1 w-full rounded-md border p-2"
          placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
          required
        />
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-60"
        size="lg"
      >
        {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {status === "ok" && <p className="text-green-600">¡Gracias! Recibimos tu mensaje.</p>}
      {status === "error" && <p className="text-red-600">Hubo un problema: {error}</p>}
    </form>
  )
}
