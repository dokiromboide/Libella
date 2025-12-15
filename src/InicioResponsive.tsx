import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Building2, Users, Award, ArrowRight } from "lucide-react";
import Header from "./componentes/Header";
import FooterInicio from "./componentes/FooterInicio";
import TarjetaNoticia from "./componentes/noticias/TarjetaNoticia";
import { noticiasData } from "./datos/noticias";
import { proyectosData } from "./datos/proyectos";
import imgHeroCarousel from "./recursos/imagenes/hero-carousel-1.png";
import imgHeroCarousel1 from "./recursos/imagenes/hero-carousel-2.png";
import imgHeroCarousel2 from "./recursos/imagenes/hero-carousel-3.png";
import imgHeroCarousel3 from "./recursos/imagenes/hero-carousel-4.png";
import imgImageDivider from "./recursos/imagenes/divider-leaves.png";

//=============================================================================
// CARRUSEL INICIO (HERO)
//=============================================================================

const CAROUSEL_INTERVAL = 5000;
const CAROUSEL_IMAGES = [
  imgHeroCarousel,
  imgHeroCarousel1,
  imgHeroCarousel2,
  imgHeroCarousel3,
];

function CarouselButton({ 
  direction, 
  onClick 
}: { 
  direction: 'prev' | 'next'; 
  onClick: () => void;
}) {
  return (
    <motion.button
      className="absolute top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-2 md:p-3 cursor-pointer shadow-lg"
      style={{
        [direction === 'prev' ? 'left' : 'right']: 'clamp(8px, 2vw, 24px)'
      }}
      onClick={onClick}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
      whileTap={{ scale: 0.95 }}
      aria-label={direction === 'prev' ? 'Anterior' : 'Siguiente'}
    >
      {direction === 'prev' ? (
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
      ) : (
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
      )}
    </motion.button>
  );
}

function CarouselDot({ 
  active, 
  onClick 
}: { 
  active: boolean; 
  onClick: () => void;
}) {
  return (
    <motion.button
      className={`${active ? "bg-white" : "bg-white/30"} rounded-full cursor-pointer`}
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      animate={{ width: active ? "clamp(24px, 3vw, 32px)" : "clamp(8px, 1vw, 12px)" }}
      transition={{ duration: 0.3 }}
      style={{ height: "clamp(8px, 1vw, 12px)" }}
      aria-label={`Ir a slide ${active ? 'activo' : ''}`}
    />
  );
}

