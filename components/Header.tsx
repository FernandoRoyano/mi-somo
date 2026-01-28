'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Home } from 'lucide-react'
import { apartmentData } from '@/lib/data'

const navigation = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Galería', href: '#galeria' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Ubicación', href: '#ubicacion' },
  { name: 'Precios', href: '#precios' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <a
            href="#inicio"
            className={`flex items-center gap-2 font-semibold text-lg transition-colors ${
              isScrolled ? 'text-ocean-700' : 'text-white'
            }`}
          >
            <Home className="w-6 h-6" />
            <span className="hidden sm:inline">{apartmentData.name}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-ocean-500 ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-ocean-500 hover:bg-ocean-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              Reservar
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-700' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white rounded-2xl shadow-xl mt-2 p-4 absolute left-4 right-4">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-700 hover:text-ocean-500 px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setIsOpen(false)}
                className="bg-ocean-500 hover:bg-ocean-600 text-white px-4 py-3 rounded-lg text-center font-medium transition-colors mt-2"
              >
                Reservar ahora
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
