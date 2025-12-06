import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { HeaderProyectos } from '../../componentes/proyectos-lista/HeaderProyectos';
import { HeroBanner } from '../../componentes/proyectos-lista/HeroBanner';
import { ProjectCard } from '../../componentes/proyectos-lista/ProjectCard';
import { ProjectFilters } from '../../componentes/proyectos-lista/ProjectFilters';
import Header from "@/componentes/Header";
import FooterInicio from "@/componentes/FooterInicio";

// Importar imágenes reales del proyecto
import img1 from '../../recursos/imagenes/aed81eafca51449cbcc21b296890d74d9dd3d588.png'; // Altos de Cattleya
import img2 from '../../recursos/imagenes/c99da49775b53e838cbd79be22c325df23fb5f1d.png'; // AmsterHaus
import img3 from '../../recursos/imagenes/9a59421dc01ab6a7265d9147d3abf33d1210b1b0.png'; // Aukana
import img4 from '../../recursos/imagenes/829756ee755a52dd5565fc34801ad07081dc3d5a.png'; // Caoba
import img5 from '../../recursos/imagenes/38b537f7c3d943ba8fdeec109470b734b1fa3f31.png'; // Cattleya Campestre
import img6 from '../../recursos/imagenes/98cc955bd06d4103ff360d67388e7ae64d6541e8.png'; // Eskarlata
import img7 from '../../recursos/imagenes/23069cff9d3176399375c76d68759cbd72f9fa16.png'; // La Ceiba
import img8 from '../../recursos/imagenes/0c294c139f5fddad96feb3b16c0e5a444c171cf4.png'; // La Gran Turquesa
import imgImageDivider from '../../recursos/imagenes/b6d521758aae91b27322e3f74aa38fe014ea55ea.png';
import imgLibellaLogo from '../../recursos/imagenes/ff8c620bf8477f6cb34fd583907c36620683b38d.png';
import imgLibellaFooter from '../../recursos/imagenes/24f7863d5067ebf528c000123ff21263e96e6063.png';
import { Toaster } from 'sonner';

// Project data with status
const projectsData = [
  {
    id: 1,
    image: img1,
    title: "Altos de Cattleya",
    location: "Km 6 Vereda de Aguas Tibias - Totoró, Cauca.",
    status: 'en-venta' as const,
    date: "Parcelación",
    description: "Parcelación en conjunto cerrado con atractivas características."
  },
  {
    id: 2,
    image: img6,
    title: "Eskarlata",
    location: "Patía, Cauca",
    status: 'en-proceso' as const,
    date: "Parque agroturístico",
    description: "Parque temático que combina la experiencia de la imaginación."
  },
  {
    id: 3,
    image: img3,
    title: "Aukana",
    location: "Popayán, Cauca",
    status: 'en-proceso' as const,
    date: "Parque agroturístico",
    description: "Ecoparque."
  },
  {
    id: 4,
    image: img4,
    title: "Caoba",
    location: "Km 3 Variante vía Las Margaritas - Popayán, Cauca",
    status: 'finalizado' as const,
    date: "Parcelación",
    description: "Hermosas parcelas en conjunto cerrado."
  },
  {
    id: 5,
    image: img5,
    title: "Cattleya Campestre",
    location: "Km 6 Vereda de Aguas Tibias - Totoró, Cauca.",
    status: 'en-venta' as const,
    date: "Parcelación",
    description: "Condominio campestre que rompe esquemas por sus características y paisajes."
  },
  {
    id: 6,
    image: img2,
    title: "AmsterHaus",
    location: "Cra 20 #55 N64 - Popayán, Cauca.",
    status: 'finalizado' as const,
    date: "Apartamentos y Apartaestudios",
    description: "Hermosos apartamentos que combinan el estilo y la rentabilidad en un solo lugar."
  },
  {
    id: 7,
    image: img7,
    title: "La Ceiba",
    location: "Antigua carrilera - Calibio, Cauca.",  
    status: 'en-venta' as const,
    date: "Parcelación",
    description: "Espacio campestre con una comodidad única."
  },
  {
    id: 8,
    image: img8,
    title: "La gran Turquesa",
    location: "Km 4 vía Totoró, Cauca",
    status: 'en-proceso' as const,
    date: "Parcelación",
    description: "Condominio campestre ofreciendo la oportunidad de vivir en medio de la naturaleza."
  }
];

