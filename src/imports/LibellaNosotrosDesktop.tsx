import svgPaths from "./svg-nqyhb9o1rk";
import imgImageProyecto from "figma:asset/c9f8ba6867605bfb5dd4574833e1755af8845ad8.png";
import imgImageBryanSantiagoCastro from "figma:asset/c45292d9d595b1476e0c7cd533a0e1483a2112c3.png";
import imgImageConstruccionModerna from "figma:asset/9ed1ef596e50b3d07a721d59bee2005cfbd4b07e.png";
import imgImageArquitecturaInmobiliaria from "figma:asset/ff20f2f3e16adc662895331f14c34e78e5043ec6.png";
import imgImageHogarDeLujo from "figma:asset/dc2f030444470a80de0ccfc2163e44ae020da3aa.png";
import imgImageLibellaLogo from "figma:asset/ff8c620bf8477f6cb34fd583907c36620683b38d.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d="M20 24H28" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M20 16H28" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p1a9bd860} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.pb4da140} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p1764aa00} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[367.225px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[367.225px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[48px] left-0 not-italic text-[48px] text-nowrap text-white top-[-5px] whitespace-pre">¿Quiénes somos?</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <Heading1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[227.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[32.5px] left-0 not-italic text-[20px] text-[rgba(255,255,255,0.9)] top-[-2.6px] w-[508px]">Libella Perspectiva S.A.S es una empresa Caucana conformada por personas con más de 20 años de experiencia y trayectoria en el sector inmobiliario. Se abre camino en temas de parcelación, urbanismos y construcción, a la vez que busca cumplir los sueños campestres de las personas, especialmente de las familias Payanesas.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[299.5px] items-start left-0 top-[50.25px] w-[511.6px]" data-name="Container">
      <Container />
      <Paragraph />
    </div>
  );
}

function Container2() {
  return <div className="absolute bg-gradient-to-b blur-2xl filter from-[#af2c28] from-[0.962%] h-[432px] left-[-16px] opacity-20 rounded-[24px] to-[#871515] to-[83.173%] top-[-16px] w-[543.6px]" data-name="Container" />;
}