export function CarouselHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  };

  return (
    <section 
      className="relative w-full overflow-hidden bg-gray-900"
      style={{ 
        height: 'clamp(550px, 90vh, 950px)',
        marginTop: '80px'
      }}
    >
      <AnimatePresence mode="wait">
        {CAROUSEL_IMAGES.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1 
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ zIndex: currentSlide === index ? 1 : 0 }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </AnimatePresence>

      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent pointer-events-none"
        style={{ zIndex: 2 }}
      />

      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
        style={{ zIndex: 2 }}
      />

      <CarouselButton direction="prev" onClick={prevSlide} />
      <CarouselButton direction="next" onClick={nextSlide} />

      <div 
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 md:gap-3 bg-black/20 backdrop-blur-sm rounded-full px-3 md:px-4 py-2"
      >
        {CAROUSEL_IMAGES.map((_, index) => (
          <CarouselDot
            key={index}
            active={currentSlide === index}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

// =============================================================================
// SECCIÓN NOTICIAS
// =============================================================================

export function SeccionNoticias() {
  const noticiasParaMostrar = noticiasData.slice(0, 3);

  return (
    <section className="relative w-full bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838] overflow-hidden py-12 md:py-16 lg:py-24">
      
      <div className="absolute right-0 top-12 blur-3xl filter rounded-full opacity-30 pointer-events-none" 
           style={{ width: 'clamp(300px, 40vw, 500px)', height: 'clamp(300px, 40vw, 500px)' }} />
      <div className="absolute left-0 bottom-12 blur-3xl filter rounded-full opacity-30 pointer-events-none" 
           style={{ width: 'clamp(250px, 30vw, 400px)', height: 'clamp(250px, 30vw, 400px)' }} />

      <div className="relative w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-white/50 to-transparent h-[4px] w-[clamp(150px,20vw,200px)] mb-4" />
          
          <h2 className="font-['Arial'] text-white text-[clamp(24px,4vw,40px)] tracking-[-2.88px] uppercase leading-tight">
            Nuestros Últimos Acontecimientos
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {noticiasParaMostrar.map((noticia, index) => (
            <motion.div
              key={noticia.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <TarjetaNoticia noticia={noticia} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// SECCIÓN PROYECTOS
// =============================================================================

interface ProyectoCardProps {
  id: string;
  titulo: string;
  tipo: string;
  descripcion: string;
  ubicacion: string;
  estado: string;
  imagen: string;
  delay: number;
  onClick: () => void;
}

function ProyectoCard({ 
  titulo, 
  tipo, 
  descripcion, 
  ubicacion, 
  estado, 
  imagen, 
  delay,
  onClick 
}: ProyectoCardProps) {
  return (
    <motion.div
      className="group relative bg-gradient-to-b from-[rgba(227,66,52,0.91)] to-[#403838] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden cursor-pointer mx-auto"
      style={{ 
        height: 'clamp(400px, 450px, 500px)',
        maxWidth: '467px',
        width: '100%'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -15, boxShadow: "0px 37.15px 74.299px -13.032px rgba(0,0,0,0.35)" }}
      onClick={onClick}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <motion.img
          src={imagen}
          alt={titulo}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Overlay oscuro - más oscuro en mobile, se oscurece en hover en desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 md:from-black/20 md:via-black/10 md:to-black/30 md:group-hover:from-black/60 md:group-hover:via-black/40 md:group-hover:to-black/80 transition-all duration-500" />
      </div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
        
        {/* Tipo de proyecto - siempre visible */}
        <div className="inline-block">
          <span className="bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1 text-white/90 text-xs md:text-sm uppercase tracking-wide">
            {tipo}
          </span>
        </div>

        {/* Información del proyecto - visible en mobile, aparece en hover en desktop */}
        <div className="space-y-3 md:space-y-4 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
          
          {/* Título */}
          <h3 className="font-['Arial'] text-white font-semibold leading-tight" style={{ fontSize: 'clamp(20px, 2.5vw, 26px)' }}>
            {titulo}
          </h3>

          {/* Descripción */}
          <p className="font-['Arial'] text-white/85 leading-relaxed line-clamp-2" style={{ fontSize: 'clamp(13px, 1.5vw, 15px)' }}>
            {descripcion}
          </p>

          {/* Divisor */}
          <div className="h-[1px] bg-gradient-to-r from-white/20 via-white/40 to-white/20" />

          {/* Ubicación */}
          <div className="space-y-1">
            <p className="font-['Arial'] text-white/50 text-xs uppercase tracking-wider">
              Ubicación
            </p>
            <p className="font-['Arial'] text-white" style={{ fontSize: 'clamp(12px, 1.5vw, 14px)' }}>
              {ubicacion}
            </p>
          </div>

          {/* Estado */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2 w-full">
              <div className="h-[1px] bg-white/20 flex-1" />
              <span className="bg-white/15 rounded-full px-3 py-1 text-[#e34234] uppercase tracking-wide font-semibold" style={{ fontSize: 'clamp(10px, 1.2vw, 12px)' }}>
                {estado}
              </span>
              <div className="h-[1px] bg-white/20 flex-1" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SeccionProyectos() {
  const navigate = useNavigate();
  
  // Obtener los primeros 4 proyectos de proyectosData
  const proyectosIds = ['altos-cattleya', 'amsterdam', 'la-ceiba', 'la-gran-turquesa'];
  
  const proyectosParaMostrar = proyectosIds.map(id => {
    const proyecto = proyectosData[id];
    return {
      id: id,
      titulo: proyecto.nombreProyecto,
      tipo: proyecto.lotes.includes('Apartamentos') ? 'Apartamentos' : 'Parcelación',
      descripcion: proyecto.descripcion,
      ubicacion: proyecto.ubicacion,
      estado: proyecto.porcentajeAvance === 100 ? 'Disponible' : 
              proyecto.porcentajeAvance > 50 ? 'En Construcción' : 'Próximamente',
      imagen: proyecto.imagenBanner
    };
  });

  return (
    <section className="relative w-full bg-gradient-to-b from-[#403838] to-[rgba(198,41,38,0.97)] overflow-hidden py-12 md:py-16 lg:py-24">
      
      {/* Efecto decorativo de blur */}
      <div className="absolute left-0 top-12 blur-3xl filter rounded-full opacity-30 pointer-events-none" 
           style={{ width: 'clamp(300px, 40vw, 500px)', height: 'clamp(300px, 40vw, 500px)' }} />

      {/* Contenedor principal */}
      <div className="relative w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        
        {/* Título de la sección */}
        <motion.div
          className="mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-white/50 to-transparent h-[4px] w-[clamp(150px,20vw,200px)] mb-4" />
          
          <h2 className="font-['Arial'] text-white text-[clamp(24px,4vw,40px)] tracking-[-2.88px] uppercase leading-tight">
            Proyectos
          </h2>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
          {proyectosParaMostrar.map((proyecto, index) => (
            <ProyectoCard
              key={proyecto.id}
              {...proyecto}
              delay={index * 0.2}
              onClick={() => {
                navigate(`/proyecto/${proyecto.id}`);
                window.scrollTo(0, 0);
              }}
            />
          ))}
        </div>

        {/* Botón Ver todos los proyectos */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className="bg-[rgba(227,66,52,0.95)] border border-white/20 rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center gap-3 shadow-lg"
            onClick={() => {
              navigate('/proyectos');
              window.scrollTo(0, 0);
            }}
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px -3px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="font-['Arial'] text-white text-[clamp(14px,2vw,17px)] tracking-[0.3px]">
              Ver todos los proyectos
            </span>
            <ArrowRight className="text-white" style={{ width: 'clamp(16px, 2.5vw, 20px)', height: 'clamp(16px, 2.5vw, 20px)' }} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}


// =============================================================================
// SECCIÓN HOJAS DIVISORAS
// =============================================================================

export function SeccionHojasDivisoras() {
  return (
    <motion.section 
      className="relative w-full overflow-hidden"
      style={{ height: 'clamp(150px, 20vh, 250px)' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0">
        <img
          src={imgImageDivider}
          alt="Divisor decorativo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(135,21,21,0.4)] to-transparent pointer-events-none" 
           style={{ zIndex: 1 }} />

      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,23,23,0.6)] to-transparent pointer-events-none" 
           style={{ zIndex: 2 }} />
    </motion.section>
  );
}


// =============================================================================
// SECCIÓN MÉTRICAS
// =============================================================================

interface MetricCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
  delay: number;
}

function MetricCard({ icon, number, label, delay }: MetricCardProps) {
  return (
    <motion.div
      className="relative bg-gradient-to-b from-[rgba(227,66,52,0.91)] to-[#403838] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden"
      style={{ 
        minHeight: 'clamp(200px, 25vw, 288px)',
        padding: 'clamp(24px, 4vw, 48px)'
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, boxShadow: "0px 35px 70px -12px rgba(0,0,0,0.35)" }}
    >
      {/* Efecto de fondo radial */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 75% 50%, rgba(255,255,255,0.1) 0%, rgba(128,128,128,0.05) 25%, rgba(0,0,0,0) 50%)'
        }}
      />

      {/* Contenido */}
      <div className="relative flex flex-col items-center justify-center h-full text-center gap-4 md:gap-6">
        
        {/* Icono */}
        <motion.div
          className="bg-white/10 border border-white/20 rounded-full flex items-center justify-center"
          style={{
            width: 'clamp(48px, 8vw, 64px)',
            height: 'clamp(48px, 8vw, 64px)'
          }}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>

        {/* Número */}
        <motion.h3
          className="font-['Arial'] text-white tracking-[-2.88px]"
          style={{ fontSize: 'clamp(32px, 6vw, 48px)' }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
        >
          {number}
        </motion.h3>

        {/* Label */}
        <p 
          className="font-['Arial'] text-white/80 tracking-[0.8px] uppercase"
          style={{ fontSize: 'clamp(12px, 2vw, 16px)' }}
        >
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export function SeccionMetricas() {
  const metricas = [
    {
      icon: <Building2 className="text-white" style={{ width: 'clamp(24px, 4vw, 32px)', height: 'clamp(24px, 4vw, 32px)' }} strokeWidth={2} />,
      number: "150+",
      label: "Proyectos Completados"
    },
    {
      icon: <Users className="text-white" style={{ width: 'clamp(24px, 4vw, 32px)', height: 'clamp(24px, 4vw, 32px)' }} strokeWidth={2} />,
      number: "5000+",
      label: "Clientes Satisfechos"
    },
    {
      icon: <Award className="text-white" style={{ width: 'clamp(24px, 4vw, 32px)', height: 'clamp(24px, 4vw, 32px)' }} strokeWidth={2} />,
      number: "25+",
      label: "Años de Experiencia"
    }
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838] overflow-hidden py-12 md:py-16 lg:py-24">
      
      {/* Contenedor principal */}
      <div className="relative w-full px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
        
        {/* Título de la sección */}
        <motion.div
          className="mb-8 md:mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Línea decorativa centrada */}
          <div className="bg-gradient-to-r from-transparent via-white/50 to-transparent h-[4px] w-[clamp(150px,20vw,200px)] mb-4 mx-auto" />
          
          {/* Título */}
          <h2 className="font-['Arial'] text-white text-[clamp(24px,4vw,40px)] tracking-[-2.88px] uppercase leading-tight">
            Métricas
          </h2>
        </motion.div>

        {/* Grid de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {metricas.map((metrica, index) => (
            <MetricCard
              key={index}
              icon={metrica.icon}
              number={metrica.number}
              label={metrica.label}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
//=============================================================================
// COMPONENTE PRINCIPAL DE LA PÁGINA DE INICIO
//=============================================================================

export default function InicioResponsive() {
  return (
    <div className="w-full min-h-screen bg-[#403838]">
      <Header paginaActual="INICIO" />
      <CarouselHero />
      <SeccionNoticias />
      <SeccionProyectos />
      <SeccionHojasDivisoras />
      <SeccionMetricas />
      <FooterInicio />
    </div>
  );
}