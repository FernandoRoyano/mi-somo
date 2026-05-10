'use client'

import {
  Fish, Wine, UtensilsCrossed, Coffee, GlassWater, ShoppingBasket, Utensils,
  type LucideIcon,
} from 'lucide-react'
import { apartmentData } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Fish, Wine, UtensilsCrossed, Coffee, GlassWater, ShoppingBasket,
}

export default function Gastronomy() {
  return (
    <section id="gastronomia" className="py-fluid-xl bg-surface relative overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(var(--color-accent) / 0.5), transparent 70%)' }}
      />

      <div className="container-page relative">
        <div className="max-w-2xl mb-fluid-md space-y-3">
          <span className="eyebrow">
            <Utensils className="w-3.5 h-3.5" /> Gastronomía
          </span>
          <h2 className="font-display font-semibold text-fluid-5xl text-primary leading-[1.05] tracking-tight text-balance">
            Comer bien forma parte{' '}
            <span className="italic font-light text-ocean">del plan</span>
          </h2>
          <p className="text-muted text-fluid-lg leading-relaxed">
            Cantabria es despensa: mar, montaña y bodega. Te dejamos un mapa
            de sabores para que cada día sepa distinto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {apartmentData.gastronomy.map((item, index) => {
            const Icon = iconMap[item.icon] || UtensilsCrossed
            const isFeatured = index === 0
            return (
              <article
                key={index}
                className={`group relative rounded-2xl p-6 md:p-7 transition-all duration-base ease-out hover:-translate-y-1 ${
                  isFeatured
                    ? 'md:col-span-2 md:row-span-1 bg-primary text-primary-fg shadow-xl'
                    : 'bg-surface-alt/60 border border-border/40 hover:border-accent/40 hover:shadow-md'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div
                    className={`shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-base ${
                      isFeatured
                        ? 'bg-accent/20 text-accent'
                        : 'bg-ocean/10 text-ocean group-hover:bg-accent/20 group-hover:text-primary'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        className={`font-display font-semibold text-fluid-xl leading-tight ${
                          isFeatured ? 'text-white' : 'text-primary'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p
                      className={`text-fluid-sm leading-relaxed mb-3 ${
                        isFeatured ? 'text-white/75' : 'text-muted'
                      }`}
                    >
                      {item.description}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1.5 text-fluid-xs font-medium ${
                        isFeatured ? 'text-accent' : 'text-ocean'
                      }`}
                    >
                      <span
                        className={`w-1 h-1 rounded-full ${
                          isFeatured ? 'bg-accent' : 'bg-ocean'
                        }`}
                      />
                      {item.tag}
                    </span>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <p className="mt-fluid-sm text-fluid-sm text-muted text-center max-w-xl mx-auto">
          Te dejaremos en el apartamento una lista personal con nuestros
          sitios favoritos y reservas recomendadas.
        </p>
      </div>
    </section>
  )
}
