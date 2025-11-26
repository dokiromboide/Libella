import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import { ProyectoDetalle } from "./componentes/ProyectoDetalle";
import svgPaths from "./imports/svg-7y6p7vhc1w";
import imgHeroCarousel from "./imagenes/aed81eafca51449cbcc21b296890d74d9dd3d588.png";
import imgHeroCarousel1 from "./imagenes/9a59421dc01ab6a7265d9147d3abf33d1210b1b0.png";
import imgHeroCarousel2 from "./imagenes/829756ee755a52dd5565fc34801ad07081dc3d5a.png";
import imgHeroCarousel3 from "./imagenes/8e85657db36622060dfb26f2074645c77e42e7fd.png";
import imgImageCertificacionInternacional from "./imagenes/c99da49775b53e838cbd79be22c325df23fb5f1d.png";
import imgImageDivider from "./imagenes/b6d521758aae91b27322e3f74aa38fe014ea55ea.png";
import imgFooter from "./imagenes/24f7863d5067ebf528c000123ff21263e96e6063.png";
import imgImageLaCeiba from "./imagenes/23069cff9d3176399375c76d68759cbd72f9fa16.png";
import imgImageLaGranTurquesa from "./imagenes/0c294c139f5fddad96feb3b16c0e5a444c171cf4.png";
import imgImageLibellaLogo from "./imagenes/ff8c620bf8477f6cb34fd583907c36620683b38d.png";

// Design constants
const DESIGN_WIDTH = 1263;
const DESIGN_HEIGHT = 3971;
const CAROUSEL_INTERVAL = 5000; // ms
const CAROUSEL_IMAGES = [imgHeroCarousel, imgHeroCarousel1, imgHeroCarousel2, imgHeroCarousel3];

// Datos de los proyectos (movidos aquí para que sean accesibles)
const proyectosData = {
  "altos-cattleya": {
    nombreProyecto: "Altos de Cattleya",
    descripcion: "Parcelas desde 1000m² en conjunto cerrado con seguridad 24/7, vigilancia permanente y acceso controlado. Ubicadas en una zona estratégica con vistas panorámicas y acceso a servicios básicos.",
    ubicacion: "Totoró - vereda de Aguas Tibias, Cauca. (Kilómetro 6)",
    fechaEntrega: "Según disponibilidad",
    lotes: "Parcelas disponibles desde 1000m²",
    amenidades: ["Acceso controlado", "Vigilancia 24/7", "Vías internas", "Servicios básicos", "Áreas verdes", "Senderos peatonales"],
    porcentajeAvance: 75,
    detallesAvance: [
      { nombre: "Adecuación del terreno", porcentaje: 100 },
      { nombre: "Instalación de servicios", porcentaje: 80 },
      { nombre: "Vías de acceso", porcentaje: 70 },
      { nombre: "Áreas comunes", porcentaje: 60 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1486406146926-c62733dd37f7?w=1400&h=600&fit=crop"
  },
  "amsterdam": {
    nombreProyecto: "AmsterHaus",
    descripcion: "Hermosos apartamentos desde 55m² y apartaestudios desde 33.29m² con acabados modernos. Ubicados en el corazón de Popayán, cerca de comercios, restaurantes y transporte público.",
    ubicacion: "Popayán Cra 20 #55 N 64 (A dos minutos de Café La Palma)",
    fechaEntrega: "Próximamente",
    lotes: "Apartamentos disponibles desde 55m²",
    amenidades: ["Parqueadero privado", "Ascensor", "Áreas comunes", "Salón de eventos", "Terraza común", "Seguridad 24/7"],
    porcentajeAvance: 45,
    detallesAvance: [
      { nombre: "Cimentación", porcentaje: 100 },
      { nombre: "Estructura", porcentaje: 60 },
      { nombre: "Instalaciones", porcentaje: 30 },
      { nombre: "Acabados", porcentaje: 10 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1400&h=600&fit=crop"
  },
  "la-ceiba": {
    nombreProyecto: "La Ceiba",
    descripcion: "Espacio campestre con escrituras de 3000m² en copropiedad y listas para escriturar. Perfecto para quienes buscan tranquilidad y conexión con la naturaleza sin alejarse de la ciudad.",
    ubicacion: "Calibio, antigua carrilera, a 4.4km de la Variante Norte.",
    fechaEntrega: "Disponible inmediatamente",
    lotes: "Lotes campestres de 3000m²",
    amenidades: ["Paisaje natural", "Escrituras listas", "Servicios básicos", "Acceso vial", "Zona verde", "Fauna y flora nativa"],
    porcentajeAvance: 100,
    detallesAvance: [
      { nombre: "Levantamiento topográfico", porcentaje: 100 },
      { nombre: "División de lotes", porcentaje: 100 },
      { nombre: "Registros catastrales", porcentaje: 100 },
      { nombre: "Documentos legales", porcentaje: 100 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1500721694683-b8e8328cab37?w=1400&h=600&fit=crop"
  },
  "la-gran-turquesa": {
    nombreProyecto: "La Gran Turquesa",
    descripcion: "Exclusivo condominio campestre con amplias parcelas desde 1000m². Diseñado para ofrecer privacidad, seguridad y un estilo de vida de lujo en armonía con la naturaleza.",
    ubicacion: "Totoró, Cauca. (Kilómetro 4)",
    fechaEntrega: "Fase 2 en construcción",
    lotes: "Parcelas desde 1000m²",
    amenidades: ["Club house", "Piscina", "Cancha de tenis", "Zona de juegos", "Vigilancia permanente", "Áreas verdes amplias"],
    porcentajeAvance: 40,
    detallesAvance: [
      { nombre: "Fase 1 - Completada", porcentaje: 100 },
      { nombre: "Fase 2 - Estructura", porcentaje: 50 },
      { nombre: "Áreas comunes", porcentaje: 30 },
      { nombre: "Servicios complementarios", porcentaje: 20 }
    ],
    imagenBanner: "https://images.unsplash.com/photo-1512207736139-6c3ee1e93a00?w=1400&h=600&fit=crop"
  }
};

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

// Componente para la página de detalle del proyecto
function ProyectoPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const projectData = projectId ? proyectosData[projectId as keyof typeof proyectosData] : null;

  if (!projectData) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <ProyectoDetalle
      {...projectData}
      onVolver={() => navigate('/')}
    />
  );
}

// Mantén todo tu código existente de los componentes aquí...
// (HeroCarousel3, HeroCarousel4, Icon, Button, etc.)

function App({ onSelectProject }: { onSelectProject?: (projectId: string) => void }) {
  const navigate = useNavigate();

  const handleSelectProject = (projectId: string) => {
    navigate(`/proyecto/${projectId}`);
  };

  return (
    <div className="absolute h-[3971px] left-0 top-0 w-[1263px]" data-name="App">
      {/* Todo tu código existente de componentes */}
      {/* Asegúrate de pasar handleSelectProject a InversionesPaginaConstructora */}
    </div>
  );
}

// Componente principal con Router
export default function LibellaInicio() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const windowWidth = window.innerWidth;
      const newScale = windowWidth / DESIGN_WIDTH;
      setScale(newScale);
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    
    return () => window.removeEventListener("resize", calculateScale);
  }, []);

  const scaledHeight = DESIGN_HEIGHT * scale;

  return (
    <BrowserRouter>
      <div className="bg-white w-full" style={{ height: `${scaledHeight}px`, overflow: 'hidden' }} data-name="libella inicio">
        <div
          style={{
            width: `${DESIGN_WIDTH}px`,
            height: `${DESIGN_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/proyecto/:projectId" element={<ProyectoPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
