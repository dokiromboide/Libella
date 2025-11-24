import { useState } from "react";
import LibellaInicio from "../app";
import { ProyectoDetalle } from "../componentes/ProyectosDetalle";
import { motion } from "motion/react";

// Datos de los proyectos
const proyectosData: Record<string, any> = {
  "altos-cattleya": {
    nombreProyecto: "Altos de Cattleya",
    descripcion: "Parcelas desde 1000m² en conjunto cerrado con seguridad 24/7, vigilancia permanente y acceso controlado. Ubicadas en una zona estratégica con vistas panorámicas y acceso a servicios básicos.",
    ubicacion: "Totoró - vereda de Aguas Tibias, Cauca. (Kilómetro 6)",
    fechaEntrega: "Según disponibilidad",
    lotes: "Parcelas disponibles desde 1000m²",
    amenidades: ["Acceso controlado", "Vigilancia 24/7", "Vías internas", "Servicios básicos", "Áreas verdes", "Senderos peatonales"],
    porcentajeAvance: 75,
    detallesAvance: [
      { nombre: "Adecuación del terreno", porcentaje: 100 },
      { nombre: "Instalación de servicios", porcentaje: 80 },
      { nombre: "Vías de acceso", porcentaje: 70 },
      { nombre: "Áreas comunes", porcentaje: 60 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1486406146926-c62733dd37f7?w=1400&h=600&fit=crop"
  },
  "amsterdam": {
    nombreProyecto: "AmsterHaus",
    descripcion: "Hermosos apartamentos desde 55m² y apartaestudios desde 33.29m² con acabados modernos. Ubicados en el corazón de Popayán, cerca de comercios, restaurantes y transporte público.",
    ubicacion: "Popayán Cra 20 #55 N 64 (A dos minutos de Café La Palma)",
    fechaEntrega: "Próximamente",
    lotes: "Apartamentos disponibles desde 55m²",
    amenidades: ["Parqueadero privado", "Ascensor", "Áreas comunes", "Salón de eventos", "Terraza común", "Seguridad 24/7"],
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
  }
};

interface AppRouterProps {
  onNavigateToProject?: (projectId: string) => void;
}

export default function AppRouter({ onNavigateToProject }: AppRouterProps) {
  const [currentPage, setCurrentPage] = useState<string | null>(null);

  const handleNavigateToProject = (projectId: string) => {
    setCurrentPage(projectId);
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentPage(null);
    window.scrollTo(0, 0);
  };

  // Si estamos en una página de proyecto
  if (currentPage && proyectosData[currentPage]) {
    const projectData = proyectosData[currentPage];
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="fixed top-0 left-0 right-0 z-50 bg-[#c62926] shadow-lg">
          <motion.button
            onClick={handleBackToHome}
            className="m-4 px-6 py-2 bg-white text-[#c62926] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ← Volver al inicio
          </motion.button>
        </div>
        <div className="pt-16">
          <ProyectoDetalle
            nombreProyecto={projectData.nombreProyecto}
            descripcion={projectData.descripcion}
            ubicacion={projectData.ubicacion}
            fechaEntrega={projectData.fechaEntrega}
            lotes={projectData.lotes}
            amenidades={projectData.amenidades}
            porcentajeAvance={projectData.porcentajeAvance}
            detallesAvance={projectData.detallesAvance}
            imagenBanner={projectData.imagenBanner}
          />
        </div>
      </motion.div>
    );
  }

  // Página de inicio con capacidad de navegación
  return (
    <LibellaInicio 
      onNavigateToProject={handleNavigateToProject}
    />
  );
}
