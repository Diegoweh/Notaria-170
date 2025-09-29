"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-slate-900 shadow-xl border-b border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-flex items-center group">
              <Image
                src="/logoHumaran.png"
                alt="Humarán — Notaría Pública 170"
                width={180}
                height={64}
                priority
                className="
                  h-16 w-auto transition-all duration-300
                  group-hover:scale-105
                  drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]
                "
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              <Link
                href="#notaria"
                className="text-slate-200 hover:text-white px-4 py-2 text-sm font-semibold 
                         transition-all duration-200 rounded-lg hover:bg-slate-800/50
                         relative group"
              >
                Notaría
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-400 
                               scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                ></span>
              </Link>
              <Link
                href="#servicios"
                className="text-slate-200 hover:text-white px-4 py-2 text-sm font-semibold 
                         transition-all duration-200 rounded-lg hover:bg-slate-800/50
                         relative group"
              >
                Servicios
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-400 
                               scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                ></span>
              </Link>
              <Link
                href="#notario"
                className="text-slate-200 hover:text-white px-4 py-2 text-sm font-semibold 
                         transition-all duration-200 rounded-lg hover:bg-slate-800/50
                         relative group"
              >
                Notario
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-400 
                               scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                ></span>
              </Link>
              <Link
                href="#contacto"
                className="text-slate-200 hover:text-white px-4 py-2 text-sm font-semibold 
                         transition-all duration-200 rounded-lg hover:bg-slate-800/50
                         relative group"
              >
                Contacto
                <span
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber-400 
                               scale-x-0 group-hover:scale-x-100 transition-transform duration-200"
                ></span>
              </Link>

              <div className="ml-6 flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900
                           transition-all duration-200 font-semibold bg-transparent"
                  asChild
                >
                  <Link href="tel:+526699950860" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Llamar
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold
                           transition-all duration-200 shadow-lg hover:shadow-xl"
                  asChild
                >
                  <Link href="https://wa.link/mp8vb3" target="_blank" className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Agendar Cita
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-slate-200 hover:text-white hover:bg-slate-800/50"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div
              className="px-2 pt-4 pb-6 space-y-2 bg-slate-800/95 backdrop-blur-sm 
                          border-t border-slate-700 rounded-b-lg"
            >
              <Link
                href="#notaria"
                className="block px-4 py-3 text-base font-semibold text-slate-200 
                         hover:bg-slate-700/50 hover:text-white rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Notaría
              </Link>
              <Link
                href="#servicios"
                className="block px-4 py-3 text-base font-semibold text-slate-200 
                         hover:bg-slate-700/50 hover:text-white rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="#notario"
                className="block px-4 py-3 text-base font-semibold text-slate-200 
                         hover:bg-slate-700/50 hover:text-white rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Notario
              </Link>
              <Link
                href="#contacto"
                className="block px-4 py-3 text-base font-semibold text-slate-200 
                         hover:bg-slate-700/50 hover:text-white rounded-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>

              <div className="pt-4 space-y-3 border-t border-slate-700">
                <Button
                  variant="outline"
                  className="w-full border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900
                           transition-all duration-200 font-semibold bg-transparent"
                  asChild
                >
                  <Link href="tel:+526699950860" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    Llamar Ahora
                  </Link>
                </Button>
                <Button
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold
                           transition-all duration-200 shadow-lg"
                  asChild
                >
                  <Link href="https://wa.me/526699950860" className="flex items-center justify-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Agendar Cita
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
