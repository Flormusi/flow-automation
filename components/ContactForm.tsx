"use client"
import { useState } from "react"
import type React from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const form = e.currentTarget
    const fd = new FormData(form)

    const name = String(fd.get("name") ?? "")
    const email = String(fd.get("email") ?? "")
    const message = String(fd.get("message") ?? "")

    try {
      const res = await fetch("https://flow-automation.vercel.app/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })
      const data = await res.json()
      console.log("[CONTACT FORM RESPONSE]", data)

      if (data.ok) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error("[CONTACT FORM ERROR]", err)
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="off"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="off"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          autoComplete="off"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
      </button>

      {status === "success" && (
        <p className="text-green-600 text-sm mt-2">¡Gracias! Recibimos tu mensaje y te responderemos pronto.</p>
      )}
      {status === "error" && <p className="text-red-600 text-sm mt-2">Ocurrió un error. Intenta nuevamente.</p>}
    </form>
  )
}
