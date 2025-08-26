"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutDashboard, Bot, CreditCard, HelpCircle, LogOut, Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const FlowerLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <div className={`${className} relative`}>
    <svg viewBox="0 0 32 32" className="w-full h-full">
      <circle cx="16" cy="16" r="3" className="fill-primary" />
      <circle cx="16" cy="8" r="2.5" className="fill-secondary opacity-80" />
      <circle cx="24" cy="16" r="2.5" className="fill-accent opacity-80" />
      <circle cx="16" cy="24" r="2.5" className="fill-secondary opacity-80" />
      <circle cx="8" cy="16" r="2.5" className="fill-accent opacity-80" />
      <circle cx="22" cy="10" r="2" className="fill-primary opacity-60" />
      <circle cx="22" cy="22" r="2" className="fill-primary opacity-60" />
      <circle cx="10" cy="22" r="2" className="fill-secondary opacity-60" />
      <circle cx="10" cy="10" r="2" className="fill-secondary opacity-60" />
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

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Automatizaciones",
    href: "/dashboard/automatizaciones",
    icon: Bot,
  },
  {
    title: "Planes",
    href: "/dashboard/planes",
    icon: CreditCard,
  },
  {
    title: "Soporte",
    href: "/dashboard/soporte",
    icon: HelpCircle,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-[#F5F7FA] dark:bg-gray-900">
      {/* Navbar */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and mobile menu button */}
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="lg:hidden mr-2" onClick={() => setSidebarOpen(!sidebarOpen)}>
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
              <div className="flex items-center space-x-2">
                <FlowerLogo />
                <span className="text-xl font-bold text-foreground">Flow Automation</span>
              </div>
            </div>

            {/* User menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/avatars/01.png" alt="Usuario" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Juan Pérez</p>
                    <p className="text-xs leading-none text-muted-foreground">juan@ejemplo.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Cerrar sesión</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto",
            sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
          )}
          style={{ top: "64px" }}
        >
          <div className="flex flex-col h-full">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {sidebarItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white",
                      )}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <item.icon
                        className={cn(
                          "mr-3 flex-shrink-0 h-5 w-5",
                          isActive ? "text-primary-foreground" : "text-gray-400 group-hover:text-gray-500",
                        )}
                      />
                      {item.title}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-gray-600 bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <main className="flex-1 lg:ml-64">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
          </div>
        </main>
      </div>
    </div>
  )
}
