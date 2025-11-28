import { useState, useEffect } from "react";
import { motion } from "motion/react";
import TarjetaNoticia from "./componentes/noticias/TarjetaNoticia";
import { noticiasData } from "./datos/noticias";
import svgPaths from "./recursos/svg/paths";
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

// Design constants
const DESIGN_WIDTH = 1263;
const DESIGN_HEIGHT = 3971;
const CAROUSEL_INTERVAL = 5000; // ms
const CAROUSEL_IMAGES = [imgHeroCarousel, imgHeroCarousel1, imgHeroCarousel2, imgHeroCarousel3];

function HeroCarousel({ active, index }: { active: boolean; index: number }) {
  const images = CAROUSEL_IMAGES.slice(0, 3);
  const positions = [
    { left: "-54.44px", top: "-21.56px", width: "1371.54px", height: "543.113px" },
    { left: "-17.9px", top: "-7.09px", width: "1298.47px", height: "514.178px" },
    { left: "-58.16px", top: "-23.03px", width: "1378.99px", height: "546.062px" },
  ];

  if (index > 2) return null;

  const pos = positions[index];

  return (
    <motion.div
      className="absolute"
      style={{
        height: pos.height,
        left: pos.left,
        top: pos.top,
        width: pos.width,
      }}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: active ? 1 : 0, scale: active ? 1 : 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      data-name="HeroCarousel"
    >
      <img
        alt=""
        className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
        src={images[index]}
      />
    </motion.div>
  );
}

function HeroCarousel3() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0.5)] h-[500px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.2)] w-[1262.67px]" data-name="HeroCarousel" />;
}

function HeroCarousel4() {
  return <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.4)] h-[500px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[1262.67px]" data-name="HeroCarousel" />;
}

function Icon() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M7 13L1 7L7 1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col items-start left-[24px] pb-[0.667px] pt-[12.667px] px-[12.667px] rounded-[2.23696e+07px] size-[49.333px] top-[225.33px] cursor-pointer"
      data-name="Button"
      onClick={onClick}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon />
    </motion.div>
  );
}

function Icon1() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d="M1 13L7 7L1 1" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1({ onClick }: { onClick: () => void }) {
  return (
    <motion.div
      className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col items-start left-[1189.33px] pb-[0.667px] pt-[12.667px] px-[12.667px] rounded-[2.23696e+07px] size-[49.333px] top-[225.33px] cursor-pointer"
      data-name="Button"
      onClick={onClick}
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Icon1 />
    </motion.div>
  );
}

function Button2({ active, onClick }: { active: boolean; onClick: () => void }) {
  return (
    <motion.div
      className={`${active ? "bg-white" : "bg-[rgba(255,255,255,0.3)]"} relative rounded-[2.23696e+07px] shrink-0 size-[12px] cursor-pointer`}
      data-name="Button"
      onClick={onClick}
      whileHover={{ scale: 1.2 }}
      animate={{ width: active ? "32px" : "12px" }}
      transition={{ duration: 0.3 }}
    >
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </motion.div>
  );
}

function HeroCarousel6({ currentSlide, setSlide }: { currentSlide: number; setSlide: (index: number) => void }) {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] box-border content-stretch flex gap-[12px] h-[28px] items-center left-[563.33px] pb-0 pt-[8px] px-[16px] rounded-[2.23696e+07px] top-[440px] w-[136px]" data-name="HeroCarousel">
      <Button2 active={currentSlide === 0} onClick={() => setSlide(0)} />
      <Button2 active={currentSlide === 1} onClick={() => setSlide(1)} />
      <Button2 active={currentSlide === 2} onClick={() => setSlide(2)} />
      <Button2 active={currentSlide === 3} onClick={() => setSlide(3)} />
    </div>
  );
}

function Container() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, CAROUSEL_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 4);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 4) % 4);
  };

  return (
    <div className="absolute h-[500px] left-0 overflow-clip top-0 w-[1263px]" data-name="Container">
      <HeroCarousel active={currentSlide === 0} index={0} />
      <HeroCarousel active={currentSlide === 1} index={1} />
      <HeroCarousel active={currentSlide === 2} index={2} />
      <HeroCarousel3 />
      <HeroCarousel4 />
      <motion.div
        className="absolute h-[513.186px] left-[5px] top-[-7px] w-[1295.97px]"
        data-name="HeroCarousel"
        initial={{ opacity: 0 }}
        animate={{ opacity: currentSlide === 3 ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgHeroCarousel3} />
      </motion.div>
      <Button onClick={prevSlide} />
      <Button1 onClick={nextSlide} />
      <HeroCarousel6 currentSlide={currentSlide} setSlide={setCurrentSlide} />
    </div>
  );
}

function CarruselInicio() {
  return (
    <div className="absolute h-[500px] left-[-1px] overflow-clip top-[80px] w-[1263px]" data-name="carrusel inicio">
      <Container />
    </div>
  );
}

function Container1() {
  return <div className="absolute blur-3xl filter left-[762.67px] rounded-[2.23696e+07px] size-[500px] top-[92.86px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute blur-3xl filter left-0 rounded-[2.23696e+07px] size-[400px] top-[305.33px]" data-name="Container" />;
}

function Text() {
  return <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0.5)] h-[4px] left-0 to-[rgba(0,0,0,0)] top-[64px] w-[200px]" data-name="Text" />;
}