function ImageProyecto() {
  return (
    <div className="absolute h-[400px] left-0 pointer-events-none rounded-[16px] top-0 w-[511.6px]" data-name="Image (Proyecto)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16px] size-full" src={imgImageProyecto} />
      <div aria-hidden="true" className="absolute border-[#871515] border-[1.6px] border-solid inset-0 rounded-[16px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[400px] left-[575.6px] top-0 w-[511.6px]" data-name="Container">
      <Container2 />
      <ImageProyecto />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute h-[400px] left-[32px] top-[776px] w-[1087.2px]" data-name="Section">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p19a01780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p15663e00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3911f600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[106.513px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[106.513px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[40px] left-0 not-italic text-[36px] text-nowrap text-white top-[-3px] whitespace-pre">Misión</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Heading3 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[234px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[29.25px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.95)] top-[-1.6px] w-[420px]">Cumplir con los sueños campestres de los habitantes del sur Occidente Colombiano, brindando espacios silvestres urbanizados con proximidades considerables al sector urbano e innovando en el sistema de construcción, pensando en la necesidad, comodidad, confort, felicidad y satisfacción de cada cliente, con principios formados en honestidad e integridad para cada servicio prestado.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[rgba(180,24,21,0.91)] gap-[24px] h-[455.7px] items-start left-0 pb-[1.6px] pt-[49.6px] px-[49.6px] rounded-[24px] to-[rgba(222,58,58,0.95)] top-0 w-[519.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#871515] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container4 />
      <Paragraph1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Icon">
          <path d={svgPaths.p29d74c40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
          <path d={svgPaths.p3573b4c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33333" />
        </g>
      </svg>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[40px] relative shrink-0 w-[96.55px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-[96.55px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[40px] left-0 not-italic text-[36px] text-nowrap text-white top-[-3px] whitespace-pre">Visión</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Heading4 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[292.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[29.25px] left-0 not-italic text-[18px] text-[rgba(255,255,255,0.95)] top-[-1.6px] w-[417px]">Ser la empresa constructora integral más reconocida y ambicionada de Colombia, por nuestro cumplimiento, calidad, comercialización de nuestros proyectos y el desarrollo de estos, que anticipen y satisfagan los deseos y necesidades de los clientes, destacando y fomentando las zonas de bosques y reservas como parte fundamental de estos mismo, estructurada de forma creativa, competitiva e innovadora en diseños de infraestructura con calidad, seguridad, responsabilidad e integridad.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[rgba(180,24,21,0.91)] gap-[24px] h-[455.7px] items-start left-[567.6px] pb-[1.6px] pt-[49.6px] px-[49.6px] rounded-[24px] to-[rgba(222,58,58,0.95)] top-0 w-[519.6px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#871515] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <Container6 />
      <Paragraph2 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[455.7px] left-[32px] top-[1368px] w-[1087.2px]" data-name="Section">
      <Container5 />
      <Container7 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[48px] left-[544.21px] not-italic text-[48px] text-center text-nowrap text-white top-[-5px] translate-x-[-50%] whitespace-pre">Nuestros Valores</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[32.8px] size-[48px] top-[32.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p3bea9f00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-[32.8px] top-[96.8px] w-[275.462px]" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-white">Integridad</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[104px] left-[32.8px] top-[140.79px] w-[275.462px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.85)] top-[-2.4px] w-[267px]">{`Ser fiable y confiable en cada uno de nuestros actos. Sabemos la importancia de 'hacer lo que se dice y se promete'.`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-gradient-to-b from-[#b41815] h-[277.587px] left-0 rounded-[16px] to-[#de3a3a] to-[84.135%] top-0 w-[341.062px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9a1919] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon3 />
      <Heading2 />
      <Paragraph3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[32.8px] size-[48px] top-[32.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p1f61f640} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-[32.8px] top-[96.8px] w-[275.462px]" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-white">Honestidad</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[78px] left-[32.8px] top-[140.79px] w-[275.462px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.85)] top-[-2.4px] w-[273px]">Conducirnos con rectitud, justicia y honradez frente a los desafíos que nos plantea la realidad.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-gradient-to-b from-[#b41815] h-[277.587px] left-[373.06px] rounded-[16px] to-[#de3a3a] to-[87.019%] top-0 w-[341.062px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9a1919] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon4 />
      <Heading6 />
      <Paragraph4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[32.8px] size-[48px] top-[32.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p258eaa40} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p906d4a0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-[32.8px] top-[96.8px] w-[275.475px]" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-white">Respeto</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[78px] left-[32.8px] top-[140.79px] w-[275.475px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.85)] top-[-2.4px] w-[260px]">Reconocer el derecho ajeno, al comprender las distintas maneras de pensar y actuar.</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-gradient-to-b from-[#b41815] h-[277.587px] left-[746.13px] rounded-[16px] to-[#de3a3a] to-[87.5%] top-0 w-[341.075px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9a1919] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon5 />
      <Heading7 />
      <Paragraph5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[32.8px] size-[48px] top-[32.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d="M24 12V24L32 28" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p1f337080} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-[32.8px] top-[96.8px] w-[275.462px]" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-white">Cumplimiento</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[78px] left-[32.8px] top-[140.79px] w-[275.462px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.85)] top-[-2.4px] w-[265px]">Cada promesa realizada a los clientes debe ser ejecutada eficientemente en los tiempos establecidos.</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-gradient-to-b from-[#b41815] h-[277.587px] left-0 rounded-[16px] to-[#de3a3a] to-[87.5%] top-[309.59px] w-[341.062px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9a1919] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon6 />
      <Heading8 />
      <Paragraph6 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[32.8px] size-[48px] top-[32.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p1f337080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p30fa48f0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p2626b600} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-[32.8px] top-[96.8px] w-[275.462px]" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-white">Calidad</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[104px] left-[32.8px] top-[140.79px] w-[275.462px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.85)] top-[-2.4px] w-[269px]">Alcanzar en todos nuestros proyectos los estándares establecidos de diseño, seguridad, tiempo y costo, mejorando continuamente nuestro desempeño.</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-gradient-to-b from-[#b41815] h-[277.587px] left-[373.06px] rounded-[16px] to-[#de3a3a] to-[87.5%] top-[309.59px] w-[341.062px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9a1919] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon7 />
      <Heading9 />
      <Paragraph7 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[32.8px] size-[48px] top-[32.8px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p2b3c4500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p1e9ead00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p39ff1860} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p31eb3600} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute content-stretch flex h-[31.988px] items-start left-[32.8px] top-[96.8px] w-[275.475px]" data-name="Heading 3">
      <p className="basis-0 font-['Arial:Regular',sans-serif] grow leading-[32px] min-h-px min-w-px not-italic relative shrink-0 text-[24px] text-white">Trabajo en equipo</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[104px] left-[32.8px] top-[140.79px] w-[275.475px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[26px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.85)] top-[-2.4px] w-[270px]">La sinergia y el esfuerzo integrado por alcanzar un objetivo y resolver dificultades, sabiendo que el sentido de pertenencia será el norte.</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-gradient-to-b from-[#b41815] h-[277.587px] left-[746.13px] rounded-[16px] to-[#de3a3a] to-[87.5%] top-[309.59px] w-[341.075px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#9a1919] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Icon8 />
      <Heading10 />
      <Paragraph8 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[587.175px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] h-[699.175px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading5 />
      <Container14 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[rgba(0,0,0,0)] h-[891.175px] items-start left-0 pb-0 pt-[96px] px-[32px] to-[rgba(0,0,0,0)] top-[1919.7px] via-50% via-[rgba(175,44,40,0.1)] w-[1151.2px]" data-name="Section">
      <Container15 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[48px] left-[543.38px] not-italic text-[48px] text-center text-nowrap text-white top-[-5px] translate-x-[-50%] whitespace-pre">Nuestro Equipo</p>
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-gradient-to-b blur-2xl filter from-[#af2c28] from-[0.962%] h-[495.462px] left-[-16px] opacity-0 rounded-[24px] to-[#871515] top-[-16px] w-[362.4px]" data-name="Container" />;
}

function ImageBryanSantiagoCastro() {
  return (
    <div className="h-[436.263px] relative shrink-0 w-full" data-name="Image (Bryan Santiago Castro)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBryanSantiagoCastro} />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col h-[436.263px] items-start left-[1.6px] overflow-clip top-[1.6px] w-[327.2px]" data-name="Container">
      <ImageBryanSantiagoCastro />
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">Bryan Santiago Castro</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-2.2px] whitespace-pre">Programador</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute bg-gradient-to-t box-border content-stretch flex flex-col from-[rgba(0,0,0,0.8)] gap-[4px] h-[104px] items-start left-[1.6px] pb-0 pt-[24px] px-[24px] to-[rgba(0,0,0,0)] top-[357.86px] w-[327.2px]" data-name="Container">
      <Heading12 />
      <Paragraph9 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(175,44,40,0.91)] h-[463.462px] left-0 rounded-[16px] to-[rgba(135,21,21,0.95)] top-0 w-[330.4px]" data-name="Container">
      <div className="h-[463.462px] overflow-clip relative rounded-[inherit] w-[330.4px]">
        <Container17 />
        <Container18 />
      </div>
      <div aria-hidden="true" className="absolute border-[#871515] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute h-[463.462px] left-0 top-0 w-[330.4px]" data-name="Container">
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-gradient-to-b blur-2xl filter from-[#af2c28] from-[0.962%] h-[495.462px] left-[-16px] opacity-0 rounded-[24px] to-[#871515] top-[-16px] w-[362.4px]" data-name="Container" />;
}

function ImageJesusCaicedo() {
  return (
    <div className="h-[436.263px] relative shrink-0 w-full" data-name="Image (Jesus Caicedo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBryanSantiagoCastro} />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex flex-col h-[436.263px] items-start left-[1.6px] overflow-clip top-[1.6px] w-[327.2px]" data-name="Container">
      <ImageJesusCaicedo />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">Jesus Caicedo</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-2.2px] whitespace-pre">Programador</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-gradient-to-t box-border content-stretch flex flex-col from-[rgba(0,0,0,0.8)] gap-[4px] h-[104px] items-start left-[1.6px] pb-0 pt-[24px] px-[24px] to-[rgba(0,0,0,0)] top-[357.86px] w-[327.2px]" data-name="Container">
      <Heading13 />
      <Paragraph10 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(175,44,40,0.91)] h-[463.462px] left-0 rounded-[16px] to-[rgba(135,21,21,0.95)] top-0 w-[330.4px]" data-name="Container">
      <div className="h-[463.462px] overflow-clip relative rounded-[inherit] w-[330.4px]">
        <Container22 />
        <Container23 />
      </div>
      <div aria-hidden="true" className="absolute border-[#871515] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute h-[463.462px] left-[378.4px] top-0 w-[330.4px]" data-name="Container">
      <Container21 />
      <Container24 />
    </div>
  );
}

function Container26() {
  return <div className="absolute bg-gradient-to-b blur-2xl filter from-[#af2c28] from-[0.962%] h-[495.462px] left-[-16px] opacity-0 rounded-[24px] to-[#871515] top-[-16px] w-[362.4px]" data-name="Container" />;
}

function ImageJohnatanOrdonez() {
  return (
    <div className="h-[436.263px] relative shrink-0 w-full" data-name="Image (Johnatan Ordoñez)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBryanSantiagoCastro} />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col h-[436.263px] items-start left-[1.6px] overflow-clip top-[1.6px] w-[327.2px]" data-name="Container">
      <ImageJohnatanOrdonez />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[-2.2px] whitespace-pre">Johnatan Ordoñez</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-2.2px] whitespace-pre">Gerente</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-gradient-to-t box-border content-stretch flex flex-col from-[rgba(0,0,0,0.8)] gap-[4px] h-[104px] items-start left-[1.6px] pb-0 pt-[24px] px-[24px] to-[rgba(0,0,0,0)] top-[357.86px] w-[327.2px]" data-name="Container">
      <Heading14 />
      <Paragraph11 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(175,44,40,0.91)] h-[463.462px] left-0 rounded-[16px] to-[rgba(135,21,21,0.95)] top-0 w-[330.4px]" data-name="Container">
      <div className="h-[463.462px] overflow-clip relative rounded-[inherit] w-[330.4px]">
        <Container27 />
        <Container28 />
      </div>
      <div aria-hidden="true" className="absolute border-[#871515] border-[1.6px] border-solid inset-0 pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[463.462px] left-[756.8px] top-0 w-[330.4px]" data-name="Container">
      <Container26 />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[463.462px] relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Container25 />
      <Container30 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[575.463px] items-start left-[32px] top-[2906.88px] w-[1087.2px]" data-name="Section">
      <Heading11 />
      <Container31 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="absolute h-[24px] left-0 top-[3611.34px] w-[1151.2px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[575.61px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Libella Perspectiva S.A.S © 2025</p>
    </div>
  );
}

function ImageProyectoLibella() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1151.2px]" data-name="Image (Proyecto Libella)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageProyecto} />
    </div>
  );
}

