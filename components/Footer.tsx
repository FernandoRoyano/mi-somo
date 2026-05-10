'use client'

import { Waves, MapPin, Phone, Mail, Heart } from 'lucide-react'
import { apartmentData } from '@/lib/data'

const quickLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Ubicación', href: '#ubicacion' },
  { name: 'Gastronomía', href: '#gastronomia' },
  { name: 'Precios', href: '#precios' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface-alt border-t border-border/50">
      <div className="container-page py-fluid-md">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-8 lg:gap-12 mb-fluid-sm">
          {/* Brand */}
          <div className="space-y-4 max-w-md">
            <div className="inline-flex items-center gap-2.5 font-display font-semibold text-fluid-2xl text-primary tracking-tight">
              <span className="inline-flex w-9 h-9 rounded-full bg-primary text-accent items-center justify-center">
                <Waves className="w-4 h-4" strokeWidth={2.2} />
              </span>
              {apartmentData.name}
            </div>
            <p className="text-muted text-fluid-sm leading-relaxed">
              {apartmentData.description}
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-display font-semibold text-fluid-base text-primary mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-fluid-sm">
              <li className="flex items-start gap-3 text-muted">
                <MapPin className="w-4 h-4 mt-0.5 text-ocean shrink-0" />
                <span>
                  {apartmentData.location.address},<br />
                  {apartmentData.location.city}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${apartmentData.contact.phone}`}
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-ocean shrink-0" />
                  {apartmentData.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${apartmentData.contact.email}`}
                  className="flex items-center gap-3 text-muted hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-ocean shrink-0" />
                  {apartmentData.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display font-semibold text-fluid-base text-primary mb-4">
              Navegar
            </h3>
            <ul className="space-y-2.5 text-fluid-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-fluid-2xs border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-fluid-xs text-muted">
            © {currentYear} {apartmentData.name}. Todos los derechos reservados.
          </p>
          <p className="text-fluid-xs text-muted inline-flex items-center gap-1.5">
            Hecho con <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> sin comisiones de plataformas
          </p>
        </div>
      </div>
    </footer>
  )
}
