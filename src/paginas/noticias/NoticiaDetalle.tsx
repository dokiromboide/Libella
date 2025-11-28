import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { noticiasData } from '../../datos/noticias';
import { ArrowLeft } from 'lucide-react';

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
          <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[48px] mb-4 sm:mb-6">
            Noticia no encontrada
          </h1>
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-[#c62926] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full hover:bg-[rgba(255,255,255,0.9)] transition-colors text-[14px] sm:text-[16px]"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }
  
  const imageUrl = noticia.image;

  return (
    <div className="w-full bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838]">
      {/* Header */}
      <div className="bg-[#c62926] h-[60px] sm:h-[70px] lg:h-[80px] px-4 sm:px-6 lg:px-8 flex items-center sticky top-0 z-50 shadow-lg">
        <button
          onClick={() => {
            navigate(-1);
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="text-[12px] sm:text-[14px] tracking-[-0.39px] font-['Arial:Regular',_sans-serif]">
            Volver
          </span>
        </button>
      </div>

      {/* Content */}
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Image */}
        <div className="relative w-full h-[200px] sm:h-[300px] lg:h-[400px] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] overflow-hidden mb-6 sm:mb-8 lg:mb-12 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
          <img 
            src={imageUrl} 
            alt={noticia.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(135,21,21,0.7)] to-[rgba(0,0,0,0.3)]" />
        </div>

        {/* Date */}
        <div className="mb-4 sm:mb-6">
          <p className="text-[rgba(255,255,255,0.7)] text-[12px] sm:text-[14px] tracking-[0.6px] uppercase font-['Arial:Regular',_sans-serif]">
            {noticia.date}
          </p>
        </div>

        {/* Title */}
        <h1 className="text-white text-[28px] sm:text-[36px] lg:text-[48px] leading-[1.2] tracking-[-2.88px] mb-6 sm:mb-8 font-['Arial:Regular',_sans-serif]">
          {noticia.title}
        </h1>

        {/* Excerpt */}
        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-[12px] sm:rounded-[16px] p-4 sm:p-6 mb-8 sm:mb-12">
          <p className="text-[rgba(255,255,255,0.9)] text-[14px] sm:text-[16px] lg:text-[18px] leading-[1.6] italic font-['Arial:Regular',_sans-serif]">
            {noticia.excerpt}
          </p>
        </div>

        {/* Full Content */}
        <div className="text-[rgba(255,255,255,0.85)] text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.75] whitespace-pre-line font-['Arial:Regular',_sans-serif] mb-12 sm:mb-16">
          {noticia.fullContent}
        </div>

        {/* Back Button */}
        <div className="text-center pb-8 sm:pb-12">
          <button
            onClick={() => {
              navigate('/');
              window.scrollTo(0, 0);
            }}
            className="bg-white text-[#c62926] px-8 sm:px-10 lg:px-12 py-3 sm:py-3.5 lg:py-4 rounded-full hover:bg-[rgba(255,255,255,0.9)] transition-all hover:shadow-lg inline-flex items-center gap-2 sm:gap-3 text-[14px] sm:text-[15px] lg:text-[16px] font-['Arial:Regular',_sans-serif]"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Volver a noticias</span>
          </button>
        </div>
      </div>
    </div>
  );
}
