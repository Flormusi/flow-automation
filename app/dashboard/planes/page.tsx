"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Crown, Zap, Building } from "lucide-react"

const plans = [
  {
    id: "emprendedor",
    name: "Emprendedor",
    description: "Perfecto para comenzar tu automatización",
    price: 19,
    currency: "USD",
    period: "mes",
    icon: Zap,
    features: [
      "Hasta 100 automatizaciones/mes",
      "Integraciones esenciales incluidas",
      "Soporte por email",
      "Plantillas prediseñadas",
      "Dashboard básico",
    ],
    buttonText: "Actualizar Plan",
    buttonVariant: "outline" as const,
  },
  {
    id: "profesional",
    name: "Profesional",
    description: "Ideal para negocios en crecimiento",
    price: 49,
    currency: "USD",
    period: "mes",
    icon: Crown,
    popular: true,
    features: [
      "Hasta 500 automatizaciones/mes",
      "Integraciones ilimitadas",
      "Soporte prioritario",
      "IA avanzada",
      "Reportes detallados",
      "Múltiples flujos de trabajo",
      "API personalizada",
    ],
    buttonText: "Actualizar Plan",
    buttonVariant: "default" as const,
  },
  {
    id: "empresa",
    name: "Empresa",
    description: "Para equipos y múltiples ubicaciones",
    price: 149,
    currency: "USD",
    period: "mes",
    icon: Building,
    features: [
      "Automatizaciones ilimitadas",
      "Múltiples usuarios",
      "SLA garantizado",
      "Gestor de cuenta dedicado",
      "Integraciones personalizadas",
      "Onboarding personalizado",
      "Soporte 24/7",
      "Análisis avanzado",
    ],
    buttonText: "Contactar Ventas",
    buttonVariant: "outline" as const,
  },
]

const currentPlan = "trial" // This would come from user context

export default function PlanesPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Planes y Precios</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a las necesidades de tu negocio. Puedes cambiar de plan en cualquier
          momento.
        </p>
      </div>

      {/* Current Plan Status */}
      <Card className="border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-blue-900 dark:text-blue-100">Plan Actual: Prueba Gratuita</h3>
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Te quedan 10 días de prueba gratuita. Actualiza tu plan para continuar usando Flow Automation sin
                interrupciones.
              </p>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100">
              Trial
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => {
          const IconComponent = plan.icon
          const isPopular = plan.popular

          return (
            <Card
              key={plan.id}
              className={`relative hover:shadow-xl transition-shadow ${
                isPopular
                  ? "border-primary bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20 scale-105"
                  : "hover:shadow-lg"
              }`}
            >
              {isPopular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">Más Popular</Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">
                    /{plan.period} {plan.currency}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${isPopular ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""}`}
                  variant={plan.buttonVariant}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-16">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Preguntas Frecuentes sobre Planes
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">¿Puedo cambiar de plan en cualquier momento?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se aplican inmediatamente y
                se prorratea el costo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">¿Qué pasa si excedo mi límite de automatizaciones?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Te notificaremos cuando te acerques al límite. Si lo excedes, las automatizaciones se pausarán hasta el
                próximo ciclo o puedes actualizar tu plan.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">¿Ofrecen descuentos por pago anual?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Sí, ofrecemos 2 meses gratis al pagar anualmente. Contacta a nuestro equipo de ventas para más detalles
                sobre descuentos empresariales.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">¿Qué incluye el soporte dedicado?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                El soporte dedicado incluye un gestor de cuenta personal, soporte prioritario por teléfono y email, y
                sesiones de consultoría mensuales.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact Sales CTA */}
      <Card className="bg-gradient-to-r from-primary to-secondary text-white max-w-4xl mx-auto">
        <CardContent className="pt-6 text-center">
          <h3 className="text-2xl font-bold mb-2">¿Necesitas un plan personalizado?</h3>
          <p className="text-lg opacity-90 mb-6">
            Para empresas con necesidades específicas, ofrecemos planes personalizados con integraciones a medida y
            soporte especializado.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            Contactar Equipo de Ventas
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
