import { motion } from "motion/react";
import { Link as RouterLink } from "react-router-dom";
import imgImageLibellaLogo from "../recursos/imagenes/ff8c620bf8477f6cb34fd583907c36620683b38d.png";

interface HeaderInicioProps {
  paginaActual?: string;
}

export default function HeaderInicio({ paginaActual = '' }: HeaderInicioProps) {
  return (
    <motion.div
      className="fixed bg-[#c62926] box-border content-stretch flex h-[80px] items-center justify-between left-0 px-[32px] py-0 top-0 w-full z-50"
      data-name="Header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full max-w-[1263px] mx-auto h-full">
        <div className="absolute h-[20px] left-0 top-[31px] w-[543px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[543px]">
            <RouterLink to="/">
              <motion.div className="absolute h-[20px] left-[93px] overflow-clip top-px w-[51px] cursor-pointer" whileHover={{ scale: 1.05 }}>
                <div className={`absolute bg-white h-[2px] left-0 top-[17.5px] ${paginaActual === 'INICIO' ? 'w-full' : 'w-0'}`} />
                <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[35.615px]">
                  <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">INICIO</p>
                </div>
              </motion.div>
            </RouterLink>
            <RouterLink to="/servicios">
              <motion.div className="absolute h-[20px] left-[225px] overflow-clip top-[2px] w-[72px] cursor-pointer" whileHover={{ scale: 1.05 }}>
                <div className={`absolute bg-white h-[2px] left-0 top-[17.5px] ${paginaActual === 'SERVICIOS' ? 'w-full' : 'w-0'}`} />
                <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[57.5px]">
                  <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">SERVICIOS</p>
                </div>
              </motion.div>
            </RouterLink>
            <RouterLink to="/inversiones">
              <motion.div className="absolute h-[20px] left-[378px] overflow-clip top-0 w-[94px] cursor-pointer" whileHover={{ scale: 1.05 }}>
                <div className={`absolute bg-white h-[2px] left-0 top-[17.5px] ${paginaActual === 'INVERSIONES' ? 'w-full' : 'w-0'}`} />
                <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[74.698px]">
                  <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">INVERSIONES</p>
                </div>
              </motion.div>
            </RouterLink>
          </div>
        </div>
        <RouterLink to="/">
          <motion.div
            className="absolute h-[40px] left-[50%] top-[19px] w-[50px] -translate-x-1/2"
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <img alt="Libella Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageLibellaLogo} />
          </motion.div>
        </RouterLink>
        <div className="absolute h-[20px] right-0 top-[29px] w-[499px]">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[499px]">
            <RouterLink to="/proyectos">
              <motion.div className="absolute h-[20px] left-0 overflow-clip top-[-0.25px] w-[88px] cursor-pointer" whileHover={{ scale: 1.05 }}>
                <div className={`absolute bg-white h-[2px] left-0 top-[17.5px] ${paginaActual === 'PROYECTOS' ? 'w-full' : 'w-0'}`} />
                <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[65.635px]">
                  <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">PROYECTOS</p>
                </div>
              </motion.div>
            </RouterLink>
            <RouterLink to="/nosotros">
              <motion.div className="absolute h-[20px] left-[162px] overflow-clip top-0 w-[76px] cursor-pointer" whileHover={{ scale: 1.05 }}>
                <div className={`absolute bg-white h-[2px] left-0 top-[17.5px] ${paginaActual === 'NOSOTROS' ? 'w-full' : 'w-0'}`} />
                <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[63.698px]">
                  <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">NOSOTROS</p>
                </div>
              </motion.div>
            </RouterLink>
            <RouterLink to="/contacto">
              <motion.div className="absolute h-[20px] left-[311px] overflow-clip top-[-0.25px] w-[107px] cursor-pointer" whileHover={{ scale: 1.05 }}>
                <div className={`absolute bg-white h-[2px] left-0 top-[17.5px] ${paginaActual === 'CONTACTENOS' ? 'w-full' : 'w-0'}`} />
                <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[85.781px]">
                  <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">CONTACTANOS</p>
                </div>
              </motion.div>
            </RouterLink>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