function NewsSection() {
  return (
    <div className="absolute content-stretch flex h-[53.333px] items-start left-0 top-[3.33px] w-[149.313px]" data-name="NewsSection">
      <p className="font-['Arial:Regular',sans-serif] leading-[60px] not-italic relative shrink-0 text-[40px] text-nowrap text-white tracking-[-2.88px] uppercase whitespace-pre">nuestros Últimos acontecimientos</p>
    </div>
  );
}

function Heading() {
  return (
    <motion.div
      className="h-[60px] relative shrink-0 w-full"
      data-name="Heading 2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Text />
      <NewsSection />
    </motion.div>
  );
}

function NewsCard({ date = " ", title = "Noticias", description = "Contenido" }: { date?: string; title?: string; description?: string } = {}) {
  return (
    <div className="absolute h-[240px] left-0 overflow-clip top-0 w-[378.219px]" data-name="NewsCard">
      <div className="absolute h-[240px] left-0 top-0 w-[378.219px]" data-name="Image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroCarousel} />
      </div>
      <div className="absolute bg-gradient-to-b from-[rgba(135,21,21,0.95)] h-[240px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[378.219px]" data-name="Container" />




    </div>
  );
}

function Container3() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[498.188px] left-0 rounded-[24px] shadow-[0px_0px_39.81px_0px_rgba(255,255,255,0.2)] top-0 w-[378.219px]" data-name="Container" />;
}

function ImageNuevoProyectoResidencial() {
  return (
    <div className="absolute h-[240px] left-0 top-0 w-[378.219px]" data-name="Image (Nuevo Proyecto Residencial)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroCarousel} />
    </div>
  );
}

function Container4() {
  return <div className="absolute bg-gradient-to-b from-[rgba(135,21,21,0.95)] h-[240px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[378.219px]" data-name="Container" />;
}

// NewsCard1 eliminado - componente vacío innecesario

function Icon2() {
  return (
    <div className="absolute left-[63.06px] size-[16px] top-[2.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function LeerMas() {
  return (
    <motion.div
      className="absolute h-[21px] left-[32px] top-[205.19px] w-[314.219px] cursor-pointer"
      data-name="leer mas"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.33px] whitespace-pre">Leer más</p>
      <Icon2 />
    </motion.div>
  );
}

function Contenido() {
  return (
    <div className="absolute h-[118px] left-[23px] overflow-clip top-[77px] w-[323px]" data-name="contenido">
      <p className="absolute font-['Arial:Regular',sans-serif] h-[57px] leading-[21px] left-[10px] not-italic text-[20px] text-white top-[25px] w-[280px]">nuestro nuevo proyecto !!AUKANA!! oficialmente está en obra, no esperes más y sé parte de esta gran obra</p>
    </div>
  );
}

function Fecha() {
  return (
    <div className="absolute h-[30px] left-[7px] overflow-clip top-[12px] w-[323px]" data-name="fecha">
      <p className="absolute font-['Arial:Regular',sans-serif] h-[23px] leading-[21px] left-[10px] not-italic text-[16px] text-white top-[15px] w-[180px]">17 de octubre del 2025</p>
    </div>
  );
}

function NewsCard2({ date = "17 de octubre del 2025", description = "Contenido" }: { date?: string; description?: string } = {}) {
  return (
    <div className="absolute h-[258.188px] left-0 top-[240px] w-[378.219px]" data-name="NewsCard">
      <div className="absolute h-[21px] left-[32px] top-[205.19px] w-[314.219px] cursor-pointer" data-name="leer mas">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.33px] whitespace-pre">Leer más</p>
      </div>
      <div className="absolute h-[118px] left-[23px] overflow-clip top-[77px] w-[323px]" data-name="contenido">
        <p className="absolute font-['Arial:Regular',sans-serif] h-[57px] leading-[21px] left-[10px] not-italic text-[14px] text-white top-[19px] w-[264px]">{description}</p>
      </div>
      <div className="absolute h-[30px] left-[7px] overflow-clip top-[7px] w-full" data-name="fecha">
        <p className="absolute font-['Arial:Regular',sans-serif] h-[23px] leading-[21px] left-[10px] not-italic text-[14px] text-white top-[7px] w-auto">{date}</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <motion.div
      className="absolute bg-gradient-to-b from-[63.942%] from-[rgba(227,66,52,0.91)] h-[498.188px] left-0 overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[rgba(64,56,56,0.95)] top-0 w-[378.219px]"
      data-name="Container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0px 35px 70px -12px rgba(0,0,0,0.35)" }}
    >
      <NewsCard date="17 de octubre de 2025" title="Altos de Cattleya" description="Pronto comenzaremos cosas maravillosas, ¡no te las pierdas!" />
      <Container3 />
      <NewsCard2 date="17 de octubre de 2025" description="Pronto comenzaremos cosas maravillosas, ¡no te las pierdas!" />
    </motion.div>
  );
}

function NewsCard3() {
  return <div className="absolute h-[498.188px] left-0 opacity-0 top-0 w-[378.219px]" data-name="NewsCard" />;
}

function Container6() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[498.188px] left-0 rounded-[24px] shadow-[0px_0px_25.222px_0px_rgba(255,255,255,0.13)] top-0 w-[378.219px]" data-name="Container" />;
}

function ImageCertificacionInternacional() {
  return (
    <div className="absolute h-[240px] left-0 top-0 w-[378.219px]" data-name="Image (Certificación Internacional)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageCertificacionInternacional} />
    </div>
  );
}

