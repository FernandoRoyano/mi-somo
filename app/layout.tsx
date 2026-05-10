import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import './globals.css'
import { apartmentData } from '@/lib/data'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['SOFT', 'opsz'],
})

export const metadata: Metadata = {
  title: `${apartmentData.name} — ${apartmentData.tagline}`,
  description: apartmentData.description,
  keywords: [
    'alquiler vacacional',
    'apartamento Somo',
    'surf Cantabria',
    apartmentData.location.city,
    apartmentData.location.region,
    'playa El Puntal',
    'vacaciones norte España',
  ],
  openGraph: {
    title: apartmentData.name,
    description: apartmentData.description,
    type: 'website',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: apartmentData.name,
    description: apartmentData.description,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0B2942" />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