function Container32() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.6)] h-[600px] left-0 to-[rgba(0,0,0,0.7)] top-0 via-50% via-[rgba(0,0,0,0.4)] w-[1151.2px]" data-name="Container" />;
}

function Container33() {
  return (
    <div className="absolute h-[600px] left-0 opacity-0 top-0 w-[1151.2px]" data-name="Container">
      <ImageProyectoLibella />
      <Container32 />
    </div>
  );
}

function ImageConstruccionModerna() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1151.2px]" data-name="Image (Construcción moderna)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageConstruccionModerna} />
    </div>
  );
}

function Container34() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.6)] h-[600px] left-0 to-[rgba(0,0,0,0.7)] top-0 via-50% via-[rgba(0,0,0,0.4)] w-[1151.2px]" data-name="Container" />;
}

function Container35() {
  return (
    <div className="absolute h-[600px] left-0 opacity-[0.866] top-0 w-[1151.2px]" data-name="Container">
      <ImageConstruccionModerna />
      <Container34 />
    </div>
  );
}

function ImageArquitecturaInmobiliaria() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1151.2px]" data-name="Image (Arquitectura inmobiliaria)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageArquitecturaInmobiliaria} />
    </div>
  );
}

function Container36() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.6)] h-[600px] left-0 to-[rgba(0,0,0,0.7)] top-0 via-50% via-[rgba(0,0,0,0.4)] w-[1151.2px]" data-name="Container" />;
}

