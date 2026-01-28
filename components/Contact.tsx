'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  MessageCircle,
  Send,
  User,
  Mail,
  Phone,
  Calendar,
  Users,
  MessageSquare,
  CheckCircle
} from 'lucide-react'
import { apartmentData, whatsappMessages } from '@/lib/data'

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
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm<FormData>()

  const watchDates = watch('dates')
  const watchGuests = watch('guests')

  const onSubmit = (data: FormData) => {
    // Build WhatsApp message
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

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${apartmentData.contact.whatsapp}?text=${encodedMessage}`

    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

  const openWhatsAppDirect = () => {
    const message = whatsappMessages.default()
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${apartmentData.contact.whatsapp}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-ocean-600 to-ocean-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-ocean-200 mb-4">
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Contacto</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ¿Listo para reservar?
          </h2>
          <p className="text-ocean-100 max-w-2xl mx-auto">
            Contáctanos directamente por WhatsApp o rellena el formulario. Te responderemos lo antes posible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 whatsapp-btn">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Contacto directo por WhatsApp
              </h3>
              <p className="text-slate-600">
                La forma más rápida de contactar. Respuesta en menos de 24h.
              </p>
            </div>

            <button
              onClick={openWhatsAppDirect}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Abrir WhatsApp
            </button>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-500 text-center mb-4">
                También puedes contactar por:
              </p>
              <div className="space-y-3">
                <a
                  href={`tel:${apartmentData.contact.phone}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-ocean-600 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {apartmentData.contact.phone}
                </a>
                <a
                  href={`mailto:${apartmentData.contact.email}`}
                  className="flex items-center gap-3 text-slate-600 hover:text-ocean-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {apartmentData.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-slate-600 mb-6">
                  Se ha abierto WhatsApp con tu mensaje. Envíalo para completar la consulta.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-ocean-600 hover:text-ocean-700 font-medium"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-slate-800 mb-6">
                  Formulario de contacto
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        {...register('name', { required: 'El nombre es obligatorio' })}
                        type="text"
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          {...register('email', {
                            required: 'El email es obligatorio',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Email no válido'
                            }
                          })}
                          type="email"
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                          placeholder="tu@email.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Teléfono *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          {...register('phone', { required: 'El teléfono es obligatorio' })}
                          type="tel"
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                          placeholder="+34 600 000 000"
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Dates & Guests */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Fechas deseadas *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <input
                          {...register('dates', { required: 'Las fechas son obligatorias' })}
                          type="text"
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all"
                          placeholder="15-22 Agosto"
                        />
                      </div>
                      {errors.dates && (
                        <p className="text-red-500 text-sm mt-1">{errors.dates.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        Nº de personas *
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <select
                          {...register('guests', { required: true })}
                          className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all appearance-none bg-white"
                        >
                          {[1, 2, 3, 4].map((n) => (
                            <option key={n} value={n}>
                              {n} {n === 1 ? 'persona' : 'personas'}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Mensaje (opcional)
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
                      <textarea
                        {...register('message')}
                        rows={3}
                        className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all resize-none"
                        placeholder="¿Alguna pregunta o petición especial?"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-ocean-500 hover:bg-ocean-600 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Enviar por WhatsApp
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
