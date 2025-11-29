import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noticiasData } from '../../datos/noticias';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

export default function NoticiaDetalle() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const noticia = noticiasData.find(item => item.id === id);

  if (!noticia) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[48px] mb-6 font-['Arial:Regular',_sans-serif]">
            Noticia no encontrada
          </h1>
          <p className="text-[rgba(255,255,255,0.7)] text-[16px] mb-8 font-['Arial:Regular',_sans-serif]">
            Lo sentimos, la noticia que buscas no existe o ha sido eliminada.
          </p>
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-[#c62926] px-8 py-3 rounded-full hover:bg-[rgba(255,255,255,0.9)] transition-all hover:shadow-lg inline-flex items-center gap-2 text-[16px] font-['Arial:Regular',_sans-serif]"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver al inicio</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838] pb-16 sm:pb-20 lg:pb-24">
      {/* Header */}
      <div className="bg-[#c62926] h-[60px] sm:h-[70px] lg:h-[80px] px-4 sm:px-6 lg:px-8 flex items-center sticky top-0 z-50 shadow-lg">
        <button
          onClick={() => {
            navigate('/noticias');
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[12px] sm:text-[14px] tracking-[-0.39px] font-['Arial:Regular',_sans-serif]">
            Volver a noticias
          </span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative py-12 sm:py-16 lg:py-20">
        {/* Efectos de blur decorativos */}
        <div className="absolute blur-3xl filter right-0 rounded-full w-[500px] h-[500px] top-[92px] opacity-20 pointer-events-none bg-[rgba(255,255,255,0.1)]" />
        <div className="absolute blur-3xl filter left-0 rounded-full w-[400px] h-[400px] top-[305px] opacity-20 pointer-events-none bg-[rgba(255,255,255,0.1)]" />

        {/* Content Container */}
        <div className="relative max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumb / Category */}
          <div className="mb-6 sm:mb-8">
            <div className="bg-gradient-to-r from-[rgba(255,255,255,0.5)] to-[rgba(0,0,0,0)] h-[4px] w-[200px] mb-6" />
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-[20px] sm:rounded-[24px] overflow-hidden mb-10 sm:mb-12 lg:mb-16 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
            <img
              src={noticia.image}
              alt={noticia.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[rgba(135,21,21,0.6)] via-transparent to-[rgba(0,0,0,0.4)]" />
          </div>

          {/* Article Header */}
          <div className="mb-10 sm:mb-12">
            {/* Date and Reading Time */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-8 mb-6 sm:mb-8">
              <div className="flex items-center gap-2.5 text-[rgba(255,255,255,0.8)]">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[13px] sm:text-[14px] tracking-[0.5px] uppercase font-['Arial:Regular',_sans-serif]">
                  {noticia.date}
                </p>
              </div>
              <div className="flex items-center gap-2.5 text-[rgba(255,255,255,0.8)]">
                <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                <p className="text-[13px] sm:text-[14px] tracking-[0.5px] uppercase font-['Arial:Regular',_sans-serif]">
                  3 min de lectura
                </p>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-white text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.15] tracking-[-2.88px] mb-8 sm:mb-10 font-['Arial:Regular',_sans-serif]">
              {noticia.title}
            </h1>

            {/* Divider */}
            <div className="bg-gradient-to-r from-[rgba(255,255,255,0.6)] to-[rgba(0,0,0,0)] h-[3px] w-[150px]" />
          </div>

          {/* Excerpt Box */}
          <div className="bg-gradient-to-br from-[rgba(227,66,52,0.91)] to-[rgba(64,56,56,0.95)] border border-[rgba(255,255,255,0.2)] rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 shadow-[0px_20px_40px_-12px_rgba(0,0,0,0.35)]">
            <div className="mb-3">
              <div className="w-12 h-1 bg-white opacity-70 rounded-full" />
            </div>
            <p className="text-white text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.75] italic font-['Arial:Regular',_sans-serif]">
              "{noticia.excerpt}"
            </p>
          </div>

          {/* Full Content */}
          <div className="bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.1)] rounded-[20px] sm:rounded-[24px] p-6 sm:p-9 lg:p-12 mb-12 sm:mb-16 shadow-[0px_15px_35px_-10px_rgba(0,0,0,0.25)]">
            <div className="text-[rgba(255,255,255,0.92)] text-[15px] sm:text-[17px] lg:text-[18px] leading-[1.85] whitespace-pre-line font-['Arial:Regular',_sans-serif]">
              {noticia.fullContent}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8">
            <button
              onClick={() => {
                navigate('/noticias');
                window.scrollTo(0, 0);
              }}
              className="bg-white text-[#c62926] px-10 sm:px-12 lg:px-14 py-3.5 sm:py-4 lg:py-[18px] rounded-full hover:bg-[rgba(255,255,255,0.95)] transition-all hover:shadow-[0px_15px_30px_-8px_rgba(0,0,0,0.4)] inline-flex items-center gap-3 text-[15px] sm:text-[16px] font-['Arial:Regular',_sans-serif] group w-full sm:w-auto justify-center font-semibold"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              <span>Ver más noticias</span>
            </button>
            <button
              onClick={() => {
                navigate('/');
                window.scrollTo(0, 0);
              }}
              className="bg-[rgba(255,255,255,0.12)] border-2 border-[rgba(255,255,255,0.35)] text-white px-10 sm:px-12 lg:px-14 py-3.5 sm:py-4 lg:py-[18px] rounded-full hover:bg-[rgba(255,255,255,0.18)] hover:border-[rgba(255,255,255,0.5)] transition-all hover:shadow-[0px_12px_25px_-8px_rgba(0,0,0,0.3)] inline-flex items-center gap-3 text-[15px] sm:text-[16px] font-['Arial:Regular',_sans-serif] w-full sm:w-auto justify-center font-semibold"
            >
              <span>Ir al inicio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
