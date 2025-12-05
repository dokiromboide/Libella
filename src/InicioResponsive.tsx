import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link as RouterLink } from "react-router-dom";
import TarjetaNoticia from "./componentes/noticias/TarjetaNoticia";
import { noticiasData } from "./datos/noticias";
import svgPaths from "./recursos/svg/paths";

// Imágenes
import imgHeroCarousel from "./recursos/imagenes/aed81eafca51449cbcc21b296890d74d9dd3d588.png";
import imgHeroCarousel1 from "./recursos/imagenes/9a59421dc01ab6a7265d9147d3abf33d1210b1b0.png";
import imgHeroCarousel2 from "./recursos/imagenes/829756ee755a52dd5565fc34801ad07081dc3d5a.png";
import imgHeroCarousel3 from "./recursos/imagenes/8e85657db36622060dfb26f2074645c77e42e7fd.png";
import imgImageCertificacionInternacional from "./recursos/imagenes/c99da49775b53e838cbd79be22c325df23fb5f1d.png";
import imgImageDivider from "./recursos/imagenes/b6d521758aae91b27322e3f74aa38fe014ea55ea.png";
import imgFooter from "./recursos/imagenes/24f7863d5067ebf528c000123ff21263e96e6063.png";
import imgImageLaCeiba from "./recursos/imagenes/23069cff9d3176399375c76d68759cbd72f9fa16.png";
import imgImageLaGranTurquesa from "./recursos/imagenes/0c294c139f5fddad96feb3b16c0e5a444c171cf4.png";
import imgImageLibellaLogo from "./recursos/imagenes/ff8c620bf8477f6cb34fd583907c36620683b38d.png";

const CAROUSEL_INTERVAL = 5000;
const CAROUSEL_IMAGES = [imgHeroCarousel, imgHeroCarousel1, imgHeroCarousel2, imgHeroCarousel3];

// ============================================================================
// HEADER RESPONSIVE
// ============================================================================
function HeaderResponsive() {
  return (
    <motion.header
      className="fixed top-0 left-0 w-full h-[80px] bg-[#c62926] z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 lg:px-16 relative">
        {/* Left Menu */}
        <nav className="flex items-center" style={{ gap: '50px' }}>
          <RouterLink to="/">
            <motion.span 
              className="text-[#f2f2f2] text-[13px] tracking-[-0.39px] font-sans cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              INICIO
            </motion.span>
          </RouterLink>
          <RouterLink to="/servicios">
            <motion.span 
              className="text-[#f2f2f2] text-[13px] tracking-[-0.39px] font-sans cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              SERVICIOS
            </motion.span>
          </RouterLink>
          <RouterLink to="/inversiones">
            <motion.span 
              className="text-[#f2f2f2] text-[13px] tracking-[-0.39px] font-sans cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              INVERSIONES
            </motion.span>
          </RouterLink>
        </nav>

        {/* Logo Centrado */}
        <RouterLink to="/" className="absolute left-1/2 -translate-x-1/2">
          <motion.img
            src={imgImageLibellaLogo}
            alt="Libella Logo"
            className="h-10 w-[50px] object-cover"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          />
        </RouterLink>

        {/* Right Menu */}
        <nav className="flex items-center" style={{ gap: '50px' }}>
          <RouterLink to="/proyectos">
            <motion.span 
              className="text-[#f2f2f2] text-[13px] tracking-[-0.39px] font-sans cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              PROYECTOS
            </motion.span>
          </RouterLink>
          <RouterLink to="/nosotros">
            <motion.span 
              className="text-[#f2f2f2] text-[13px] tracking-[-0.39px] font-sans cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              NOSOTROS
            </motion.span>
          </RouterLink>
          <RouterLink to="/contacto">
            <motion.span 
              className="text-[#f2f2f2] text-[13px] tracking-[-0.39px] font-sans cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              CONTÁCTENOS
            </motion.span>
          </RouterLink>
        </nav>
      </div>
    </motion.header>
  );
}

