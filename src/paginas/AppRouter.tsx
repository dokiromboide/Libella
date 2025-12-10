import { BrowserRouter, Routes, Route, useParams, useNavigate } from "react-router-dom";
import InicioResponsive from "../InicioResponsive";
import { ProyectoDetalle } from "../componentes/proyectos/ProyectoDetalle";
import NoticiaDetalle from "./noticias/NoticiaDetalle";
import TodasNoticias from "./noticias/TodasNoticias";
import TodosProyectos from "./proyectos/TodosProyectos";
import Inversiones from "./Inversiones";
import Servicios from "./Servicios";
import Contactanos from "./Contactanos";
import Nosotros from "./Nosotros";
import Header from "../componentes/Header";
import { proyectosData } from "../datos/proyectos";

// Componente para la página principal (Inicio)
function HomePage() {
  return <InicioResponsive />;
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
        
        {/* Otras páginas */}
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contactanos />} />
      </Routes>
    </BrowserRouter>
  );
}
