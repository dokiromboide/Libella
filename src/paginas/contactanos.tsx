import { useState } from "react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Toaster } from "@/componentes/ui/sonner";
import Header from "@/componentes/Header";
import FooterInicio from "@/componentes/FooterInicio";

// SVG Paths para los iconos
const svgPaths = {
  pe2edb00: "M20.0798 24.052C20.3796 24.1897 20.7174 24.2212 21.0374 24.1412C21.3575 24.0613 21.6408 23.8747 21.8407 23.6122L22.356 22.9371C22.6265 22.5765 22.9772 22.2838 23.3803 22.0823C23.7835 21.8807 24.228 21.7758 24.6788 21.7758H29.0339C29.8039 21.7758 30.5424 22.0816 31.0869 22.6261C31.6314 23.1706 31.9373 23.9091 31.9373 24.6792V29.0343C31.9373 29.8043 31.6314 30.5428 31.0869 31.0873C30.5424 31.6318 29.8039 31.9377 29.0339 31.9377C22.1036 31.9377 15.4572 29.1846 10.5567 24.2842C5.65627 19.3837 2.90323 12.7373 2.90323 5.80703C2.90323 5.037 3.20912 4.29851 3.75362 3.75402C4.29811 3.20952 5.0366 2.90363 5.80663 2.90363H10.1617C10.9318 2.90363 11.6703 3.20952 12.2148 3.75402C12.7592 4.29851 13.0651 5.037 13.0651 5.80703V10.1621C13.0651 10.6129 12.9602 11.0574 12.7586 11.4606C12.557 11.8637 12.2644 12.2144 11.9038 12.4849L11.2244 12.9944C10.9579 13.1979 10.77 13.4874 10.6928 13.8137C10.6155 14.14 10.6536 14.4829 10.8005 14.7844C12.7845 18.8141 16.0476 22.0731 20.0798 24.052Z",
  p32e45e00: "M31.937 10.1618L18.8847 18.4757C18.4418 18.733 17.9387 18.8685 17.4265 18.8685C16.9143 18.8685 16.4112 18.733 15.9683 18.4757L2.90296 10.1618",
  p257e5e00: "M29.0336 5.80684H5.80636C4.20286 5.80684 2.90296 7.10674 2.90296 8.71024V26.1307C2.90296 27.7342 4.20286 29.0341 5.80636 29.0341H29.0336C30.6371 29.0341 31.937 27.7342 31.937 26.1307V8.71024C31.937 7.10674 30.6371 5.80684 29.0336 5.80684Z",
};

// Importar imágenes desde la carpeta de recursos
import imgBannersProyectos from "@/recursos/imagenes/cd0a93d82933a4183533cb631ef674e84c19fe0d.png";

function ContactCard({ icon, title, content, delay }: { icon: JSX.Element; title: string; content: string; delay: number }) {
  return (
    <motion.div 
      className="box-border flex flex-col gap-6 items-center p-8 rounded-2xl w-full bg-gradient-to-b from-[rgba(175,44,40,0.91)] to-[rgba(135,21,21,0.95)] border border-[rgba(255,255,255,0.1)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        y: -10, 
        boxShadow: "0 30px 60px rgba(136, 28, 28, 0.4)",
        transition: { duration: 0.3 }
      }}
    >
      <motion.div 
        className="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center w-16 h-16"
        whileHover={{ 
          scale: 1.1, 
          rotate: 5,
          backgroundColor: "rgba(255,255,255,0.15)"
        }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-center text-white mb-2 text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-center text-[rgba(255,255,255,0.8)]">{content}</p>
    </motion.div>
  );
}

