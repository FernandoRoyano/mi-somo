'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  MessageCircle, Send, User, Mail, Phone, Calendar, Users, MessageSquare, CheckCircle2, ArrowUpRight,
} from 'lucide-react'
import { apartmentData, whatsappMessages } from '@/lib/data'
import { cn } from '@/lib/utils'

interface FormData {
  name: string
  email: string
  phone: string
  dates: string
  guests: number
  message: string
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    const message = `Hola! Me interesa alquilar el apartamento ${apartmentData.name}.

*Datos de contacto:*
- Nombre: ${data.name}
- Email: ${data.email}
- Teléfono: ${data.phone}

*Reserva:*
- Fechas: ${data.dates}
- Personas: ${data.guests}

*Mensaje:*
${data.message || 'Sin mensaje adicional'}

¿Está disponible?`

    const url = `https://wa.me/${apartmentData.contact.whatsapp}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank')
    setSubmitted(true)
  }

  const openWhatsApp = () => {
    const url = `https://wa.me/${apartmentData.contact.whatsapp}?text=${encodeURIComponent(whatsappMessages.default())}`
    window.open(url, '_blank')
  }

  return (
    <section id="contacto" className="relative py-fluid-xl bg-primary text-primary-fg overflow-hidden">
      {/* Decoración */}
      <div className="absolute inset-0 grid-pattern opacity-[0.04]" />
      <div
        className="absolute top-0 right-0 w-[40rem] h-[40rem] rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgb(var(--color-accent) / 0.4), transparent 70%)' }}
      />

      <div className="container-page relative">
        <div className="text-center max-w-2xl mx-auto mb-fluid-md space-y-3">
          <span className="eyebrow inline-flex justify-center text-accent">
            <MessageCircle className="w-3.5 h-3.5" /> Contacto
          </span>
          <h2 className="font-display font-semibold text-fluid-5xl text-white leading-[1.05] tracking-tight text-balance">
            ¿Listo para{' '}
            <span className="italic font-light text-accent">escapar?</span>
          </h2>
          <p className="text-white/70 text-fluid-lg leading-relaxed">
            Escríbenos directamente. Respuesta en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-4 lg:gap-6 items-start">
          {/* WhatsApp card */}
          <div className="bg-surface text-primary rounded-3xl p-7 md:p-8 shadow-2xl">
            <div className="inline-flex w-14 h-14 rounded-2xl bg-[#25D366]/15 text-[#25D366] items-center justify-center mb-5 animate-pulse-soft">
              <MessageCircle className="w-7 h-7" strokeWidth={1.8} />
            </div>
            <h3 className="font-display font-semibold text-fluid-2xl text-primary mb-2">
              Habla por WhatsApp
            </h3>
            <p className="text-muted text-fluid-sm leading-relaxed mb-6">
              La forma más rápida. Recibe disponibilidad y precios al momento.
            </p>

            <button
              onClick={openWhatsApp}
              className="group w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-3.5 rounded-xl font-medium text-fluid-base hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all duration-base"
            >
              <MessageCircle className="w-5 h-5" />
              Abrir WhatsApp
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <div className="mt-7 pt-6 border-t border-border/60">
              <p className="text-fluid-xs uppercase tracking-wider text-muted mb-3">
                También por
              </p>
              <div className="space-y-2">
                <a
                  href={`tel:${apartmentData.contact.phone}`}
                  className="flex items-center gap-3 text-primary hover:text-ocean transition-colors text-fluid-sm py-1.5"
                >
                  <Phone className="w-4 h-4 text-ocean" />
                  {apartmentData.contact.phone}
                </a>
                <a
                  href={`mailto:${apartmentData.contact.email}`}
                  className="flex items-center gap-3 text-primary hover:text-ocean transition-colors text-fluid-sm py-1.5"
                >
                  <Mail className="w-4 h-4 text-ocean" />
                  {apartmentData.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-surface text-primary rounded-3xl p-7 md:p-8 shadow-2xl">
            {submitted ? (
              <div className="text-center py-fluid-md">
                <div className="inline-flex w-16 h-16 rounded-full bg-success/15 text-success items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-semibold text-fluid-2xl text-primary mb-2">
                  ¡Mensaje preparado!
                </h3>
                <p className="text-muted text-fluid-sm mb-6 max-w-sm mx-auto">
                  Se ha abierto WhatsApp con todos los datos. Solo te queda enviar.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-ocean hover:text-primary font-medium text-fluid-sm transition-colors"
                >
                  ← Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display font-semibold text-fluid-2xl text-primary mb-1">
                  Cuéntanos tu plan
                </h3>
                <p className="text-muted text-fluid-sm mb-6">
                  Te enviaremos disponibilidad y precio cerrado.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <Field label="Nombre completo" error={errors.name?.message} icon={<User className="w-4 h-4" />}>
                    <input
                      {...register('name', { required: 'Obligatorio' })}
                      type="text"
                      placeholder="Tu nombre"
                      className={inputClass(!!errors.name, true)}
                    />
                  </Field>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <Field label="Email" error={errors.email?.message} icon={<Mail className="w-4 h-4" />}>
                      <input
                        {...register('email', {
                          required: 'Obligatorio',
                          pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email no válido' },
                        })}
                        type="email"
                        placeholder="tu@email.com"
                        className={inputClass(!!errors.email, true)}
                      />
                    </Field>
                    <Field label="Teléfono" error={errors.phone?.message} icon={<Phone className="w-4 h-4" />}>
                      <input
                        {...register('phone', { required: 'Obligatorio' })}
                        type="tel"
                        placeholder="+34 600 000 000"
                        className={inputClass(!!errors.phone, true)}
                      />
                    </Field>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    <Field label="Fechas deseadas" error={errors.dates?.message} icon={<Calendar className="w-4 h-4" />}>
                      <input
                        {...register('dates', { required: 'Obligatorio' })}
                        type="text"
                        placeholder="15 — 22 Agosto"
                        className={inputClass(!!errors.dates, true)}
                      />
                    </Field>
                    <Field label="Nº de personas" icon={<Users className="w-4 h-4" />}>
                      <select
                        {...register('guests', { required: true, valueAsNumber: true })}
                        className={cn(inputClass(false, true), 'appearance-none cursor-pointer')}
                      >
                        {[1, 2].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? 'persona' : 'personas'}
                          </option>
                        ))}
                      </select>
                    </Field>
                  </div>

                  <Field label="Mensaje (opcional)" icon={<MessageSquare className="w-4 h-4" />}>
                    <textarea
                      {...register('message')}
                      rows={3}
                      placeholder="¿Alguna pregunta o petición especial?"
                      className={cn(inputClass(false, true), 'resize-none pt-3')}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-accent text-accent-fg py-4 rounded-xl font-medium text-fluid-base shadow-lg hover:shadow-glow hover:-translate-y-0.5 active:scale-95 transition-all duration-base"
                  >
                    <Send className="w-4 h-4" />
                    Enviar por WhatsApp
                  </button>
                  <p className="text-fluid-xs text-muted text-center">
                    Al enviar se abrirá WhatsApp con tus datos prellenados.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label, error, icon, children,
}: {
  label: string
  error?: string
  icon?: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-fluid-xs font-medium text-primary uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-3.5 top-3.5 text-muted pointer-events-none">
            {icon}
          </span>
        )}
        {children}
      </div>
      {error && (
        <p className="text-fluid-xs text-danger mt-1 flex items-center gap-1">
          <span aria-hidden>⚠</span> {error}
        </p>
      )}
    </div>
  )
}

function inputClass(hasError: boolean, hasIcon: boolean) {
  return cn(
    'w-full bg-surface-alt/60 border border-transparent rounded-xl py-3 pr-4 text-fluid-sm text-primary placeholder:text-muted/70',
    'transition-colors duration-fast',
    'focus:outline-none focus:bg-surface focus:border-accent focus:ring-2 focus:ring-accent/20',
    hasIcon ? 'pl-10' : 'pl-4',
    hasError && 'border-danger/40 focus:border-danger focus:ring-danger/20'
  )
}