interface ProjectsSectionProps {
  searchTerm: string;
  selectedStatus: string;
}

function ProjectsSection({ searchTerm, selectedStatus }: ProjectsSectionProps) {
  const filteredProjects = useMemo(() => {
    let filtered = projectsData.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesStatus = selectedStatus === 'todos' || project.status === selectedStatus;
      
      return matchesSearch && matchesStatus;
    });

    // Sort: When "todos" is selected, show "en-proceso" first
    if (selectedStatus === 'todos') {
      filtered.sort((a, b) => {
        const statusOrder = { 'en-venta': 0, 'finalizado': 1, 'en-proceso': 2 };
        return statusOrder[a.status] - statusOrder[b.status];
      });
    }

    return filtered;
  }, [searchTerm, selectedStatus]);

  return (
    <div className="bg-gradient-to-b from-[#1e1717] to-[rgba(135,21,21,0.97)] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length > 0 ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8 md:mb-12"
            >
              <p className="text-white/70 text-center text-sm md:text-base">
                Mostrando {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 md:py-20"
          >
            <div className="text-white/30 mb-4">
              <svg className="w-16 h-16 md:w-24 md:h-24 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-white mb-2">No se encontraron proyectos</h3>
            <p className="text-white/60 text-sm md:text-base">Intenta ajustar los filtros o la búsqueda</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function ImageDividerSection() {
  return (
    <div className="relative w-full h-56 md:h-72 lg:h-96 overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0">
        <img 
          alt="Vista panorámica de desarrollos inmobiliarios." 
          className="absolute w-full h-full object-cover" 
          src={imgImageDivider} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(135,21,21,0.6)] to-[rgba(30,23,23,0.7)]" />
      </div>
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-2xl md:text-3xl lg:text-4xl mb-2 tracking-wide"
          >
            Construyendo el Futuro
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-24 md:w-32 h-1 bg-white/70 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

function FooterSection() {
  return (
    <footer className="relative bg-gradient-to-b from-[rgba(135,21,21,0.97)] to-[#1e1717] py-16 md:py-24 w-full border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-16">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="mb-6">
              <img 
                alt="Libella Logo" 
                className="h-28 md:h-36 w-auto mx-auto md:mx-0 filter drop-shadow-lg" 
                src={imgLibellaFooter} 
              />
            </div>
            <p className="text-[#f7f4eb]/80 text-base md:text-lg italic">el arte de la creación</p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-white mb-5 md:mb-6 tracking-wide">DATOS DE CONTACTO</h3>
            <div className="space-y-3 md:space-y-4">
              <a href="mailto:libella123@libella.com" className="block text-[#f7f4eb]/90 hover:text-white transition-colors cursor-pointer text-sm md:text-base">
                libella123@libella.com
              </a>
              <a href="tel:+5712345678" className="block text-[#f7f4eb]/90 hover:text-white transition-colors cursor-pointer text-sm md:text-base">
                (+57) 123-456-7890
              </a>
            </div>
          </div>

          {/* Mission */}
          <div className="text-center md:text-right flex flex-col justify-center">
            <p className="text-white/90 text-lg md:text-xl leading-relaxed italic">
              el futuro construido con tus manos
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 md:pt-10 text-center">
          <p className="text-[#f7f4eb]/70 text-sm md:text-base">
            Libella Perspectiva © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function TodosProyectos() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('todos');

  const carouselImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  return (
    <div className="bg-gradient-to-b from-[#1e1717] to-[rgba(135,21,21,0.97)] min-h-screen">
      <Toaster position="top-center" />
      
      {/* Header de Inicio */}
      <Header paginaActual="PROYECTOS" />
      
      <main className="flex flex-col w-full overflow-x-hidden pt-[80px]">
        <HeroBanner
          type="carousel"
          images={carouselImages}
          title="NUESTROS PROYECTOS"
          subtitle="Descubre nuestra cartera de desarrollos inmobiliarios. Cada proyecto refleja nuestro compromiso con la excelencia y la innovación."
        />
        
        <div className="w-full bg-gradient-to-b from-[rgba(135,21,21,0.97)] to-[#1e1717] py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
            />
          </div>
        </div>

        <ProjectsSection searchTerm={searchTerm} selectedStatus={selectedStatus} />
        
        <ImageDividerSection />
      </main>

      <FooterInicio />
    </div>
  );
}
