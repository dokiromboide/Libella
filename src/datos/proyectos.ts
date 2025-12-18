// Datos detallados de los proyectos de Libella
import imgCattleya from "../recursos/imagenes/cattleya.png";
import imgAmsterdam from "../recursos/imagenes/amsterhaus.png";
import imgLaCeiba from "../recursos/imagenes/ceiba.png";
import imgLaGranTurquesa from "../recursos/imagenes/la-gran-turquesa.png";
import imgEskarlata from "../recursos/imagenes/eskarlata.png";
import imgAukana from "../recursos/imagenes/aukana.png";
import imgCaoba from "../recursos/imagenes/caoba.png";
import imgCattleyaCampestre from "../recursos/imagenes/cattleya-campestre.png";

export interface ProyectoDetalle {
  nombreProyecto: string;
  descripcion: string;
  ubicacion: string;
  fechaEntrega: string;
  lotes: string;
  amenidades: string[];
  imagenBanner: string;
  pdfPortfolio?: string;
  qrButtons?: {
    page: number;
    x: string;
    y: string;
    width: string;
    height: string;
    url: string;
    label?: string;
  }[];
}

export const proyectosData: Record<string, ProyectoDetalle> = {
  "altos-cattleya": {
    nombreProyecto: "Altos de Cattleya",
    descripcion: "Hermosa parcelación en conjunto cerrado con reglamento de propiedad horizontal y a 12 minutos del Centro Comercial Terraplaza.",
    ubicacion: "Km 6 vía Totoró - Vereda de Aguas Tibias, Cauca.",
    fechaEntrega: "Según disponibilidad",
    lotes: "Parcelas disponibles desde 1000m²",
    amenidades: ["Agua y energía", "Zona de alta valorización", "Piscina", "Portería de ingreso", "Juegos infantiles", "Club house", "Conjunto cerrado", "Via pavimentada hasta el proyecto", "Vias internas en huella de concreto"],
    imagenBanner: imgCattleya
  },
  "amsterdam": {
    nombreProyecto: "AmsterHaus",
    descripcion: "Residencia con un diseño que combina la elegancia del estilo clásico con la frescura de lo moderno, en un conjunto arquitectónico de torres angostas, colores vibrantes y grandes ventanales que invitan a la luz y a la amplitud.",
    ubicacion: "Popayán Cra 20 #55 N 64 (A dos minutos de Café La Palma)",
    fechaEntrega: "Próximamente",
    lotes: "Apartamentos disponibles desde 55m²",
    amenidades: ["Agua y energía", "Juegos infantiles", "Club house", "Zona de alta valorización", "Portería", "Piscina", "Conjunto cerrado", "Acueducto", "Via pavimentada hasta el proyecto"],
    imagenBanner: imgAmsterdam
  },
  "la-ceiba": {
    nombreProyecto: "La Ceiba",
    descripcion: "Hermosa parcelación en sistem a abierto, donde convergen las comodidades urbanas con la comodidad única de los espacios campestres.",
    ubicacion: "Calibio, antigua carrilera, a 4.4km de la Variante Norte.",
    fechaEntrega: "Según disponibilidad",
    lotes: "Lotes campestres de 3000m²",
    amenidades: ["Alcantarillado", "Sendero ecológico", "2.8 hectáreas de reserva forestal", "Energía", "Portería", "Acueduto", "Via principal con sistema ECODECK en concreto", "Vías en afirmado vibro compactado", "Puente vehícular", "Zona BBQ", "Salón social", "Planta de tratamiento de aguas residuales - PTAR"],
    imagenBanner: imgLaCeiba
  },
  "la-gran-turquesa": {
    nombreProyecto: "La Gran Turquesa",
    descripcion: "Exclusivo refugio campestre donde la arquitectura armoniza con la naturaleza, cada amanecer revela paisajes imponentes y atardeceres únicos sobre las colinas.",
    ubicacion: "Km 4 vía Totoró - Cauca",
    fechaEntrega: "En fase de construcción",
    lotes: "Parcelas desde 1000m²",
    amenidades: ["Servicio de agua y energía", "Vías en afirmado y huellas concreto", "Portería", "Cerramiento perimetral", "Mirador"],
    imagenBanner: imgLaGranTurquesa,
    pdfPortfolio: "/src/recursos/imagenes/LaGranTurquesaPortafolio1.pdf",
    qrButtons: [
      // EJEMPLO - Ajusta estas posiciones según donde estén los QRs reales
      {
        page: 5, // Página donde está el QR
        x: "70%", // Posición horizontal (izquierda a derecha)
        y: "80%", // Posición vertical (arriba a abajo)
        width: "100px", // Ancho del botón
        height: "100px", // Alto del botón
        url: "https://instagram.com/libella", // URL de redirección
        label: "Instagram" // Texto opcional
      }
      // Agrega más botones aquí según necesites
    ]
  },
  "eskarlata": {
    nombreProyecto: "Eskarlata",
    descripcion: "Parque agroturístico temático que combina la experiencia de la imaginación con la naturaleza. Un espacio único diseñado para el entretenimiento familiar, la educación ambiental y el disfrute de actividades al aire libre en un entorno natural privilegiado.",
    ubicacion: "Patía, Cauca",
    fechaEntrega: "En desarrollo",
    lotes: "Proyecto de parque temático",
    amenidades: ["Granja", "Estación de servicio", "Deportes extremos", "Reserva natural", "Atracciones mecánicas", "Diversas zonas"],
    imagenBanner: imgEskarlata
  },
  "aukana": {
    nombreProyecto: "Aukana",
    descripcion: "Ecoparque agroturístico que ofrece una experiencia única de conexión con la naturaleza.",
    ubicacion: "Popayán, Cauca",
    fechaEntrega: "En planificación",
    lotes: "Proyecto de ecoparque",
    amenidades: ["Por definir"],
    imagenBanner: imgAukana
  },
  "caoba": {
    nombreProyecto: "Caoba",
    descripcion: "Hermosas parcelas en conjunto cerrado. Caoba ofrece un ambiente campestre exclusivo con todas las comodidades de la vida moderna, donde podrás disfrutar de lo mejor de la naturaleza y la ciudad.",
    ubicacion: "Km 3 Variante vía Las Margaritas - Popayán, Cauca",
    fechaEntrega: "Proyecto finalizado - Disponible",
    lotes: "Parcelas en conjunto cerrado",
    amenidades: ["Garita de acceso", "Vías en afirmado", "Rodeado de la antigua carrilera"],
    imagenBanner: imgCaoba
  },
  "cattleya-campestre": {
    nombreProyecto: "Cattleya Campestre",
    descripcion: "Parcelación en conjunto cerrado que rompe esquemas por sus características únicas y paisajes excepcionales, junto a su clima ideal.",
    ubicacion: "Km 6 Vereda de Aguas Tibias - Totoró, Cauca",
    fechaEntrega: "Según disponibilidad",
    lotes: "Parcelas desde 1000m² en condominio",
    amenidades: ["Portería de ingreso doble", "Agua y energía", "Piscina", "Sendero ecológico", "3,7 hectáreas de reserva forestal", "Juegos infantiles", "Club house", "Conjunto cerrado", "Vías en huella concreto", "Zona de alta valorización"],
    imagenBanner: imgCattleyaCampestre
  }
};
