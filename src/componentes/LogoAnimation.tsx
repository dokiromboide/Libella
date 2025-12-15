import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

// Componente de peces nadando
function FishAnimation({ speed = 'normal' }: { speed?: 'slow' | 'normal' | 'fast' }) {
  const fishSpeeds = {
    slow: 25,
    normal: 15,
    fast: 8
  };
  
  const duration = fishSpeeds[speed];
  const containerWidth = 240; // Ancho del semicírculo muy pequeño

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Pez 1 - pequeño, rápido */}
      <motion.div
        className="absolute w-[6px] h-[4px] opacity-70"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)',
          filter: 'blur(0.5px)',
        }}
        initial={{ x: -12, y: 25 }}
        animate={{ 
          x: [`-12px`, `${containerWidth + 12}px`],
          y: [25, 30, 22, 25]
        }}
        transition={{
          duration: duration * 0.8,
          repeat: Infinity,
          ease: 'linear',
          y: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      
      {/* Pez 2 - mediano, ondulante */}
      <motion.div
        className="absolute w-[7px] h-[5px] opacity-60"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.15) 60%, transparent 100%)',
          filter: 'blur(0.5px)',
        }}
        initial={{ x: containerWidth + 12, y: 45 }}
        animate={{ 
          x: [`${containerWidth + 12}px`, '-12px'],
          y: [45, 52, 40, 45]
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          delay: duration * 0.3,
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
      
      {/* Pez 3 - pequeño, lento */}
      <motion.div
        className="absolute w-[5px] h-[3px] opacity-50"
        style={{
          background: 'radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)',
          filter: 'blur(0.5px)',
        }}
        initial={{ x: -10, y: 68 }}
        animate={{ 
          x: [`-10px`, `${containerWidth + 10}px`],
          y: [68, 65, 72, 68]
        }}
        transition={{
          duration: duration * 1.2,
          repeat: Infinity,
          ease: 'linear',
          delay: duration * 0.6,
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut' }
        }}
      />
    </div>
  );
}

// Componente de fondo de media luna con gradiente
function MoonBackground() {
  return (
    <div className="absolute inset-0 bg-[#c62926]">
      {/* Overlay de brillo sutil en la parte superior */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: 'radial-gradient(ellipse 600px 150px at 50% 0%, rgba(255,255,255,0) 0%, transparent 10%)',
        }}
      />
    </div>
  );
}

interface LogoAnimationProps {
  mainLogoSrc: string;
  logo1Src: string; // Ojo de Oso
  logo2Src: string; // Libella
  logo3Src: string; // Suelo 360
  onNavigate?: () => void;
}

