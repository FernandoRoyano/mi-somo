'use client'

import { useState } from 'react'
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react'
import { apartmentData } from '@/lib/data'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const allPhotos = apartmentData.gallery.categories.flatMap((cat, catIndex) =>
    cat.photos.map((photo, photoIndex) => ({
      ...photo,
      category: cat.name,
      globalIndex: apartmentData.gallery.categories
        .slice(0, catIndex)
        .reduce((acc, c) => acc + c.photos.length, 0) + photoIndex
    }))
  )

  const currentCategoryPhotos = apartmentData.gallery.categories[selectedCategory]?.photos || []

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev < currentCategoryPhotos.length - 1 ? prev + 1 : 0
    )
  }

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev > 0 ? prev - 1 : currentCategoryPhotos.length - 1
    )
  }

  return (
    <section id="galeria" className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-ocean-600 mb-4">
            <Camera className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Galería</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Conoce tu próximo destino
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explora cada rincón del apartamento y sus alrededores
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {apartmentData.gallery.categories.map((category, index) => (
            <button
              key={category.name}
              onClick={() => {
                setSelectedCategory(index)
                setCurrentPhotoIndex(0)
              }}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                selectedCategory === index
                  ? 'bg-ocean-500 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-ocean-50 hover:text-ocean-600'
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">
                ({category.photos.length})
              </span>
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentCategoryPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Placeholder while images load */}
              <div className="absolute inset-0 bg-gradient-to-br from-ocean-200 to-ocean-300 flex items-center justify-center">
                <Camera className="w-12 h-12 text-ocean-400" />
              </div>

              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url('${photo.url}')` }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {currentCategoryPhotos.length === 0 && (
          <div className="text-center py-20 bg-white rounded-2xl">
            <Camera className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500">No hay fotos en esta categoría</p>
            <p className="text-sm text-slate-400 mt-2">
              Añade fotos en el archivo lib/data.ts
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && currentCategoryPhotos[currentPhotoIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 lightbox-overlay flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevPhoto()
            }}
            className="absolute left-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextPhoto()
            }}
            className="absolute right-4 text-white/70 hover:text-white p-2 transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] w-full h-full mx-4 bg-contain bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${currentCategoryPhotos[currentPhotoIndex].url}')`
            }}
            onClick={(e) => e.stopPropagation()}
          />

          {/* Caption */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
            <p className="font-medium">{currentCategoryPhotos[currentPhotoIndex].alt}</p>
            <p className="text-sm text-white/60 mt-1">
              {currentPhotoIndex + 1} / {currentCategoryPhotos.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
