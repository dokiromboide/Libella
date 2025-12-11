import { motion } from "motion/react";
import imgFooter from "../recursos/imagenes/footer-logo.png";
import svgPaths from "../recursos/svg/paths";

export default function FooterInicio() {
  return (
    <div className="bg-gradient-to-b from-[#403838] overflow-clip to-[#c62926] w-full" data-name="end_page">
      <div className="relative max-w-[1263px] mx-auto h-[447.667px]">
        {/* Background blur elements */}
        <div className="absolute h-[447.667px] left-px opacity-30 top-0 w-full">
          <div className="absolute blur-3xl filter left-0 rounded-full size-[400px] top-[47.67px]" />
          <div className="absolute blur-3xl filter right-0 rounded-full size-[500px] top-0" />
        </div>
        
        {/* Content container */}
        <div className="absolute content-stretch flex flex-col gap-[32px] h-[319.667px] items-start left-[32px] top-[64px] w-[1198.67px]">
          {/* Three columns */}
          <div className="h-[234px] relative shrink-0 w-full">
            {/* Logo column */}
            <motion.div
              className="absolute h-[234px] left-[48px] top-[-22.34px] w-[367.552px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute h-[188px] left-0 top-0 w-[232px]">
                <img alt="Libella Logo" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFooter} />
              </div>
              <div className="absolute h-[27px] left-[36px] top-[207px] w-[196px]">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[27px] left-0 not-italic text-[#f7f4eb] text-[18px] text-nowrap top-[-1.67px] whitespace-pre">el arte de la creación</p>
              </div>
            </motion.div>
            
            {/* Contact column */}
            <motion.div
              className="absolute content-stretch flex flex-col gap-[16px] h-[234px] items-start left-[415.55px] top-0 w-[367.552px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-[36px] relative shrink-0 w-full">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-[-2px] tracking-[-1.2px] whitespace-pre">Datos de contacto</p>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] h-[54px] items-start relative shrink-0 w-full">
                <motion.div
                  className="h-[21px] relative shrink-0 w-full cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute left-0 size-[20px] top-[0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g>
                        <path d={svgPaths.p24d83580} stroke="#F7F4EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.pd919a80} stroke="#F7F4EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                    </svg>
                  </div>
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[32px] not-italic text-[#f7f4eb] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">libella123@libella.com</p>
                </motion.div>
                <motion.div
                  className="h-[21px] relative shrink-0 w-full cursor-pointer"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute left-0 size-[20px] top-[0.5px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip0_footer_phone)">
                        <path d={svgPaths.p24c7c480} stroke="#F7F4EB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip0_footer_phone">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[32px] not-italic text-[#f7f4eb] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">(+57) 123-456-7890</p>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Social media column */}
            <motion.div
              className="absolute content-stretch flex flex-col gap-[16px] h-[234px] items-start left-[831.1px] top-0 w-[367.552px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-[36px] relative shrink-0 w-full">
                <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-[-2px] tracking-[-1.2px] whitespace-pre">Síguenos</p>
              </div>
              <div className="content-stretch flex gap-[16px] h-[48px] items-start relative shrink-0 w-full">
                {/* Instagram */}
                <motion.div
                  className="bg-[rgba(255,255,255,0.1)] relative rounded-full shrink-0 size-[48px] cursor-pointer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-full" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.667px] relative size-[48px]">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                      <g clipPath="url(#clip_ig)">
                        <path d={svgPaths.p4b98700} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d={svgPaths.p29b16f80} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                        <path d="M14.5833 5.41667H14.5917" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      </g>
                      <defs>
                        <clipPath id="clip_ig">
                          <rect fill="white" height="20" width="20" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </motion.div>
                {/* Facebook */}
                <motion.div
                  className="bg-[rgba(255,255,255,0.1)] relative rounded-full shrink-0 size-[48px] cursor-pointer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-full" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.667px] relative size-[48px]">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p30c8d680} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </motion.div>
                {/* LinkedIn */}
                <motion.div
                  className="bg-[rgba(255,255,255,0.1)] relative rounded-full shrink-0 size-[48px] cursor-pointer"
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-full" />
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.667px] relative size-[48px]">
                    <svg className="size-[20px]" fill="none" viewBox="0 0 20 20">
                      <path d={svgPaths.p1bcdee00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d="M5 7.5H1.66667V17.5H5V7.5Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                      <path d={svgPaths.p25677470} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          
          {/* Divider */}
          <div className="h-[53.667px] relative shrink-0 w-full">
            <div aria-hidden="true" className="absolute border-t border-[rgba(255,255,255,0.1)] inset-0 pointer-events-none" />
          </div>
        </div>
        
        {/* Copyright */}
        <div className="absolute h-[21px] left-[23px] top-[397px] w-[1198.67px]">
          <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[50%] not-italic text-[#f7f4eb] text-[14px] text-center text-nowrap top-[-1.33px] -translate-x-1/2 whitespace-pre">Libella Perspectiva © 2025 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