function Container37() {
  return (
    <div className="absolute h-[600px] left-0 opacity-[0.134] top-0 w-[1151.2px]" data-name="Container">
      <ImageArquitecturaInmobiliaria />
      <Container36 />
    </div>
  );
}

function ImageHogarDeLujo() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1151.2px]" data-name="Image (Hogar de lujo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageHogarDeLujo} />
    </div>
  );
}

function Container38() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.6)] h-[600px] left-0 to-[rgba(0,0,0,0.7)] top-0 via-50% via-[rgba(0,0,0,0.4)] w-[1151.2px]" data-name="Container" />;
}

function Container39() {
  return (
    <div className="absolute h-[600px] left-0 opacity-0 top-0 w-[1151.2px]" data-name="Container">
      <ImageHogarDeLujo />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[600px] left-0 top-0 w-[1151.2px]" data-name="Container">
      <Container33 />
      <Container35 />
      <Container37 />
      <Container39 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[96px] relative shadow-[0px_25px_50px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[96px] left-[194.5px] not-italic text-[96px] text-center text-nowrap text-white top-[-9px] translate-x-[-50%] whitespace-pre">Nosotros</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[28px] relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[28px] left-[194.96px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-center text-nowrap top-[-2.2px] translate-x-[-50%] whitespace-pre">Construyendo sueños, creando hogares</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[148px] items-start left-[381.63px] top-[372px] w-[387.938px]" data-name="Container">
      <Heading />
      <Paragraph13 />
    </div>
  );
}

function Icon9() {
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

function Button() {
  return (
    <div className="absolute bg-[rgba(198,41,38,0.8)] box-border content-stretch flex flex-col items-start left-[32px] pb-0 pt-[12px] px-[12px] rounded-[2.68435e+07px] size-[48px] top-[276px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function Icon10() {
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

function Button1() {
  return (
    <div className="absolute bg-[rgba(198,41,38,0.8)] box-border content-stretch flex flex-col items-start left-[1071.2px] pb-0 pt-[12px] px-[12px] rounded-[2.68435e+07px] size-[48px] top-[276px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] relative rounded-[2.68435e+07px] shrink-0 size-[12px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[12px]" />
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-white grow h-[12px] min-h-px min-w-px relative rounded-[2.68435e+07px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[12px] w-full" />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[12px] items-start left-[523.6px] top-[556px] w-[104px]" data-name="Container">
      <Button2 />
      <Button2 />
      <Button3 />
      <Button2 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute h-[600px] left-0 overflow-clip top-[80px] w-[1151.2px]" data-name="Section">
      <Container40 />
      <Container41 />
      <Button />
      <Button1 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Link() {
  return (
    <div className="absolute h-[20px] left-[427px] overflow-clip top-[1.75px] w-[89px]" data-name="Link">
      <Container43 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[373px] top-[0.75px] w-[65.635px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">PROYECTOS</p>
    </div>
  );
}

function Container44() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header1() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[35.615px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">INICIO</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[20px] left-[126px] overflow-clip top-[-0.25px] w-[43px]" data-name="Link">
      <Container44 />
      <Header1 />
    </div>
  );
}

function Container45() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Link2() {
  return (
    <div className="absolute h-[19px] left-[281px] overflow-clip top-[0.75px] w-[73px]" data-name="Link">
      <Container45 />
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-[236px] top-[1.75px] w-[57.5px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">SERVICIOS</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="basis-0 grow h-[19.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-full">
        <Link />
        <Header />
        <Link1 />
        <Link2 />
        <Header2 />
      </div>
    </div>
  );
}

function ImageLibellaLogo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[50px]" data-name="Image (Libella Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageLibellaLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] w-[50px]" />
    </div>
  );
}

function Container47() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header3() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[74.698px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">INVERSIONES</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[20px] left-[75.5px] overflow-clip top-[1.75px] w-[93px]" data-name="Link">
      <Container47 />
      <Header3 />
    </div>
  );
}

function Container48() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header4() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[63.698px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">NOSOTROS</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[20px] left-[242.5px] overflow-clip top-[1.75px] w-[80px]" data-name="Link">
      <Container48 />
      <Header4 />
    </div>
  );
}

function Container49() {
  return <div className="absolute bg-white h-[2px] left-0 top-[17.5px] w-0" data-name="Container" />;
}

function Header5() {
  return (
    <div className="absolute content-stretch flex h-[17.333px] items-start left-0 top-[0.67px] w-[85.781px]" data-name="Header">
      <p className="font-['Arial:Regular',sans-serif] leading-[19.5px] not-italic relative shrink-0 text-[#f2f2f2] text-[13px] text-nowrap tracking-[-0.39px] whitespace-pre">CONTACTANOS</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[20px] left-[418.5px] overflow-clip top-[2.75px] w-[101px]" data-name="Link">
      <Container49 />
      <Header5 />
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-[19.5px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.5px] relative w-full">
        <Link3 />
        <Link4 />
        <Link5 />
      </div>
    </div>
  );
}

function Encabezado() {
  return (
    <div className="absolute bg-[#c62926] box-border content-stretch flex h-[80px] items-center justify-between left-0 px-[32px] py-0 top-0 w-[1151px]" data-name="encabezado">
      <Container46 />
      <ImageLibellaLogo />
      <Container50 />
    </div>
  );
}

function NosotrosPage() {
  return (
    <div className="absolute h-[3667.34px] left-0 top-0 w-[1151.2px]" data-name="NosotrosPage">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Paragraph12 />
      <Section4 />
      <Encabezado />
    </div>
  );
}

export default function LibellaNosotrosDesktop() {
  return (
    <div className="bg-white relative size-full" data-name="Libella Nosotros Desktop">
      <NosotrosPage />
    </div>
  );
}