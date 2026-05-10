'use client'

import { useState } from 'react'
import {
  Beer, EggFried, Fish, UtensilsCrossed, Coffee, Waves, Landmark,
  Star, MapPin, Sparkles, Quote,
  type LucideIcon,
} from 'lucide-react'
import { apartmentData, type Place } from '@/lib/data'
import { cn } from '@/lib/utils'

const iconMap: Record<string, LucideIcon> = {
  Beer, EggFried, Fish, UtensilsCrossed, Coffee, Waves, Landmark,
}

export default function Recommendations() {
  const { categories, route, tips } = apartmentData.recommendations
  const [activeId, setActiveId] = useState(categories[0].id)
  const active = categories.find((c) => c.id === activeId) ?? categories[0]

  return (
    <section
      id="gastronomia"
      className="py-fluid-xl bg-surface relative overflow-hidden"
    >
      <div
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgb(var(--color-accent) / 0.5), transparent 70%)',
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <div className="max-w-2xl mb-fluid-md space-y-3">
          <span className="eyebrow">
            <Sparkles className="w-3.5 h-3.5" /> Recomendaciones
          </span>
          <h2 className="font-display font-semibold text-fluid-5xl text-primary leading-[1.05] tracking-tight text-balance">
            Una guía honesta de{' '}
            <span className="italic font-light text-ocean">
              Santander &amp; Somo
            </span>
          </h2>
          <p className="text-muted text-fluid-lg leading-relaxed">
            Lo mejor del tapeo, la tortilla, las rabas, el brunch y la cultura.
            Sitios contrastados, sin turismo de Instagram.
          </p>
        </div>

        {/* Tabs categorías */}
        <div
          role="tablist"
          aria-label="Categorías de recomendaciones"
          className="flex gap-2 overflow-x-auto pb-3 mb-fluid-sm -mx-fluid-sm px-fluid-sm"
        >
          {categories.map((cat) => {
            const Icon = iconMap[cat.icon] || Sparkles
            const isActive = cat.id === activeId
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(cat.id)}
                className={cn(
                  'shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-fluid-sm font-medium whitespace-nowrap transition-all duration-base',
                  isActive
                    ? 'bg-primary text-primary-fg shadow-md'
                    : 'bg-surface-alt text-muted hover:text-primary hover:bg-border/40'
                )}
              >
                <Icon className="w-4 h-4" strokeWidth={1.8} />
                {cat.name}
                <span
                  className={cn(
                    'inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1.5 rounded-full text-fluid-xs',
                    isActive
                      ? 'bg-accent text-accent-fg'
                      : 'bg-border/50 text-muted'
                  )}
                >
                  {cat.places.length}
                </span>
              </button>
            )
          })}
        </div>

        {/* Subtítulo de la categoría activa */}
        <p
          key={active.id}
          className="text-fluid-sm text-muted mb-fluid-2xs animate-fade-in"
        >
          {active.subtitle}
        </p>

        {/* Cards de la categoría */}
        <div
          key={`grid-${active.id}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 animate-fade-in"
        >
          {(active.places as Place[]).map((place, index) => {
            const featured = place.featured
            return (
              <article
                key={`${active.id}-${index}`}
                className={cn(
                  'group relative rounded-2xl p-6 transition-all duration-base ease-out hover:-translate-y-1',
                  featured
                    ? 'md:col-span-2 lg:col-span-1 lg:row-span-2 bg-primary text-primary-fg shadow-xl border border-primary'
                    : 'bg-surface-alt/60 border border-border/40 hover:border-accent/40 hover:shadow-md'
                )}
              >
                {place.badge && (
                  <span
                    className={cn(
                      'inline-flex items-center gap-1 text-fluid-xs font-medium uppercase tracking-wider px-2.5 py-1 rounded-full mb-3',
                      featured
                        ? 'bg-accent/20 text-accent border border-accent/30'
                        : 'bg-ocean/10 text-ocean border border-ocean/20'
                    )}
                  >
                    {place.badge}
                  </span>
                )}

                <h3
                  className={cn(
                    'font-display font-semibold leading-tight mb-1',
                    featured
                      ? 'text-white text-fluid-2xl'
                      : 'text-primary text-fluid-xl'
                  )}
                >
                  {place.name}
                </h3>

                <p
                  className={cn(
                    'flex items-start gap-1.5 text-fluid-xs mb-3',
                    featured ? 'text-accent' : 'text-ocean'
                  )}
                >
                  <MapPin className="w-3 h-3 mt-0.5 shrink-0" />
                  <span>{place.area}</span>
                </p>

                <p
                  className={cn(
                    'text-fluid-sm leading-relaxed mb-3',
                    featured ? 'text-white/80' : 'text-muted'
                  )}
                >
                  {place.description}
                </p>

                {place.highlight && (
                  <div
                    className={cn(
                      'flex gap-2 px-3 py-2 rounded-lg text-fluid-xs italic leading-relaxed mb-3',
                      featured
                        ? 'bg-white/5 border-l-2 border-accent text-white/90'
                        : 'bg-accent/10 border-l-2 border-accent text-primary'
                    )}
                  >
                    <Quote
                      className={cn(
                        'w-3 h-3 shrink-0 mt-0.5',
                        featured ? 'text-accent' : 'text-ocean'
                      )}
                    />
                    <span>{place.highlight}</span>
                  </div>
                )}

                <div
                  className={cn(
                    'flex items-center gap-1.5 text-fluid-xs font-medium tabular-nums',
                    featured ? 'text-white/70' : 'text-muted'
                  )}
                >
                  <Star
                    className={cn(
                      'w-3.5 h-3.5 fill-accent text-accent'
                    )}
                  />
                  {place.rating.toFixed(1)}
                  <span className={featured ? 'text-white/40' : 'text-muted/60'}>
                    {' '}· Google
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        {/* Ruta sugerida 2 días */}
        <div className="mt-fluid-lg pt-fluid-md border-t border-border/50">
          <div className="max-w-2xl mb-fluid-md space-y-3">
            <span className="eyebrow">Ruta sugerida</span>
            <h3 className="font-display font-semibold text-fluid-3xl text-primary leading-[1.1] tracking-tight">
              Dos días{' '}
              <span className="italic font-light text-ocean">perfectos</span>
            </h3>
            <p className="text-muted text-fluid-base leading-relaxed">
              El plan que recomendamos a cada pareja que llega. Cae todo
              encajado y sin estrés.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4 lg:gap-6">
            {[route.day1, route.day2].map((day, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-surface-alt/60 border border-border/40 p-6 md:p-8"
              >
                <h4 className="inline-flex items-center gap-2 font-display font-semibold text-fluid-xl text-primary mb-5">
                  <span className="font-display font-bold text-fluid-3xl text-accent leading-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  {day.title}
                </h4>

                <ol className="relative pl-6 space-y-5 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-border">
                  {day.stops.map((stop, i) => (
                    <li key={i} className="relative">
                      <span className="absolute -left-6 top-1.5 w-3 h-3 rounded-full bg-accent ring-4 ring-surface-alt" />
                      <p className="text-fluid-xs uppercase tracking-wider text-ocean font-medium mb-0.5">
                        {stop.time}
                      </p>
                      <p className="font-medium text-primary text-fluid-base leading-tight mb-1">
                        {stop.title}
                      </p>
                      <p className="text-muted text-fluid-sm leading-relaxed">
                        {stop.desc}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          {/* Tips */}
          <div className="mt-fluid-md rounded-3xl bg-primary text-primary-fg p-7 md:p-8 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-[0.05]" />
            <div className="relative">
              <span className="eyebrow text-accent">
                <Sparkles className="w-3.5 h-3.5" /> Tips esenciales
              </span>
              <ul className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {tips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-white/85 text-fluid-sm leading-relaxed"
                  >
                    <span className="text-accent mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
