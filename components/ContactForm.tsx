"use client"
import { useState } from "react"
import type React from "react"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")

    const fd = new FormData(e.currentTarget)

    const payload = {
      name: String(fd.get("user_name") || "").trim(),
      email: String(fd.get("user_email") || "").trim(),
      message: String(fd.get("user_message") || "").trim(),
    }

    console.log("[v0] ContactForm payload:", payload)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      console.log("[v0] ContactForm response status:", res.status)
      const responseData = await res.json()
      console.log("[v0] ContactForm response data:", responseData)

      if (res.ok) {
        setStatus("success")
        e.currentTarget.reset()
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.log("[v0] ContactForm error:", err)
      setStatus("error")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="user_name" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          id="user_name"
          name="user_name"
          type="text"
          required
          autoComplete="off"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="user_email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="user_email"
          name="user_email"
          type="email"
          required
          autoComplete="off"
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="user_message" className="block text-sm font-medium">
          Mensaje
        </label>
        <textarea
          id="user_message"
          name="user_message"
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
