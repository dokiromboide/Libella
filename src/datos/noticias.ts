// Datos de las noticias de Libella
import imgCarousel1 from "../recursos/imagenes/cattleya.png";
import imgCertificacion from "../recursos/imagenes/amsterhaus.png";
import imgExpansion from "../recursos/imagenes/aukana.png";

export interface NoticiaItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  fullContent: string;
  image: string;
}

export const noticiasData: NoticiaItem[] = [
  {
    id: "1",
    title: "Nuevo Proyecto Residencial",
    date: "17 de octubre de 2025",
    excerpt: "Pronto empezaremos cosas maravillosas, no se las pierdan",
    fullContent: `Estamos emocionados de anunciar el inicio de nuestro nuevo proyecto residencial que transformará el paisaje urbano de la ciudad.

Este ambicioso proyecto incluirá más de 200 unidades residenciales de lujo, diseñadas con los más altos estándares de calidad y sostenibilidad. Cada unidad contará con acabados premium, amplios espacios y tecnología de punta.

El proyecto incluirá:
- Apartamentos de 2, 3 y 4 habitaciones
- Áreas comunes con gimnasio, piscina y zonas verdes
- Parqueaderos subterráneos
- Sistema de seguridad 24/7
- Certificación LEED Gold

La construcción comenzará en los próximos meses y se espera que esté completada en 2027. Este proyecto representa nuestro compromiso con la excelencia arquitectónica y el desarrollo sostenible.`,
    image: imgCarousel1
  },
  {
    id: "2",
    title: "Certificación Internacional",
    date: "08 de octubre de 2025",
    excerpt: "Libella obtiene la certificación LEED Platino por nuestro compromiso con la construcción sostenible y el medio ambiente.",
    fullContent: `Nos enorgullece anunciar que Libella ha obtenido la prestigiosa certificación LEED Platino, el más alto reconocimiento en construcción sostenible a nivel mundial.

Esta certificación reconoce nuestro compromiso inquebrantable con el medio ambiente y las prácticas de construcción sostenibles. Es el resultado de años de trabajo dedicado, innovación y el esfuerzo de todo nuestro equipo.

Logros destacados:
- Reducción del 40% en consumo energético
- Sistema de recolección y reutilización de agua lluvia
- Uso de materiales reciclados y locales
- Diseño bioclimático optimizado
- Espacios verdes integrados

Esta certificación nos posiciona como líderes en construcción sostenible en la región y reafirma nuestro compromiso con las futuras generaciones. Continuaremos innovando y elevando los estándares de la industria.`,
    image: imgCertificacion
  },
  {
    id: "3",
    title: "Expansión Regional",
    date: "01 de octubre de 2025",
    excerpt: "Abrimos nueva oficina en Medellín para atender mejor a nuestros clientes en la región y expandir nuestra presencia nacional.",
    fullContent: `Libella expande sus horizontes con la apertura de nuestra nueva oficina en Medellín, marcando un hito importante en nuestra estrategia de crecimiento nacional.

Esta nueva sede nos permitirá estar más cerca de nuestros clientes en la región y ofrecer un servicio más personalizado y eficiente. La oficina cuenta con un equipo completo de profesionales especializados en arquitectura, diseño y construcción.

Ventajas de nuestra nueva sede:
- Atención personalizada en la región
- Equipo local de arquitectos e ingenieros
- Showroom con proyectos y materiales
- Sala de reuniones equipada con tecnología avanzada
- Ubicación estratégica en el centro de Medellín

Con esta expansión, reafirmamos nuestro compromiso de ser la constructora líder en Colombia y de llevar nuestros estándares de excelencia a más ciudades del país.`,
    image: imgExpansion
  }
];