function Container7() {
  return <div className="absolute bg-gradient-to-b from-[rgba(135,21,21,0.95)] h-[240px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[378.219px]" data-name="Container" />;
}

function NewsCard4() {
  return (
    <div className="absolute h-[240px] left-0 overflow-clip top-0 w-[378.219px]" data-name="NewsCard">
      <ImageCertificacionInternacional />
      <Container7 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function NewsCard5() {
  return (
    <div className="h-[18px] relative shrink-0 w-[64.052px]" data-name="NewsCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[64.052px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap top-[-1.33px] whitespace-pre">08 Oct 2025</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-[12px] opacity-0 top-[32px] w-[314.219px]" data-name="Container">
      <Icon3 />
      <NewsCard5 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[36px] left-[32px] opacity-0 top-[66px] w-[314.219px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-[-2px] whitespace-pre">Certificación Internacional</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[67.188px] left-[32px] opacity-0 top-[114px] w-[314.219px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[-1.67px] w-[289px]">Libella obtiene la certificación LEED Platino por nuestro compromiso con la construcción sostenible y el medio ambiente.</p>
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[63.06px] size-[16px] top-[2.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <motion.div
      className="absolute h-[21px] left-[32px] top-[205.19px] w-[314.219px] cursor-pointer"
      data-name="Container"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.33px] whitespace-pre">Leer más</p>
      <Icon4 />
    </motion.div>
  );
}

function NewsCard6() {
  return (
    <div className="absolute h-[258.188px] left-0 top-[240px] w-[378.219px]" data-name="NewsCard">
      <Container8 />
      <Heading1 />
      <Paragraph />
      <Container9 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[498.188px] left-[-378.22px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(255,255,255,0.1)] w-[378.219px]" data-name="Container" />;
}

function Container11() {
  return (
    <motion.div
      className="absolute bg-gradient-to-b from-[63.942%] from-[rgba(227,66,52,0.91)] h-[498.188px] left-[410.22px] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[rgba(64,56,56,0.95)] top-0 w-[378.219px]"
      data-name="Container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -10, boxShadow: "0px 35px 70px -12px rgba(0,0,0,0.35)" }}
    >
      <NewsCard date="8 de octubre de 2025" title="Certificación LEED" description="Libella obtiene la certificación LEED Platino por nuestro compromiso con la construcción sostenible y el medio ambiente." />
      <Container6 />
      <NewsCard2 date="08 de octubre de 2025" description="Libella obtiene la certificación LEED Platino por nuestro compromiso con la construcción sostenible y el medio ambiente." />
      <Container10 />
    </motion.div>
  );
}

function NewsCard7() {
  return <div className="absolute h-[498.188px] left-0 opacity-0 top-0 w-[378.219px]" data-name="NewsCard" />;
}

function Container12() {
  return <div className="absolute bg-[rgba(255,255,255,0)] h-[498.188px] left-0 rounded-[24px] shadow-[0px_0px_34.972px_0px_rgba(255,255,255,0.18)] top-0 w-[378.219px]" data-name="Container" />;
}

function ImageExpansionRegional() {
  return (
    <div className="absolute h-[240px] left-0 top-0 w-[378.219px]" data-name="Image (Expansión Regional)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgHeroCarousel1} />
    </div>
  );
}

function Container13() {
  return <div className="absolute bg-gradient-to-b from-[rgba(135,21,21,0.95)] h-[240px] left-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0)] w-[378.219px]" data-name="Container" />;
}

function NewsCard8() {
  return (
    <div className="absolute h-[240px] left-0 overflow-clip top-0 w-[378.219px]" data-name="NewsCard">
      <ImageExpansionRegional />
      <Container13 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function NewsCard9() {
  return (
    <div className="h-[18px] relative shrink-0 w-[64.052px]" data-name="NewsCard">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[18px] relative w-[64.052px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-[rgba(255,255,255,0.7)] text-nowrap top-[-1.33px] whitespace-pre">01 Oct 2025</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[18px] items-center left-[12px] opacity-0 top-[32px] w-[314.219px]" data-name="Container">
      <Icon5 />
      <NewsCard9 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[36px] left-[32px] opacity-0 top-[66px] w-[314.219px]" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-[-2px] whitespace-pre">Expansión Regional</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[67.188px] left-[32px] opacity-0 top-[114px] w-[314.219px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[22.4px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[-1.67px] w-[300px]">Abrimos nueva oficina en Medellín para atender mejor a nuestros clientes en la región y expandir nuestra presencia nacional.</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[63.06px] size-[16px] top-[2.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <motion.div
      className="absolute h-[21px] left-[32px] top-[205.19px] w-[314.219px] cursor-pointer"
      data-name="Container"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[-1.33px] whitespace-pre">Leer más</p>
      <Icon6 />
    </motion.div>
  );
}

function NewsCard10() {
  return (
    <div className="absolute h-[258.188px] left-0 top-[240px] w-[378.219px]" data-name="NewsCard">
      <Container14 />
      <Heading2 />
      <Paragraph1 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <motion.div
      className="absolute bg-gradient-to-b from-[63.942%] from-[rgba(227,66,52,0.91)] h-[498.188px] left-[820.44px] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[rgba(64,56,56,0.95)] top-0 w-[378.219px]"
      data-name="Container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ y: -10, boxShadow: "0px 35px 70px -12px rgba(0,0,0,0.35)" }}
    >
      <NewsCard date="1 de octubre de 2025" title="Expansión Regional" description="Abrimos nueva oficina en Medellín para atender mejor a nuestros clientes en la región y expandir nuestra presencia nacional." />
      <Container12 />
      <NewsCard2 date="01 de octubre de 2025" description="Abrimos nueva oficina en Medellín para atender mejor a nuestros clientes en la región y expandir nuestra presencia nacional." />
    </motion.div>
  );
}

function Container17() {
  // Mostrar solo las primeras 3 noticias
  const noticiasParaMostrar = noticiasData.slice(0, 3);
  
  return (
    <div className="h-[498.188px] relative shrink-0 w-full flex gap-[32px]" data-name="Container">
      {noticiasParaMostrar.map((noticia, index) => (
        <motion.div
          key={noticia.id}
          className="w-[378.219px] h-full flex-shrink-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ y: -10 }}
        >
          <TarjetaNoticia noticia={noticia} />
        </motion.div>
      ))}
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[606.188px] items-start left-[32px] top-[96px] w-[1198.67px]" data-name="Container">
      <Heading />
      <Container17 />
    </div>
  );
}

function SeccionNoticias() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(198,41,38,0.97)] h-[798.188px] left-0 overflow-clip to-[#403838] top-[580px] w-[1263px]" data-name="seccion noticias">
      <Container1 />
      <Container2 />
      <Container18 />
    </div>
  );
}

function ImageDivider() {
  return (
    <div className="absolute h-[250px] left-0 top-0 w-[1262.67px]" data-name="Image (Divider)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageDivider} />
    </div>
  );
}

function Container19() {
  return <div className="absolute bg-gradient-to-b from-[rgba(135,21,21,0.4)] h-[250px] left-0 to-[rgba(0,0,0,0)] top-[18px] w-[1262.67px]" data-name="Container" />;
}

function Container20() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(30,23,23,0.6)] h-[250px] left-0 to-[rgba(0,0,0,0)] top-[-63px] w-[1262.67px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[250px] left-[1262.67px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(255,255,255,0.1)] w-[1262.67px]" data-name="Container" />;
}

function SeccionHojasDivisoras() {
  return (
    <motion.div
      className="absolute h-[250px] left-0 overflow-clip top-[2686px] w-[1263px]"
      data-name="seccion_hojas_divisoras"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <ImageDivider />
      <Container20 />
      <Container21 />
    </motion.div>
  );
}

function Text1() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[4px] left-[499.33px] to-[rgba(0,0,0,0)] top-[64px] via-50% via-[rgba(255,255,255,0.5)] w-[200px]" data-name="Text" />;
}

function MetricsSection() {
  return (
    <div className="absolute content-stretch flex h-[53.333px] items-start left-[519.1px] top-[3.33px] w-[160.458px]" data-name="MetricsSection">
      <p className="font-['Arial:Regular',sans-serif] leading-[60px] not-italic relative shrink-0 text-[40px] text-center text-nowrap text-white tracking-[-2.88px] uppercase whitespace-pre">Métricas</p>
    </div>
  );
}

function Heading3() {
  return (
    <motion.div
      className="h-[60px] relative shrink-0 w-full"
      data-name="Heading 2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Text1 />
      <MetricsSection />
    </motion.div>
  );
}

function MetricCard() {
  return <div className="absolute h-[288px] left-0 opacity-0 top-0 w-[378.219px]" data-name="MetricCard" />;
}

function Container22() {
  return <div className="absolute h-[288px] left-0 opacity-20 top-0 w-[378.219px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 378.22 288\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -32.849 -32.849 0 295.25 144)\\'><stop stop-color=\\'rgba(255,255,255,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,128,128,0.05)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>')" }} />;
}

function Container23() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[288px] left-[378.22px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(255,255,255,0.2)] w-[378.219px]" data-name="Container" />;
}

function Icon7() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p22123880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3fb33600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <motion.div
      className="absolute bg-[rgba(255,255,255,0.1)] left-[109.1px] rounded-[2.23696e+07px] size-[64px] top-0"
      data-name="Container"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <Icon7 />
    </motion.div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[72px] left-0 top-[88px] w-[282.219px] flex items-center justify-center" data-name="Heading 3">
      <motion.p
        className="font-['Arial:Regular',sans-serif] not-italic text-[48px] text-center text-white tracking-[-2.88px]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        150+
      </motion.p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-0 top-[168px] w-[282.219px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[141.52px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.67px] tracking-[0.8px] translate-x-[-50%] uppercase whitespace-pre">Proyectos Completados</p>
    </div>
  );
}

function MetricCard1() {
  return (
    <div className="absolute h-[192px] left-[48px] top-[48px] w-[282.219px]" data-name="MetricCard">
      <Container24 />
      <Heading4 />
      <Paragraph2 />
    </div>
  );
}

function Container25() {
  return (
    <motion.div
      className="absolute bg-gradient-to-b from-[25.962%] from-[rgba(227,66,52,0.91)] h-[288px] left-0 overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[#403838] top-0 w-[378.219px]"
      data-name="Container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10, boxShadow: "0px 35px 70px -12px rgba(0,0,0,0.35)" }}
    >
      <MetricCard />
      <Container22 />
      <Container23 />
      <MetricCard1 />
    </motion.div>
  );
}

function MetricCard2() {
  return <div className="absolute h-[288px] left-0 opacity-0 top-0 w-[378.219px]" data-name="MetricCard" />;
}

function Container26() {
  return <div className="absolute h-[288px] left-0 opacity-20 top-0 w-[378.219px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 378.22 288\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -32.849 -32.849 0 295.25 144)\\'><stop stop-color=\\'rgba(255,255,255,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,128,128,0.05)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>')" }} />;
}

