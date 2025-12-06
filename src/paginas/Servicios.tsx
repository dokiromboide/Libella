import { useState, useEffect } from "react";
import HeaderInicio from "../componentes/Header";
import FooterInicio from "../componentes/FooterInicio";
import SubserviciosArquitectura from "../componentes/servicios/SubserviciosArquitectura";
import SubserviciosMaquinaria from "../componentes/servicios/SubserviciosMaquinaria";
import SubserviciosExteriores from "../componentes/servicios/SubserviciosExteriores";
import SubserviciosPlanificacion from "../componentes/servicios/SubserviciosPlanificacion";
import SubserviciosUrbanismo from "../componentes/servicios/SubserviciosUrbanismo";

// Definir tipos
type ServiceType = 'main' | 'arquitectura' | 'maquinaria' | 'exteriores' | 'planificacion' | 'urbanismo';

// Componente de imagen con fallback
function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);
  
  if (error) {
    return <div className={`bg-gray-700 flex items-center justify-center ${className}`}>
      <span className="text-white/50 text-sm">{alt}</span>
    </div>;
  }
  
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
}

// Banner principal de servicios
function Banner() {
  return (
    <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] min-h-[220px] md:h-[316px] relative to-[#463f3f] w-full flex items-center justify-center">
      <div className="size-full">
        <div className="content-stretch flex flex-col min-h-[220px] md:h-[316px] items-center justify-center pb-0 pt-[40px] md:pt-[80px] px-[16px] md:px-[32px] relative w-full">
          <div className="relative w-full max-w-[1087px] text-center">
            <p className="font-['Arial'] leading-[36px] md:leading-[48px] text-[32px] md:text-[48px] text-center text-white tracking-[-1.92px] md:tracking-[-2.88px] uppercase mb-4 md:mb-6">
              Nuestros Servicios
            </p>
            <p className="font-['Arial'] leading-[24px] md:leading-[28px] text-[16px] md:text-[20px] text-[rgba(255,255,255,0.9)] text-center px-4 max-w-[712px] mx-auto">
              Ofrecemos soluciones integrales de arquitectura y diseño para hacer realidad tus proyectos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Grid de servicios
function SeccionServicios({ onNavigate }: { onNavigate: (service: ServiceType) => void }) {
  const services = [
    {
      id: 'arquitectura' as ServiceType,
      image: 'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      title: 'Arquitectura',
      description: 'Diseñamos espacios únicos que combinan funcionalidad, estética y sostenibilidad para crear edificios excepcionales.'
    },
    {
      id: 'maquinaria' as ServiceType,
      image: 'https://images.unsplash.com/photo-1727863526509-7670e063f308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      title: 'Maquinaria Amarilla',
      description: 'Alquiler de maquinaria pesada especializada para construcción, movimientos de tierra y obras civiles.'
    },
    {
      id: 'exteriores' as ServiceType,
      image: 'https://images.unsplash.com/photo-1595387426256-cc153122a6f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      title: 'Diseño de Exteriores',
      description: 'Creamos espacios exteriores armoniosos que integran paisajismo, mobiliario y elementos arquitectónicos.'
    },
    {
      id: 'planificacion' as ServiceType,
      image: 'https://images.unsplash.com/photo-1742415105473-94baf2e241ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      title: 'Planificación del Sitio',
      description: 'Análisis y planificación estratégica del terreno para optimizar el uso del espacio y los recursos disponibles.'
    },
    {
      id: 'urbanismo' as ServiceType,
      image: 'https://images.unsplash.com/photo-1727433121947-2b43e3fbf8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080',
      title: 'Urbanismo y Consultoría',
      description: 'Desarrollamos proyectos urbanos integrales y brindamos asesoramiento profesional en todas las fases de tu proyecto.'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#463f3f] from-[5.288%] min-h-[827.2px] to-[#c62926] to-[87.019%] w-full py-12 md:py-16 lg:py-20">
      <div className="content-stretch flex flex-col items-center px-[16px] md:px-[32px] w-full">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-[1087px]">
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => onNavigate(service.id)}
              className="bg-gradient-to-b from-[rgba(227,66,52,0.91)] to-[rgba(64,56,56,0.95)] rounded-[16px] md:rounded-[24px] overflow-hidden border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] transition-all hover:scale-105 cursor-pointer w-full md:w-[calc(33.333%-1rem)] max-w-[341px]"
            >
              <div className="w-full h-[180px] md:h-[200px] overflow-hidden">
                <ImageWithFallback 
                  alt={service.title} 
                  className="object-cover size-full hover:scale-110 transition-transform duration-500" 
                  src={service.image} 
                />
              </div>
              
              <div className="p-6 md:p-8">
                <h3 className="font-['Arial'] leading-[22px] md:leading-[24px] text-[15px] md:text-[16px] text-white tracking-[0.75px] md:tracking-[0.8px] uppercase mb-3 md:mb-4">
                  {service.title}
                </h3>
                
                <p className="font-['Arial'] leading-[22px] md:leading-[24px] text-[14px] md:text-[16px] text-[rgba(255,255,255,0.8)] mb-4 md:mb-6">
                  {service.description}
                </p>

                <div className="flex gap-2 items-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <p className="font-['Arial'] leading-[20px] text-[13px] md:text-[14px] text-white">Ver servicios</p>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                    <path d="M6 12L10 8L6 4" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Componente placeholder para subservicios (será reemplazado por los componentes reales)
function SubservicioPlaceholder({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838] flex flex-col">
      <HeaderInicio paginaActual="SERVICIOS" />
      <div className="flex-1 flex items-center justify-center px-6 pt-[80px]">
        <div className="text-center max-w-2xl">
          <h1 className="font-['Arial'] text-[32px] md:text-[48px] text-white mb-6">
            {title}
          </h1>
          <p className="font-['Arial'] text-[16px] md:text-[18px] text-white/80 mb-8">
            Contenido del servicio próximamente
          </p>
          <button
            onClick={onBack}
            className="bg-white text-[#c62926] px-8 py-3 rounded-lg font-['Arial'] text-[14px] md:text-[16px] uppercase tracking-wider hover:bg-gray-100 transition-colors"
          >
            Volver a Servicios
          </button>
        </div>
      </div>
      <FooterInicio />
    </div>
  );
}

// Componente principal de Servicios
export default function Servicios() {
  const [currentView, setCurrentView] = useState<ServiceType>('main');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'arquitectura':
        return <SubserviciosArquitectura onBack={() => setCurrentView('main')} />;
      case 'maquinaria':
        return <SubserviciosMaquinaria onBack={() => setCurrentView('main')} />;
      case 'exteriores':
        return <SubserviciosExteriores onBack={() => setCurrentView('main')} />;
      case 'planificacion':
        return <SubserviciosPlanificacion onBack={() => setCurrentView('main')} />;
      case 'urbanismo':
        return <SubserviciosUrbanismo onBack={() => setCurrentView('main')} />;
      default:
        return (
          <div className="bg-[#403838] min-h-screen">
            <HeaderInicio paginaActual="SERVICIOS" />
            <main className="pt-[80px]">
              <Banner />
              <SeccionServicios onNavigate={setCurrentView} />
              <FooterInicio />
            </main>
          </div>
        );
    }
  };

  return renderView();
}
