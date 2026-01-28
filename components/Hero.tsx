'use client'

import { MapPin, Users, BedDouble, Bath, ChevronDown } from 'lucide-react'
import { apartmentData } from '@/lib/data'

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${apartmentData.gallery.hero}')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>

      {/* Fallback gradient if no image */}
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-600 to-ocean-900 -z-10" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">
              {apartmentData.location.city}, {apartmentData.location.region}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 text-balance">
            {apartmentData.name}
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            {apartmentData.tagline}
          </p>

          {/* Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <Users className="w-4 h-4" />
              <span>{apartmentData.guests} huéspedes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <BedDouble className="w-4 h-4" />
              <span>{apartmentData.bedrooms} habitaciones</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full">
              <Bath className="w-4 h-4" />
              <span>{apartmentData.bathrooms} baño</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#galeria"
              className="bg-white text-ocean-700 hover:bg-ocean-50 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Ver fotos
            </a>
            <a
              href="#contacto"
              className="bg-ocean-500 hover:bg-ocean-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Reservar ahora
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#galeria" className="text-white/70 hover:text-white transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  )
}