function Container27() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[288px] left-[378.22px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(255,255,255,0.2)] w-[378.219px]" data-name="Container" />;
}

function Icon8() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3c1b880} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p16bbf900} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <motion.div
      className="absolute bg-[rgba(255,255,255,0.1)] left-[109.1px] rounded-[2.23696e+07px] size-[64px] top-0"
      data-name="Container"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <Icon8 />
    </motion.div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[72px] left-0 top-[88px] w-[282.219px] flex items-center justify-center" data-name="Heading 3">
      <motion.p
        className="font-['Arial:Regular',sans-serif] not-italic text-[48px] text-center text-white tracking-[-2.88px]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        5000+
      </motion.p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-0 top-[168px] w-[282.219px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[141.27px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.67px] tracking-[0.8px] translate-x-[-50%] uppercase whitespace-pre">Clientes Satisfechos</p>
    </div>
  );
}

function MetricCard3() {
  return (
    <div className="absolute h-[192px] left-[48px] top-[48px] w-[282.219px]" data-name="MetricCard">
      <Container28 />
      <Heading5 />
      <Paragraph3 />
    </div>
  );
}

function Container29() {
  return (
    <motion.div
      className="absolute bg-gradient-to-b from-26% from-[rgba(227,66,52,0.91)] h-[288px] left-[410.22px] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[#403838] top-0 w-[378.219px]"
      data-name="Container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ y: -10, boxShadow: "0px 35px 70px -12px rgba(0,0,0,0.35)" }}
    >
      <MetricCard2 />
      <Container26 />
      <Container27 />
      <MetricCard3 />
    </motion.div>
  );
}