// ============================================================================
// HERO CAROUSEL RESPONSIVE
// ============================================================================
function HeroCarouselResponsive() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
    }, CAROUSEL_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);

  return (
    <section className="relative w-full h-[500px] overflow-hidden mt-[80px]">
      {/* Imágenes del carrusel */}
      {CAROUSEL_IMAGES.map((img, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: currentSlide === index ? 1 : 0, 
            scale: currentSlide === index ? 1 : 1.1 
          }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <img
            src={img}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}

      {/* Overlay gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

      {/* Botón Anterior */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M7 13L1 7L7 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {/* Botón Siguiente */}
      <motion.button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center cursor-pointer"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
          <path d="M1 13L7 7L1 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>

      {/* Indicadores */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 bg-black/20 px-4 py-2 rounded-full">
        {CAROUSEL_IMAGES.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full cursor-pointer ${currentSlide === index ? 'bg-white' : 'bg-white/30'}`}
            animate={{ width: currentSlide === index ? 32 : 12 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}

// ============================================================================
// SECCIÓN NOTICIAS RESPONSIVE
// ============================================================================
function SeccionNoticiasResponsive() {
  const noticiasParaMostrar = noticiasData.slice(0, 3);

  return (
    <section className="relative w-full py-24 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838] overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute right-0 top-24 w-[500px] h-[500px] rounded-full blur-3xl opacity-30" />
      <div className="absolute left-0 top-72 w-[400px] h-[400px] rounded-full blur-3xl opacity-30" />

      {/* Contenido */}
      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Título */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[200px] h-1 bg-gradient-to-r from-white/50 to-transparent mb-4" />
          <h2 className="text-4xl md:text-5xl text-white uppercase tracking-[-2.88px] font-sans">
            Nuestros Últimos Acontecimientos
          </h2>
        </motion.div>

        {/* Grid de noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticiasParaMostrar.map((noticia, index) => (
            <motion.div
              key={noticia.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="h-[500px]"
            >
              <TarjetaNoticia noticia={noticia} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECCIÓN DIVISOR RESPONSIVE
// ============================================================================
function SeccionDivisorResponsive() {
  return (
    <motion.section
      className="relative w-full h-[250px] overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={imgImageDivider}
        alt="Divisor"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(30,23,23,0.6)] to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(135,21,21,0.4)] to-transparent" />
    </motion.section>
  );
}

// ============================================================================
// SECCIÓN MÉTRICAS RESPONSIVE
// ============================================================================
interface MetricCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay: number;
}

function MetricCard({ icon, value, label, delay }: MetricCardProps) {
  return (
    <motion.div
      className="relative bg-gradient-to-b from-[rgba(227,66,52,0.91)] to-[#403838] rounded-3xl p-12 overflow-hidden shadow-2xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -10, boxShadow: "0px 35px 70px -12px rgba(0,0,0,0.35)" }}
    >
      {/* Icono */}
      <motion.div
        className="mx-auto w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-6"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
      >
        {icon}
      </motion.div>

      {/* Valor */}
      <motion.p
        className="text-5xl text-center text-white tracking-[-2.88px] font-sans mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {value}
      </motion.p>

      {/* Etiqueta */}
      <p className="text-center text-white/80 text-base uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}

function SeccionMetricasResponsive() {
  return (
    <section className="relative w-full py-24 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838]">
      <div className="max-w-[1400px] mx-auto">
        {/* Título */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto w-[200px] h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />
          <h2 className="text-4xl md:text-5xl text-white uppercase tracking-[-2.88px] font-sans">
            Métricas
          </h2>
        </motion.div>

        {/* Grid de métricas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MetricCard
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d={svgPaths.p22123880} stroke="white" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d={svgPaths.p3fb33600} stroke="white" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            value="150+"
            label="Proyectos Completados"
            delay={0}
          />
          <MetricCard
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d={svgPaths.p27a3200} stroke="white" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d={svgPaths.p3c1b880} stroke="white" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d={svgPaths.p16bbf900} stroke="white" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d={svgPaths.p2ee517c0} stroke="white" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            value="5000+"
            label="Clientes Satisfechos"
            delay={0.2}
          />
          <MetricCard
            icon={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d={svgPaths.p18cb7e80} stroke="white" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
                <path d={svgPaths.p26c56780} stroke="white" strokeWidth="2.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            value="25+"
            label="Años de Experiencia"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SECCIÓN PROYECTOS RESPONSIVE
// ============================================================================
interface ProjectData {
  id: string;
  title: string;
  type: string;
  description: string;
  location: string;
  status: string;
  image: string;
}

const projectsData: ProjectData[] = [
  {
    id: "altos-cattleya",
    title: "Altos de Cattleya",
    type: "Parcelación",
    description: "Parcelas desde 1000m² en conjunto cerrado.",
    location: "Totoró - vereda de Aguas Tibias, Cauca. (Kilómetro 6)",
    status: "Disponible",
    image: imgHeroCarousel,
  },
  {
    id: "amsterdam",
    title: "AmsterHaus",
    type: "Apartamentos - Apartaestudios",
    description: "Hermosos apartamentos desde 55m² y apartaestudios desde 33,29 m².",
    location: "Popayán Cra 20 #55 N 64 (A dos minutos de Café La Palma)",
    status: "Próximamente",
    image: imgImageCertificacionInternacional,
  },
  {
    id: "la-ceiba",
    title: "La Ceiba",
    type: "Parcelación",
    description: "Espacio campestre con escrituras de 3000m² en copropiedad.",
    location: "Calibio, antigua carrilera, a 4.4km de la Variante Norte.",
    status: "Disponible",
    image: imgImageLaCeiba,
  },
  {
    id: "la-gran-turquesa",
    title: "La Gran Turquesa",
    type: "Parcelación",
    description: "Exclusivo condominio campestre con amplias parcelas desde 1000m².",
    location: "Totoró, Cauca. (Kilómetro 4)",
    status: "FASE 1 VENDIDA",
    image: imgImageLaGranTurquesa,
  },
];

function ProjectCardResponsive({ project, delay, onClick }: { project: ProjectData; delay: number; onClick?: () => void }) {
  return (
    <motion.div
      className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -15 }}
      onClick={onClick}
    >
      {/* Imagen */}
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Overlay con información */}
      <motion.div
        className="absolute inset-x-0 bottom-0 bg-black/60 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
      >
        <p className="text-white/70 text-sm uppercase tracking-wider mb-2">{project.type}</p>
        <h3 className="text-white text-2xl mb-2">{project.title}</h3>
        <p className="text-white/85 text-sm mb-4">{project.description}</p>
        
        <div className="border-t border-white/10 pt-4 mb-4">
          <p className="text-white/50 text-xs uppercase tracking-wider mb-1">Ubicación</p>
          <p className="text-white text-sm">{project.location}</p>
        </div>

        <div className="flex items-center justify-center">
          <span className="bg-white/15 px-4 py-1 rounded-full text-[#e34234] text-xs uppercase tracking-wider">
            {project.status}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SeccionProyectosResponsive({ onSelectProject }: { onSelectProject?: (id: string) => void }) {
  return (
    <section className="relative w-full py-24 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#403838] to-[rgba(198,41,38,0.97)]">
      {/* Efecto de fondo */}
      <div className="absolute left-0 top-96 w-[650px] h-[650px] rounded-full blur-[70px] opacity-30" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Título */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-[200px] h-1 bg-gradient-to-r from-white/50 to-transparent mb-4" />
          <h2 className="text-4xl md:text-5xl text-white uppercase tracking-[-3px] font-sans">
            Proyectos
          </h2>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projectsData.map((project, index) => (
            <ProjectCardResponsive
              key={project.id}
              project={project}
              delay={index * 0.2}
              onClick={() => onSelectProject?.(project.id)}
            />
          ))}
        </div>

        {/* Botón ver todos */}
        <div className="flex justify-end">
          <motion.button
            className="flex items-center gap-4 bg-[rgba(227,66,52,0.95)] border border-white/20 px-8 py-4 rounded-full text-white shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg tracking-wide">Ver todos los proyectos</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d={svgPaths.p28a30700} stroke="white" strokeWidth="2.17" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FOOTER RESPONSIVE
// ============================================================================
function FooterResponsive() {
  return (
    <footer className="relative w-full py-16 px-8 md:px-16 lg:px-24 bg-gradient-to-b from-[#403838] to-[#c62926] overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute left-0 top-12 w-[400px] h-[400px] rounded-full blur-3xl opacity-30" />
      <div className="absolute right-0 top-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-30" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        {/* Contenido principal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo y slogan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img src={imgFooter} alt="Libella" className="h-48 object-contain mb-4" />
            <p className="text-[#f7f4eb] text-lg">el arte de la creación</p>
          </motion.div>

          {/* Datos de contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white text-2xl tracking-[-1.2px] mb-4">Datos de contacto</h3>
            <div className="space-y-3">
              <motion.a 
                href="mailto:libella123@libella.com" 
                className="flex items-center gap-3 text-[#f7f4eb]"
                whileHover={{ x: 5 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p24d83580} stroke="#F7F4EB" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d={svgPaths.pd919a80} stroke="#F7F4EB" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                libella123@libella.com
              </motion.a>
              <motion.a 
                href="tel:+571234567890" 
                className="flex items-center gap-3 text-[#f7f4eb]"
                whileHover={{ x: 5 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p24c7c480} stroke="#F7F4EB" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                (+57) 123-456-7890
              </motion.a>
            </div>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white text-2xl tracking-[-1.2px] mb-4">Síguenos</h3>
            <div className="flex gap-4">
              {/* Instagram */}
              <motion.a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p4b98700} stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d={svgPaths.p29b16f80} stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.5833 5.41667H14.5917" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              {/* Facebook */}
              <motion.a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p30c8d680} stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              {/* LinkedIn */}
              <motion.a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d={svgPaths.p1bcdee00} stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5 7.5H1.66667V17.5H5V7.5Z" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d={svgPaths.p25677470} stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Línea divisora */}
        <div className="border-t border-white/10 my-8" />

        {/* Copyright */}
        <p className="text-center text-[#f7f4eb] text-sm">
          Libella Perspectiva © 2025 All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
export default function InicioResponsive({ onNavigateToProject }: { onNavigateToProject?: (projectId: string) => void }) {
  return (
    <div className="min-h-screen bg-white">
      <HeaderResponsive />
      <HeroCarouselResponsive />
      <SeccionNoticiasResponsive />
      <SeccionProyectosResponsive onSelectProject={onNavigateToProject} />
      <SeccionDivisorResponsive />
      <SeccionMetricasResponsive />
      <FooterResponsive />
    </div>
  );
}
