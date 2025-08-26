"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, Phone, Clock, CheckCircle, AlertCircle } from "lucide-react"

const faqData = [
  {
    id: "getting-started",
    question: "¿Cómo empiezo a usar Flow Automation?",
    answer:
      "Después de registrarte, puedes comenzar con nuestro tutorial interactivo de 10 minutos. Te guiaremos paso a paso para crear tu primera automatización usando una de nuestras plantillas predefinidas. También ofrecemos una llamada de configuración gratuita de 15 minutos.",
  },
  {
    id: "integrations",
    question: "¿Qué integraciones están disponibles?",
    answer:
      "Ofrecemos más de 100 integraciones incluyendo WhatsApp Business, Gmail, Google Sheets, Shopify, WooCommerce, Calendly, Zoom, Slack, y muchas más. Si necesitas una integración específica que no tenemos, podemos desarrollarla para planes Empresa.",
  },
  {
    id: "pricing",
    question: "¿Cómo funciona la facturación?",
    answer:
      "La facturación es mensual y se basa en el número de automatizaciones ejecutadas. Tu plan se renueva automáticamente cada mes. Puedes cancelar en cualquier momento sin penalizaciones y seguir usando el servicio hasta el final del período pagado.",
  },
  {
    id: "limits",
    question: "¿Qué pasa si excedo mi límite mensual?",
    answer:
      "Te notificaremos por email cuando alcances el 80% y 95% de tu límite. Si lo excedes, las automatizaciones se pausarán automáticamente hasta el próximo ciclo de facturación, o puedes actualizar tu plan inmediatamente para continuar.",
  },
  {
    id: "data-security",
    question: "¿Mis datos están seguros?",
    answer:
      "Sí, utilizamos encriptación de grado bancario (AES-256) para proteger tus datos. Cumplimos con GDPR y SOC 2 Type II. Nunca compartimos tu información con terceros y puedes exportar o eliminar tus datos en cualquier momento.",
  },
  {
    id: "support-hours",
    question: "¿Cuáles son los horarios de soporte?",
    answer:
      "El soporte por chat está disponible de lunes a viernes de 9:00 AM a 6:00 PM (hora de México). Los planes Profesional y Empresa tienen soporte prioritario con tiempos de respuesta más rápidos. El plan Empresa incluye soporte 24/7.",
  },
  {
    id: "customization",
    question: "¿Puedo personalizar las automatizaciones?",
    answer:
      "Absolutamente. Aunque ofrecemos plantillas predefinidas para comenzar rápidamente, puedes personalizar completamente cada automatización. Los planes Profesional y Empresa incluyen acceso a nuestro constructor visual avanzado y API personalizada.",
  },
  {
    id: "trial",
    question: "¿Qué incluye la prueba gratuita?",
    answer:
      "La prueba gratuita de 14 días incluye hasta 25 automatizaciones, acceso a integraciones esenciales, plantillas predefinidas, soporte por chat, tutorial interactivo y configuración guiada. No se requiere tarjeta de crédito para comenzar.",
  },
]

export default function SoportePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Centro de Soporte</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Encuentra respuestas a tus preguntas o contacta a nuestro equipo de soporte para obtener ayuda personalizada.
        </p>
      </div>

      {/* Support Status */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Todos los sistemas operativos</p>
                <p className="text-sm text-muted-foreground">Última actualización: hace 2 min</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Tiempo de respuesta promedio</p>
                <p className="text-sm text-muted-foreground">&lt; 2 horas (horario laboral)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <p className="font-semibold text-foreground">Chat de soporte</p>
                <p className="text-sm text-muted-foreground">Lun-Vie 9:00-18:00 (MX)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* FAQ Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Preguntas Frecuentes</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Encuentra respuestas rápidas a las preguntas más comunes sobre Flow Automation.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Form */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contactar Soporte</h2>
            <p className="text-gray-600 dark:text-gray-400">
              ¿No encontraste lo que buscabas? Envíanos un mensaje y te responderemos lo antes posible.
            </p>
          </div>

          {isSubmitted ? (
            <Card className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
              <CardContent className="pt-6">
                <div className="text-center space-y-3">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-semibold text-green-900 dark:text-green-100">¡Mensaje enviado!</h3>
                  <p className="text-sm text-green-700 dark:text-green-300">
                    Hemos recibido tu mensaje y te responderemos dentro de las próximas 2 horas durante horario laboral.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    Enviar otro mensaje
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Asunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="¿En qué podemos ayudarte?"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe tu consulta o problema en detalle..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Chat Support Placeholder */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Chat de Soporte en Vivo</h3>
                <p className="text-sm text-muted-foreground">
                  Habla directamente con nuestro equipo de soporte (próximamente)
                </p>
              </div>
            </div>
            <Badge variant="secondary">Próximamente</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-3">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <CardTitle className="text-lg">Documentación</CardTitle>
            <CardDescription>Guías detalladas y tutoriales paso a paso</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-transparent">
              Ver Documentación
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-3">
              <Phone className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-lg">Llamada de Configuración</CardTitle>
            <CardDescription>Sesión gratuita de 15 minutos para nuevos usuarios</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-transparent">
              Agendar Llamada
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-3">
              <AlertCircle className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <CardTitle className="text-lg">Estado del Sistema</CardTitle>
            <CardDescription>Monitorea el estado de nuestros servicios</CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="outline" className="w-full bg-transparent">
              Ver Estado
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
