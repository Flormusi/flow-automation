export default function ContactForm() {
  return (
    <form action="https://flow-automation.vercel.app/api/contact" method="post" className="space-y-4 max-w-lg mx-auto">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nombre
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Tu nombre"
          required
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
          placeholder="Email"
          required
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
          placeholder="Mensaje"
          required
          className="w-full rounded-md border px-3 py-2"
        />
      </div>

      <button type="submit" className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
        Enviar
      </button>
    </form>
  )
}
