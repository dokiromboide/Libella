import { MessageCircle, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import HeaderInicio from '../HeaderInicio';
import FooterInicio from '../FooterInicio';

interface SubserviciosArquitecturaProps {
  onBack: () => void;
}

// Componente de imagen con fallback
function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);
  
  if (error) {
    return <div className={`bg-gray-700 flex items-center justify-center ${className}`}>
      <span className="text-white/50 text-sm text-center p-4">{alt}</span>
    </div>;
  }
  
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
}

export default function SubserviciosArquitectura({ onBack }: SubserviciosArquitecturaProps) {
  const subservicios = [
    {
      image: "https://images.unsplash.com/photo-1692870679156-efaeb2144737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Planificación de Parcelaciones",
      description: "Desarrollamos proyectos integrales de subdivisión y parcelación de terrenos que optimizan el aprovechamiento del suelo mediante diseños eficientes de lotificación."
    },
    {
      image: "https://images.unsplash.com/photo-1688143242905-2c7de6c33cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Diseño de Viviendas con Criterios de Habitabilidad y Estética",
      description: "Creamos hogares excepcionales donde la habitabilidad, la estética pura y la eficiencia espacial se fusionan armoniosamente para generar espacios de vida extraordinarios."
    },
    {
      image: "https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Transformación de Requerimientos Funcionales en Planos Optimizados",
      description: "Mediante metodologías sistemáticas analizamos cada requerimiento espacial, optimizamos dimensiones, diseñamos circulaciones eficientes y desarrollamos soluciones técnicas."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] via-[#403838] to-[rgba(198,41,38,0.97)] min-h-screen">
      <HeaderInicio paginaActual="SERVICIOS" />
      
      <main className="pt-[80px]">
        {/* Hero Section con botón de regreso */}
        <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] min-h-[200px] md:h-[280px] relative to-[#463f3f] w-full flex items-center justify-center">
          <button
            onClick={onBack}
            className="absolute left-6 top-6 md:left-12 md:top-12 flex items-center gap-2 text-white hover:text-white/80 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-['Arial'] text-[14px] md:text-[16px]">Volver</span>
          </button>
          
          <div className="max-w-[900px] text-center px-6">
            <h1 className="font-['Arial'] text-[32px] md:text-[48px] text-white tracking-[-1.92px] md:tracking-[-2.88px] uppercase mb-4 md:mb-6">
              Arquitectura
            </h1>
            <p className="font-['Arial'] text-[16px] md:text-[20px] text-[rgba(255,255,255,0.9)]">
              Soluciones arquitectónicas especializadas para cada tipo de proyecto
            </p>
          </div>
        </div>

        {/* Subservicios Grid */}
        <div className="bg-gradient-to-b from-[#463f3f] to-[#c62926] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subservicios.map((servicio, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[rgba(227,66,52,0.91)] to-[rgba(64,56,56,0.95)] rounded-[20px] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] transition-all hover:shadow-xl overflow-hidden group"
                >
                  <div className="h-[220px] rounded-t-[20px] overflow-hidden">
                    <ImageWithFallback 
                      alt={servicio.title} 
                      className="object-cover size-full group-hover:scale-110 transition-transform duration-500" 
                      src={servicio.image} 
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="font-['Arial'] text-[18px] md:text-[20px] text-white tracking-[0.9px] md:tracking-[1px] uppercase mb-4">
                      {servicio.title}
                    </h3>
                    
                    <p className="font-['Arial'] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.85)] leading-relaxed">
                      {servicio.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* WhatsApp Button */}
            <div className="flex justify-center mt-12">
              <a
                href="https://wa.me/573155456029?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20arquitectura"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all hover:scale-105 shadow-xl"
              >
                <MessageCircle size={24} />
                <span className="font-['Arial'] text-[16px] md:text-[18px] font-medium">Contáctanos por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <FooterInicio />
      </main>
    </div>
  );
}
