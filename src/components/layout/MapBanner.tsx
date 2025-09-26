// components/MapBanner.tsx
"use client"

import * as React from "react"

type MapBannerProps = {
  /** Título grande sobre el mapa */
  title?: string
  /** Texto secundario bajo el título */
  subtitle?: string
  /** Dirección legible (se usa para los enlaces y como fallback del mapa) */
  address: string
  /** Si prefieres pasar lat,lng en vez de address. Ej: "23.2179,-106.4166" */
  coords?: string
  /** Zoom sugerido (solo para el modo address/coords simple) */
  zoom?: number
  /** Clase para altura/aspect ratio (ej: "aspect-[21/9]" o "h-72 md:h-96") */
  sizeClassName?: string
  /** Borde redondeado */
  roundedClassName?: string
  /** Añade un sombreado oscuro para mejorar legibilidad del texto */
  darkOverlay?: boolean
}

export default function MapBanner({
  title = "Nuestra ubicación",
  subtitle = "Ven a visitarnos",
  address,
  coords,
  zoom = 15,
  sizeClassName = "aspect-[21/9]",
  roundedClassName = "rounded-2xl",
  darkOverlay = true,
}: MapBannerProps) {
  const encoded = encodeURIComponent(coords ?? address)

  // Enlace directo a Google Maps (útil para los CTAs)
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encoded}`
  const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encoded}`

  /**
   * Fuente del iframe.
   * - Cuando pasas address/coords sin embed key, este formato funciona bien:
   *   https://www.google.com/maps?q=<query>&z=<zoom>&output=embed&hl=es
   * - Si deseas usar un embed oficial de "Place" con place_id, puedes
   *   sustituir este src por el que te da Google Maps Embed.
   */
  const iframeSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6496679057295!2d-106.42280868819883!3d23.21943460886388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869f539e2a43ffff%3A0xd4cc71081494ec61!2sDr.%20Rafael%20Dom%C3%ADnguez%20308-A%2C%20Palos%20Prietos%2C%2082010%20Mazatl%C3%A1n%2C%20Sin.!5e0!3m2!1ses-419!2smx!4v1758919198925!5m2!1ses-419!2smx`

  

  return (
    <section
      className={`relative w-full overflow-hidden shadow-lg  ${sizeClassName}`}
      aria-label="Mapa de ubicación"
    >
      {/* Mapa en background */}
      <iframe
        title={`Mapa de ${address}`}
        src={iframeSrc}
        className="absolute inset-0 h-full w-full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Overlay para legibilidad */}
      {darkOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
      )}

      {/* Contenido (textos + botones) */}
      <div className="relative z-10 h-full w-full hidden md:block">
        <div className="flex h-full w-full items-end">
          <div className="p-5 sm:p-8 md:p-10">
            <div className="backdrop-blur-sm bg-black/20 text-white max-w-xl p-4 sm:p-5 md:p-6 rounded-xl">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-1 text-white/90">{subtitle}</p>
              )}
              <p className="mt-2 text-sm sm:text-base text-white/80">
                {address}
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-yellow-400 px-4 py-2 text-sm font-semibold text-black hover:bg-yellow-300 transition"
                >
                  Ver en Google Maps
                </a>
                <a
                  href={directionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
