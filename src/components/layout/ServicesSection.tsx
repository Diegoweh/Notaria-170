"use client"

import { motion } from "framer-motion"
import { Building2, Handshake, Home, FileText } from "lucide-react"

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>

type Service = {
  icon: IconType
  title: string
  description?: string
  extras?: string[] // <- opcional, solo para "OTROS SERVICIOS"
}

const listVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.4, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.06 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const IconComponent = service.icon
  const hasExtras = Array.isArray(service.extras) && service.extras.length > 0

  return (
    <motion.div
      id="servicios"
      className="text-center p-6 rounded-xl bg-white shadow-sm border border-gray-100 scroll-mt-54 md:scroll-mt-74"
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 * index }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50">
          <IconComponent className="w-10 h-10 text-gray-600 stroke-1" />
        </div>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">
        {service.title}
      </h3>

      {service.description ? (
        <p className="text-gray-600 text-sm leading-relaxed max-w-sm mx-auto">
          {service.description}
        </p>
      ) : null}

      {hasExtras && (
        <motion.div
          className="overflow-hidden mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          
        >
          <ul className="text-left text-sm text-gray-700 mt-1 space-y-2 max-w-sm mx-auto">
            {service.extras!.map((item, i) => (
              <motion.li
                key={i}
                
                className="pl-3 border-l-2 border-gray-200"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.div>
  )
}

export default function ServicesSection() {
  const services: Service[] = [
    {
      icon: Building2,
      title: "DESARROLLO INMOBILIARIO",
      description:
        "Asesoría y formalización de operaciones inmobiliarias, desde la compraventa hasta la constitución de regímenes de complejos habitacionales y comerciales.",
    },
    {
      icon: Handshake,
      title: "SOCIEDADES Y PODERES",
      description:
        "Constitución de sociedades, protocolizaciones de actas de asamblea, otorgamiento de poderes y asesoría integral en materia corporativa.",
    },
    {
      icon: Home,
      title: "VIVIENDA",
      description:
        "Compraventas, créditos hipotecarios, mutuos, cancelaciones, Fideicomisos de Zona Restringida, de Administración y de Garantía y todo tipo de trámites relacionados con la vivienda, con la seguridad jurídica que usted necesita.",
    },
    {
      icon: FileText,
      title: "OTROS SERVICIOS",
      description:
        "Lista de servicios adicionales que también realizamos en la notaría.",
      extras: [
        "Testamentos",
        "Cartas de Identidad",
        "Expedición de copias certificadas",
        "Fe de hechos",
        "Ratificaciones de firmas",
        "Donaciones de dinero",
      ],
    },
  ]

  return (
    <motion.section
      className="py-16 px-4 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 tracking-wide">
          NUESTROS SERVICIOS
        </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  )
}