export default function LogoAnimation({ 
  mainLogoSrc, 
  logo1Src, 
  logo2Src, 
  logo3Src,
  onNavigate 
}: LogoAnimationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    if (!isHovered) {
      setAnimationStage(0);
      return;
    }

    // Secuencia de animación progresiva
    const timings = [
      { stage: 1, delay: 0 },      // Media luna + peces empiezan a aparecer
      { stage: 2, delay: 200 },    // Logos empiezan a aparecer
      { stage: 3, delay: 400 },    // Scanner se activa
    ];

    const timeouts = timings.map(({ stage, delay }) =>
      setTimeout(() => setAnimationStage(stage), delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [isHovered]);

  return (
    <div 
      className="h-[40px] relative w-[50px] z-50" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo principal con animación de rotación suave */}
      <motion.img 
        alt="Logo principal" 
        className="absolute inset-0 max-w-none object-cover size-full cursor-pointer" 
        src={mainLogoSrc}
        animate={{ 
          rotate: isHovered ? [0, -3, 3, -3, 0] : 0,
        }}
        transition={{ duration: 0.5 }}
        onClick={onNavigate}
      />
      
      {/* Media Luna con logos - Solo visible en hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            className="absolute -top-[20px] left-1/2 z-[150] pointer-events-none"
            initial={{ 
              scale: 0.01,
              opacity: 0,
              x: '-50%'
            }}
            animate={{ 
              scale: 1,
              opacity: 1,
              x: '-50%'
            }}
            exit={{ 
              scale: 0.01,
              opacity: 0,
              x: '-50%',
              transition: { duration: 0.3 }
            }}
            transition={{ 
              duration: 0.6,
              ease: [0.34, 1.56, 0.64, 1] // Ease out back
            }}
            style={{ transformOrigin: 'center 40px' }}
          >
            {/* Semicírculo perfecto - muy pequeño */}
            <div className="relative w-[200px] h-[100px]">
              
              {/* Fondo de media luna - aparece primero */}
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: animationStage >= 1 ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                style={{ 
                  zIndex: 1,
                  borderRadius: '0 0 240px 240px', // Semicírculo perfecto
                  clipPath: 'ellipse(120px 120px at 50% 0%)' // Recortar solo mitad inferior
                }}
              >
                <MoonBackground />
              </motion.div>
              
              {/* Animación de peces - aparece JUNTO con la media luna */}
              <motion.div 
                className="absolute inset-0 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: animationStage >= 1 ? 1 : 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{ 
                  zIndex: 2,
                  borderRadius: '0 0 240px 240px',
                  clipPath: 'ellipse(120px 120px at 50% 0%)'
                }}
              >
                <FishAnimation speed="normal" />
              </motion.div>
              
              {/* Contenedor de logos */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 3 }}>
                <div className="relative w-full h-full">
                  
                  {/* Logo Ojo de Oso - Izquierda */}
                  <motion.div 
                    className="absolute left-[10%] top-[25px] w-[50px] h-[40px]"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ 
                      opacity: animationStage >= 2 ? 1 : 0,
                      y: animationStage >= 2 ? 0 : 10,
                      scale: animationStage >= 2 ? 1 : 0.8
                    }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={logo1Src} 
                        alt="Ojo de Oso" 
                        className="w-full h-full object-cover logo-glow"
                      />
                      {/* Efecto scanner */}
                      {animationStage >= 3 && (
                        <div 
                          className="absolute inset-0 overflow-hidden logo-scanner-overlay"
                          style={{
                            maskImage: `url(${logo1Src})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: `url(${logo1Src})`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center'
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                  
                  {/* Logo Libella - Centro - MISMO TAMAÑO QUE LOGO PRINCIPAL */}
                  <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 top-[20px] w-[50px] h-[40px]"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ 
                      opacity: animationStage >= 2 ? 1 : 0,
                      y: animationStage >= 2 ? 0 : 10,
                      scale: animationStage >= 2 ? 1 : 0.8
                    }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={logo2Src} 
                        alt="Libella" 
                        className="w-full h-full object-cover logo-glow"
                      />
                      {animationStage >= 3 && (
                        <div 
                          className="absolute inset-0 overflow-hidden logo-scanner-overlay"
                          style={{
                            maskImage: `url(${logo2Src})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: `url(${logo2Src})`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            animationDelay: '1s'
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                  
                  {/* Logo Suelo 360 - Derecha */}
                  <motion.div 
                    className="absolute right-[10%] top-[25px] w-[50px] h-[40px]"
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ 
                      opacity: animationStage >= 2 ? 1 : 0,
                      y: animationStage >= 2 ? 0 : 10,
                      scale: animationStage >= 2 ? 1 : 0.8
                    }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={logo3Src} 
                        alt="Suelo 360" 
                        className="w-full h-full object-cover logo-glow"
                      />
                      {animationStage >= 3 && (
                        <div 
                          className="absolute inset-0 overflow-hidden logo-scanner-overlay"
                          style={{
                            maskImage: `url(${logo3Src})`,
                            maskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskImage: `url(${logo3Src})`,
                            WebkitMaskSize: 'contain',
                            WebkitMaskRepeat: 'no-repeat',
                            WebkitMaskPosition: 'center',
                            animationDelay: '2s'
                          }}
                        />
                      )}
                    </div>
                  </motion.div>
                  
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
