import { MessageCircle, Search, Users, FileCheck, CreditCard, Bell, Sparkles, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import HeaderInicio from "../componentes/HeaderInicio";
import FooterInicio from "../componentes/FooterInicio";
import imgImage from "../recursos/imagenes/aa1a95bc607dc1fc933ff383be0cf8024b068732.png";
import imgImage3 from "../recursos/imagenes/b6d521758aae91b27322e3f74aa38fe014ea55ea.png";

function Banner() {
  return (
    <div className="h-[200px] md:h-[250px] lg:h-[300px] overflow-clip relative w-full" data-name="HeroInversiones">
      <div className="absolute inset-0">
        <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgImage} />
      </div>
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.8))'
        }}
      />
      
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24">
        <div className="max-w-3xl text-center">
          <p className="font-['Arial'] text-[28px] md:text-[38px] lg:text-[48px] text-white tracking-[0.7px] uppercase mb-4 font-bold">
            Invierte con Libella
          </p>
          <p className="font-['Arial'] text-[14px] md:text-[16px] lg:text-[18px] text-white leading-relaxed">
            Descubre oportunidades exclusivas de inversión con rentabilidad garantizada. Proyectos seleccionados con los más altos estándares de calidad y ubicación estratégica.
          </p>
        </div>
      </div>
    </div>
  );
}

function SeccionPasosInversion() {
  const [pasoExpandido, setPasoExpandido] = useState<number | null>(0);
  
  const pasos = [
    {
      numero: 1,
      icono: Search,
      titulo: "Elige tu proyecto ideal",
      descripcion: "Explora nuestras oportunidades de inversión: Parcelas campestres, Apartamentos o apartaestudios, y Acciones en parques de diversiones. Cada proyecto cuenta con información detallada sobre su ubicación, proyección de valorización y rentabilidad esperada.",
      color: "from-[#ff6b6b] to-[#ee5a52]"
    },
    {
      numero: 2,
      icono: Users,
      titulo: "Recibe asesoría personalizada",
      descripcion: "Uno de nuestros asesores especializados te contactará para resolver dudas, enviarte la ficha técnica del proyecto y explicarte las diferentes opciones de inversión. Podrás agendar una videollamada o reunión virtual, sin importar el país donde te encuentres.",
      color: "from-[#ffd93d] to-[#f6c744]"
    },
    {
      numero: 3,
      icono: FileCheck,
      titulo: "Formaliza tu inversión",
      descripcion: "Una vez selecciones el proyecto, te guiaremos en el proceso de vinculación: Diligencia de formulario y verificación de identidad, envío de documentación básica y firma digital del acuerdo o promesa de compraventa.",
      color: "from-[#4ecdc4] to-[#44b3aa]"
    },
    {
      numero: 4,
      icono: CreditCard,
      titulo: "Realiza tu pago de forma segura",
      descripcion: "Te ofrecemos múltiples alternativas: Transferencia internacional (SWIFT), Plataformas de pago internacional (Stripe, PayPal, Wise), y Depósito en cuenta fiduciaria en Colombia.",
      color: "from-[#95e1d3] to-[#7ecfbd]"
    },
    {
      numero: 5,
      icono: Bell,
      titulo: "Recibe la confirmación y seguimiento",
      descripcion: "Una vez se confirme tu pago, recibirás un certificado de inversión y acceso a tu portal de cliente, donde podrás consultar el estado de tu inversión y hacer seguimiento al avance del proyecto.",
      color: "from-[#a8e6cf] to-[#8fd9bf]"
    },
    {
      numero: 6,
      icono: Sparkles,
      titulo: "Disfruta los beneficios de tu inversión",
      descripcion: "Ya seas propietario de una parcela, de un apartaestudio o de acciones en un parque temático, formarás parte de una comunidad de inversionistas que impulsa proyectos sostenibles.",
      color: "from-[#ffd3b6] to-[#ffb088]"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] to-[#403838] py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-24 relative w-full overflow-hidden">
      <div className="absolute blur-[64px] right-0 opacity-30 rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] top-12 bg-[rgba(255,255,255,0.1)]" />
      <div className="absolute blur-[64px] left-0 opacity-20 rounded-full w-[250px] h-[250px] md:w-[350px] md:h-[350px] bottom-12 bg-[rgba(255,255,255,0.1)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0.5)] to-transparent h-[4px] w-[100px] md:w-[150px] mb-5 mx-auto" />
          <h2 className="font-['Arial'] text-[28px] md:text-[36px] lg:text-[40px] text-white tracking-[-1.5px] md:tracking-[-2px] lg:tracking-[-2.88px] uppercase mb-4">
            invierte con nosotros
          </h2>
          <p className="font-['Arial'] text-[14px] md:text-[16px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto">
            Descubre cómo invertir con Libella es un proceso simple, transparente y completamente personalizado.
          </p>
        </div>
        
        <div className="relative">
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
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`bg-gradient-to-br ${paso.color} p-3 rounded-[12px] shadow-lg shrink-0`}>
                          <Icono className="w-[24px] h-[24px] md:w-[28px] md:h-[28px] text-white" />
                        </div>
                        <div className="flex-1">  
                          <h3 className="font-['Arial'] text-[20px] md:text-[24px] text-white uppercase leading-tight">
                            {paso.titulo}
                          </h3>
                        </div>
                        <ChevronDown 
                          className={`w-[20px] h-[20px] text-white transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                      </div>
                      
                      <div 
                        className={`
                          overflow-hidden transition-all duration-500 ease-out
                          ${isExpanded ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}
                        `}
                      >
                        <p className="font-['Arial'] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.9)] leading-relaxed text-left">
                          {paso.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex absolute left-[50%] -translate-x-1/2 z-10 w-[70px] h-[70px] rounded-full bg-gradient-to-br from-white to-[rgba(255,255,255,0.9)] shadow-[0px_8px_24px_rgba(0,0,0,0.3)] items-center justify-center border-4 border-[rgba(198,41,38,0.97)]">
                    <span className="font-['Arial'] text-[24px] text-[#c62926]">
                      {paso.numero}
                    </span>
                  </div>
                  
                  <div className="hidden md:block w-[calc(50%-40px)]" />
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="mt-12 md:mt-16 flex justify-center">
          <a 
            href="https://wa.me/573174367665?text=Hola,%20estoy%20interesado%20en%20invertir%20con%20Libella"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#20BD5A] rounded-[12px] px-8 py-4 flex items-center gap-3 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group"
          >
            <MessageCircle className="w-[22px] h-[22px] text-white group-hover:scale-110 transition-transform" />
            <span className="font-['Arial'] text-white text-[14px] md:text-[16px] tracking-[0.7px] uppercase">
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
    <div className="h-[150px] md:h-[200px] lg:h-[250px] overflow-clip relative w-full">
      <div className="absolute inset-0">
        <img alt="" className="absolute inset-0 object-cover pointer-events-none size-full" src={imgImage3} />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(135,21,21,0.4)] to-transparent inset-0" />
      <div className="absolute bg-gradient-to-t from-[rgba(30,23,23,0.6)] to-transparent inset-0" />
    </div>
  );
}

export default function Inversiones() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#403838] min-h-screen">
      <HeaderInicio paginaActual="INVERSIONES" />
      <main className="pt-[80px]">
        <Banner />
        <SeccionPasosInversion />
        <SeccionDivisora />
        <FooterInicio />
      </main>
    </div>
  );
}
