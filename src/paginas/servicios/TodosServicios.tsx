import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../../componentes/servicios/ImageWithFallback';

export default function TodosServicios() {
  const navigate = useNavigate();

  const services = [
    {
      id: 'arquitectura',
      image: 'https://images.unsplash.com/photo-1756227584303-f1400daaa69d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjI1MjMzNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Arquitectura',
      description: 'Diseñamos espacios únicos que combinan funcionalidad, estética y sostenibilidad para crear edificios excepcionales.'
    },
    {
      id: 'maquinaria',
      image: 'https://images.unsplash.com/photo-1727863526509-7670e063f308?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBjb25zdHJ1Y3Rpb24lMjBtYWNoaW5lcnl8ZW58MXx8fHwxNzYyNTQ0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Maquinaria Amarilla',
      description: 'Alquiler de maquinaria pesada especializada para construcción, movimientos de tierra y obras civiles.'
    },
    {
      id: 'exteriores',
      image: 'https://images.unsplash.com/photo-1595387426256-cc153122a6f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBnYXJkZW4lMjBkZXNpZ258ZW58MXx8fHwxNzYyNTQ0Njg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Diseño de Exteriores',
      description: 'Creamos espacios exteriores armoniosos que integran paisajismo, mobiliario y elementos arquitectónicos.'
    },
    {
      id: 'planificacion',
      image: 'https://images.unsplash.com/photo-1742415105473-94baf2e241ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaXRlJTIwcGxhbm5pbmclMjB0b3BvZ3JhcGh5fGVufDF8fHx8MTc2MjU0NDY5MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Planificación del Sitio',
      description: 'Análisis y planificación estratégica del terreno para optimizar el uso del espacio y los recursos disponibles.'
    },
    {
      id: 'urbanismo',
      image: 'https://images.unsplash.com/photo-1727433121947-2b43e3fbf8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHBsYW5uaW5nJTIwY2l0eXxlbnwxfHx8fDE3NjI1NDQ2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      title: 'Urbanismo y Consultoría',
      description: 'Desarrollamos proyectos urbanos integrales y brindamos asesoramiento profesional en todas las fases de tu proyecto.'
    }
  ];

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-b from-[rgba(227,66,52,0.97)] via-[#463f3f] to-[rgba(227,66,52,0.97)]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#463f3f] min-h-[220px] md:h-[316px] flex items-center justify-center pt-20 md:pt-24">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-['Arial'] text-white text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight mb-4 md:mb-6">
              Nuestros Servicios
            </h1>
            <p className="font-['Arial'] text-white/90 text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de arquitectura y diseño para hacer realidad tus proyectos
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="flex-1 bg-gradient-to-b from-[#463f3f] to-[#c62926] py-12 md:py-20">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => navigate(`/servicios/${service.id}`)}
                className="bg-gradient-to-b from-[rgba(227,66,52,0.91)] to-[rgba(64,56,56,0.95)] rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all hover:scale-105 cursor-pointer"
              >
                <div className="w-full h-48 md:h-56 overflow-hidden">
                  <ImageWithFallback 
                    alt={service.title} 
                    className="object-cover size-full" 
                    src={service.image} 
                  />
                </div>
                
                <div className="p-6 md:p-8">
                  <h3 className="font-['Arial'] text-white text-sm md:text-base uppercase tracking-wider mb-3 md:mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-['Arial'] text-white/80 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
                    {service.description}
                  </p>

                  <div className="flex gap-2 items-center opacity-70">
                    <p className="font-['Arial'] text-white text-xs md:text-sm">Ver servicios</p>
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
    </div>
  );
}
