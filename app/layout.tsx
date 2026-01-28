import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { apartmentData } from '@/lib/data'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${apartmentData.name} | Alquiler Vacacional`,
  description: apartmentData.description,
  keywords: [
    'alquiler vacacional',
    'apartamento playa',
    apartmentData.location.city,
    apartmentData.location.region,
    'vacaciones',
    'costa atlántica',
    'alojamiento'
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
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
