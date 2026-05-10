'use client'

import { MapPin, Users, BedDouble, Bath, ChevronDown, Star } from 'lucide-react'
import { apartmentData } from '@/lib/data'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end overflow-hidden noise"
    >
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105 animate-[float_20s_ease-in-out_infinite]"
        style={{ backgroundImage: `url('${apartmentData.gallery.hero}')` }}
      />
      {/* Fallback gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-deep via-primary to-ocean -z-10" />

      {/* Overlays cinemáticos */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-primary/30" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 100%, rgb(var(--color-accent) / 0.25), transparent 70%)',
        }}
      />
      <div className="absolute inset-0 grid-pattern opacity-[0.05] wave-bottom" />

      {/* Contenido */}
      <div className="relative container-page pb-fluid-lg pt-fluid-xl w-full">
        <div className="max-w-4xl space-y-fluid-sm">
          <div className="flex flex-wrap items-center gap-3 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-dark text-white/90 text-fluid-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <MapPin className="w-3.5 h-3.5" />
              {apartmentData.location.city}, {apartmentData.location.region}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass-dark text-white/90 text-fluid-xs">
              <Star className="w-3.5 h-3.5 fill-accent text-accent" />
              Escapada para dos en Cantabria
            </span>
          </div>

          <h1 className="font-display font-semibold text-white text-fluid-7xl leading-[1.02] tracking-tight text-balance animate-fade-up [animation-delay:80ms]">
            {apartmentData.name.split(' ')[0]}{' '}
            <span className="italic font-light text-accent">
              {apartmentData.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="text-white/80 text-fluid-xl max-w-xl leading-relaxed text-pretty animate-fade-up [animation-delay:160ms]">
            {apartmentData.tagline}. {apartmentData.description}
          </p>

          {/* Stats inline */}
          <div className="flex flex-wrap gap-2 animate-fade-up [animation-delay:240ms]">
            {[
              { icon: Users, label: `${apartmentData.guests} huéspedes` },
              { icon: BedDouble, label: `${apartmentData.bedrooms} habitaciones` },
              { icon: Bath, label: `${apartmentData.bathrooms} baño` },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-white/90 text-fluid-sm"
              >
                <Icon className="w-4 h-4 text-accent" />
                {label}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-fluid-2xs animate-fade-up [animation-delay:320ms]">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-accent-fg px-7 py-4 rounded-full font-medium text-fluid-base shadow-xl hover:shadow-glow transition-all duration-base hover:-translate-y-0.5 active:scale-95"
            >
              Reservar ahora
              <span className="transition-transform duration-base group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center gap-2 glass-dark text-white px-7 py-4 rounded-full font-medium text-fluid-base hover:bg-white/15 transition-all duration-base"
            >
              Ver galería
            </a>
          </div>
        </div>

        {/* Indicador de scroll */}
        <a
          href="#galeria"
          className="hidden md:flex absolute bottom-8 right-fluid-sm flex-col items-center gap-2 text-white/60 hover:text-accent transition-colors group"
          aria-label="Bajar a la galería"
        >
          <span className="text-fluid-xs uppercase tracking-[0.25em] [writing-mode:vertical-rl] rotate-180">
            Descubrir
          </span>
          <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-accent" />
        </a>
      </div>
    </section>
  )
}
