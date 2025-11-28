import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { noticiasData } from '../../datos/noticias';
import TarjetaNoticia from '../../componentes/noticias/TarjetaNoticia';
import { ArrowLeft } from 'lucide-react';

export default function TodasNoticias() {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838]">
      {/* Header */}
      <div className="bg-[#c62926] h-[60px] sm:h-[70px] lg:h-[80px] px-4 sm:px-6 lg:px-8 flex items-center sticky top-0 z-50 shadow-lg">
        <button
          onClick={() => {
            navigate('/');
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[12px] sm:text-[14px] tracking-[-0.39px] font-['Arial:Regular',_sans-serif]">
            Volver al inicio
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative overflow-hidden py-12 sm:py-16 lg:py-24">
        {/* Efectos de blur decorativos */}
        <div className="absolute blur-3xl filter right-0 rounded-full size-[500px] top-[92.86px] opacity-20" />
        <div className="absolute blur-3xl filter left-0 rounded-full size-[400px] top-[305.32px] opacity-20" />

        {/* Contenido */}
        <div className="relative max-w-[1263px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-[rgba(255,255,255,0.5)] h-[4px] to-[rgba(0,0,0,0)] w-[200px] mb-4" />
            <h1 className="font-['Arial:Regular',_sans-serif] text-[32px] sm:text-[36px] lg:text-[40px] text-white tracking-[-2.88px] uppercase">
              Todas las noticias
            </h1>
          </div>

          {/* Grid de noticias */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[32px] gap-y-[48px] mb-16">
            {noticiasData.map((noticia) => (
              <TarjetaNoticia key={noticia.id} noticia={noticia} />
            ))}
          </div>

          {/* Botón Volver */}
          <div className="flex justify-center">
            <button
              onClick={() => {
                navigate('/');
                window.scrollTo(0, 0);
              }}
              className="bg-white text-[#c62926] px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 rounded-full hover:bg-[rgba(255,255,255,0.9)] transition-all hover:shadow-lg flex items-center gap-2 sm:gap-3 group"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:-translate-x-1" />
              <span className="font-['Arial:Regular',_sans-serif] text-[14px] sm:text-[15px] lg:text-[16px]">
                Volver al inicio
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Spacer */}
      <div className="h-16 sm:h-20 lg:h-24" />
    </div>
  );
}
