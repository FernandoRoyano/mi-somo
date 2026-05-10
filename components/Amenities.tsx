'use client'

import {
  Wifi, Shield, Coffee, Wind, Snowflake, Tv, Car, Bed, Bath,
  Waves, ChefHat, WashingMachine, Sparkles, Clock,
  type LucideIcon,
} from 'lucide-react'
import { apartmentData } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Wifi, Shield, Coffee, Wind, Snowflake, Tv, Car, Bed, Bath,
  Waves, ChefHat, WashingMachine,
}

export default function Amenities() {
  return (
    <section id="servicios" className="py-fluid-xl bg-surface-alt relative overflow-hidden">
      {/* Decoración */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(var(--color-accent) / 0.4), transparent 70%)' }}
      />

      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto mb-fluid-md space-y-3">
          <span className="eyebrow justify-center inline-flex">Servicios</span>
          <h2 className="font-display font-semibold text-fluid-5xl text-primary leading-[1.05] tracking-tight text-balance">
            Todo lo que{' '}
            <span className="italic font-light text-ocean">necesitas</span>
          </h2>
          <p className="text-muted text-fluid-lg leading-relaxed">
            Equipamiento completo para que solo te preocupes de disfrutar del mar y las olas.
          </p>
        </div>

        {/* Grid de amenities con container queries */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {apartmentData.amenities.map((amenity, index) => {
            const Icon = iconMap[amenity.icon] || Sparkles
            return (
              <div
                key={index}
                className="group relative bg-surface rounded-2xl p-5 md:p-6 border border-border/40 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg transition-all duration-base ease-out"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-base"
                  style={{ background: 'linear-gradient(135deg, rgb(var(--color-accent) / 0.06), transparent 60%)' }}
                />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/5 text-ocean group-hover:bg-accent/15 group-hover:text-primary transition-colors duration-base mb-3">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="font-medium text-primary text-fluid-base mb-1 leading-tight">
                    {amenity.name}
                  </h3>
                  <p className="text-fluid-xs text-muted leading-relaxed">
                    {amenity.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Normas de la casa */}
        <div className="mt-fluid-lg grid lg:grid-cols-[1fr_2fr] gap-6 lg:gap-10 items-center">
          <div className="space-y-3">
            <span className="eyebrow">
              <Clock className="w-3.5 h-3.5" /> Normas
            </span>
            <h3 className="font-display font-semibold text-fluid-3xl text-primary leading-[1.1] tracking-tight">
              Sencillas y claras
            </h3>
            <p className="text-muted text-fluid-base leading-relaxed">
              Cuidamos cada detalle para que tu estancia sea relajada desde el momento de llegar.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-2">
            {apartmentData.houseRules.map((rule, index) => (
              <li
                key={index}
                className="flex items-center gap-3 bg-surface rounded-xl px-4 py-3.5 border border-border/40"
              >
                <span className="inline-flex w-7 h-7 shrink-0 items-center justify-center rounded-full bg-accent/15 text-ocean text-fluid-xs font-semibold">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-primary text-fluid-sm">{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
