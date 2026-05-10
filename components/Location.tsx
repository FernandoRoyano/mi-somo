'use client'

import { useEffect, useState } from 'react'
import {
  MapPin, Waves, ShoppingCart, UtensilsCrossed, Cross, Hospital, Bus, Navigation, ArrowUpRight,
  type LucideIcon,
} from 'lucide-react'
import { apartmentData } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Waves, ShoppingCart, UtensilsCrossed, Cross, Hospital, Bus,
}

function MapComponent() {
  const [Map, setMap] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    import('react-leaflet').then((module) => {
      const { MapContainer, TileLayer, Marker, Popup } = module
      import('leaflet').then((L) => {
        delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
          iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
        })
        const Wrapper = () => (
          <MapContainer
            center={[apartmentData.location.coordinates.lat, apartmentData.location.coordinates.lng]}
            zoom={15}
            className="w-full h-full"
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[apartmentData.location.coordinates.lat, apartmentData.location.coordinates.lng]}>
              <Popup>
                <strong>{apartmentData.name}</strong>
                <br />
                {apartmentData.location.address}
              </Popup>
            </Marker>
          </MapContainer>
        )
        setMap(() => Wrapper)
      })
    })
  }, [])

  if (!Map) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-ocean/10 to-accent/10 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-10 h-10 text-ocean mx-auto mb-2 animate-pulse" />
          <p className="text-muted text-fluid-sm">Cargando mapa…</p>
        </div>
      </div>
    )
  }
  return <Map />
}

export default function Location() {
  return (
    <section id="ubicacion" className="py-fluid-xl bg-surface">
      <div className="container-page">
        <div className="max-w-2xl mb-fluid-md space-y-3">
          <span className="eyebrow">
            <MapPin className="w-3.5 h-3.5" /> Ubicación
          </span>
          <h2 className="font-display font-semibold text-fluid-5xl text-primary leading-[1.05] tracking-tight text-balance">
            A 50 metros{' '}
            <span className="italic font-light text-ocean">del Cantábrico</span>
          </h2>
          <p className="text-muted text-fluid-lg leading-relaxed">
            {apartmentData.location.address}, {apartmentData.location.city}.
            En el corazón del paraíso surfista de Cantabria.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-6 lg:gap-8">
          {/* Mapa */}
          <div className="relative h-[420px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl border border-border/40 ring-1 ring-primary/5">
            <MapComponent />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${apartmentData.location.coordinates.lat},${apartmentData.location.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 right-4 sm:right-auto inline-flex items-center justify-center gap-2 glass text-primary px-5 py-3 rounded-full font-medium text-fluid-sm shadow-lg hover:shadow-xl transition-shadow z-[1000]"
            >
              <Navigation className="w-4 h-4" />
              Abrir en Google Maps
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Puntos de interés */}
          <div className="flex flex-col">
            <h3 className="font-display font-semibold text-fluid-2xl text-primary mb-fluid-2xs">
              Qué hay cerca
            </h3>

            <ul className="divide-y divide-border/50 flex-1">
              {apartmentData.pointsOfInterest.map((poi, index) => {
                const Icon = iconMap[poi.icon] || MapPin
                return (
                  <li
                    key={index}
                    className="group flex items-center gap-4 py-4 first:pt-0 hover:pl-1 transition-[padding] duration-base"
                  >
                    <div className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ocean/10 text-ocean group-hover:bg-accent/20 group-hover:text-primary transition-colors duration-base">
                      <Icon className="w-5 h-5" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-primary text-fluid-base leading-tight">
                        {poi.name}
                      </p>
                    </div>
                    <span className="font-display font-semibold text-fluid-base text-ocean tabular-nums">
                      {poi.distance}
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
