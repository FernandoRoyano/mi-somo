'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Waves } from 'lucide-react'
import { apartmentData } from '@/lib/data'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Ubicación', href: '#ubicacion' },
  { name: 'Recomendaciones', href: '#gastronomia' },
  { name: 'Precios', href: '#precios' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'absolute inset-0 transition-all duration-base ease-out',
          scrolled
            ? 'bg-surface/75 backdrop-blur-xl backdrop-saturate-150 border-b border-border/40 shadow-sm'
            : 'bg-transparent'
        )}
      />
      <nav className="relative container-page">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#inicio"
            className={cn(
              'inline-flex items-center gap-2.5 font-display font-semibold text-fluid-xl tracking-tight transition-colors duration-base',
              scrolled ? 'text-primary' : 'text-white'
            )}
          >
            <span
              className={cn(
                'inline-flex w-9 h-9 rounded-full items-center justify-center transition-colors',
                scrolled ? 'bg-primary text-accent' : 'bg-white/15 text-white backdrop-blur'
              )}
            >
              <Waves className="w-4 h-4" strokeWidth={2.2} />
            </span>
            <span className="hidden sm:inline">{apartmentData.name}</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'relative px-3.5 py-2 text-fluid-sm font-medium rounded-full transition-colors duration-fast',
                  scrolled
                    ? 'text-muted hover:text-primary hover:bg-surface-alt'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              className={cn(
                'ml-2 inline-flex items-center gap-1.5 px-5 py-2 text-fluid-sm font-medium rounded-full transition-all duration-base',
                'bg-accent text-accent-fg hover:shadow-glow hover:-translate-y-0.5 active:scale-95'
              )}
            >
              Reservar →
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menú"
            aria-expanded={isOpen}
            className={cn(
              'md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors',
              scrolled
                ? 'text-primary hover:bg-surface-alt'
                : 'text-white hover:bg-white/10'
            )}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute left-fluid-sm right-fluid-sm mt-2 p-3 rounded-2xl glass shadow-xl animate-scale-in">
            <div className="flex flex-col">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-lg text-primary text-fluid-base font-medium hover:bg-surface-alt transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex justify-center items-center gap-2 bg-accent text-accent-fg px-5 py-3 rounded-xl font-medium"
              >
                Reservar ahora →
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
