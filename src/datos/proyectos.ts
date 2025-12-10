// Datos detallados de los proyectos de Libella

export interface DetalleAvance {
  nombre: string;
  porcentaje: number;
}

export interface ProyectoDetalle {
  nombreProyecto: string;
  descripcion: string;
  ubicacion: string;
  fechaEntrega: string;
  lotes: string;
  amenidades: string[];
  porcentajeAvance: number;
  detallesAvance: DetalleAvance[];
  imagenBanner: string;
  galeriaImagenes?: string[]; // Array de URLs de imágenes para la galería
}

export const proyectosData: Record<string, ProyectoDetalle> = {
  "altos-cattleya": {
    nombreProyecto: "Altos de Cattleya",
    descripcion: "Parcelas desde 1000m² en conjunto cerrado con seguridad 24/7, vigilancia permanente y acceso controlado. Ubicadas en una zona estratégica con vistas panorámicas y acceso a servicios básicos.",
    ubicacion: "Totoró - vereda de Aguas Tibias, Cauca. (Kilómetro 6)",
    fechaEntrega: "Según disponibilidad",
    lotes: "Parcelas disponibles desde 1000m²",
    amenidades: ["Agua y energía", "Zona de alta valorización", "Piscina", "Portería de ingreso", "Juegos infantiles", "Club house", "Conjunto cerrado","Via pavimentada hasta el proyecto", "Vias internas en huella de concreto"],
    porcentajeAvance: 75,
    detallesAvance: [
      { nombre: "Adecuación del terreno", porcentaje: 100 },
      { nombre: "Instalación de servicios", porcentaje: 80 },
      { nombre: "Vías de acceso", porcentaje: 70 },
      { nombre: "Áreas comunes", porcentaje: 60 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1486406146926-c62733dd37f7?w=1400&h=600&fit=crop",
    galeriaImagenes: [
      "https://images.unsplash.com/photo-1486406146926-c62733dd37f7?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&h=800&fit=crop"
    ]
  },
  "amsterdam": {
    nombreProyecto: "AmsterHaus",
    descripcion: "Hermosos apartamentos desde 55m² y apartaestudios desde 33.29m² con acabados modernos. Ubicados en el corazón de Popayán, cerca de comercios, restaurantes y transporte público.",
    ubicacion: "Popayán Cra 20 #55 N 64 (A dos minutos de Café La Palma)",
    fechaEntrega: "Próximamente",
    lotes: "Apartamentos disponibles desde 55m²",
    amenidades: ["Portería", "UTP", "Servicios públicos", "Fácil acceso", "Transporte público"],
    porcentajeAvance: 45,
    detallesAvance: [
      { nombre: "Cimentación", porcentaje: 100 },
      { nombre: "Estructura", porcentaje: 60 },
      { nombre: "Instalaciones", porcentaje: 30 },
      { nombre: "Acabados", porcentaje: 10 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&h=600&fit=crop"
  },
  "la-ceiba": {
    nombreProyecto: "La Ceiba",
    descripcion: "Espacio campestre con escrituras de 3000m² en copropiedad y listas para escriturar. Perfecto para quienes buscan tranquilidad y conexión con la naturaleza sin alejarse de la ciudad.",
    ubicacion: "Calibio, antigua carrilera, a 4.4km de la Variante Norte.",
    fechaEntrega: "Disponible inmediatamente",
    lotes: "Lotes campestres de 3000m²",
    amenidades: ["Paisaje natural", "Escrituras listas", "Servicios básicos", "Acceso vial", "Zona verde", "Fauna y flora nativa"],
    porcentajeAvance: 100,
    detallesAvance: [
      { nombre: "Levantamiento topográfico", porcentaje: 100 },
      { nombre: "División de lotes", porcentaje: 100 },
      { nombre: "Registros catastrales", porcentaje: 100 },
      { nombre: "Documentos legales", porcentaje: 100 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1500721694683-b8e8328cab37?w=1400&h=600&fit=crop"
  },
  "la-gran-turquesa": {
    nombreProyecto: "La Gran Turquesa",
    descripcion: "Exclusivo condominio campestre con amplias parcelas desde 1000m². Diseñado para ofrecer privacidad, seguridad y un estilo de vida de lujo en armonía con la naturaleza.",
    ubicacion: "Totoró, Cauca. (Kilómetro 4)",
    fechaEntrega: "Fase 2 en construcción",
    lotes: "Parcelas desde 1000m²",
    amenidades: ["Club house", "Piscina", "Cancha de tenis", "Zona de juegos", "Vigilancia permanente", "Áreas verdes amplias"],
    porcentajeAvance: 40,
    detallesAvance: [
      { nombre: "Fase 1 - Completada", porcentaje: 100 },
      { nombre: "Fase 2 - Estructura", porcentaje: 50 },
      { nombre: "Áreas comunes", porcentaje: 30 },
      { nombre: "Servicios complementarios", porcentaje: 20 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1512207736139-6c3ee1e93a00?w=1400&h=600&fit=crop"
  },
  "eskarlata": {
    nombreProyecto: "Eskarlata",
    descripcion: "Parque agroturístico temático que combina la experiencia de la imaginación con la naturaleza. Un espacio único diseñado para el entretenimiento familiar, la educación ambiental y el disfrute de actividades al aire libre en un entorno natural privilegiado.",
    ubicacion: "Patía, Cauca",
    fechaEntrega: "En desarrollo - Fase 1",
    lotes: "Proyecto de parque temático",
    amenidades: ["Zonas temáticas", "Áreas de camping", "Senderos ecológicos", "Zona de aventura", "Restaurante campestre", "Mirador panorámico"],
    porcentajeAvance: 35,
    detallesAvance: [
      { nombre: "Diseño arquitectónico", porcentaje: 100 },
      { nombre: "Adecuación del terreno", porcentaje: 60 },
      { nombre: "Construcción de zonas temáticas", porcentaje: 25 },
      { nombre: "Instalaciones y servicios", porcentaje: 15 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1400&h=600&fit=crop"
  },
  "aukana": {
    nombreProyecto: "Aukana",
    descripcion: "Ecoparque agroturístico que ofrece una experiencia única de conexión con la naturaleza. Diseñado para promover el turismo sostenible y la conservación ambiental, Aukana es el lugar perfecto para el descanso, la recreación y el aprendizaje sobre prácticas ecológicas.",
    ubicacion: "Popayán, Cauca",
    fechaEntrega: "En planificación - Fase inicial",
    lotes: "Proyecto de ecoparque",
    amenidades: ["Huertos orgánicos", "Zona de avistamiento de aves", "Centro de educación ambiental", "Senderos interpretativos", "Zona de picnic", "Granja interactiva"],
    porcentajeAvance: 25,
    detallesAvance: [
      { nombre: "Estudios ambientales", porcentaje: 100 },
      { nombre: "Planeación del proyecto", porcentaje: 80 },
      { nombre: "Permisos y licencias", porcentaje: 40 },
      { nombre: "Inicio de construcción", porcentaje: 10 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&h=600&fit=crop"
  },
  "caoba": {
    nombreProyecto: "Caoba",
    descripcion: "Hermosas parcelas en conjunto cerrado ubicadas en una zona estratégica con excelente acceso vial. Caoba ofrece un ambiente campestre exclusivo con todas las comodidades de la vida moderna, ideal para construir la casa de tus sueños rodeado de naturaleza.",
    ubicacion: "Km 3 Variante vía Las Margaritas - Popayán, Cauca",
    fechaEntrega: "Proyecto finalizado - Disponible",
    lotes: "Parcelas en conjunto cerrado",
    amenidades: ["Portería y vigilancia", "Vías pavimentadas", "Servicios públicos completos", "Zona verde comunal", "Áreas recreativas", "Iluminación LED"],
    porcentajeAvance: 100,
    detallesAvance: [
      { nombre: "Urbanización completa", porcentaje: 100 },
      { nombre: "Servicios instalados", porcentaje: 100 },
      { nombre: "Vías y accesos", porcentaje: 100 },
      { nombre: "Áreas comunes", porcentaje: 100 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1400&h=600&fit=crop"
  },
  "cattleya-campestre": {
    nombreProyecto: "Cattleya Campestre",
    descripcion: "Condominio campestre que rompe esquemas por sus características únicas y paisajes excepcionales. Un proyecto que combina exclusividad, naturaleza y confort, ofreciendo amplias parcelas con vistas panorámicas y acceso a servicios de primera categoría en un entorno privilegiado.",
    ubicacion: "Km 6 Vereda de Aguas Tibias - Totoró, Cauca",
    fechaEntrega: "Disponible - Últimas unidades",
    lotes: "Parcelas desde 1000m² en condominio",
    amenidades: ["Casa club", "Piscina", "Canchas deportivas", "Zona BBQ", "Parque infantil", "Senderos ecológicos", "Seguridad 24/7"],
    porcentajeAvance: 90,
    detallesAvance: [
      { nombre: "Infraestructura principal", porcentaje: 100 },
      { nombre: "Casa club y amenidades", porcentaje: 95 },
      { nombre: "Paisajismo y zonas verdes", porcentaje: 85 },
      { nombre: "Detalles finales", porcentaje: 75 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1464146072230-91cabc968266?w=1400&h=600&fit=crop"
  }
};
