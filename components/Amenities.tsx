'use client'

import {
  Wifi,
  Shield,
  Coffee,
  Wind,
  Snowflake,
  Tv,
  Car,
  Bed,
  Bath,
  Waves,
  ChefHat,
  WashingMachine,
  Sparkles
} from 'lucide-react'
import { apartmentData } from '@/lib/data'

// Map icon names to components
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Wifi,
  Shield,
  Coffee,
  Wind,
  Snowflake,
  Tv,
  Car,
  Bed,
  Bath,
  Waves,
  ChefHat,
  WashingMachine,
}

export default function Amenities() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-ocean-600 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Servicios</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Todo lo que necesitas
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Equipamiento completo para que solo te preocupes de disfrutar
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {apartmentData.amenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon] || Sparkles
            return (
              <div
                key={index}
                className="bg-sand-50 hover:bg-ocean-50 rounded-2xl p-6 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 bg-ocean-100 group-hover:bg-ocean-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <IconComponent className="w-6 h-6 text-ocean-600" />
                </div>
                <h3 className="font-semibold text-slate-800 mb-1">
                  {amenity.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {amenity.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* House Rules */}
        <div className="mt-16 bg-sand-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Normas de la casa
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {apartmentData.houseRules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl px-4 py-3"
              >
                <div className="w-2 h-2 bg-ocean-500 rounded-full flex-shrink-0" />
                <span className="text-slate-700">{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
