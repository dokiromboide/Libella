import svgPaths from "./svg-lu8s050p7c";
import imgButton from "figma:asset/f96464d4b9c24f5ff5ecc404adccb25a4bed1cf7.png";
import imgImageLibellaLogo from "figma:asset/ff8c620bf8477f6cb34fd583907c36620683b38d.png";

function Container() {
  return <div className="absolute blur-3xl filter left-[466px] opacity-50 rounded-[2.23696e+07px] size-[400px] top-[100px]" data-name="Container" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p33f6b680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M15.8333 10H4.16667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[21px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.67px] tracking-[0.7px] uppercase whitespace-pre">Volver</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[21px] items-center left-0 top-0 w-[87.969px]" data-name="Button">
      <Icon />
      <Text />
    </div>
  );
}

function Container1() {
  return <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] h-[4px] left-[269px] to-[rgba(0,0,0,0)] top-[45px] via-50% via-[rgba(255,255,255,0.5)] w-[280px]" data-name="Container" />;
}

function Heading() {
  return (
    <div className="absolute h-[60px] left-0 top-[65px] w-[818px]" data-name="Heading 2">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[60px] left-[409.35px] not-italic text-[40px] text-center text-nowrap text-white top-[0.33px] tracking-[-2.88px] translate-x-[-50%] uppercase whitespace-pre">INFORMACION ANTES DE INVERTIR</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-[141px] w-[818px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[409.26px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-center top-[-0.33px] translate-x-[-50%] w-[246px]">Apartamentos - Inversión Nacional</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[165px] left-[24px] top-0 w-[818px]" data-name="Container">
      <Button />
      <Container1 />
      <Heading />
      <Paragraph />
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[30px] relative shrink-0 w-[11.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[11.125px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-0 not-italic text-[#c62926] text-[20px] text-nowrap top-0 whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[2.23696e+07px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.3)] shrink-0 w-[56px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[56px]">
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[36px] relative shrink-0 w-[102.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[102.25px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-[51.44px] not-italic text-[12px] text-center text-white top-0 tracking-[0.6px] translate-x-[-50%] uppercase w-[69px]">Consulta Inicial</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow h-[104px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[104px] items-center relative w-full">
        <Button1 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.2)] grow h-[3px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[3px] w-full" />
    </div>
  );
}

function Paso() {
  return (
    <div className="basis-0 grow h-[104px] min-h-px min-w-px relative shrink-0" data-name="paso 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[104px] items-center relative w-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[30px] relative shrink-0 w-[11.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[11.125px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">2</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.2)] grow min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0 w-[56px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[56px]">
        <Text2 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[102.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[102.25px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-[51.34px] not-italic text-[12px] text-center text-white top-0 tracking-[0.6px] translate-x-[-50%] uppercase w-[97px]">Selección de Proyecto</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[104px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[104px] items-center relative w-full">
        <Button2 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.2)] grow h-[3px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[3px] w-full" />
    </div>
  );
}

function Paso1() {
  return (
    <div className="basis-0 grow h-[104px] min-h-px min-w-px relative shrink-0" data-name="paso 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[104px] items-center relative w-full">
        <Container5 />
        <Container6 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[11.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[30px] relative w-[11.125px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[30px] left-0 not-italic text-[20px] text-nowrap text-white top-0 whitespace-pre">3</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.2)] grow min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0 w-[56px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[56px]">
        <Text3 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[102.25px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[102.25px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-[51.5px] not-italic text-[12px] text-center text-white top-0 tracking-[0.6px] translate-x-[-50%] uppercase w-[85px]">Firma y Aportación</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="basis-0 grow h-[104px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[104px] items-center relative w-full">
        <Button3 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.2)] grow h-[3px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[3px] w-full" />
    </div>
  );
}

function Paso2() {
  return (
    <div className="basis-0 grow h-[104px] min-h-px min-w-px relative shrink-0" data-name="paso 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[104px] items-center relative w-full">
        <Container7 />
        <Container8 />
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[59px] relative rounded-[2.23696e+07px] shadow-[0px_0px_0px_4px_rgba(255,255,255,0.3)] shrink-0 w-[60px]" data-name="Button">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.23696e+07px] size-full" src={imgButton} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[59px] w-[60px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-[120px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[120px]">
        <div className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-[60.09px] not-italic text-[12px] text-center text-white top-0 tracking-[0.6px] translate-x-[-50%] uppercase w-[108px]">
          <p className="mb-0">{`contactate `}</p>
          <p>con nosotros</p>
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[104px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[104px] items-center relative w-full">
        <Button4 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex h-[104px] items-center justify-between left-[44px] top-[207px] w-[771px]" data-name="Container">
      <Paso />
      <Paso1 />
      <Paso2 />
      <Container9 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-[352.21px] not-italic text-[28px] text-center text-nowrap text-white top-0 translate-x-[-50%] uppercase whitespace-pre">Consulta Inicial</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[351.52px] not-italic text-[16px] text-[rgba(255,255,255,0.85)] text-center text-nowrap top-[-0.33px] translate-x-[-50%] whitespace-pre">Agenda una reunión con nuestros asesores especializados</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[76px] items-start left-[48px] top-[48px] w-[704px]" data-name="Container">
      <Heading1 />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[22px] left-0 not-italic text-[15px] text-nowrap text-white top-[0.67px] whitespace-pre">En esta etapa, nuestros asesores especializados te guiarán a través de:</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.67px] whitespace-pre">Análisis de tu perfil de inversión</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.67px] whitespace-pre">Objetivos financieros a corto y largo plazo</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.67px] whitespace-pre">Evaluación de oportunidades disponibles</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.67px] whitespace-pre">Respuesta a todas tus dudas e inquietudes</p>
    </div>
  );
}

function List() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="List">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[120px] items-start pl-[20px] pr-0 py-0 relative w-full">
          <ListItem />
          <ListItem1 />
          <ListItem2 />
          <ListItem3 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[158px] items-start left-[48px] top-[156px] w-[704px]" data-name="Container">
      <Paragraph6 />
      <List />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[21px] left-0 not-italic text-[#c62926] text-[14px] text-nowrap top-[0.67px] tracking-[0.7px] uppercase whitespace-pre">Siguiente Paso</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col h-[53px] items-start left-[304.49px] pb-0 pt-[16px] px-[32px] rounded-[8px] top-[346px] w-[191.01px]" data-name="Button">
      <Paragraph7 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.1)] h-[447px] left-[33px] rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[rgba(255,255,255,0.05)] top-[381px] w-[800px]" data-name="Container">
      <Container11 />
      <Container12 />
      <Button5 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[828px] left-0 top-[64px] w-[866px]" data-name="Container">
      <Container2 />
      <Container10 />
      <Container13 />
    </div>
  );
}

function ProcesoInversion() {
  return (
    <div className="bg-gradient-to-b from-[rgba(198,41,38,0.97)] h-[956px] overflow-clip relative shrink-0 to-[#403838] w-full" data-name="ProcesoInversion">
      <Container />
      <Container14 />
    </div>
  );
}

function ImageLibellaLogo() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[160px]" data-name="Image (Libella Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageLibellaLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-[160px]" />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[27px] relative shrink-0 w-[167.104px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[27px] relative w-[167.104px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[27px] left-0 not-italic text-[#f7f4eb] text-[18px] text-nowrap top-[0.33px] whitespace-pre">el arte de la creación</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[203px] items-start left-0 top-0 w-[235.333px]" data-name="Container">
      <ImageLibellaLogo />
      <Paragraph8 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[173.062px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[173.062px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[-1.2px] whitespace-pre">Datos de contacto</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p9c60400} id="Vector" stroke="var(--stroke-0, #F7F4EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2bf8f980} id="Vector_2" stroke="var(--stroke-0, #F7F4EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[122.083px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[122.083px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#f7f4eb] text-[16px] text-nowrap top-[-0.33px] whitespace-pre">hola@libella.com</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon1 />
      <Text4 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3a2d4980} id="Vector" stroke="var(--stroke-0, #F7F4EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-full">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#f7f4eb] text-[16px] text-nowrap top-[-0.33px] whitespace-pre">(+57) 317 436 7665</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon2 />
      <Text5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[64px] relative shrink-0 w-[176.125px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[64px] items-start relative w-[176.125px]">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-[283.33px] top-0 w-[235.333px]" data-name="Container">
      <Heading2 />
      <Container18 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[91.823px]" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36px] relative w-[91.823px]">
        <p className="absolute font-['Arial:Regular',sans-serif] leading-[36px] left-0 not-italic text-[24px] text-nowrap text-white top-0 tracking-[-1.2px] whitespace-pre">Síguenos</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p4fdb300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p39557800} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M17.5 6.5H17.51" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[56px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.667px] relative size-[56px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3d19f300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[56px]" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[0.667px] relative size-[56px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p30958080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M6 9H2V21H6V9Z" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1bb3a100} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[56px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[56px] items-center justify-center p-[0.667px] relative w-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[56px] relative shrink-0 w-[200px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[56px] items-start relative w-[200px]">
        <Link />
        <Link1 />
        <Link2 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[203px] items-start left-[566.67px] top-0 w-[235.333px]" data-name="Container">
      <Heading3 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[203px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container19 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[0.667px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[24px] left-[401.51px] not-italic text-[#f7f4eb] text-[16px] text-center text-nowrap top-[-0.33px] translate-x-[-50%] whitespace-pre">Libella Parque Isla © 2025 All Rights Reserved</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[307.667px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[307.667px] items-start px-[32px] py-0 relative w-full">
          <Container22 />
          <Container23 />
          <Paragraph9 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#403838] box-border content-stretch flex flex-col h-[467.667px] items-start overflow-clip pb-0 pt-[80px] px-0 relative shrink-0 w-full" data-name="Footer">
      <Container24 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#403838] box-border content-stretch flex flex-col gap-[3.815e_-5px] h-[1493.67px] items-start left-0 pb-0 pt-[70px] px-0 top-0 w-[866px]" data-name="App">
      <ProcesoInversion />
      <Footer />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[18px] left-[106.44px] top-[26px] w-[36.833px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.33px] tracking-[0.3px] whitespace-pre">INICIO</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[18px] left-[175.27px] top-[26px] w-[59.021px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.33px] tracking-[0.3px] whitespace-pre">SERVICIOS</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[18px] left-[266.29px] top-[26px] w-[66.521px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.33px] tracking-[0.3px] whitespace-pre">PROYECTOS</p>
    </div>
  );
}

function ImageLibellaLogo1() {
  return (
    <div className="absolute left-[380.81px] size-[40px] top-[15px]" data-name="Image (Libella Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageLibellaLogo} />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[18px] left-[468.81px] top-[26px] w-[76.208px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.33px] tracking-[0.3px] whitespace-pre">INVERSIONES</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[18px] left-[577.02px] top-[26px] w-[64.083px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.33px] tracking-[0.3px] whitespace-pre">NOSOTROS</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[18px] left-[673.1px] top-[26px] w-[86.448px]" data-name="Link">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[18px] left-0 not-italic text-[12px] text-nowrap text-white top-[-1.33px] tracking-[0.3px] whitespace-pre">CONTACTANOS</p>
    </div>
  );
}

function Encabezado() {
  return (
    <div className="absolute bg-[#c62926] h-[70px] left-0 top-[0.67px] w-[866px]" data-name="Encabezado">
      <Link3 />
      <Link4 />
      <Link5 />
      <ImageLibellaLogo1 />
      <Link6 />
      <Link7 />
      <Link8 />
    </div>
  );
}

export default function LibellaInversionesPaso() {
  return (
    <div className="bg-white relative size-full" data-name="libella inversiones-paso 1">
      <App />
      <Encabezado />
    </div>
  );
}