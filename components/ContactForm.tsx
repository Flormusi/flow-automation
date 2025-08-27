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
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
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
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Nombre</label>
        <input
          name="name"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Tu nombre completo"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
        <input
          type="email"
          name="email"
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="tu@email.com"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
        <textarea
          name="message"
          rows={4}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
          required
        />
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground disabled:opacity-60"
        size="lg"
      >
        {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {status === "ok" && (
        <p className="text-secondary text-center font-medium">
          ¡Gracias! Recibimos tu mensaje y te responderemos pronto.
        </p>
      )}
      {status === "error" && <p className="text-red-600 text-center">Hubo un problema: {error}</p>}
    </form>
  )
}
