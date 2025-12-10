import { MessageCircle, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import HeaderInicio from '../Header';
import FooterInicio from '../FooterInicio';

interface SubserviciosPlanificacionProps {
  onBack: () => void;
}

function ImageWithFallback({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [error, setError] = useState(false);
  if (error) return <div className={`bg-gray-700 flex items-center justify-center ${className}`}><span className="text-white/50 text-sm text-center p-4">{alt}</span></div>;
  return <img src={src} alt={alt} className={className} onError={() => setError(true)} />;
}

export default function SubserviciosPlanificacion({ onBack }: SubserviciosPlanificacionProps) {
  const subservicios = [
    {
      image: "https://images.unsplash.com/photo-1760553120324-d3d2bf53852b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Desarrollo de Planes para Terrenos Rurales y Urbanos",
      description: "Creamos planes maestros integrales que definen la visión estratégica de desarrollo a largo plazo para terrenos rurales y urbanos de cualquier escala."
    },
    {
      image: "https://images.unsplash.com/photo-1723650212085-3c4ea33701cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Integración de Vías, Topografías y Normativa",
      description: "Optimizamos el potencial de su lote mediante la integración armónica de sistemas viales, condiciones topográficas naturales y normativa urbana aplicable."
    },
    {
      image: "https://images.unsplash.com/photo-1680792181043-c148cf60cbf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Diseño Paisajístico Técnico",
      description: "Desarrollamos proyectos de diseño paisajístico con rigor técnico profesional que integran vegetación estratégica, sistemas de drenaje, topografía modificada y elementos constructivos de alta calidad."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] via-[#403838] to-[rgba(198,41,38,0.97)] min-h-screen">
      <HeaderInicio paginaActual="SERVICIOS" />
      <main className="pt-[80px]">
        <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] min-h-[200px] md:h-[280px] relative to-[#463f3f] w-full flex items-center justify-center">
          <button onClick={onBack} className="absolute left-6 top-6 md:left-12 md:top-12 flex items-center gap-2 text-white hover:text-white/80 transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-['Arial'] text-[14px] md:text-[16px]">Volver</span>
          </button>
          <div className="max-w-[900px] text-center px-6">
            <h1 className="font-['Arial'] text-[28px] md:text-[48px] text-white tracking-[-1.68px] md:tracking-[-2.88px] uppercase mb-4 md:mb-6">Planificación del Sitio</h1>
            <p className="font-['Arial'] text-[16px] md:text-[20px] text-[rgba(255,255,255,0.9)]">Análisis estratégico del terreno para optimizar cada proyecto</p>
          </div>
        </div>
        <div className="bg-gradient-to-b from-[#463f3f] to-[#c62926] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subservicios.map((servicio, index) => (
                <div key={index} className="bg-gradient-to-br from-[rgba(227,66,52,0.91)] to-[rgba(64,56,56,0.95)] rounded-[20px] border border-[rgba(255,255,255,0.1)] hover:border-[rgba(255,255,255,0.3)] transition-all hover:shadow-xl overflow-hidden group">
                  <div className="h-[220px] rounded-t-[20px] overflow-hidden">
                    <ImageWithFallback alt={servicio.title} className="object-cover size-full group-hover:scale-110 transition-transform duration-500" src={servicio.image} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-['Arial'] text-[18px] md:text-[20px] text-white tracking-[0.9px] md:tracking-[1px] uppercase mb-4">{servicio.title}</h3>
                    <p className="font-['Arial'] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.85)] leading-relaxed">{servicio.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <a href="https://wa.me/573155456029?text=Hola,%20me%20interesa%20conocer%20mas%20sobre%20sus%20servicios%20de%20planificacion%20del%20sitio" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all hover:scale-105 shadow-xl">
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
