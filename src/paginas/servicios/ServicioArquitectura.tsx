import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ImageWithFallback } from '../../componentes/servicios/ImageWithFallback';

export default function ServicioArquitectura() {
  const navigate = useNavigate();

  const subservicios = [
    {
      image: "https://images.unsplash.com/photo-1692870679156-efaeb2144737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kJTIwcGFyY2VsaW5nJTIwc3ViZGl2aXNpb258ZW58MXx8fHwxNzYyNTQ3MDM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Planificación de Parcelaciones",
      description: "Desarrollamos proyectos integrales de subdivisión y parcelación de terrenos que optimizan el aprovechamiento del suelo mediante diseños eficientes de lotificación."
    },
    {
      image: "https://images.unsplash.com/photo-1688143242905-2c7de6c33cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjBob3VzZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjI1NDU5Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Diseño de Viviendas con Criterios de Habitabilidad y Estética",
      description: "Creamos hogares excepcionales donde la habitabilidad, la estética pura y la eficiencia espacial se fusionan armoniosamente para generar espacios de vida extraordinarios."
    },
    {
      image: "https://images.unsplash.com/photo-1742415106160-594d07f6cc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwYmx1ZXByaW50cyUyMGNvbnN0cnVjdGlvbiUyMHBsYW5zfGVufDF8fHx8MTc2MjU0OTEzOXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Transformación de Requerimientos Funcionales en Planos Optimizados",
      description: "Mediante metodologías sistemáticas analizamos cada requerimiento espacial, optimizamos dimensiones, diseñamos circulaciones eficientes y desarrollamos soluciones técnicas."
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[rgba(227,66,52,0.97)] via-[#463f3f] to-[rgba(227,66,52,0.97)]">
      {/* Hero Section con botón de regreso */}
      <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#463f3f] min-h-[200px] md:h-[316px] flex items-center justify-center pt-20 md:pt-24">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/servicios')}
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-6 font-['Arial']"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver a Servicios</span>
          </button>
          
          <div className="text-center">
            <h1 className="font-['Arial'] text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-4 md:mb-6">
              Arquitectura
            </h1>
            <p className="font-['Arial'] text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
              Soluciones arquitectónicas especializadas para cada tipo de proyecto
            </p>
          </div>
        </div>
      </div>

      {/* Subservicios List */}
      <div className="flex-1 bg-gradient-to-b from-[#463f3f] to-[#c62926] py-12 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subservicios.map((servicio, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[rgba(227,66,52,0.91)] to-[rgba(64,56,56,0.95)] rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:shadow-lg overflow-hidden"
              >
                <div className="flex flex-col gap-4 p-6">
                  <div className="w-full h-56 rounded-xl overflow-hidden">
                    <ImageWithFallback 
                      alt={servicio.title} 
                      className="object-cover size-full" 
                      src={servicio.image} 
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-['Arial'] text-white text-base md:text-lg uppercase tracking-wide mb-3">
                      {servicio.title}
                    </h3>
                    
                    <p className="font-['Arial'] text-white/85 text-sm md:text-base leading-relaxed">
                      {servicio.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
