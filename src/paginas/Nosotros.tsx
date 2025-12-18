import { Building2, Target, Eye, Heart, Users, Award, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Header from "../componentes/Header";
import FooterInicio from "../componentes/FooterInicio";

// Importar imágenes desde recursos
import imgRetratoHombreBlancoAislado from "../recursos/imagenes/c45292d9d595b1476e0c7cd533a0e1483a2112c3.png";
import imgLibellaLogo from "../recursos/imagenes/e5405135f74a3096ac6e7cfb1ced2550f21c0eaa.png";

// Importar imágenes del equipo
import Libellap1 from "../recursos/imagenes/Libellap1.png";
import Libellap3 from "../recursos/imagenes/Libellap3.png";
import Libellap4 from "../recursos/imagenes/Libellap4.png";
import Libellap5 from "../recursos/imagenes/Libellap5.png";
import Libellap6 from "../recursos/imagenes/Libellap6.PNG";
import Libellap7 from "../recursos/imagenes/Libellap7.png";
import Libellap10 from "../recursos/imagenes/Libellap10.png";
import Libellap20 from "../recursos/imagenes/Libellap20.png";
import Libellap30 from "../recursos/imagenes/Libellap30.png";
import Libellap40 from "../recursos/imagenes/Libellap40.png";

// ============================================
// SECCIÓN: HERO CON CARRUSEL
// ============================================
function HeroSection({
  carouselImages,
  currentSlide,
  nextSlide,
  prevSlide,
  goToSlide
}: {
  carouselImages: Array<{ url: string; alt: string }>;
  currentSlide: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}) {
  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Carousel Images */}
      <div className="relative h-full">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-[#881c1c]/80 hover:bg-[#881c1c] p-3 rounded-full transition-all hover:scale-110"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-[#881c1c]/80 hover:bg-[#881c1c] p-3 rounded-full transition-all hover:scale-110"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
              ? 'bg-white w-8'
              : 'bg-white/50 hover:bg-white/80'
              }`}
          />
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-end justify-center pb-20 z-10 pointer-events-none">
        <div className="text-center">
          <h1 className="text-white text-8xl mb-6 drop-shadow-2xl font-['Kalam',_sans-serif]">Nosotros</h1>
          <p className="text-white/90 max-w-2xl mx-auto text-xl drop-shadow-lg">
            Construyendo sueños, creando hogares
          </p>
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECCIÓN: QUIÉNES SOMOS, MISIÓN Y VISIÓN
// ============================================
function QuienesSomosMisionVisionSection() {
  return (
    <>
      {/* Quiénes Somos */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <Building2 className="w-12 h-12 text-[#af2c28]" />
              <h2 className="text-white text-5xl">¿Quiénes somos?</h2>
            </div>
            <p className="text-white/90 text-xl leading-relaxed">
              Libella Perspectiva S.A.S es una empresa Caucana conformada por personas con más de 20 años de experiencia y trayectoria en el sector inmobiliario. Se abre camino en temas de parcelación, urbanismos y construcción, a la vez que busca cumplir los sueños campestres de las personas, especialmente de las familias Payanesas.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#af2c28] to-[#871515] opacity-20 blur-2xl rounded-3xl" />
            <img
              src={Libellap20}
              alt="Proyecto"
              className="relative rounded-2xl w-full h-[400px] object-cover border-2 border-[#871515]"
            />
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Misión */}
          <div className="bg-gradient-to-br from-[rgba(175,44,40,0.91)] to-[rgba(135,21,21,0.95)] p-12 rounded-3xl border-2 border-[#871515]">
            <div className="flex items-center gap-4 mb-6">
              <Target className="w-10 h-10 text-white" />
              <h2 className="text-white text-4xl">Misión</h2>
            </div>
            <p className="text-white/95 text-lg leading-relaxed">
              Cumplir con los sueños campestres de los habitantes del sur Occidente Colombiano, brindando espacios silvestres urbanizados con proximidades considerables al sector urbano e innovando en el sistema de construcción, pensando en la necesidad, comodidad, confort, felicidad y satisfacción de cada cliente, con principios formados en honestidad e integridad para cada servicio prestado.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-gradient-to-br from-[rgba(175,44,40,0.91)] to-[rgba(135,21,21,0.95)] p-12 rounded-3xl border-2 border-[#871515]">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-10 h-10 text-white" />
              <h2 className="text-white text-4xl">Visión</h2>
            </div>
            <p className="text-white/95 text-lg leading-relaxed">
              Ser la empresa constructora integral más reconocida y ambicionada de Colombia, por nuestro cumplimiento, calidad, comercialización de nuestros proyectos y el desarrollo de estos, que anticipen y satisfagan los deseos y necesidades de los clientes, destacando y fomentando las zonas de bosques y reservas como parte fundamental de estos mismo, estructurada de forma creativa, competitiva e innovadora en diseños de infraestructura con calidad, seguridad, responsabilidad e integridad.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// ============================================
// SECCIÓN: NUESTROS VALORES
// ============================================
function ValoresSection() {
  const valores = [
    {
      icon: Shield,
      title: "Integridad",
      description: "Ser fiable y confiable en cada uno de nuestros actos. Sabemos la importancia de 'hacer lo que se dice y se promete'."
    },
    {
      icon: Heart,
      title: "Honestidad",
      description: "Conducirnos con rectitud, justicia y honradez frente a los desafíos que nos plantea la realidad."
    },
    {
      icon: Award,
      title: "Respeto",
      description: "Reconocer el derecho ajeno, al comprender las distintas maneras de pensar y actuar."
    },
    {
      icon: Clock,
      title: "Cumplimiento",
      description: "Cada promesa realizada a los clientes debe ser ejecutada eficientemente en los tiempos establecidos."
    },
    {
      icon: Target,
      title: "Calidad",
      description: "Alcanzar en todos nuestros proyectos los estándares establecidos de diseño, seguridad, tiempo y costo, mejorando continuamente nuestro desempeño."
    },
    {
      icon: Users,
      title: "Trabajo en equipo",
      description: "La sinergia y el esfuerzo integrado por alcanzar un objetivo y resolver dificultades, sabiendo que el sentido de pertenencia será el norte."
    }
  ];

  return (
    <section className="py-24 px-8 bg-gradient-to-b from-transparent via-[rgba(175,44,40,0.1)] to-transparent">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl text-center mb-16">Nuestros Valores</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[rgba(175,44,40,0.4)] to-[rgba(135,21,21,0.6)] p-8 rounded-2xl border border-[#871515] hover:border-[#af2c28] transition-all hover:scale-105"
              >
                <Icon className="w-12 h-12 text-[#af2c28] mb-4" />
                <h3 className="text-white text-2xl mb-3">{valor.title}</h3>
                <p className="text-white/85 leading-relaxed">
                  {valor.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============================================
// SECCIÓN: NUESTRO EQUIPO
// ============================================
function EquipoSection() {
  const equipo = [
    { nombre: "Bryan Santiago Castro", cargo: "Ingeniero Informatico", rol: "Programador", area: "TECNOLOGIA", imagen: imgRetratoHombreBlancoAislado },
    { nombre: "Jesus Caicedo", cargo: "Ingeniero Informatico", rol: "Programador", area: "TECNOLOGIA", imagen: imgRetratoHombreBlancoAislado },
    { nombre: "Dayana", cargo: "Diseñadora Gráfica", rol: "Diseñadora", area: "ARTE Y DISENO", imagen: imgRetratoHombreBlancoAislado },
    { nombre: "Santiago", cargo: "Arte y Diseño", rol: "Ilustrador", area: "ARTE Y DISENO", imagen: Libellap6 },
    { nombre: "Ana", cargo: "Arte y Diseño", rol: "Escritora", area: "ARTE Y DISENO", imagen: imgRetratoHombreBlancoAislado },
    { nombre: "Maria del Mar", cargo: "Arquitectura", rol: "Arquitecta", area: "ARTE Y DISENO", imagen: Libellap7 },
    { nombre: "Juliana", cargo: "Ingeniera Forestal", rol: "Estudio de Campo", area: "INGENIERIA", imagen: Libellap3 },
    { nombre: "Johnatan Ordoñez", cargo: "Arte y Diseño", rol: "Gerente", area: "ADMINISTRACION", imagen: Libellap5 },
    { nombre: "Diana Campo", cargo: "Contaduría Pública", rol: "Contadora Pública", area: "ADMINISTRACION", imagen: imgRetratoHombreBlancoAislado },
    { nombre: "Yacson", cargo: "Auxiliar Contable", rol: "Auxiliar Contable", area: "ADMINISTRACION", imagen: Libellap4 },
    { nombre: "Juliana", cargo: "Ingeniera Forestal", rol: "Asistente Administrativa", area: "ADMINISTRACION", imagen: imgRetratoHombreBlancoAislado },
    { nombre: "Sergio", cargo: "Ingeniero civil", rol: "Jefe de obras", area: "INGENIERIA", imagen: Libellap1 },
    { nombre: "Yeison", cargo: "Ingeniero Civil", rol: "Auditor de Viabilidad", area: "INGENIERIA", imagen: imgRetratoHombreBlancoAislado },
    { nombre: "Sebastian", cargo: "Ingeniero Civil", rol: "Asistente de Arquitectura", area: "INGENIERIA", imagen: imgRetratoHombreBlancoAislado },
    { nombre: "Johana", cargo: "Economista", rol: "Jefe de ventas", area: "VENTAS", imagen: imgRetratoHombreBlancoAislado },
    { nombre: "Teresa", cargo: "Administradora", rol: "Asesora comercial", area: "VENTAS", imagen: imgRetratoHombreBlancoAislado }
  ];

  const [categoria, setCategoria] = useState("Todos");

  const categorias = ["Todos", ...new Set(equipo.map(p => p.area))];

  const equipoFiltrado =
    categoria === "Todos"
      ? equipo
      : equipo.filter(persona => persona.area === categoria);

  return (
    <section className="py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-5xl text-center mb-16">Nuestro Equipo</h2>

        {/* ======== BOTONES CATEGORIA ======== */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categorias.map((cat, i) => (
            <button
              key={i}
              onClick={() => setCategoria(cat)}
              className={`px-6 py-2 rounded-full border transition-all 
              ${categoria === cat
                  ? "bg-[#af2c28] text-white border-[#af2c28]"
                  : "bg-transparent text-white border-white/40 hover:border-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ======== GRID ======== */}
        <div className="grid md:grid-cols-3 gap-8 transition-all duration-500">
          {equipoFiltrado.map((miembro, index) => (
            <div key={index} className="group relative max-w-xs mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#af2c28] to-[#871515] opacity-0 group-hover:opacity-20 blur-2xl transition-opacity rounded-3xl" />
              <div className="relative bg-gradient-to-b from-[rgba(175,44,40,0.91)] to-[rgba(135,21,21,0.95)] rounded-2xl overflow-hidden border-2 border-[#871515] group-hover:border-[#af2c28] transition-all">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={miembro.imagen} alt={miembro.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-gradient-to-t from-black/80 to-transparent -mt-30 relative z-10">
                  <h3 className="text-white text-xl mb-1">{miembro.nombre}</h3>
                  <p className="text-white/80">{miembro.cargo}</p>
                  <p className="text-white/80">{miembro.rol}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function Nosotros() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    {
      url: Libellap10,
      alt: "Proyecto Libella"
    },
    {
      url: Libellap30,
      alt: "Construcción moderna"
    },
    {
      url: Libellap40,
      alt: "Arquitectura inmobiliaria"
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#881c1c] via-[#4a1515] to-[#881c1c]">
      {/* Header unificado */}
      <Header paginaActual="NOSOTROS" />

      {/* Contenido principal con padding-top para el header fijo */}
      <main className="pt-[80px]">
        {/* Hero con Carrusel */}
        <HeroSection
          carouselImages={carouselImages}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          goToSlide={goToSlide}
        />

        {/* Quiénes Somos, Misión y Visión */}
        <QuienesSomosMisionVisionSection />

        {/* Nuestros Valores */}
        <ValoresSection />

        {/* Nuestro Equipo */}
        <EquipoSection />
      </main>

      {/* Footer unificado */}
      <FooterInicio />
    </div>
  );
}
