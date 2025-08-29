"use client";

import ServicesSection from "@/components/layout/ServicesSection";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
  <>
  <motion.div
      className="relative w-full bg-cover bg-center bg-no-repeat py-12 px-6 md:px-12"
      style={{ backgroundImage: "url('/home/torre.png')" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Imagen izquierda (entra desde la izquierda) */}
        <motion.div
          className="flex justify-center order-1"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img
            src="/home/logo170.png"
            alt="Notaría Pública 170 — Logotipo"
            className="max-w-sm w-full object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* Texto derecha (entra desde la derecha) */}
        <motion.div
          className="text-gray-800 order-2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mb-4 text-lg font-bold leading-relaxed">
            En Notaría Pública 170, el Licenciado Jesús Alberto Humarán Castellanos y su equipo ofrecen servicios
            notariales con más de tres décadas de trayectoria, consolidando una reputación de seriedad, ética y
            compromiso con la comunidad.
          </p>
          <p className="text-lg leading-relaxed">
            Nuestra misión es dar certeza legal a sus actos y negocios jurídicos, acompañándolo con atención
            personalizada en cada paso.
          </p>
        </motion.div>
      </div>
    </motion.div>

  <ServicesSection />

<motion.section
      className="relative w-full py-12 px-6 md:px-12 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Fondo con Ken Burns sutil */}
      <motion.img
        src="/home/humaranbg.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center -z-10 pointer-events-none"
        initial={{ scale: 1.02, opacity: 0 }}
        whileInView={{
          scale: 1.06,
          opacity: 1,
        }}
        transition={{ duration: 1.0, ease: "easeOut" }}
        viewport={{ once: true }}
      />

      {/* Contenido */}
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Imagen izquierda */}
        <motion.div
          className="flex justify-center"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <img
            src="/home/humaran.png"
            alt="Imagen descriptiva"
            className="max-w-sm w-full object-contain"
            loading="lazy"
          />
        </motion.div>

        {/* Texto derecha */}
        <motion.div
          className="text-gray-800"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.p
            className="mb-4 text-lg leading-relaxed"
            initial={{ y: 12, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
            viewport={{ once: true }}
          >
            Con más de 30 años de experiencia, el Lic. Humarán se ha consolidado como un referente en el ámbito notarial en Mazatlán. Su compromiso es ofrecer un servicio confiable, transparente y cercano, garantizando certeza y tranquilidad en cada trámite.
          </motion.p>          
        </motion.div>
      </div>
    </motion.section>


</>

  );
}