function MetricCard4() {
  return <div className="absolute h-[288px] left-0 opacity-0 top-0 w-[378.219px]" data-name="MetricCard" />;
}

function Container30() {
  return <div className="absolute h-[288px] left-0 opacity-20 top-0 w-[378.219px]" data-name="Container" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 378.22 288\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -32.849 -32.849 0 295.25 144)\\'><stop stop-color=\\'rgba(255,255,255,0.1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(128,128,128,0.05)\\' offset=\\'0.25\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.5\\'/></radialGradient></defs></svg>')" }} />;
}

function Container31() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-[288px] left-[378.22px] to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(255,255,255,0.2)] w-[378.219px]" data-name="Container" />;
}

function Icon9() {
  return (
    <div className="absolute left-[16px] size-[32px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p18cb7e80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p26c56780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <motion.div
      className="absolute bg-[rgba(255,255,255,0.1)] left-[109.1px] rounded-[2.23696e+07px] size-[64px] top-0"
      data-name="Container"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <Icon9 />
    </motion.div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[72px] left-0 top-[88px] w-[282.219px] flex items-center justify-center" data-name="Heading 3">
      <motion.p
        className="font-['Arial:Regular',sans-serif] not-italic text-[48px] text-center text-white tracking-[-2.88px]"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        25+
      </motion.p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[24px] left-0 top-[168px] w-[282.219px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[142.06px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-1.67px] tracking-[0.8px] translate-x-[-50%] uppercase whitespace-pre">Años de Experiencia</p>
    </div>
  );
}

function MetricCard5() {
  return (
    <div className="absolute h-[192px] left-[48px] top-[48px] w-[282.219px]" data-name="MetricCard">
      <Container32 />
      <Heading6 />
      <Paragraph4 />
    </div>
  );
}

function Container33() {
  return (
    <motion.div
      className="absolute bg-gradient-to-b from-26% from-[rgba(227,66,52,0.91)] h-[288px] left-[820.44px] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[#403838] top-0 w-[378.219px]"
      data-name="Container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ y: -10, boxShadow: "0px 35px 70px -12px rgba(0,0,0,0.35)" }}
    >
      <MetricCard4 />
      <Container30 />
      <Container31 />
      <MetricCard5 />
    </motion.div>
  );
}

function Container34() {
  return (
    <div className="h-[288px] relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Container29 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[396px] items-start left-[32px] top-[96px] w-[1198.67px]" data-name="Container">
      <Heading3 />
      <Container34 />
    </div>
  );
}

function SeccionMetricas() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(198,41,38,0.97)] h-[588px] left-0 overflow-clip to-[#403838] top-[2936px] w-[1263px]" data-name="seccion metricas">
      <Container35 />
    </div>
  );
}

function Container36() {
  return <div className="absolute blur-3xl filter left-0 rounded-[2.23696e+07px] size-[400px] top-[47.67px]" data-name="Container" />;
}

function Container37() {
  return <div className="absolute blur-3xl filter left-[762.67px] rounded-[2.23696e+07px] size-[500px] top-0" data-name="Container" />;
}

