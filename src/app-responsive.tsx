import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import svgPaths from "./imports/svg-7y6p7vhc1w";
import imgHeroCarousel from "figma:asset/aed81eafca51449cbcc21b296890d74d9dd3d588.png";
import imgHeroCarousel1 from "figma:asset/9a59421dc01ab6a7265d9147d3abf33d1210b1b0.png";
import imgHeroCarousel2 from "figma:asset/829756ee755a52dd5565fc34801ad07081dc3d5a.png";
import imgHeroCarousel3 from "figma:asset/8e85657db36622060dfb26f2074645c77e42e7fd.png";
import imgImageCertificacionInternacional from "figma:asset/c99da49775b53e838cbd79be22c325df23fb5f1d.png";
import imgImageDivider from "figma:asset/b6d521758aae91b27322e3f74aa38fe014ea55ea.png";
import imgFooter from "figma:asset/24f7863d5067ebf528c000123ff21263e96e6063.png";
import imgImageLaCeiba from "figma:asset/23069cff9d3176399375c76d68759cbd72f9fa16.png";
import imgImageLaGranTurquesa from "figma:asset/0c294c139f5fddad96feb3b16c0e5a444c171cf4.png";
import imgImageLibellaLogo from "figma:asset/ff8c620bf8477f6cb34fd583907c36620683b38d.png";

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const carouselImages = [imgHeroCarousel, imgHeroCarousel1, imgHeroCarousel2, imgHeroCarousel3];
  
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % 4);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + 4) % 4);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden scroll-smooth">
      {/* Header */}
      <header className="bg-red-700 text-white sticky top-0 z-50 shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap gap-4">
          <div className="flex gap-4 md:gap-8 text-xs md:text-base">
            <a href="#" className="hover:underline">INICIO</a>
            <a href="#" className="hover:underline">SERVICIOS</a>
            <a href="#" className="hover:underline">INVERSIONES</a>
          </div>
          <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
            <img src={imgImageLibellaLogo} alt="Libella" className="w-full h-full object-contain" />
          </div>
          <div className="flex gap-4 md:gap-8 text-xs md:text-base">
            <a href="#" className="hover:underline">PROYECTOS</a>
            <a href="#" className="hover:underline">NOSOTROS</a>
            <a href="#" className="hover:underline">CONTACTANOS</a>
          </div>
        </nav>
      </header>

      {/* Hero Carousel */}
      <section className="relative w-full bg-gradient-to-b from-gray-700 to-gray-600">
        <div className="relative w-full aspect-video md:aspect-auto md:h-96 bg-gray-700 overflow-hidden">
          {carouselImages.map((img, idx) => (
            <motion.div
              key={idx}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentSlide === idx ? 1 : 0 }}
              transition={{ duration: 1 }}
            >
              <img src={img} alt={`Slide ${idx}`} className="w-full h-full object-cover" />
            </motion.div>
          ))}

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

          {/* Controls */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition">
            ←
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition">
            →
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all ${currentSlide === i ? "bg-white w-8" : "bg-white/50 w-2"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="w-full bg-red-700 text-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">NUESTROS ÚLTIMOS ACONTECIMIENTOS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Nuevo Proyecto Residencial",
                date: "octubre 17 del 2025",
                desc: "pronto empezaremos cosas maravillosas, no se las pierdan",
                img: imgHeroCarousel,
              },
              {
                title: "Certificación Internacional",
                date: "08 Oct 2025",
                desc: "Libella obtiene la certificación LEED Platino por nuestro compromiso con la construcción sostenible.",
                img: imgImageCertificacionInternacional,
              },
              {
                title: "Expansión Regional",
                date: "01 Oct 2025",
                desc: "Abrimos nueva oficina en Medellín para atender mejor a nuestros clientes en la región.",
                img: imgHeroCarousel1,
              },
            ].map((news, i) => (
              <motion.div
                key={i}
                className="bg-red-800 rounded-xl md:rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                <div className="aspect-video md:aspect-square overflow-hidden">
                  <img src={news.img} alt={news.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-xs md:text-sm text-red-300 mb-2">{news.date}</p>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{news.title}</h3>
                  <p className="text-sm text-red-100 mb-4">{news.desc}</p>
                  <a href="#" className="text-sm text-orange-300 hover:text-orange-200">Leer más →</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <section className="w-full bg-gray-800 py-8 md:py-16">
        <img src={imgImageDivider} alt="Divider" className="w-full h-auto" />
      </section>

      {/* Metrics Section */}
      <section className="w-full bg-red-700 text-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">MÉTRICAS</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: "150+", label: "Proyectos Completados" },
              { number: "5000+", label: "Clientes Satisfechos" },
              { number: "25+", label: "Años de Experiencia" },
              { number: "100%", label: "Calidad Garantizada" },
            ].map((metric, i) => (
              <motion.div
                key={i}
                className="bg-red-800 rounded-lg md:rounded-2xl p-4 md:p-6 text-center hover:bg-red-900 transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <motion.p
                  className="text-2xl md:text-4xl font-bold mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.3 }}
                >
                  {metric.number}
                </motion.p>
                <p className="text-xs md:text-sm text-red-200">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full bg-gray-100 py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">PROYECTOS</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Altos de Cattleya",
                type: "Parcelación",
                desc: "Parcelas desde 1000m² en conjunto cerrado.",
                location: "Totoró - vereda de Aguas Tibias, Cauca",
                status: "Disponible",
                img: imgHeroCarousel,
              },
              {
                title: "AmsterHaus",
                type: "Apartamentos - Apartaestudios",
                desc: "Hermosos apartamentos desde 55m² y apartaestudios desde 33,29 m².",
                location: "Popayán Cra 20 #55 N 64",
                status: "Próximamente",
                img: imgImageCertificacionInternacional,
              },
              {
                title: "La Ceiba",
                type: "Parcelación",
                desc: "Espacio campestre con escrituras de 3000m².",
                location: "Calibio, antigua carrilera",
                status: "Disponible",
                img: imgImageLaCeiba,
              },
              {
                title: "La Gran Turquesa",
                type: "Parcelación",
                desc: "Exclusivo condominio campestre con amplias parcelas.",
                location: "Totoró, Cauca. (Kilómetro 4)",
                status: "FASE 1 VENDIDA",
                img: imgImageLaGranTurquesa,
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="aspect-video overflow-hidden">
                  <motion.img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="p-4 md:p-6">
                  <p className="text-xs md:text-sm text-red-600 font-bold uppercase mb-2">{project.type}</p>
                  <h3 className="text-lg md:text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-2">{project.desc}</p>
                  <p className="text-xs md:text-sm text-gray-500 mb-4">{project.location}</p>
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 md:px-4 py-1 rounded-full">
                    {project.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 md:mt-12">
            <motion.button
              className="bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-bold hover:bg-red-700 transition text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ver todos los proyectos →
            </motion.button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Libella</h3>
              <p className="text-sm text-gray-400">el arte de la creación</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Datos de Contacto</h3>
              <p className="text-sm text-gray-400 mb-2">📧 libella123@libella.com</p>
              <p className="text-sm text-gray-400">(+57) 123-456-7890</p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-bold mb-4">Síguenos</h3>
              <div className="flex gap-4">
                {[0, 1, 2].map((i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition text-lg">
                    {["📱", "👍", "💼"][i]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
            <p>Libella Perspectiva © 2025 All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}