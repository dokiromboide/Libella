import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import imgImageLibellaLogo from "../recursos/imagenes/libella-logo.png";
import imgLogoOjoDeOso from "../recursos/imagenes/ojo-de-oso.png";
import imgLogoSuelo360 from "../recursos/imagenes/suelo-360.png";
import LogoAnimation from "./LogoAnimation";

interface HeaderProps {
  paginaActual?: string;
}

// Configuración de menú con posiciones exactas del diseño original
// textWidth es el ancho del texto, usado para centrar la línea debajo del texto
const menuItemsLeft = [
  { nombre: 'INICIO', ruta: '/', key: 'INICIO', left: '93px', width: '51px', textWidth: 36 },
  { nombre: 'SERVICIOS', ruta: '/servicios', key: 'SERVICIOS', left: '225px', width: '72px', textWidth: 58 },
  { nombre: 'INVERSIONES', ruta: '/inversiones', key: 'INVERSIONES', left: '378px', width: '94px', textWidth: 75 },
];

const menuItemsRight = [
  { nombre: 'PROYECTOS', ruta: '/proyectos', key: 'PROYECTOS', left: '0', width: '88px', textWidth: 66 },
  { nombre: 'NOSOTROS', ruta: '/nosotros', key: 'NOSOTROS', left: '162px', width: '76px', textWidth: 64 },
  { nombre: 'CONTACTANOS', ruta: '/contacto', key: 'CONTACTENOS', left: '311px', width: '107px', textWidth: 86 },
];

const allMenuItems = [...menuItemsLeft, ...menuItemsRight];

// Componente MenuItem para móvil
function MobileMenuItem({ nombre, ruta, isActive, onClick }: { nombre: string; ruta: string; isActive: boolean; onClick: () => void }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(ruta);
    window.scrollTo(0, 0);
    onClick();
  };
  
  return (
    <div onClick={handleClick} className="cursor-pointer">
      <motion.div 
        className="relative py-4 border-b border-white/10"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        whileHover={{ x: 10 }}
        transition={{ duration: 0.3 }}
      >
        <p className={`font-['Arial'] text-[16px] tracking-[-0.39px] ${isActive ? 'text-white' : 'text-white/80'}`}>
          {nombre}
        </p>
        {isActive && (
          <motion.div 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-[60%] bg-white rounded-full"
            layoutId="mobileActiveIndicator"
          />
        )}
      </motion.div>
    </div>
  );
}

export default function Header({ paginaActual = '' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);
  
  const handleNavigation = (ruta: string) => {
    navigate(ruta);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <motion.header
        className="fixed bg-[#c62926] h-[80px] left-0 top-0 w-full z-50"
        data-name="Header"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Desktop Layout - Posiciones exactas del diseño original */}
        <div className="hidden md:block relative w-full max-w-[1263px] mx-auto h-full px-[32px]">
          {/* Left Menu - Posiciones absolutas exactas */}
          <div className="absolute h-[20px] left-0 top-[31px] w-[543px]">
            <div className="relative h-[20px] w-[543px]">
              {menuItemsLeft.map((item) => (
                <motion.div 
                  key={item.key}
                  className="absolute h-[20px] overflow-visible cursor-pointer"
                  style={{ left: item.left, width: item.width, top: item.key === 'SERVICIOS' ? '2px' : item.key === 'INVERSIONES' ? '0' : '1px' }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleNavigation(item.ruta)}
                >
                  {/* Texto del menú */}
                  <div className="absolute flex h-[17.333px] items-start left-0 top-[0.67px]">
                    <p className="font-['Arial'] leading-[19.5px] text-[#f2f2f2] text-[13px] whitespace-nowrap tracking-[-0.39px]">
                      {item.nombre}
                    </p>
                  </div>
                  {/* Línea indicadora - centrada debajo del texto (no del contenedor) */}
                  <motion.div 
                    className="absolute bg-white h-[2px] top-[17.5px]"
                    style={{ 
                      left: item.textWidth / 2,
                      x: '-50%'
                    }}
                    initial={false}
                    animate={{ 
                      width: paginaActual === item.key ? item.textWidth : 0,
                      opacity: paginaActual === item.key ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Logo con animación - Centrado en posición exacta */}
          <div className="absolute left-[569px] top-[19px]">
            <LogoAnimation
              mainLogoSrc={imgImageLibellaLogo}
              logo1Src={imgLogoOjoDeOso}
              logo2Src={imgImageLibellaLogo}
              logo3Src={imgLogoSuelo360}
              onNavigate={() => handleNavigation('/')}
            />
          </div>

          {/* Right Menu - Posiciones absolutas exactas */}
          <div className="absolute h-[20px] left-[732px] top-[29px] w-[499px]">
            <div className="relative h-[20px] w-[499px]">
              {menuItemsRight.map((item) => (
                <motion.div 
                  key={item.key}
                  className="absolute h-[20px] overflow-visible cursor-pointer"
                  style={{ left: item.left, width: item.width, top: item.key === 'NOSOTROS' ? '0' : '-0.25px' }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleNavigation(item.ruta)}
                >
                  {/* Texto del menú */}
                  <div className="absolute flex h-[17.333px] items-start left-0 top-[0.67px]">
                    <p className="font-['Arial'] leading-[19.5px] text-[#f2f2f2] text-[13px] whitespace-nowrap tracking-[-0.39px]">
                      {item.nombre}
                    </p>
                  </div>
                  {/* Línea indicadora - centrada debajo del texto (no del contenedor) */}
                  <motion.div 
                    className="absolute bg-white h-[2px] top-[17.5px]"
                    style={{ 
                      left: item.textWidth / 2,
                      x: '-50%'
                    }}
                    initial={false}
                    animate={{ 
                      width: paginaActual === item.key ? item.textWidth : 0,
                      opacity: paginaActual === item.key ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between h-full px-4">
          {/* Hamburger Menu Button */}
          <motion.button
            className="text-white p-2 z-50"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Logo - Centered */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={() => handleNavigation('/')}
          >
            <motion.div
              className="h-[36px] w-[45px]"
              whileHover={{ scale: 1.1 }}
            >
              <img 
                alt="Libella Logo" 
                className="w-full h-full object-cover" 
                src={imgImageLibellaLogo} 
              />
            </motion.div>
          </div>

          {/* Spacer para balancear el layout */}
          <div className="w-[44px]" />
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="fixed top-[80px] left-0 right-0 bg-gradient-to-b from-[#c62926] to-[#8b1f1f] z-40 md:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <nav className="px-6 py-4">
                {allMenuItems.map((item, index) => (
                  <motion.div
                    key={item.key}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <MobileMenuItem
                      nombre={item.nombre}
                      ruta={item.ruta}
                      isActive={paginaActual === item.key}
                      onClick={closeMobileMenu}
                    />
                  </motion.div>
                ))}
              </nav>

              {/* Decorative element */}
              <div className="h-[4px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-6 mb-4" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