function Container38() {
  return (
    <div className="absolute h-[447.667px] left-px opacity-30 top-0 w-[1262.67px]" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute h-[188px] left-0 top-0 w-[232px]" data-name="Footer">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgFooter} />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute h-[27px] left-[36px] top-[207px] w-[196px]" data-name="Footer">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[27px] left-0 not-italic text-[#f7f4eb] text-[18px] text-nowrap top-[-1.67px] whitespace-pre">el arte de la creación</p>
    </div>
  );
}

function Container39() {
  return (
    <motion.div
      className="absolute h-[234px] left-[48px] top-[-22.34px] w-[367.552px]"
      data-name="Container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Footer />
      <Footer1 />
    </motion.div>
  );
}

function Footer2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Footer">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-[-2px] tracking-[-1.2px] whitespace-pre">Datos de contacto</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[20px] top-[0.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #F7F4EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #F7F4EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <motion.div
      className="h-[21px] relative shrink-0 w-full cursor-pointer"
      data-name="Link"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Icon10 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[32px] not-italic text-[#f7f4eb] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">libella123@libella.com</p>
    </motion.div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[20px] top-[0.5px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_347)" id="Icon">
          <path d={svgPaths.p24c7c480} id="Vector" stroke="var(--stroke-0, #F7F4EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_347">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <motion.div
      className="h-[21px] relative shrink-0 w-full cursor-pointer"
      data-name="Link"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
    >
      <Icon11 />
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[32px] not-italic text-[#f7f4eb] text-[14px] text-nowrap top-[-1.33px] whitespace-pre">(+57) 123-456-7890</p>
    </motion.div>
  );
}

function Footer3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[54px] items-start relative shrink-0 w-full" data-name="Footer">
      <Link />
      <Link1 />
    </div>
  );
}

function Container40() {
  return (
    <motion.div
      className="absolute content-stretch flex flex-col gap-[16px] h-[234px] items-start left-[415.55px] top-0 w-[367.552px]"
      data-name="Container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Footer2 />
      <Footer3 />
    </motion.div>
  );
}

function Footer4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Footer">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-[-2px] tracking-[-1.2px] whitespace-pre">Síguenos</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_342)" id="Icon">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p29b16f80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_342">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[48px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.667px] relative size-[48px]">
        <Icon12 />
      </div>
    </motion.div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link3() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[48px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.667px] relative size-[48px]">
        <Icon13 />
      </div>
    </motion.div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1bcdee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 7.5H1.66667V17.5H5V7.5Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25677470} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <motion.div
      className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[48px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
      whileTap={{ scale: 0.95 }}
    >
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.667px] relative size-[48px]">
        <Icon14 />
      </div>
    </motion.div>
  );
}

function Footer5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-start relative shrink-0 w-full" data-name="Footer">
      <Link2 />
      <Link3 />
      <Link4 />
    </div>
  );
}

function Container41() {
  return (
    <motion.div
      className="absolute content-stretch flex flex-col gap-[16px] h-[234px] items-start left-[831.1px] top-0 w-[367.552px]"
      data-name="Container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Footer4 />
      <Footer5 />
    </motion.div>
  );
}

function Container42() {
  return (
    <div className="h-[234px] relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="h-[53.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[319.667px] items-start left-[32px] top-[64px] w-[1198.67px]" data-name="Container">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Footer6() {
  return (
    <div className="absolute h-[21px] left-[23px] top-[397px] w-[1198.67px]" data-name="Footer">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-[599.01px] not-italic text-[#f7f4eb] text-[14px] text-center text-nowrap top-[-1.33px] translate-x-[-50%] whitespace-pre">Libella Perspectiva © 2025 All Rights Reserved</p>
    </div>
  );
}

function EndPage() {
  return (
    <div className="absolute bg-gradient-to-b from-[#403838] h-[447.667px] left-0 overflow-clip to-[#c62926] top-[3524px] w-[1263px]" data-name="end_page">
      <Container38 />
      <Container44 />
      <Footer6 />
    </div>
  );
}

function Container45() {
  return <div className="absolute blur-[69.503px] filter left-0 opacity-30 rounded-[2.91516e+07px] size-[651.591px] top-[424.92px]" data-name="Container" />;
}

function Container46() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.5)] h-[4.344px] left-0 to-[rgba(0,0,0,0)] top-0 w-[217.197px]" data-name="Container" />;
}

function Heading7() {
  return (
    <div className="absolute h-[65.159px] left-0 top-[7.95px] w-[985.205px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[65.159px] left-0 not-italic text-[43.439px] text-nowrap text-white top-[0.22px] tracking-[-3.1276px] uppercase whitespace-pre">Proyectos</p>
    </div>
  );
}

function Container47() {
  return (
    <motion.div
      className="absolute h-[65.159px] left-[139.01px] top-[104.25px] w-[985.205px]"
      data-name="Container"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container46 />
      <Heading7 />
    </motion.div>
  );
}

