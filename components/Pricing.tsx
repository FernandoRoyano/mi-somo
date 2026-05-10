'use client'

import { Calendar, Check, Sparkles } from 'lucide-react'
import { apartmentData } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Pricing() {
  const { pricing } = apartmentData

  return (
    <section id="precios" className="py-fluid-xl bg-surface-alt relative overflow-hidden">
      <div
        className="absolute -bottom-40 -left-40 w-[28rem] h-[28rem] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(var(--color-ocean) / 0.5), transparent 70%)' }}
      />

      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto mb-fluid-md space-y-3">
          <span className="eyebrow inline-flex justify-center">
            <Calendar className="w-3.5 h-3.5" /> Precios
          </span>
          <h2 className="font-display font-semibold text-fluid-5xl text-primary leading-[1.05] tracking-tight text-balance">
            Tarifas{' '}
            <span className="italic font-light text-ocean">por temporada</span>
          </h2>
          <p className="text-muted text-fluid-lg leading-relaxed">
            Sin comisiones de plataformas. Reserva directa, precios honestos.
          </p>
        </div>

        {/* Tarjetas de precio */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-fluid-md">
          {pricing.seasons.map((season, index) => {
            const featured = index === 0
            return (
              <div
                key={index}
                className={cn(
                  'relative rounded-3xl p-7 md:p-8 transition-all duration-base',
                  featured
                    ? 'bg-primary text-primary-fg shadow-2xl md:scale-[1.03] md:-translate-y-2'
                    : 'bg-surface text-primary border border-border/50 hover:shadow-lg hover:-translate-y-1'
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-accent text-accent-fg text-fluid-xs font-semibold px-3 py-1 rounded-full">
                    <Sparkles className="w-3 h-3" /> Más demandado
                  </span>
                )}

                <div
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-fluid-xs font-medium mb-5',
                    featured
                      ? 'bg-white/15 text-white'
                      : 'bg-ocean/10 text-ocean'
                  )}
                >
                  <span
                    className={cn(
                      'w-1.5 h-1.5 rounded-full',
                      featured ? 'bg-accent' : 'bg-ocean'
                    )}
                  />
                  {season.name}
                </div>

                <p
                  className={cn(
                    'text-fluid-sm mb-6',
                    featured ? 'text-white/60' : 'text-muted'
                  )}
                >
                  {season.dates}
                </p>

                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className="font-display font-semibold text-fluid-6xl leading-none tabular-nums">
                    {season.pricePerNight}
                  </span>
                  <span className="text-fluid-2xl font-display">€</span>
                </div>
                <p
                  className={cn(
                    'text-fluid-sm mb-5',
                    featured ? 'text-white/60' : 'text-muted'
                  )}
                >
                  por noche · {season.pricePerWeek}€ /semana
                </p>

                <ul
                  className={cn(
                    'space-y-2.5 mb-7 text-fluid-sm',
                    featured ? 'text-white/85' : 'text-primary/80'
                  )}
                >
                  {[
                    'WiFi de fibra óptica',
                    'Ropa de cama y toallas',
                    'Parking privado',
                  ].map((feat) => (
                    <li key={feat} className="flex items-center gap-2.5">
                      <Check
                        className={cn(
                          'w-4 h-4 shrink-0',
                          featured ? 'text-accent' : 'text-ocean'
                        )}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contacto"
                  className={cn(
                    'block text-center py-3.5 rounded-xl font-medium text-fluid-sm transition-all duration-base hover:-translate-y-0.5 active:scale-95',
                    featured
                      ? 'bg-accent text-accent-fg hover:shadow-glow'
                      : 'bg-primary text-primary-fg hover:bg-primary/90'
                  )}
                >
                  Reservar →
                </a>
              </div>
            )
          })}
        </div>

        {/* Info adicional */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {[
            { label: 'Limpieza', value: `${pricing.extras.cleaningFee}€`, hint: 'pago único' },
            { label: 'Fianza', value: `${pricing.extras.deposit}€`, hint: 'reembolsable' },
            { label: 'Estancia mínima', value: `${pricing.extras.minimumNights} noches`, hint: 'temporada alta' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-surface rounded-2xl px-5 py-4 border border-border/40 flex items-center justify-between"
            >
              <div>
                <p className="text-fluid-xs uppercase tracking-wider text-muted">
                  {item.label}
                </p>
                <p className="font-display font-semibold text-fluid-2xl text-primary mt-1">
                  {item.value}
                </p>
              </div>
              <span className="text-fluid-xs text-muted">{item.hint}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
