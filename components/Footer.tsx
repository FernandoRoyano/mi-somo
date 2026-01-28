'use client'

import { Home, MapPin, Phone, Mail, Heart } from 'lucide-react'
import { apartmentData } from '@/lib/data'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Home className="w-6 h-6 text-ocean-400" />
              <span className="font-bold text-xl">{apartmentData.name}</span>
            </div>
            <p className="text-slate-400 mb-4">
              {apartmentData.description}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-5 h-5 text-ocean-400" />
                <span>
                  {apartmentData.location.address}, {apartmentData.location.city}
                </span>
              </div>
              <a
                href={`tel:${apartmentData.contact.phone}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-ocean-400" />
                {apartmentData.contact.phone}
              </a>
              <a
                href={`mailto:${apartmentData.contact.email}`}
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5 text-ocean-400" />
                {apartmentData.contact.email}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <div className="space-y-2">
              <a href="#inicio" className="block text-slate-400 hover:text-white transition-colors">
                Inicio
              </a>
              <a href="#galeria" className="block text-slate-400 hover:text-white transition-colors">
                Galería
              </a>
              <a href="#servicios" className="block text-slate-400 hover:text-white transition-colors">
                Servicios
              </a>
              <a href="#precios" className="block text-slate-400 hover:text-white transition-colors">
                Precios
              </a>
              <a href="#contacto" className="block text-slate-400 hover:text-white transition-colors">
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {currentYear} {apartmentData.name}. Todos los derechos reservados.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-500" /> sin comisiones de plataformas
          </p>
        </div>
      </div>
    </footer>
  )
}