// Proyecto components (simplified, we'll create one reusable component)
function ProjectCard({ title, type, description, location, status, image, delay, left, top, onClick }: any) {
  return (
    <motion.div
      className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[412.226px] items-start overflow-clip rounded-[26.064px] shadow-[0px_27.15px_54.299px_-13.032px_rgba(0,0,0,0.25)] w-[466.539px] cursor-pointer"
      data-name="ProjectCard"
      style={{ left, top }}
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -15, boxShadow: "0px 37.15px 74.299px -13.032px rgba(0,0,0,0.35)" }}
    >
      <div className="h-[412.226px] overflow-clip relative shrink-0 w-full" data-name="Container">
        <div className="absolute h-[412.226px] left-0 top-0 w-[466.539px]" data-name="Image">
          <motion.img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={image}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.9)] h-[412.226px] left-0 opacity-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(0,0,0,0.4)] w-[466.539px]" />
        <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[412.226px] left-[-466.54px] opacity-0 to-[rgba(0,0,0,0)] top-0 via-50% via-[rgba(255,255,255,0.2)] w-[466.539px]" />
        
        <motion.div
          className="absolute bg-[rgba(0,0,0,0.6)] box-border content-stretch flex flex-col h-auto items-start left-0 pb-0 pt-[26.932px] px-[26.064px] bottom-0 w-[466.539px]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div aria-hidden="true" className="absolute border-[0.869px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
          <div className="relative w-full pb-[26.932px]">
            <div className="h-[19.548px] mb-[13.032px]">
              <p className="font-['Arial:Regular',sans-serif] leading-[19.548px] not-italic text-[13.032px] text-[rgba(255,255,255,0.7)] text-nowrap tracking-[0.6516px] uppercase">{type}</p>
            </div>
            <div className="h-[39.095px] mb-[13.032px]">
              <p className="font-['Arial:Regular',sans-serif] leading-[39.095px] not-italic text-[26.064px] text-nowrap text-white">{title}</p>
            </div>
            <div className="h-auto mb-[13.032px]">
              <p className="font-['Arial:Regular',sans-serif] leading-[24.706px] not-italic text-[15.204px] text-[rgba(255,255,255,0.85)]">{description}</p>
            </div>
            <div className="border-t border-[rgba(255,255,255,0.1)] pt-[13.901px] mb-[13.032px]">
              <p className="font-['Arial:Regular',sans-serif] leading-[16.29px] not-italic text-[10.86px] text-[rgba(255,255,255,0.5)] tracking-[0.543px] uppercase mb-[4.344px]">Ubicación</p>
              <p className="font-['Arial:Regular',sans-serif] leading-[21.177px] not-italic text-[14.118px] text-white">{location}</p>
            </div>
            <div className="flex items-center gap-[8.688px]">
              <div className="flex-1 bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-[1.086px] to-[rgba(255,255,255,0)]" />
              <div className="bg-[rgba(255,255,255,0.15)] h-[26.607px] px-[13.03px] rounded-[2.91516e+07px] flex items-center">
                <p className="font-['Arial:Regular',sans-serif] leading-[17.919px] not-italic text-[#e34234] text-[11.946px] tracking-[0.543px] uppercase">{status}</p>
              </div>
              <div className="flex-1 bg-gradient-to-b from-[rgba(255,255,255,0.2)] h-[1.086px] to-[rgba(255,255,255,0)]" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function Container84({ onSelectProject }: { onSelectProject?: (projectId: string) => void }) {
  const projects = [
    {
      id: "altos-cattleya",
      title: "Altos de Cattleya",
      type: "Parcelación",
      description: "Parcelas desde 1000m² en conjunto cerrado.",
      location: "Totoró - vereda de Aguas Tibias, Cauca. (Kilómetro 6)",
      status: "Disponible",
      image: imgHeroCarousel,
      left: "0",
      top: "0",
      delay: 0,
    },
    {
      id: "amsterdam",
      title: "AmsterHaus",
      type: "Apartamentos - Apartaestudios",
      description: "Hermosos apartamentos desde 55m² y apartaestudios desde 33,29 m².",
      location: "Popayán Cra 20 #55 N 64 (A dos minutos de Café La Palma)",
      status: "Próximamente",
      image: imgImageCertificacionInternacional,
      left: "518.67px",
      top: "0",
      delay: 0.2,
    },
    {
      id: "la-ceiba",
      title: "La Ceiba",
      type: "Parcelación",
      description: "Espacio campestre con escrituras de 3000m² en copropiedad y listas para escriturar.",
      location: "Calibio, antigua carrilera, a 4.4km de la Variante Norte.",
      status: "Disponible",
      image: imgImageLaCeiba,
      left: "0",
      top: "464.35px",
      delay: 0.4,
    },
    {
      id: "la-gran-turquesa",
      title: "La Gran Turquesa",
      type: "Parcelación",
      description: "Exclusivo condominio campestre con amplias parcelas desde 1000m².",
      location: "Totoró, Cauca. (Kilómetro 4)",
      status: "FASE 1 VENDIDA",
      image: imgImageLaGranTurquesa,
      left: "518.67px",
      top: "464.35px",
      delay: 0.6,
    },
  ];

  return (
    <div className="absolute h-[876.58px] left-[139.01px] top-[221.54px] w-[985.205px]" data-name="Container">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          {...project} 
          onClick={() => onSelectProject?.(project.id)}
        />
      ))}
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow h-[26.064px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[26.064px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[26.064px] left-0 not-italic text-[17.376px] text-nowrap text-white top-[0.22px] tracking-[0.3258px] whitespace-pre">Ver todos los proyectos</p>
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[19.548px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p28a30700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.17197" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <motion.div
      className="absolute bg-[rgba(227,66,52,0.95)] box-border content-stretch flex gap-[13.032px] h-[53.865px] items-center left-[849.66px] px-[26.932px] py-[0.869px] rounded-[2.91516e+07px] top-[1150.25px] w-[274.55px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.05, boxShadow: "0px 15px 25px -3.258px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.98 }}
    >
      <div aria-hidden="true" className="absolute border-[0.869px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2.91516e+07px] shadow-[0px_10.86px_16.29px_-3.258px_rgba(0,0,0,0.1),0px_4.344px_6.516px_-4.344px_rgba(0,0,0,0.1)]" />
      <Text14 />
      <Icon15 />
    </motion.div>
  );
}

