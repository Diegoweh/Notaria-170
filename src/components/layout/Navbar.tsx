"use client"

import { useState } from "react"
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    // Si quieres más contraste global, cambia bg-blue-300 -> bg-blue-400 o bg-blue-500
    <nav className="bg-blue-200 shadow-md">
      {/* <nav className="bg-blue-400 shadow-md"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logoHumaran.png"
                alt="Humarán — Notaría Pública 170"
                width={160}
                height={56}
                priority
                className="
                  h-14 w-auto
                  /* Contorno para que las letras blancas se lean en fondo claro */
                  drop-shadow-[0_1px_1px_rgba(0,0,0,0.65)]
                  md:drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]
                "
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-12 flex items-center space-x-8">
              <a
                href="/about"
                className="text-slate-800 hover:text-slate-950 px-3 py-2 text-md font-medium transition-colors"
              >
                Notaría
              </a>
              <a
                href="/bags"
                className="text-slate-800 hover:text-slate-950 px-3 py-2 text-md font-medium transition-colors"
              >
                Servicios
              </a>
              <a
                href="/textiles"
                className="text-slate-800 hover:text-slate-950 px-3 py-2 text-md font-medium transition-colors"
              >
                Notario
              </a>
              <a
                href="/contacto"
                className="text-slate-800 hover:text-slate-950 px-3 py-2 text-md font-medium transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={toggleMenu} className="text-slate-800 hover:text-slate-950">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-300 border-t border-blue-200">
              <a href="/about" className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-white/40 rounded-md">
                Notaría
              </a>
              <a href="/bags" className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-white/40 rounded-md">
                Servicios
              </a>
              <a href="/textiles" className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-white/40 rounded-md">
                Notario
              </a>
              <a href="/contacto" className="block px-3 py-2 text-base font-medium text-slate-800 hover:bg-white/40 rounded-md">
                Contacto
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