export default function Contactanos() {
  const [formData, setFormData] = useState({
    nombres: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación
    if (!formData.nombres || !formData.email || !formData.mensaje) {
      toast.error("Por favor completa todos los campos requeridos");
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Por favor ingresa un correo electrónico válido");
      return;
    }

    toast.success("¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.");
    
    // Resetear formulario
    setFormData({
      nombres: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gradient-to-b from-[#1e1717] to-[rgba(135,21,21,0.97)] min-h-screen">
      <Toaster position="top-center" />
      
      {/* Header de Inicio */}
      <Header paginaActual="CONTACTENOS" />
      
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-40 h-[250px] sm:h-[350px] lg:h-[450px]">
          <img 
            alt="" 
            className="w-full h-full object-cover" 
            src={imgBannersProyectos} 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(135,21,21,0.4)] to-[rgba(30,23,23,0.6)]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-12">
          <motion.h1 
            className="font-['Kalam',_sans-serif] text-white text-5xl sm:text-7xl lg:text-9xl text-center"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Contáctanos
          </motion.h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <motion.h2 
          className="text-white text-center mb-12 sm:mb-16 text-3xl sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          ¿Cómo podemos ayudarte?
        </motion.h2>
        
        {/* Form and Map Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16">
          {/* Form Section - Izquierda */}
          <motion.div
            className="bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.03)] p-8 rounded-3xl border border-[rgba(255,255,255,0.15)] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-white mb-8 text-2xl sm:text-3xl">
              Envíanos un mensaje
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre completo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <label htmlFor="nombres" className="block text-white/90 mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={formData.nombres}
                  onChange={handleChange}
                  placeholder="Ej: Juan Pérez"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)] text-white placeholder:text-[rgba(255,255,255,0.4)] focus:border-[rgba(175,44,40,0.8)] focus:ring-2 focus:ring-[rgba(175,44,40,0.3)] focus:bg-[rgba(0,0,0,0.3)] outline-none transition-all duration-300"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label htmlFor="email" className="block text-white/90 mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)] text-white placeholder:text-[rgba(255,255,255,0.4)] focus:border-[rgba(175,44,40,0.8)] focus:ring-2 focus:ring-[rgba(175,44,40,0.3)] focus:bg-[rgba(0,0,0,0.3)] outline-none transition-all duration-300"
                />
              </motion.div>

              {/* Teléfono */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label htmlFor="telefono" className="block text-white/90 mb-2">
                  Teléfono (opcional)
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  placeholder="(602) 123 4567"
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)] text-white placeholder:text-[rgba(255,255,255,0.4)] focus:border-[rgba(175,44,40,0.8)] focus:ring-2 focus:ring-[rgba(175,44,40,0.3)] focus:bg-[rgba(0,0,0,0.3)] outline-none transition-all duration-300"
                />
              </motion.div>

              {/* Mensaje */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label htmlFor="mensaje" className="block text-white/90 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-[rgba(255,255,255,0.2)] bg-[rgba(0,0,0,0.2)] text-white placeholder:text-[rgba(255,255,255,0.4)] focus:border-[rgba(175,44,40,0.8)] focus:ring-2 focus:ring-[rgba(175,44,40,0.3)] focus:bg-[rgba(0,0,0,0.3)] outline-none transition-all duration-300 resize-none"
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-[rgba(175,44,40,0.91)] to-[rgba(135,21,21,0.95)] border border-[rgba(255,255,255,0.2)] px-8 py-3 rounded-full cursor-pointer overflow-hidden group relative shadow-lg text-white font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(136, 28, 28, 0.4)"
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">
                  Enviar mensaje
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </form>
          </motion.div>
          
          {/* Map Section - Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-white mb-6 text-2xl sm:text-3xl">
              Visítanos
            </h3>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.03)] p-6 rounded-2xl border border-[rgba(255,255,255,0.15)]">
                <p className="text-white/90 mb-2">📍 Dirección</p>
                <p className="text-white">Carrera 34 N # 12-40 Ofic. 201</p>
                <p className="text-white/70">Cali, Colombia</p>
              </div>
              
              <motion.div 
                className="w-full h-[350px] lg:h-[400px] rounded-2xl overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] border border-[rgba(255,255,255,0.1)]"
                whileHover={{ 
                  scale: 1.01,
                  boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.5533445851!2d-76.53564!3d3.4198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a67a8e3e7e7d%3A0x0!2zM8KwMjUnMTEuMyJOIDc2wrAzMicwOC4zIlc!5e0!3m2!1ses!2sco!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Libella"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Contact Cards Section */}
        <div className="py-8 sm:py-12">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl relative inline-block">
              Otras formas de contacto
              <div className="absolute bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.5)] to-transparent h-1 left-1/2 -translate-x-1/2 top-full w-48 mt-4" />
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
            <ContactCard
              delay={0}
              title="Teléfono"
              content="(602) 8 37 08 83"
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 35 35">
                  <path d={svgPaths.pe2edb00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.9034" />
                </svg>
              }
            />
            
            <ContactCard
              delay={0.2}
              title="Email"
              content="libella.ceiba@gmail.com"
              icon={
                <svg className="w-8 h-8" fill="none" viewBox="0 0 35 35">
                  <path d={svgPaths.p32e45e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.9034" />
                  <path d={svgPaths.p257e5e00} stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.9034" />
                </svg>
              }
            />
          </div>
        </div>
      </div>
      
      {/* Footer de Inicio */}
      <FooterInicio />
    </div>
  );
}