function Container85({ onSelectProject }: { onSelectProject?: (projectId: string) => void }) {
  return (
    <div className="absolute h-[1308.37px] left-0 top-0 w-[1263.22px]" data-name="Container">
      <Container47 />
      <Container84 onSelectProject={onSelectProject} />
      <Link5 />
    </div>
  );
}

function InversionesPaginaConstructora({ onSelectProject }: { onSelectProject?: (projectId: string) => void }) {
  return (
    <div className="absolute h-[1308.61px] left-0 top-[1378px] w-[1263px]" data-name="Inversiones Página Constructora" style={{ backgroundImage: "linear-gradient(rgb(64, 56, 56) 0%, rgba(198, 41, 38, 0.97) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }}>
      <Container45 />
      <Container85 onSelectProject={onSelectProject} />
    </div>
  );
}

function Container86() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[35.615px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">INICIO</p>
    </div>
  );
}

function Link6() {
  return (
    <motion.div
      className="absolute h-[20px] left-[93px] overflow-clip top-px w-[51px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.05 }}
    >
      <Container86 />
      <Header />
    </motion.div>
  );
}

function Container87() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header1() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[57.5px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">SERVICIOS</p>
    </div>
  );
}

function Link7() {
  return (
    <motion.div
      className="absolute h-[20px] left-[225px] overflow-clip top-[2px] w-[72px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.05 }}
    >
      <Container87 />
      <Header1 />
    </motion.div>
  );
}

function Container88() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header2() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[74.698px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">INVERSIONES</p>
    </div>
  );
}

function Link8() {
  return (
    <motion.div
      className="absolute h-[20px] left-[378px] overflow-clip top-0 w-[94px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.05 }}
    >
      <Container88 />
      <Header2 />
    </motion.div>
  );
}

function Container89() {
  return (
    <div className="absolute h-[20px] left-0 top-[31px] w-[543px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[543px]">
        <Link6 />
        <Link7 />
        <Link8 />
      </div>
    </div>
  );
}

function ImageLibellaLogo() {
  return (
    <motion.div
      className="absolute h-[40px] left-[569px] top-[19px] w-[50px]"
      data-name="Image (Libella Logo)"
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, -5, 0] }}
      transition={{ duration: 0.5 }}
    >
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageLibellaLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] w-[50px]" />
    </motion.div>
  );
}

function Container90() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header3() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[65.635px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">PROYECTOS</p>
    </div>
  );
}

function Link9() {
  return (
    <motion.div
      className="absolute h-[20px] left-0 overflow-clip top-[-0.25px] w-[88px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.05 }}
    >
      <Container90 />
      <Header3 />
    </motion.div>
  );
}

function Container91() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header4() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[63.698px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">NOSOTROS</p>
    </div>
  );
}

function Link10() {
  return (
    <motion.div
      className="absolute h-[20px] left-[162px] overflow-clip top-0 w-[76px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.05 }}
    >
      <Container91 />
      <Header4 />
    </motion.div>
  );
}

function Container92() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header5() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[85.781px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">CONTACTANOS</p>
    </div>
  );
}

function Link11() {
  return (
    <motion.div
      className="absolute h-[20px] left-[311px] overflow-clip top-[-0.25px] w-[107px] cursor-pointer"
      data-name="Link"
      whileHover={{ scale: 1.05 }}
    >
      <Container92 />
      <Header5 />
    </motion.div>
  );
}

function Container93() {
  return (
    <div className="absolute h-[20px] left-[732px] top-[29px] w-[499px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[499px]">
        <Link9 />
        <Link10 />
        <Link11 />
      </div>
    </div>
  );
}

function Header6() {
  return (
    <motion.div
      className="absolute bg-[#c62926] box-border content-stretch flex h-[80px] items-center justify-between left-0 px-[32px] py-0 top-0 w-[1262.67px]"
      data-name="Header"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container89 />
      <ImageLibellaLogo />
      <Container93 />
    </motion.div>
  );
}

function App({ onSelectProject }: { onSelectProject?: (projectId: string) => void }) {
  return (
    <div className="absolute h-[3971px] left-0 top-0 w-[1263px]" data-name="App">
      <CarruselInicio />
      <SeccionNoticias />
      <SeccionHojasDivisoras />
      <SeccionMetricas />
      <EndPage />
      <InversionesPaginaConstructora onSelectProject={onSelectProject} />
      <Header6 />
    </div>
  );
}

export default function LibellaInicio({ onNavigateToProject }: { onNavigateToProject?: (projectId: string) => void }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const newScale = windowWidth < DESIGN_WIDTH ? windowWidth / DESIGN_WIDTH : 1;
      setScale(newScale);
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    
    return () => window.removeEventListener("resize", calculateScale);
  }, []);

  const scaledHeight = DESIGN_HEIGHT * scale;

  return (
    <div 
      className="bg-white w-full" 
      style={{ 
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden'
      }} 
      data-name="libella inicio"
    >
      <div
        style={{
          width: `${DESIGN_WIDTH}px`,
          height: `${DESIGN_HEIGHT}px`,
          transform: `scale(${scale})`,
          transformOrigin: "top center",
          position: 'relative',
          margin: '0 auto'
        }}
      >
        <App onSelectProject={onNavigateToProject} />
      </div>
    </div>
  );
}
