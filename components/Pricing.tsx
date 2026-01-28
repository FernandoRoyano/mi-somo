'use client'

import { Calendar, Info, Check } from 'lucide-react'
import { apartmentData } from '@/lib/data'

export default function Pricing() {
  const { pricing } = apartmentData

  return (
    <section id="precios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-ocean-600 mb-4">
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Precios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Tarifas por temporada
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Precios transparentes sin sorpresas. Reserva directamente y ahorra las comisiones de plataformas.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricing.seasons.map((season, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all hover:scale-105 ${
                index === 0
                  ? 'bg-gradient-to-br from-ocean-500 to-ocean-700 text-white shadow-xl'
                  : 'bg-sand-50 text-slate-800 hover:shadow-lg'
              }`}
            >
              {/* Season Badge */}
              <div
                className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 ${
                  index === 0
                    ? 'bg-white/20 text-white'
                    : season.color
                }`}
              >
                {season.name}
              </div>

              {/* Dates */}
              <p className={`text-sm mb-6 ${index === 0 ? 'text-white/80' : 'text-slate-500'}`}>
                {season.dates}
              </p>

              {/* Price per night */}
              <div className="mb-2">
                <span className="text-4xl font-bold">{season.pricePerNight}€</span>
                <span className={`text-sm ${index === 0 ? 'text-white/70' : 'text-slate-500'}`}>
                  {' '}/noche
                </span>
              </div>

              {/* Price per week */}
              <div className={`mb-6 ${index === 0 ? 'text-white/80' : 'text-slate-600'}`}>
                <span className="text-2xl font-semibold">{season.pricePerWeek}€</span>
                <span className="text-sm"> /semana</span>
              </div>

              {/* What's included */}
              <div className={`space-y-2 ${index === 0 ? 'text-white/90' : 'text-slate-600'}`}>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">WiFi incluido</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Ropa de cama y toallas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4" />
                  <span className="text-sm">Parking incluido</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                className={`mt-8 block text-center py-3 rounded-xl font-semibold transition-colors ${
                  index === 0
                    ? 'bg-white text-ocean-600 hover:bg-ocean-50'
                    : 'bg-ocean-500 text-white hover:bg-ocean-600'
                }`}
              >
                Reservar
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-sand-50 rounded-3xl p-8">
          <div className="flex items-start gap-4 mb-6">
            <Info className="w-6 h-6 text-ocean-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-slate-800 mb-2">Información adicional</h3>
              <p className="text-slate-600">
                Todos los precios son orientativos. Consulta disponibilidad y precios exactos para tus fechas.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-1">Limpieza</p>
              <p className="text-xl font-bold text-slate-800">{pricing.extras.cleaningFee}€</p>
              <p className="text-xs text-slate-400">pago único</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-1">Fianza</p>
              <p className="text-xl font-bold text-slate-800">{pricing.extras.deposit}€</p>
              <p className="text-xs text-slate-400">reembolsable</p>
            </div>
            <div className="bg-white rounded-xl p-4">
              <p className="text-sm text-slate-500 mb-1">Estancia mínima</p>
              <p className="text-xl font-bold text-slate-800">{pricing.extras.minimumNights} noches</p>
              <p className="text-xs text-slate-400">en temporada alta</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
