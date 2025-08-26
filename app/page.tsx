import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Bot, BarChart3, Star, Menu, Workflow, Sparkles, Users, Monitor } from "lucide-react"
import Link from "next/link"

const FlowerLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} relative`}>
    <svg viewBox="0 0 32 32" className="w-full h-full">
      {/* Center node */}
      <circle cx="16" cy="16" r="3" className="fill-primary" />

      {/* Petal nodes arranged in flower pattern */}
      <circle cx="16" cy="8" r="2.5" className="fill-secondary opacity-80" />
      <circle cx="24" cy="16" r="2.5" className="fill-accent opacity-80" />
      <circle cx="16" cy="24" r="2.5" className="fill-secondary opacity-80" />
      <circle cx="8" cy="16" r="2.5" className="fill-accent opacity-80" />
      <circle cx="22" cy="10" r="2" className="fill-primary opacity-60" />
      <circle cx="22" cy="22" r="2" className="fill-primary opacity-60" />
      <circle cx="10" cy="22" r="2" className="fill-secondary opacity-60" />
      <circle cx="10" cy="10" r="2" className="fill-secondary opacity-60" />

      {/* Connection lines */}
      <line x1="16" y1="16" x2="16" y2="8" className="stroke-primary stroke-1 opacity-40" />
      <line x1="16" y1="16" x2="24" y2="16" className="stroke-secondary stroke-1 opacity-40" />
      <line x1="16" y1="16" x2="16" y2="24" className="stroke-primary stroke-1 opacity-40" />
      <line x1="16" y1="16" x2="8" y2="16" className="stroke-secondary stroke-1 opacity-40" />
      <line x1="16" y1="16" x2="22" y2="10" className="stroke-accent stroke-1 opacity-30" />
      <line x1="16" y1="16" x2="22" y2="22" className="stroke-accent stroke-1 opacity-30" />
      <line x1="16" y1="16" x2="10" y2="22" className="stroke-primary stroke-1 opacity-30" />
      <line x1="16" y1="16" x2="10" y2="10" className="stroke-primary stroke-1 opacity-30" />
    </svg>
  </div>
)

export default function FlowAutomationLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center space-x-2">
                  <FlowerLogo />
                  <span className="text-xl font-bold text-foreground">Flow Automation</span>
                </div>
              </div>
            </div>

            <nav className="hidden md:block">
              <div className="ml-16 flex items-baseline space-x-8">
                <Link
                  href="#features"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Características
                </Link>
                <Link
                  href="#pricing"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Precios
                </Link>
                <Link
                  href="#testimonials"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Testimonios
                </Link>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contacto
                </Link>
              </div>
            </nav>

            <div className="hidden md:block">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Comenzar Gratis</Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm">
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-background via-amber-50/30 to-orange-50/30 dark:from-background dark:via-amber-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
              Automatiza tu Negocio con
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Inteligencia Artificial
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
              Flow Automation ayuda a pequeños negocios y emprendedores a automatizar tareas repetitivas con IA,
              ahorrando hasta 20 horas semanales para enfocarse en hacer crecer su negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                Prueba Gratuita 14 Días
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg bg-transparent border-secondary/30 hover:bg-secondary/10 text-secondary hover:text-secondary"
              >
                Ver Demo
              </Button>
            </div>
            <div className="mt-6 max-w-3xl mx-auto">
              <p className="text-sm text-muted-foreground mb-3">
                Sin tarjeta de crédito • Prueba gratuita 14 días • Cancela cuando quieras
              </p>
              <div className="bg-card/50 border border-border/50 rounded-lg p-4 text-left">
                <h3 className="font-semibold text-foreground mb-2 text-center">✨ Tu prueba gratuita incluye:</h3>
                <div className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <span>25 automatizaciones/mes</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <span>Integraciones esenciales</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <span>Plantillas predefinidas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <span>Soporte por chat</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <span>Tutorial interactivo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2 flex-shrink-0" />
                    <span>Configuración guiada</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Todo lo que Necesitas para Automatizar con IA
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Herramientas inteligentes diseñadas específicamente para pequeños negocios y emprendedores.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:border-primary/30 transition-colors hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Automatización con IA</CardTitle>
                <CardDescription>
                  Automatiza tareas repetitivas como respuestas de email, seguimiento de clientes y gestión de
                  inventario con inteligencia artificial.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-secondary/30 transition-colors hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Workflow className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Flujos Inteligentes</CardTitle>
                <CardDescription>
                  Crea flujos de trabajo personalizados que se adaptan a tu negocio: desde captura de leads hasta
                  facturación automática.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-accent/30 transition-colors hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Insights Inteligentes</CardTitle>
                <CardDescription>
                  Obtén reportes automáticos sobre el rendimiento de tu negocio y recomendaciones de IA para optimizar
                  procesos.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-primary/30 transition-colors hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">Configuración Fácil</CardTitle>
                <CardDescription>
                  Sin código ni conocimientos técnicos. Configura automatizaciones en minutos con nuestro asistente de
                  IA.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-secondary/30 transition-colors hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl">Integraciones Populares</CardTitle>
                <CardDescription>
                  Conecta con WhatsApp, Gmail, Google Sheets, Shopify, y más de 100 herramientas que ya usas en tu
                  negocio.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:border-accent/30 transition-colors hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-xl">Soporte en Español</CardTitle>
                <CardDescription>
                  Equipo de soporte dedicado que entiende las necesidades de pequeños negocios en Latinoamérica.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-amber-50/30 to-orange-50/30 dark:from-amber-950/10 dark:to-orange-950/10"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Más de 5,000 Pequeños Negocios Confían en Nosotros
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Descubre cómo Flow Automation está transformando negocios en toda Latinoamérica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 text-pretty">
                  "Flow Automation me ayudó a automatizar el seguimiento de clientes. Ahora tengo 15 horas extra a la
                  semana para enfocarme en ventas."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">María Rodríguez</p>
                    <p className="text-sm text-muted-foreground">Fundadora, Boutique Luna</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 text-pretty">
                  "La automatización de facturas me ahorra 10 horas al mes. El ROI fue inmediato y el soporte es
                  excelente."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary font-semibold">CG</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Carlos Gutiérrez</p>
                    <p className="text-sm text-muted-foreground">CEO, Servicios TechMéxico</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-4 text-pretty">
                  "Implementar Flow Automation fue súper fácil. En una semana ya tenía automatizado todo mi proceso de
                  ventas por WhatsApp."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-accent font-semibold">AS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground">Ana Silva</p>
                    <p className="text-sm text-muted-foreground">Emprendedora, Repostería Dulce Ana</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
              Precios Transparentes para Cada Etapa
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Planes diseñados para crecer contigo. Cambia de plan cuando lo necesites.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Emprendedor</CardTitle>
                <CardDescription>Perfecto para comenzar tu automatización</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">$19</span>
                  <span className="text-muted-foreground">/mes USD</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Hasta 100 automatizaciones/mes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Integraciones esenciales incluidas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Soporte por email</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Plantillas prediseñadas</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-transparent border-secondary/30 hover:bg-secondary/10 text-secondary"
                  variant="outline"
                >
                  Comenzar Gratis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary bg-gradient-to-br from-amber-50/50 to-orange-50/50 dark:from-amber-950/20 dark:to-orange-950/20 relative hover:shadow-xl transition-shadow">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Más Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Profesional</CardTitle>
                <CardDescription>Ideal para negocios en crecimiento</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">$49</span>
                  <span className="text-muted-foreground">/mes USD</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Hasta 500 automatizaciones/mes</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Integraciones ilimitadas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Soporte prioritario</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">IA avanzada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Reportes detallados</span>
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Comenzar Gratis
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">Empresa</CardTitle>
                <CardDescription>Para equipos y múltiples ubicaciones</CardDescription>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-foreground">$149</span>
                  <span className="text-muted-foreground">/mes USD</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Automatizaciones ilimitadas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Múltiples usuarios</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">SLA garantizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Gestor de cuenta dedicado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Integraciones personalizadas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-secondary mr-2" />
                    <span className="text-sm">Onboarding personalizado</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-transparent border-primary/30 hover:bg-primary/10 text-primary hover:text-primary"
                  variant="outline"
                >
                  Agendar Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="py-20 bg-[#F5F7FA] dark:bg-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Servicios Adicionales</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Además de automatizar tus procesos con IA, te ayudamos a potenciar tu presencia digital.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-border hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-800 dark:to-amber-950/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2">Creación y mejora de sitios web</CardTitle>
                <CardDescription className="text-lg">
                  Diseñamos o actualizamos tu página web para que tu negocio tenga una imagen profesional y conectada
                  con tus automatizaciones.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg">
                  Solicitar cotización
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">¿Listo para Automatizar tu Negocio?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty opacity-90">
            Únete a miles de emprendedores que ya transformaron sus negocios con Flow Automation. Comienza tu prueba
            gratuita hoy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8 py-3 text-lg bg-white text-primary hover:bg-gray-100">
              Prueba Gratuita 14 Días
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-white/20 text-white hover:bg-white/10 bg-transparent"
            >
              Agendar Demo
            </Button>
          </div>
          <div className="mt-6 max-w-2xl mx-auto">
            <p className="text-sm opacity-75 mb-3">
              Sin tarjeta de crédito • Prueba gratuita 14 días • Cancela cuando quieras
            </p>
            <p className="text-sm opacity-90">
              ✓ 25 automatizaciones incluidas ✓ Configuración guiada ✓ Soporte en español
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <FlowerLogo className="w-8 h-8" />
                <span className="text-xl font-bold text-white">Flow Automation</span>
              </div>
              <p className="text-sm text-gray-400 mb-4">
                Automatiza tu negocio con inteligencia artificial y enfócate en lo que realmente importa: hacer crecer
                tu empresa.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Producto</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Plantillas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Seguridad
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Casos de Éxito
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-3">Soporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Documentación
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Tutoriales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                    Política de Privacidad
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© 2024 Flow Automation. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59H3.667v8.59zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
