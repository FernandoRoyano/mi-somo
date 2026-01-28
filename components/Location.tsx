'use client'

import { useEffect, useState } from 'react'
import {
  MapPin,
  Waves,
  ShoppingCart,
  UtensilsCrossed,
  Cross,
  Hospital,
  Bus,
  Navigation
} from 'lucide-react'
import { apartmentData } from '@/lib/data'

// Map icon names to components
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Waves,
  ShoppingCart,
  UtensilsCrossed,
  Cross,
  Hospital,
  Bus,
}

// Dynamic import for Leaflet (client-side only)
function MapComponent() {
  const [Map, setMap] = useState<React.ComponentType<any> | null>(null)

  useEffect(() => {
    // Dynamically import react-leaflet
    import('react-leaflet').then((module) => {
      const { MapContainer, TileLayer, Marker, Popup } = module

      // Fix default marker icon issue in Leaflet
      import('leaflet').then((L) => {
        delete (L.Icon.Default.prototype as any)._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        })

        // Create the map component
        const MapWrapper = () => (
          <MapContainer
            center={[
              apartmentData.location.coordinates.lat,
              apartmentData.location.coordinates.lng
            ]}
            zoom={15}
            className="w-full h-full rounded-2xl"
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={[
                apartmentData.location.coordinates.lat,
                apartmentData.location.coordinates.lng
              ]}
            >
              <Popup>
                <strong>{apartmentData.name}</strong>
                <br />
                {apartmentData.location.address}
              </Popup>
            </Marker>
          </MapContainer>
        )

        setMap(() => MapWrapper)
      })
    })
  }, [])

  if (!Map) {
    return (
      <div className="w-full h-full bg-ocean-100 rounded-2xl flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-ocean-400 mx-auto mb-2" />
          <p className="text-ocean-600">Cargando mapa...</p>
        </div>
      </div>
    )
  }

  return <Map />
}

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-ocean-600 mb-4">
            <MapPin className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Ubicación</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
            Ubicación privilegiada
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {apartmentData.location.address}, {apartmentData.location.city}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <MapComponent />
          </div>

          {/* Points of Interest */}
          <div className="flex flex-col">
            <h3 className="text-xl font-bold text-slate-800 mb-6">
              Qué hay cerca
            </h3>

            <div className="space-y-4 flex-grow">
              {apartmentData.pointsOfInterest.map((poi, index) => {
                const IconComponent = iconMap[poi.icon] || MapPin
                return (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 bg-ocean-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-ocean-600" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-slate-800">{poi.name}</h4>
                    </div>
                    <div className="text-ocean-600 font-semibold">
                      {poi.distance}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Google Maps Link */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${apartmentData.location.coordinates.lat},${apartmentData.location.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-ocean-500 hover:bg-ocean-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
