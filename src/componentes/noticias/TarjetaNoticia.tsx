import { useNavigate } from 'react-router-dom';
import { NoticiaItem } from '../../datos/noticias';

interface TarjetaNoticiaProps {
  noticia: NoticiaItem;
}

export default function TarjetaNoticia({ noticia }: TarjetaNoticiaProps) {
  const navigate = useNavigate();
  const imageUrl = noticia.image;
  
  return (
    <div
      onClick={() => {
        navigate(`/noticia/${noticia.id}`);
        window.scrollTo(0, 0);
      }}
      className="bg-gradient-to-b from-[63.942%] from-[rgba(227,66,52,0.91)] to-[rgba(64,56,56,0.95)] h-[498.188px] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] w-full cursor-pointer hover:scale-[1.02] transition-transform relative"
      data-name="TarjetaNoticia"
    >
      {/* Imagen Section */}
      <div className="absolute h-[240px] left-0 overflow-clip top-0 w-full">
        <div className="absolute h-[240px] left-0 top-0 w-full">
          <img 
            alt={noticia.title}
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" 
            src={imageUrl} 
          />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(135,21,21,0.95)] h-[240px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-full" />
      </div>

      {/* Contenido Section - Exactamente como el componente estático */}
      <div className="absolute h-[258.188px] left-0 top-[240px] w-full" data-name="NewsCard">
        {/* Leer Más */}
        <div className="absolute h-[21px] left-[32px] top-[205.19px] w-[314.219px] cursor-pointer" data-name="leer mas">
          <p className="absolute font-['Arial:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.33px] whitespace-pre">
            Leer más
          </p>
        </div>

        {/* Contenido */}
        <div className="absolute h-[118px] left-[23px] overflow-clip top-[77px] w-[323px]" data-name="contenido">
          <p className="absolute font-['Arial:Regular',_sans-serif] h-[57px] leading-[21px] left-[10px] not-italic text-[14px] text-white top-[19px] w-[264px]">
            {noticia.excerpt}
          </p>
        </div>

        {/* Fecha */}
        <div className="absolute h-[30px] left-[7px] overflow-clip top-[7px] w-full" data-name="fecha">
          <p className="absolute font-['Arial:Regular',_sans-serif] h-[23px] leading-[21px] left-[10px] not-italic text-[14px] text-white top-[7px] w-auto">
            {noticia.date}
          </p>
        </div>
      </div>
    </div>
  );
}
