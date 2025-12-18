import { useState, useEffect } from "react";
import { VideoMoonAnimation } from "./VideoMoonAnimation";
import videoMediaLuna from "../recursos/videos/video_medialuna.mp4";

interface LogoAnimationProps {
  mainLogoSrc: string;
  logo1Src: string; // Ojo de Oso
  logo2Src: string; // Libella
  logo3Src: string; // Suelo 360
  onNavigate?: () => void;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
}

export default function LogoAnimation({
  mainLogoSrc,
  logo1Src,
  logo2Src,
  logo3Src,
  onNavigate,
  onHoverStart,
  onHoverEnd
}: LogoAnimationProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [showLogo3, setShowLogo3] = useState(false); // Suelo 360
  const [showLogo2, setShowLogo2] = useState(false); // Libella
  const [showLogo1, setShowLogo1] = useState(false); // Ojo de Oso
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (isHovered) {
      // El video y los logos aparecen inmediatamente
      setShowLogo1(true);
      setShowLogo2(true);
      setShowLogo3(true);
      setShowVideo(true);
      onHoverStart?.();
    } else {
      // Cuando se quita el hover, todo desaparece inmediatamente
      setShowLogo1(false);
      setShowLogo2(false);
      setShowLogo3(false);
      setShowVideo(false);
      onHoverEnd?.();
    }
  }, [isHovered, onHoverStart, onHoverEnd]);

  return (
    <div
      className="h-[40px] relative w-[50px] cursor-pointer z-50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onNavigate}
    >
      <img
        alt="Logo principal"
        className="absolute inset-0 max-w-none object-cover size-full"
        src={mainLogoSrc}
      />

      {/* Media Luna con logos */}
      <div
        className={`absolute -top-[20px] left-1/2 z-[150] ${isHovered ? '' : 'pointer-events-none'}`}
        style={{
          transform: `translateX(-50%) scale(${isHovered ? '1' : '0.01'})`,
          opacity: isHovered ? 1 : 0,
          transformOrigin: 'center 40px',
          transition: 'transform 0.5s ease-out, opacity 0.5s ease-out'
        }}
      >
        <div className="relative w-[350px] h-[175px]">
          {/* Video de fondo de media luna (semicírculo) */}
          <div
            className="absolute inset-0 overflow-hidden z-[1]"
            style={{
              visibility: showVideo ? 'visible' : 'hidden'
            }}
          >
            <VideoMoonAnimation src={videoMediaLuna} />
          </div>

          {/* Contenedor de logos */}
          <div className="absolute inset-0 flex items-center justify-center z-[3]">
            <div className="relative w-full h-full">


              {/* Logo Ojo de Oso - Izquierda Superior */}
              <div
                className="absolute left-[23%] top-[15px] w-[60px] h-[40px] flex items-center justify-center"
                style={{
                  visibility: showLogo1 ? 'visible' : 'hidden'
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={logo1Src}
                    alt="Ojo de Oso"
                    className="w-full h-full object-contain logo-glow"
                  />
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
                </div>
              </div>

              {/* Logo Libella - Centro (arriba) */}
              <div
                className="absolute left-1/2 -translate-x-1/2 top-[30px] w-[60px] h-[53px] flex items-center justify-center"
                style={{
                  visibility: showLogo2 ? 'visible' : 'hidden'
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={logo2Src}
                    alt="Libella"
                    className="w-full h-full object-contain logo-glow"
                  />
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
                </div>
              </div>

              {/* Logo Suelo 360 - Derecha Superior */}
              <div
                className="absolute right-[23%] top-[15px] w-[55px] h-[40px] flex items-center justify-center"
                style={{
                  visibility: showLogo3 ? 'visible' : 'hidden'
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={logo3Src}
                    alt="Suelo 360"
                    className="w-full h-full object-contain logo-glow"
                  />
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
