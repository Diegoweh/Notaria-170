import { Phone, Mail, MapPin, Clock, Shield, Award } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-slate-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Logo + badges debajo */}
          <div className="space-y-4 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3">
              <div className="flex items-center justify-center">
                <img
                  src="/footerLogo.png"
                  alt="HUMARÁN Notaría Pública 170"
                  className="w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 object-contain"
                />
              </div>
            </div>

            {/* Fila de logos de certificaciones (imagen que enviaste) */}
            <div className="pt-2">
              <img
                src="/logos.png"
                alt="Certificaciones y asociaciones"
                className="mx-auto lg:mx-0 w-full max-w-[240px] h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contacto</h4>

            {/* Primera fila: 3 números */}
            <div className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="flex flex-wrap gap-x-1 gap-y-1 text-slate-300 text-sm">
                <span>669 985 0791, 669 981 1028, 669 982 4024 </span>
                
              </div>
            </div>

            {/* Segunda fila: 2 números */}
            <div className="flex items-start space-x-3">
              <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
              <div className="flex flex-wrap gap-x-1 gap-y-1 text-slate-300 text-sm">
                <span>669 982 1465, 669 985 0860</span>
                
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span className="text-slate-300">contacto@humaranmaz.com</span>
            </div>

            {/* Dirección */}
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div className="text-slate-300 text-sm">
                <p>Dr. Rafael Domínguez 308-A</p>
                <p>Palos Prietos, 82010</p>
                <p>Mazatlán, Sinaloa</p>
              </div>
            </div>
          </div>


          {/* Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Horarios</h4>
            <div className="flex items-start space-x-3">
              <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
              <div className="text-slate-300 text-sm">
                <p>Lunes - Viernes</p>
                <p>9:00 AM - 2:00 PM & 4:00 PM - 7:00 PM</p>
                <p className="mt-2">Sábados</p>
                <p>9:30 AM - 1:00 PM</p>
              </div>
            </div>
          </div>

          {/* Certifications (texto) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Certificaciones</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-slate-400">Colegio de Notarios</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span className="text-sm text-slate-400">Barra Mexicana</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © 2025 Notaría Pública 170 - Humarán. Todos los derechos reservados.
            </p>
            <div className="flex items-center space-x-4 text-xs text-slate-500">
              <span>Notario Público No. 170</span>
              <span>•</span>
              <span>Mazatlán, Sinaloa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
