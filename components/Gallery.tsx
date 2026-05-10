'use client'

import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import { apartmentData } from '@/lib/data'
import { cn } from '@/lib/utils'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const currentPhotos =
    apartmentData.gallery.categories[selectedCategory]?.photos || []

  useEffect(() => {
    if (!lightboxOpen) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false)
      if (e.key === 'ArrowRight')
        setCurrentPhotoIndex((p) => (p + 1) % currentPhotos.length)
      if (e.key === 'ArrowLeft')
        setCurrentPhotoIndex((p) =>
          p === 0 ? currentPhotos.length - 1 : p - 1
        )
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [lightboxOpen, currentPhotos.length])

  return (
    <section id="galeria" className="py-fluid-xl bg-surface">
      <div className="container-page">
        <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between gap-6 mb-fluid-md">
          <div className="space-y-3 max-w-2xl">
            <span className="eyebrow">Galería</span>
            <h2 className="font-display font-semibold text-fluid-5xl text-primary leading-[1.05] tracking-tight text-balance">
              Conoce cada{' '}
              <span className="italic font-light text-ocean">rincón</span>
            </h2>
            <p className="text-muted text-fluid-lg leading-relaxed">
              Desde el salón con vistas hasta las dunas de El Puntal.
              Explora el apartamento y su entorno.
            </p>
          </div>
          <p className="text-muted text-fluid-sm">
            <span className="font-display font-semibold text-fluid-3xl text-primary">
              {apartmentData.gallery.categories.reduce(
                (acc, c) => acc + c.photos.length,
                0
              )}
            </span>{' '}
            fotos en {apartmentData.gallery.categories.length} colecciones
          </p>
        </div>

        {/* Tabs scroll horizontal */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-fluid-sm -mx-fluid-sm px-fluid-sm scrollbar-thin">
          {apartmentData.gallery.categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => {
                setSelectedCategory(index)
                setCurrentPhotoIndex(0)
              }}
              className={cn(
                'shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-fluid-sm font-medium transition-all duration-base whitespace-nowrap',
                selectedCategory === index
                  ? 'bg-primary text-primary-fg shadow-md'
                  : 'bg-surface-alt text-muted hover:text-primary hover:bg-border/40'
              )}
            >
              {category.name}
              <span
                className={cn(
                  'inline-flex items-center justify-center min-w-[1.5rem] h-5 px-1.5 rounded-full text-fluid-xs',
                  selectedCategory === index
                    ? 'bg-accent text-accent-fg'
                    : 'bg-border/50 text-muted'
                )}
              >
                {category.photos.length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid masonry-style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {currentPhotos.map((photo, index) => {
            // Patrón asimétrico: la primera más grande
            const isFeatured = index === 0
            return (
              <button
                key={index}
                onClick={() => {
                  setCurrentPhotoIndex(index)
                  setLightboxOpen(true)
                }}
                className={cn(
                  'group relative overflow-hidden rounded-2xl bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ring-offset-2 ring-offset-surface',
                  isFeatured
                    ? 'sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-[16/12]'
                    : 'aspect-[4/3]'
                )}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-slower ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url('${photo.url}')` }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/0 group-hover:bg-primary/20 transition-colors duration-base" />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-base">
                  <p className="text-white text-fluid-sm font-medium text-left">
                    {photo.alt}
                  </p>
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-base">
                  <Camera className="w-3.5 h-3.5 text-primary" />
                </div>
              </button>
            )
          })}
        </div>

        {currentPhotos.length === 0 && (
          <div className="text-center py-fluid-lg bg-surface-alt rounded-3xl">
            <Camera className="w-12 h-12 text-muted/40 mx-auto mb-3" />
            <p className="text-muted">No hay fotos en esta categoría</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentPhotos[currentPhotoIndex] && (
        <div
          className="fixed inset-0 z-[300] bg-primary/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            onClick={() => setLightboxOpen(false)}
            aria-label="Cerrar"
            className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full glass-dark text-white flex items-center justify-center hover:bg-white/15 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentPhotoIndex((p) =>
                p === 0 ? currentPhotos.length - 1 : p - 1
              )
            }}
            aria-label="Anterior"
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark text-white flex items-center justify-center hover:bg-white/15 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              setCurrentPhotoIndex((p) => (p + 1) % currentPhotos.length)
            }}
            aria-label="Siguiente"
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full glass-dark text-white flex items-center justify-center hover:bg-white/15 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-6xl w-full h-[80vh] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="absolute inset-0 bg-contain bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${currentPhotos[currentPhotoIndex].url}')`,
              }}
            />
          </div>

          <div className="absolute bottom-6 inset-x-0 text-center text-white">
            <p className="font-display text-fluid-lg">
              {currentPhotos[currentPhotoIndex].alt}
            </p>
            <p className="text-fluid-xs text-white/50 tracking-wider mt-1">
              {currentPhotoIndex + 1} / {currentPhotos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
