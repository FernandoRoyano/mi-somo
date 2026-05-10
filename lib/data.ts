// ============================================
// CONFIGURACIÓN DEL APARTAMENTO
// Edita este archivo para personalizar tu web
// ============================================

export interface Place {
  name: string
  area: string
  schedule?: string
  description: string
  highlight?: string
  rating: number
  badge?: string
  featured?: boolean
}

export interface RecommendationCategory {
  id: string
  name: string
  icon: string
  subtitle: string
  places: Place[]
}

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

  // Recomendaciones curadas — gastronomía y planes
  recommendations: {
    categories: [
      {
        id: "tapeo",
        name: "Tapeo",
        icon: "Beer",
        subtitle: "Pinchos y tapeo en Santander",
        places: [
          {
            name: "Casa Lita",
            area: "Paseo de Pereda, 37",
            schedule: "12h–24h · Cerrado lunes",
            description: "El templo del pintxo en Santander. Pinchos calientes impresionantes y mucho ambiente.",
            highlight: "Pide los pinchos calientes. Llega antes de las 13h o habrá cola.",
            rating: 4.3,
            badge: "Top",
            featured: true
          },
          {
            name: "Casa Ajero",
            area: "Daoiz y Velarde, 18 · Cerrado lunes",
            description: "El antídoto al turismo. Vino de la casa a 2,50€, pulpo con patata, calamar con cebolla. Barra de toda la vida.",
            rating: 4.3,
            badge: "Solo locales"
          },
          {
            name: "Bar La Cátedra",
            area: "C/ del Medio, 5 · Todos los días",
            description: "Ambiente nocturno chulo y terraza agradable. Los champiñones en salsa de queso azul son de otro nivel.",
            rating: 4.1
          }
        ]
      },
      {
        id: "tortilla",
        name: "Tortilla",
        icon: "EggFried",
        subtitle: "Bares de toda la vida",
        places: [
          {
            name: "Bodega del Riojano",
            area: "C/ Río de la Pila, 5",
            schedule: "Mediodía y noches · Dom solo mediodía",
            description: "Bodega del s. XVI con barriles pintados por artistas cántabros. La tortilla de chorizo es legendaria.",
            highlight: "Comer aquí es como entrar en una instalación de arte. La tortilla de chorizo: pídela sí o sí.",
            rating: 4.4,
            badge: "Más auténtica",
            featured: true
          },
          {
            name: "Cañadío",
            area: "C/ Gómez Oreña, 15 · Cerrado dom noche",
            description: "La tortilla de patata de Cañadío tiene fama propia desde hace décadas. Punto cremoso perfecto.",
            rating: 4.3,
            badge: "Institución"
          },
          {
            name: "Diluvio",
            area: "C/ Ataulfo Argenta, 14",
            description: "Bar clásico reformado del centro. Tortilla de gorgonzola con cebolla caramelizada.",
            highlight: "Llega antes de las 13:30h — los pinchos se agotan.",
            rating: 4.1
          },
          {
            name: "Taberna El Inicio",
            area: "Av. Los Castros, 7 · L–V · 7:30–21h",
            description: "Joya escondida recién reabierta. Dicen que tiene la mejor tortilla para desayunar en Santander.",
            rating: 4.7,
            badge: "Joya escondida"
          },
          {
            name: "Cafetería Rúa",
            area: "C/ Rualasal, 15 · Desde 8:30h",
            description: "3€ la ración con pan. La mejor relación calidad-precio del centro. Varios tipos de tortilla y zumo natural.",
            rating: 4.5
          }
        ]
      },
      {
        id: "rabas",
        name: "Rabas",
        icon: "Fish",
        subtitle: "El plato cantábrico por excelencia",
        places: [
          {
            name: "Marisquería Casa José",
            area: "Pl. Cabildos, 1 · Cerrado martes",
            description: "Solo van locales. En el puerto pesquero. Porciones brutales: zamburiñas, pulpo, croquetas de jamón ibérico.",
            highlight: "El punto destacado de toda nuestra semana en España — reseña real.",
            rating: 4.4,
            badge: "Puerto pesquero",
            featured: true
          },
          {
            name: "Taberna La Prensa",
            area: "Bo. Monte La Torre, 86 · Cerrado martes",
            description: "Porciones desmesuradas. Anchoítas frescas y mariscos de temporada. Ambiente taberna auténtico.",
            rating: 4.4
          },
          {
            name: "La Chulilla",
            area: "Av. Sotileza, 36 · Cerrado lunes",
            description: "Pequeño restaurante junto a los barcos. 30 min a pie del centro. Producto fresquísimo, paella individual sobresaliente.",
            rating: 4.5
          }
        ]
      },
      {
        id: "restaurantes",
        name: "Restaurantes",
        icon: "UtensilsCrossed",
        subtitle: "De nivel sin arruinarse",
        places: [
          {
            name: "Cadelo",
            area: "C/ Sta. Lucía, 33 · 13:30–15:30 / 20:30–23",
            description: "Cocina española con toque asiático. Servicio impecable. Buñuelos de bacalao, karaage, pan con chocolate.",
            highlight: "Reserva imprescindible. Se llena siempre.",
            rating: 4.7,
            badge: "El mejor valorado",
            featured: true
          },
          {
            name: "La Magnolia",
            area: "C/ Tetuán, 21 · Solo Jue–Dom",
            description: "Menú corto ejecutado a la perfección. Las mejores croquetas de Santander. Tacos, tataki de atún y burrata sobresalientes.",
            rating: 4.6,
            badge: "Croquetas legendarias"
          },
          {
            name: "Posada del Mar",
            area: "C/ Castelar, 19 · Cerrado lun y sáb noche",
            description: "Pescado de altísima calidad. El rape es espectacular. Personal muy formado, vistas tranquilas al puerto.",
            rating: 4.6
          },
          {
            name: "La Ventana",
            area: "C/ El Somo, 114 · Cerrado domingos",
            description: "Rabas y croquetas excelentes. Paella sobresaliente. Tiene opciones para vegetarianos (raro en la zona).",
            rating: 4.6
          }
        ]
      },
      {
        id: "brunch",
        name: "Brunch & Cafés",
        icon: "Coffee",
        subtitle: "Para empezar el día con calma",
        places: [
          {
            name: "Pravda",
            area: "C/ Guevara, 28 · Cerrado lunes",
            description: "El café más íntimo de Santander. 40 tipos de té, tartas caseras, arte y biblioteca. Oasis tranquila en el centro histórico.",
            rating: 4.8,
            badge: "El más especial",
            featured: true
          },
          {
            name: "Salvaje Santander",
            area: "C/ Ataulfo Argenta, 31 · Desde 10h",
            description: "El referente del brunch en la ciudad. Açaí bowls, eggs Benedict, menús completos. Ambiente casual.",
            rating: 4.4,
            badge: "Brunch completo"
          },
          {
            name: "With Love",
            area: "C/ Joaquín Costa, 18A · Mar–Sáb · Sardinero",
            description: "Pancakes, cinnamon bun de pistacho, café estilo americano. Las mejores tartas del norte de España.",
            rating: 4.7
          }
        ]
      },
      {
        id: "somo",
        name: "En Somo",
        icon: "Waves",
        subtitle: "A un paso del apartamento",
        places: [
          {
            name: "Surf Cafe",
            area: "C/ Las Quebrantas, 114 · 8–23h",
            description: "Frente a la playa. Tortilla mirando las olas, buen café y ambiente relajado.",
            highlight: "La tortilla con vistas al mar de Somo.",
            rating: 4.1,
            badge: "Frente al mar",
            featured: true
          },
          {
            name: "Bar Pepe",
            area: "C/ Isla de Mouro, 1 · 11h–24h",
            description: "El clásico del pueblo. Hamburguesas, torreznos y queso fundido. Ambiente de toda la vida.",
            rating: 4.0
          },
          {
            name: "Onda Açaí",
            area: "C/ Isla de Mouro, 10 · L–V tardes / Sáb–Dom",
            description: "El mejor açaí bowl de la zona. Aguacate, café, opciones sin gluten. Ideal para una mañana de playa.",
            rating: 4.6,
            badge: "Brunch saludable"
          }
        ]
      },
      {
        id: "cultura",
        name: "Cultura & visitas",
        icon: "Landmark",
        subtitle: "Planes que merecen la pena",
        places: [
          {
            name: "Palacio de la Magdalena",
            area: "Av. de la Magdalena, 1 · Jardines gratis",
            description: "Residencia de verano de Alfonso XIII. Jardines con vistas al mar espectaculares. Hay focas en el pequeño zoo.",
            highlight: "Ve andando, no cojas el trenecito.",
            rating: 4.6,
            badge: "Imprescindible",
            featured: true
          },
          {
            name: "Centro Botín",
            area: "Paseo de Pereda · Cerrado lunes · ~5€",
            description: "Diseñado por Renzo Piano, frente al mar. Arte contemporáneo. La sala final con ventanal al Cantábrico vale la entrada sola.",
            rating: 4.3
          },
          {
            name: "Refugio Antiaéreo",
            area: "Pl. del Príncipe · Gratis",
            description: "Búnker de la Guerra Civil bajo la ciudad. Visita guiada de 45 min muy impactante. Solo 2h por turno.",
            rating: 4.6
          },
          {
            name: "Parque de Cabárceno",
            area: "A 20 min · 9:30–17h (18h findes)",
            description: "Antigua mina convertida en reserva natural. Elefantes, rinocerontes y osos en semilibertad. El telecabina es obligatorio.",
            rating: 4.5,
            badge: "A 20 min"
          },
          {
            name: "Secuoyas de Cabezón de la Sal",
            area: "A 45 min · Gratuito · 24h",
            description: "El bosque de secuoyas más grande de Europa. Alucinante y gratuito. Combínalo con el interior de Cantabria.",
            rating: 4.7
          }
        ]
      }
    ],
    route: {
      day1: {
        title: "Día 1 — Santander",
        stops: [
          { time: "Desayuno",    title: "Cafetería Rúa o Taberna El Inicio", desc: "Tortilla con café y zumo natural. La mejor forma de empezar el día." },
          { time: "Mañana",      title: "Paseo de Pereda + Centro Botín",     desc: "Escultura de Los Raqueros y arte contemporáneo con vistas al puerto (~1h)." },
          { time: "Mediodía",    title: "Cañadío o Bodega del Riojano",       desc: "La tortilla mítica de Cañadío o la de chorizo en la Bodega. Ambas son experiencias diferentes." },
          { time: "Tarde",       title: "Palacio de la Magdalena",            desc: "Paseo por los jardines, vistas al Cantábrico y focas. Sin trenecito." },
          { time: "Noche",       title: "Circuito de pinchos",                desc: "Casa Ajero → Bar La Cátedra → Casa Lita. De más tranquilo a más animado." }
        ]
      },
      day2: {
        title: "Día 2 — Somo + rabas",
        stops: [
          { time: "Mañana",      title: "Ferry a Santander (~25 min)",        desc: "Mucho más bonito que ir en coche. Sale del muelle de Somo." },
          { time: "Desayuno",    title: "Surf Cafe o Onda Açaí",              desc: "Tortilla con vistas al mar o açaí bowl, según el día." },
          { time: "Media mañana", title: "Playa & Paseo del Puntal",          desc: "Una de las playas más bonitas de Cantabria. Larga, con dunas y sin masificación." },
          { time: "Mediodía",    title: "Marisquería Casa José",              desc: "Las rabas más épicas del viaje. Puerto pesquero, solo locales. Añade zamburiñas." },
          { time: "Cena",        title: "Cadelo",                             desc: "El mejor restaurante de Santander para cerrar. Reserva imprescindible." }
        ]
      }
    },
    tips: [
      "El ferry Somo–Santander cuesta ~2,80€ y es la forma más bonita de cruzar la bahía.",
      "Reserva Cadelo y Cañadío con antelación, sobre todo en verano y fines de semana.",
      "En los bares de pinchos, llega antes de las 13:30h: los calientes se acaban.",
      "Casa José y La Chulilla están en el barrio pesquero — un taxi desde el centro son 10 min.",
      "Para el Refugio Antiaéreo necesitas presentarte en el horario exacto de apertura."
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
