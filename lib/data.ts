// ============================================
// CONFIGURACIÓN DEL APARTAMENTO
// Edita este archivo para personalizar tu web
// ============================================

export const apartmentData = {
  // Información básica
  name: "Apartamento Somo",
  tagline: "Una escapada para dos, frente al Cantábrico",
  description: "Apartamento acogedor en Somo, pensado para parejas que quieran desconectar a pie de playa, descubrir Cantabria sin prisa y disfrutar de su gastronomía.",

  // Capacidad
  guests: 2,
  bedrooms: 2,
  bathrooms: 1,

  // Ubicación - Somo, Cantabria
  location: {
    address: "Calle El Puntal 1, Ático B, Residencial Corconera",
    city: "Somo",
    region: "Cantabria",
    country: "España",
    // Coordenadas exactas del apartamento
    coordinates: {
      lat: 43.4547,
      lng: -3.7426
    }
  },

  // Contacto - EDITA CON TUS DATOS
  contact: {
    phone: "+34 600 000 000",
    whatsapp: "34600000000", // Sin + ni espacios para el link de WhatsApp
    email: "tu@email.com"
  },

  // Precios por temporada (en euros) - Basados en mercado Somo 2025
  pricing: {
    seasons: [
      {
        name: "Temporada Alta",
        dates: "1 Julio - 31 Agosto",
        pricePerNight: 175,
        pricePerWeek: 1200,
        color: "bg-red-100 text-red-800"
      },
      {
        name: "Temporada Media",
        dates: "1 - 30 Junio, 1 - 30 Septiembre",
        pricePerNight: 130,
        pricePerWeek: 850,
        color: "bg-yellow-100 text-yellow-800"
      },
      {
        name: "Temporada Baja",
        dates: "Octubre - Mayo",
        pricePerNight: 80,
        pricePerWeek: 500,
        color: "bg-green-100 text-green-800"
      }
    ],
    extras: {
      cleaningFee: 60,
      deposit: 300,
      minimumNights: 3
    }
  },

  // Servicios y equipamiento
  amenities: [
    { icon: "Wifi", name: "WiFi de alta velocidad", description: "Fibra óptica 300Mb" },
    { icon: "Shield", name: "Alarma de seguridad", description: "Sistema conectado 24h" },
    { icon: "Coffee", name: "Cafetera", description: "Nespresso con cápsulas" },
    { icon: "Wind", name: "Secador de pelo", description: "En el baño" },
    { icon: "Flame", name: "Calefacción", description: "Central + calefactores" },
    { icon: "Tv", name: "Smart TV", description: "55\" con Netflix y apps" },
    { icon: "WashingMachine", name: "Lavadora", description: "Lavadora-secadora" },
    { icon: "ChefHat", name: "Cocina equipada", description: "Vitro, horno, microondas" },
    { icon: "Car", name: "Parking privado", description: "Plaza de garaje incluida" },
    { icon: "Bed", name: "Ropa de cama", description: "Sábanas y edredones" },
    { icon: "Bath", name: "Toallas", description: "Juego completo incluido" },
    { icon: "Waves", name: "Cerca de la playa", description: "A 2 minutos andando" }
  ],

  // Puntos de interés cercanos - El Puntal, Somo
  pointsOfInterest: [
    { name: "Playas de Somo y El Puntal", distance: "50m", icon: "Waves" },
    { name: "Escuela Cántabra de Surf", distance: "300m", icon: "Waves" },
    { name: "Chiringuito El Puntal", distance: "200m", icon: "UtensilsCrossed" },
    { name: "Supermercado", distance: "400m", icon: "ShoppingCart" },
    { name: "Ferry a Santander", distance: "1km", icon: "Bus" },
    { name: "Santander centro", distance: "15min ferry", icon: "Bus" }
  ],

  // Galería de fotos - Fotos reales del apartamento
  gallery: {
    hero: "/images/playa-somo.jpg", // Playa de Somo - surfistas
    categories: [
      {
        name: "Salón",
        photos: [
          { url: "/images/salon-completo.jpg", alt: "Salón con vistas" },
          { url: "/images/salon-1.jpg", alt: "Zona de estar" },
          { url: "/images/salon-2.jpg", alt: "Comedor" }
        ]
      },
      {
        name: "Cocina",
        photos: [
          { url: "/images/cocina-completa.jpg", alt: "Cocina equipada" },
          { url: "/images/cocina-1.jpg", alt: "Electrodomésticos" },
          { url: "/images/cocina-comedor.jpg", alt: "Office" }
        ]
      },
      {
        name: "Dormitorios",
        photos: [
          { url: "/images/dormitorio-principal.jpg", alt: "Dormitorio principal" },
          { url: "/images/dormitorio-cama.jpg", alt: "Cama doble" },
          { url: "/images/dormitorio-armario.jpg", alt: "Armario empotrado" },
          { url: "/images/dormitorio-secundario.jpg", alt: "Dormitorio individual" }
        ]
      },
      {
        name: "Baño",
        photos: [
          { url: "/images/bano-1.jpg", alt: "Baño con bañera" },
          { url: "/images/bano-2.jpg", alt: "Bañera" },
          { url: "/images/bano-lavabo.jpg", alt: "Lavabo y bidé" }
        ]
      },
      {
        name: "Vistas y Edificio",
        photos: [
          { url: "/images/vistas-terraza.jpg", alt: "Vista general" },
          { url: "/images/edificio.jpg", alt: "Residencial Corconera" }
        ]
      },
      {
        name: "Playas de Somo",
        photos: [
          { url: "/images/playa-somo.jpg", alt: "Playa de Somo" },
          { url: "/images/playa-surfista.jpg", alt: "Surfistas" },
          { url: "/images/dunas.jpg", alt: "Dunas de Somo" },
          { url: "/images/paseo-playa.jpg", alt: "Paseo marítimo" }
        ]
      }
    ]
  },

  // Normas de la casa
  houseRules: [
    "Check-in: 16:00 - 20:00",
    "Check-out: antes de las 11:00",
    "No se permiten fiestas",
    "No fumar dentro del apartamento",
    "Mascotas: consultar"
  ]
}

// Mensajes predefinidos para WhatsApp
export const whatsappMessages = {
  inquiry: (dates: string, guests: number) =>
    `Hola! Me interesa alquilar el apartamento ${apartmentData.name}.\n\nFechas: ${dates}\nPersonas: ${guests}\n\n¿Está disponible?`,

  default: () =>
    `Hola! Me interesa alquilar el apartamento ${apartmentData.name}. ¿Podría darme más información?`
}
