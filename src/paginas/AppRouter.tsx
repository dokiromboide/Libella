import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import App from "../app";
import { ProyectoDetalle } from "../componentes/proyectos/ProyectoDetalle";
import NoticiaDetalle from "./noticias/NoticiaDetalle";
import TodasNoticias from "./noticias/TodasNoticias";
import TodosProyectos from "./proyectos/TodosProyectos";
import Inversiones from "./Inversiones";
import Contactanos from "./Contactanos";
import Nosotros from "./Nosotros";
import Header from "../componentes/Header";

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

// Componente para la página principal (Inicio)
function HomePage() {
  const navigate = useNavigate();

  const handleNavigateToProject = (projectId: string) => {
    navigate(`/proyecto/${projectId}`);
    window.scrollTo(0, 0);
  };

  return <App onNavigateToProject={handleNavigateToProject} />;
}

// Componente para la página de detalle del proyecto
function ProyectoPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  // Verificar si el proyecto existe
  if (!projectId || !proyectosData[projectId]) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#c62926] to-[#403838]">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Proyecto no encontrado</h1>
          <button
            onClick={handleBackToHome}
            className="px-6 py-3 bg-white text-[#c62926] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const projectData = proyectosData[projectId];

  return (
    <ProyectoDetalle
      {...projectData}
      onVolver={handleBackToHome}
    />
  );
}

// Página placeholder genérica
function PaginaPlaceholder({ titulo, paginaActual }: { titulo: string; paginaActual: string }) {
  return (
    <div className="min-h-screen bg-[#403838]">
      <Header paginaActual={paginaActual} />
      <div className="pt-[80px] flex items-center justify-center min-h-screen">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4 font-['Arial']">{titulo}</h1>
          <p className="text-lg text-white/70 font-['Arial']">Próximamente</p>
        </div>
      </div>
    </div>
  );
}

// Router principal
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Página de inicio */}
        <Route path="/" element={<HomePage />} />
        
        {/* Página de inversiones */}
        <Route path="/inversiones" element={<Inversiones />} />
        
        {/* Páginas de proyectos */}
        <Route path="/proyectos" element={<TodosProyectos />} />
        <Route path="/proyecto/:projectId" element={<ProyectoPage />} />
        
        {/* Páginas de noticias */}
        <Route path="/noticias" element={<TodasNoticias />} />
        <Route path="/noticia/:id" element={<NoticiaDetalle />} />
        
        {/* Otras páginas (placeholders) */}
        <Route path="/servicios" element={<PaginaPlaceholder titulo="Servicios" paginaActual="SERVICIOS" />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contactanos />} />
      </Routes>
    </BrowserRouter>
  );
}
  