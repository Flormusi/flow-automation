"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MessageSquare, ShoppingCart, Calendar, Users, Zap, Clock, CheckCircle } from "lucide-react"

interface AutomationTemplate {
  id: string
  title: string
  description: string
  extendedDescription: string
  icon: React.ComponentType<{ className?: string }>
  category: string
  popular?: boolean
  fields: {
    name: string
    label: string
    type: string
    placeholder: string
    required: boolean
  }[]
}

const automationTemplates: AutomationTemplate[] = [
  {
    id: "whatsapp-leads",
    title: "Capturar leads de WhatsApp",
    description: "Guarda automáticamente los contactos que te escriben por WhatsApp en Google Sheets.",
    extendedDescription:
      "Esta automatización captura todos los nuevos contactos que te escriben por WhatsApp Business y los guarda automáticamente en una hoja de Google Sheets con información como nombre, número, mensaje inicial y fecha de contacto.",
    icon: MessageSquare,
    category: "Ventas",
    popular: true,
    fields: [
      {
        name: "sheetId",
        label: "ID de Google Sheet",
        type: "text",
        placeholder: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
        required: true,
      },
      { name: "sheetName", label: "Nombre de la hoja", type: "text", placeholder: "Leads", required: true },
    ],
  },
  {
    id: "email-followup",
    title: "Seguimiento automático por email",
    description: "Envía emails de seguimiento automáticos a clientes potenciales después de 3 días.",
    extendedDescription:
      "Configura una secuencia de emails automáticos que se envían a tus leads después de un tiempo determinado. Perfecto para nutrir clientes potenciales sin esfuerzo manual.",
    icon: Mail,
    category: "Marketing",
    fields: [
      { name: "fromEmail", label: "Email remitente", type: "email", placeholder: "tu@empresa.com", required: true },
      {
        name: "subject",
        label: "Asunto del email",
        type: "text",
        placeholder: "¿Sigues interesado en nuestros servicios?",
        required: true,
      },
      {
        name: "template",
        label: "Plantilla del mensaje",
        type: "textarea",
        placeholder: "Hola {nombre}, quería hacer seguimiento...",
        required: true,
      },
    ],
  },
  {
    id: "inventory-alerts",
    title: "Alertas de inventario bajo",
    description: "Recibe notificaciones cuando el stock de tus productos esté por agotarse.",
    extendedDescription:
      "Monitorea automáticamente tu inventario y recibe alertas por WhatsApp o email cuando algún producto tenga stock bajo, evitando quedarte sin mercancía.",
    icon: ShoppingCart,
    category: "Inventario",
    fields: [
      { name: "minStock", label: "Stock mínimo", type: "number", placeholder: "5", required: true },
      {
        name: "notificationMethod",
        label: "Método de notificación",
        type: "select",
        placeholder: "WhatsApp",
        required: true,
      },
    ],
  },
  {
    id: "appointment-reminders",
    title: "Recordatorios de citas",
    description: "Envía recordatorios automáticos a tus clientes 24h antes de su cita.",
    extendedDescription:
      "Reduce las ausencias enviando recordatorios automáticos por WhatsApp o SMS a tus clientes antes de sus citas programadas.",
    icon: Calendar,
    category: "Servicios",
    fields: [
      { name: "reminderTime", label: "Horas antes de recordar", type: "number", placeholder: "24", required: true },
      {
        name: "message",
        label: "Mensaje del recordatorio",
        type: "textarea",
        placeholder: "Hola {nombre}, te recordamos tu cita mañana a las {hora}",
        required: true,
      },
    ],
  },
  {
    id: "customer-feedback",
    title: "Recolección de feedback",
    description: "Solicita automáticamente reseñas a clientes después de una compra o servicio.",
    extendedDescription:
      "Mejora tu reputación online solicitando automáticamente reseñas y feedback a tus clientes satisfechos después de completar una transacción.",
    icon: Users,
    category: "Atención al Cliente",
    fields: [
      { name: "delayDays", label: "Días después del servicio", type: "number", placeholder: "3", required: true },
      {
        name: "reviewLink",
        label: "Link de reseñas",
        type: "url",
        placeholder: "https://g.page/r/...",
        required: true,
      },
    ],
  },
  {
    id: "social-media-post",
    title: "Publicaciones automáticas",
    description: "Programa y publica contenido automáticamente en tus redes sociales.",
    extendedDescription:
      "Mantén activas tus redes sociales con publicaciones programadas que se publican automáticamente según tu calendario de contenido.",
    icon: Zap,
    category: "Marketing",
    fields: [
      { name: "platforms", label: "Plataformas", type: "text", placeholder: "Facebook, Instagram", required: true },
      {
        name: "schedule",
        label: "Horario de publicación",
        type: "text",
        placeholder: "Lunes, Miércoles, Viernes 10:00 AM",
        required: true,
      },
    ],
  },
]

