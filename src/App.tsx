import svgPaths from "./imports/svg-bnupwpn4rr";
import imgImage from "figma:asset/aa1a95bc607dc1fc933ff383be0cf8024b068732.png";
import imgImage1 from "figma:asset/38b537f7c3d943ba8fdeec109470b734b1fa3f31.png";
import imgImage3 from "figma:asset/b6d521758aae91b27322e3f74aa38fe014ea55ea.png";
import imgImageLibellaLogo from "figma:asset/ff8c620bf8477f6cb34fd583907c36620683b38d.png";
import { Menu, X, MessageCircle, Search, Users, FileCheck, CreditCard, Bell, Sparkles, ChevronDown } from "lucide-react";
import { useState } from "react";

function HeroInversiones() {
  return (
    <div className="h-[200px] md:h-[250px] lg:h-[300px] overflow-clip relative w-full" data-name="HeroInversiones">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      {/* Gradients */}
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.8)] inset-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(0,0,0,0.4)]" />
      <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.6)] inset-0 to-[rgba(0,0,0,0)] via-50% via-[rgba(0,0,0,0)]" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center px-6 md:px-12 lg:px-24">
        <div className="max-w-2xl">
          <p className="font-['Arial:Regular',sans-serif] text-[12px] md:text-[14px] text-[rgba(255,255,255,0.8)] tracking-[0.7px] uppercase mb-4">
            Invierte con Libella
          </p>
          <p className="font-['Arial:Regular',sans-serif] text-[16px] md:text-[18px] text-[rgba(255,255,255,0.9)] leading-relaxed">
            Descubre oportunidades exclusivas de inversión con rentabilidad garantizada. Proyectos seleccionados con los más altos estándares de calidad y ubicación estratégica.
          </p>
        </div>
      </div>
    </div>
  );
}

