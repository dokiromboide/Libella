import { MessageCircle, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import HeaderInicio from '../HeaderInicio';
import FooterInicio from '../FooterInicio';

interface SubserviciosMaquinariaProps {
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

export default function SubserviciosMaquinaria({ onBack }: SubserviciosMaquinariaProps) {
  const subservicios = [
    {
      image: "https://images.unsplash.com/photo-1708117390188-d1547de962be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Apertura y Nivelación de Vías",
      description: "Construcción y nivelación de vías de acceso, caminos rurales y carreteras. Conformación de sub-rasante y compactación de base granular."
    },
    {
      image: "https://images.unsplash.com/photo-1761504537447-e39a3085d697?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Movimientos de Tierra",
      description: "Excavación, remoción y redistribución masiva de tierra. Conformación de plataformas constructivas, cortes y rellenos controlados."
    },
    {
      image: "https://images.unsplash.com/photo-1690719495572-bc42843eae29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
      title: "Descapote y Terraceo",
      description: "Remoción de capa vegetal superficial y nivelación de terrenos irregulares. Preparación de superficies constructivas mediante conformación de terrazas escalonadas."
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] via-[#403838] to-[rgba(198,41,38,0.97)] min-h-screen">
      <HeaderInicio paginaActual="SERVICIOS" />
      
      <main className="pt-[80px]">
        <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] min-h-[200px] md:h-[280px] relative to-[#463f3f] w-full flex items-center justify-center">
          <button
            onClick={onBack}
            className="absolute left-6 top-6 md:left-12 md:top-12 flex items-center gap-2 text-white hover:text-white/80 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-['Arial'] text-[14px] md:text-[16px]">Volver</span>
          </button>
          
          <div className="max-w-[900px] text-center px-6">
            <h1 className="font-['Arial'] text-[28px] md:text-[48px] text-white tracking-[-1.68px] md:tracking-[-2.88px] uppercase mb-4 md:mb-6">
              Maquinaria Amarilla
            </h1>
            <p className="font-['Arial'] text-[16px] md:text-[20px] text-[rgba(255,255,255,0.9)]">
              Alquiler de maquinaria pesada para construcción y obras civiles
            </p>
          </div>
        </div>

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
            
            <div className="flex justify-center mt-12">
              <a
                href="https://wa.me/573155456029?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20el%20alquiler%20de%20maquinaria%20amarilla"
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