export default function AutomatizacionesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<AutomationTemplate | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeAutomations, setActiveAutomations] = useState<string[]>(["whatsapp-leads", "email-followup"])
  const [formData, setFormData] = useState<Record<string, string>>({})

  const handleActivateClick = (template: AutomationTemplate) => {
    setSelectedTemplate(template)
    setFormData({})
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    if (selectedTemplate) {
      setActiveAutomations([...activeAutomations, selectedTemplate.id])
      setIsModalOpen(false)
      setSelectedTemplate(null)
    }
  }

  const isTrialLimitReached = activeAutomations.length >= 2

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Automatizaciones</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Elige entre nuestras plantillas predefinidas para automatizar tu negocio
          </p>
        </div>
        <Badge variant="secondary" className="text-sm">
          {activeAutomations.length}/2 activas (Trial)
        </Badge>
      </div>

      {/* Trial Limit Warning */}
      {isTrialLimitReached && (
        <Card className="border-yellow-200 bg-yellow-50 dark:border-yellow-800 dark:bg-yellow-900/20">
          <CardContent className="pt-6">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-600" />
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Has alcanzado el límite de 2 automatizaciones en tu plan Trial.
                <Button variant="link" className="p-0 h-auto text-yellow-800 dark:text-yellow-200 underline ml-1">
                  Actualiza tu plan
                </Button>{" "}
                para activar más automatizaciones.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Automations */}
      {activeAutomations.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Automatizaciones Activas</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {activeAutomations.map((id) => {
              const template = automationTemplates.find((t) => t.id === id)
              if (!template) return null

              return (
                <Card key={id} className="border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center">
                          <template.icon className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{template.title}</CardTitle>
                          <Badge variant="outline" className="text-xs border-green-300 text-green-700">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Activa
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{template.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Available Templates */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Plantillas Disponibles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationTemplates.map((template) => {
            const isActive = activeAutomations.includes(template.id)

            return (
              <Card key={template.id} className={`hover:shadow-lg transition-shadow ${isActive ? "opacity-50" : ""}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <template.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-2">
                      {template.popular && (
                        <Badge variant="secondary" className="text-xs">
                          Popular
                        </Badge>
                      )}
                      <Badge variant="outline" className="text-xs">
                        {template.category}
                      </Badge>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="w-full"
                    onClick={() => handleActivateClick(template)}
                    disabled={isActive || (isTrialLimitReached && !isActive)}
                  >
                    {isActive ? "Ya Activada" : "Activar"}
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Configuration Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Configurar: {selectedTemplate?.title}</DialogTitle>
            <DialogDescription>{selectedTemplate?.extendedDescription}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {selectedTemplate?.fields.map((field) => (
              <div key={field.name} className="space-y-2">
                <Label htmlFor={field.name}>
                  {field.label} {field.required && <span className="text-red-500">*</span>}
                </Label>
                {field.type === "textarea" ? (
                  <Textarea
                    id={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  />
                ) : (
                  <Input
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  />
                )}
              </div>
            ))}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleConfirm}>Confirmar y Activar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
