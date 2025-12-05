import { motion } from "motion/react";
import { Link } from "react-router-dom";
import imgImageLibellaLogo from "../recursos/imagenes/ff8c620bf8477f6cb34fd583907c36620683b38d.png";

interface HeaderUnificadoProps {
  paginaActual?: string;
}

export default function HeaderUnificado({ paginaActual = '' }: HeaderUnificadoProps) {
  const menuItemsLeft = [
    { nombre: 'INICIO', ruta: '/' },
    { nombre: 'SERVICIOS', ruta: '/servicios' },
    { nombre: 'INVERSIONES', ruta: '/inversiones' }
  ];
  
  const menuItemsRight = [
    { nombre: 'PROYECTOS', ruta: '/proyectos' },
    { nombre: 'NOSOTROS', ruta: '/nosotros' },
    { nombre: 'CONTÁCTENOS', ruta: '/contacto' }
  ];

  return (
    <motion.header
      className="fixed bg-[#c62926] h-[80px] left-0 top-0 w-full z-50"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full w-full max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 relative">
        {/* Left Menu */}
        <nav className="flex items-center gap-8 md:gap-12 lg:gap-16">
          {menuItemsLeft.map((item) => (
            <Link key={item.nombre} to={item.ruta}>
              <motion.div 
                className="cursor-pointer relative py-2" 
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-['Arial'] text-[#f2f2f2] text-[12px] md:text-[13px] tracking-[-0.39px] whitespace-nowrap">
                  {item.nombre}
                </p>
                {paginaActual === item.nombre && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-white w-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Logo - Absolutely centered */}
        <Link 
          to="/" 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <motion.div
            className="h-[40px] w-[50px]"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <img 
              alt="Libella Logo" 
              className="w-full h-full object-contain" 
              src={imgImageLibellaLogo} 
            />
          </motion.div>
        </Link>

        {/* Right Menu */}
        <nav className="flex items-center gap-8 md:gap-12 lg:gap-16">
          {menuItemsRight.map((item) => (
            <Link key={item.nombre} to={item.ruta}>
              <motion.div 
                className="cursor-pointer relative py-2" 
                whileHover={{ scale: 1.05 }}
              >
                <p className="font-['Arial'] text-[#f2f2f2] text-[12px] md:text-[13px] tracking-[-0.39px] whitespace-nowrap">
                  {item.nombre}
                </p>
                {paginaActual === item.nombre && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-[2px] bg-white w-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.div>
            </Link>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