function SeccionTiposInversion() {
  const [pasoExpandido, setPasoExpandido] = useState<number | null>(0);
  
  const pasos = [
    {
      numero: 1,
      icono: Search,
      titulo: "Elige tu proyecto ideal",
      tituloCorto: "Elige tu Proyecto",
      descripcion: "Explora nuestras oportunidades de inversión: Parcelas campestres, Apartamentos o apartaestudios, y Acciones en parques de diversiones. Cada proyecto cuenta con información detallada sobre su ubicación, proyección de valorización y rentabilidad esperada. Podrás revisar fotos, videos, planos y condiciones desde nuestra plataforma.",
      color: "from-[#ff6b6b] to-[#ee5a52]"
    },
    {
      numero: 2,
      icono: Users,
      titulo: "Recibe asesoría personalizada",
      tituloCorto: "Asesoría Personalizada",
      descripcion: "Uno de nuestros asesores especializados te contactará para resolver dudas, enviarte la ficha técnica del proyecto y explicarte las diferentes opciones de inversión. Podrás agendar una videollamada o reunión virtual, sin importar el país donde te encuentres. Nuestro compromiso: brindarte información clara, sin presiones y con acompañamiento humano en todo momento.",
      color: "from-[#ffd93d] to-[#f6c744]"
    },
    {
      numero: 3,
      icono: FileCheck,
      titulo: "Formaliza tu inversión",
      tituloCorto: "Formaliza Inversión",
      descripcion: "Una vez selecciones el proyecto, te guiaremos en el proceso de vinculación: Diligencia de formulario y verificación de identidad (cumpliendo con estándares internacionales KYC), envío de documentación básica y firma digital del acuerdo o promesa de compraventa. Si aplicas desde el exterior, podrás hacerlo 100% en línea mediante firma electrónica segura. Todos los contratos son revisados y gestionados bajo normas colombianas, respaldados por fiducias y entidades certificadas.",
      color: "from-[#4ecdc4] to-[#44b3aa]"
    },
    {
      numero: 4,
      icono: CreditCard,
      titulo: "Realiza tu pago de forma segura",
      tituloCorto: "Pago Seguro",
      descripcion: "Te ofrecemos múltiples alternativas: Transferencia internacional (SWIFT), Plataformas de pago internacional (Stripe, PayPal, Wise), y Depósito en cuenta fiduciaria en Colombia. Las operaciones se realizan en pesos colombianos (COP) o dólares (USD), según tu conveniencia, con acompañamiento cambiario.",
      color: "from-[#95e1d3] to-[#7ecfbd]"
    },
    {
      numero: 5,
      icono: Bell,
      titulo: "Recibe la confirmación y seguimiento",
      tituloCorto: "Confirmación y Seguimiento",
      descripcion: "Una vez se confirme tu pago, recibirás un certificado de inversión y acceso a tu portal de cliente, donde podrás: Consultar el estado de tu inversión, descargar documentos y comprobantes, y hacer seguimiento al avance del proyecto o a los retornos esperados.",
      color: "from-[#a8e6cf] to-[#8fd9bf]"
    },
    {
      numero: 6,
      icono: Sparkles,
      titulo: "Disfruta los beneficios de tu inversión",
      tituloCorto: "Disfruta Beneficios",
      descripcion: "Ya seas propietario de una parcela, de un apartaestudio o de acciones en un parque temático, formarás parte de una comunidad de inversionistas que impulsa proyectos sostenibles y con proyección real de valorización. Con transparencia, respaldo y acompañamiento permanente, hacemos que invertir desde cualquier lugar del mundo sea simple y seguro.",
      color: "from-[#ffd3b6] to-[#ffb088]"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 relative w-full overflow-hidden" data-name="SeccionTiposInversion">
      {/* Decorative elements */}
      <div className="absolute blur-3xl filter right-0 opacity-30 rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] top-12 bg-[rgba(255,255,255,0.1)]" />
      <div className="absolute blur-3xl filter left-0 opacity-20 rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] bottom-12 bg-[rgba(255,255,255,0.1)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="mb-12 md:mb-16 text-center">
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0.5)] h-[4px] to-[rgba(0,0,0,0)] w-[100px] md:w-[150px] mb-5 mx-auto" />
          <h2 className="font-['Arial:Regular',sans-serif] text-[28px] md:text-[36px] lg:text-[40px] text-white tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.88px] uppercase mb-4">
            invierte con nosotros
          </h2>
          <p className="font-['Arial:Regular',sans-serif] text-[14px] md:text-[16px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto">
            Descubre cómo invertir con Libella es un proceso simple, transparente y completamente personalizado.
          </p>
        </div>
        
        {/* Timeline vertical con tarjetas */}
        <div className="relative">
          {/* Línea vertical del timeline - oculta en móvil */}
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0.1)]" />
          
          <div className="space-y-8 md:space-y-12">
            {pasos.map((paso, index) => {
              const Icono = paso.icono;
              const isExpanded = pasoExpandido === index;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Tarjeta del paso */}
                  <div className="w-full md:w-[calc(50%-40px)]">
                    <div 
                      onClick={() => setPasoExpandido(isExpanded ? null : index)}
                      className={`
                        bg-gradient-to-br from-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.05)]
                        backdrop-blur-sm border border-[rgba(255,255,255,0.2)]
                        rounded-[20px] p-6 md:p-8 cursor-pointer
                        transition-all duration-500 ease-out
                        hover:shadow-[0px_20px_50px_-10px_rgba(0,0,0,0.3)]
                        hover:scale-[1.02]
                        ${isExpanded ? 'shadow-[0px_20px_50px_-10px_rgba(0,0,0,0.4)]' : 'shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.2)]'}
                      `}
                    >
                      {/* Header de la tarjeta */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`bg-gradient-to-br ${paso.color} p-3 rounded-[12px] shadow-lg shrink-0`}>
                          <Icono className="size-[24px] md:size-[28px] text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-['Arial:Regular',sans-serif] text-[20px] md:text-[24px] text-white uppercase leading-tight">
                            {paso.titulo}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`size-[20px] text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>
                      
                      {/* Contenido expandible */}
                      <div 
                        className={`
                          overflow-hidden transition-all duration-500 ease-out
                          ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                        `}
                      >
                        <p className="font-['Arial:Regular',sans-serif] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.9)] leading-relaxed text-left">
                          {paso.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Número circular central - visible solo en desktop */}
                  <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 z-10 size-[70px] rounded-full bg-gradient-to-br from-white to-[rgba(255,255,255,0.9)] shadow-[0px_8px_24px_rgba(0,0,0,0.3)] items-center justify-center border-4 border-[rgba(198,41,38,0.97)]">
                    <span className="font-['Arial:Regular',sans-serif] text-[24px] text-[#c62926]">
                      {paso.numero}
                    </span>
                  </div>
                  
                  {/* Espaciador para el otro lado - solo desktop */}
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Botón de WhatsApp - Debajo de todos los pasos */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <a 
            href="https://wa.me/573174367665?text=Hola,%20estoy%20interesado%20en%20invertir%20con%20Libella"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BD5A] rounded-[12px] px-8 py-4 flex items-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            <MessageCircle className="size-[22px] text-white group-hover:scale-110 transition-transform" />
            <span className="font-['Arial:Regular',sans-serif] text-white text-[14px] md:text-[16px] tracking-[0.7px] uppercase">
              Comienza por WhatsApp
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

function SeccionDivisora() {
  return (
    <div className="h-[150px] md:h-[200px] lg:h-[250px] overflow-clip relative w-full" data-name="SeccionDivisora">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      {/* Gradient Overlays */}
      <div className="absolute bg-gradient-to-b from-[rgba(135,21,21,0.4)] inset-0 to-[rgba(0,0,0,0)]" />
      <div className="absolute bg-gradient-to-b from-[rgba(30,23,23,0.6)] inset-0 to-[rgba(0,0,0,0)]" />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#403838] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 w-full" data-name="Footer">
      {/* Footer Content */}
      <div className="flex flex-col gap-12">
        {/* Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Logo & Tagline */}
          <div className="flex flex-col gap-4">
            <div className="w-[120px] md:w-[140px] lg:w-[160px] h-auto">
              <img alt="Libella Logo" className="w-full h-auto object-contain" src={imgImageLibellaLogo} />
            </div>
            <p className="font-['Arial:Regular',sans-serif] text-[16px] md:text-[18px] text-[#f7f4eb]">
              el arte de la creación
            </p>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Arial:Regular',sans-serif] text-[20px] md:text-[22px] lg:text-[24px] text-white tracking-[-1.2px]">
              Datos de contacto
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <div className="shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <path d={svgPaths.p9c60400} stroke="#F7F4EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                      <path d={svgPaths.p2bf8f980} stroke="#F7F4EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Arial:Regular',sans-serif] text-[14px] md:text-[16px] text-[#f7f4eb]">
                  hola@libella.com
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="shrink-0 size-[24px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                    <g>
                      <path d={svgPaths.p3a2d4980} stroke="#F7F4EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    </g>
                  </svg>
                </div>
                <p className="font-['Arial:Regular',sans-serif] text-[14px] md:text-[16px] text-[#f7f4eb]">
                  (+57) 317 436 7665
                </p>
              </div>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col gap-6">
            <h4 className="font-['Arial:Regular',sans-serif] text-[20px] md:text-[22px] lg:text-[24px] text-white tracking-[-1.2px]">
              Síguenos
            </h4>
            <div className="flex gap-4">
              {/* Instagram */}
              <button className="bg-[rgba(255,255,255,0.1)] rounded-full size-[48px] md:size-[56px] flex items-center justify-center border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                <svg className="size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
                  <g>
                    <path d={svgPaths.p4fdb300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p39557800} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M17.5 6.5H17.51" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </button>
              {/* Facebook */}
              <button className="bg-[rgba(255,255,255,0.1)] rounded-full size-[48px] md:size-[56px] flex items-center justify-center border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                <svg className="size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
                  <g>
                    <path d={svgPaths.p3d19f300} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </button>
              {/* LinkedIn */}
              <button className="bg-[rgba(255,255,255,0.1)] rounded-full size-[48px] md:size-[56px] flex items-center justify-center border border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.2)] transition-colors">
                <svg className="size-[20px] md:size-[24px]" fill="none" viewBox="0 0 24 24">
                  <g>
                    <path d={svgPaths.p30958080} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d="M6 9H2V21H6V9Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p1bb3a100} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="h-[1px] w-full bg-[rgba(255,255,255,0.1)]" />
        
        {/* Copyright */}
        <div className="text-center">
          <p className="font-['Arial:Regular',sans-serif] text-[14px] md:text-[16px] text-[#f7f4eb]">
            Libella Parque Isla © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

function Encabezado() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#c62926] h-[60px] md:h-[70px] z-50" data-name="Encabezado">
      <div className="h-full px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Logo - Center on mobile, left on desktop */}
        <div className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:translate-x-0 lg:order-2">
          <img 
            alt="Libella Logo" 
            className="h-[32px] md:h-[40px] w-auto object-contain" 
            src={imgImageLibellaLogo} 
          />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8 flex-1 justify-between">
          <div className="flex items-center gap-6">
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[12px] text-white tracking-[0.3px] hover:opacity-80 transition-opacity">
              INICIO
            </a>
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[12px] text-white tracking-[0.3px] hover:opacity-80 transition-opacity">
              SERVICIOS
            </a>
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[12px] text-white tracking-[0.3px] hover:opacity-80 transition-opacity">
              PROYECTOS
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[12px] text-white tracking-[0.3px] hover:opacity-80 transition-opacity">
              INVERSIONES
            </a>
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[12px] text-white tracking-[0.3px] hover:opacity-80 transition-opacity">
              NOSOTROS
            </a>
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[12px] text-white tracking-[0.3px] hover:opacity-80 transition-opacity">
              CONTACTANOS
            </a>
          </div>
        </div>
        
        {/* Placeholder for mobile to balance layout */}
        <div className="lg:hidden w-[24px]"></div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[60px] left-0 right-0 bg-[#c62926] shadow-lg">
          <div className="flex flex-col py-4">
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[14px] text-white tracking-[0.3px] px-6 py-3 hover:bg-[rgba(0,0,0,0.1)] transition-colors">
              INICIO
            </a>
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[14px] text-white tracking-[0.3px] px-6 py-3 hover:bg-[rgba(0,0,0,0.1)] transition-colors">
              SERVICIOS
            </a>
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[14px] text-white tracking-[0.3px] px-6 py-3 hover:bg-[rgba(0,0,0,0.1)] transition-colors">
              PROYECTOS
            </a>
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[14px] text-white tracking-[0.3px] px-6 py-3 hover:bg-[rgba(0,0,0,0.1)] transition-colors">
              INVERSIONES
            </a>
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[14px] text-white tracking-[0.3px] px-6 py-3 hover:bg-[rgba(0,0,0,0.1)] transition-colors">
              NOSOTROS
            </a>
            <a href="#" className="font-['Arial:Regular',sans-serif] text-[14px] text-white tracking-[0.3px] px-6 py-3 hover:bg-[rgba(0,0,0,0.1)] transition-colors">
              CONTACTANOS
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default function App() {
  return (
    <div className="bg-[#403838] min-h-screen" data-name="libella inversiones inicio">
      <Encabezado />
      <main className="pt-[60px] md:pt-[70px]">
        <HeroInversiones />
        <SeccionTiposInversion />
        <SeccionDivisora />
        <Footer />
      </main>
    </div>
  );
}
