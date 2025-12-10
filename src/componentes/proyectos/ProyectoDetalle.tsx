import { useState } from "react";

// Importar imágenes desde la carpeta recursos
import imgHeroCarousel from "../../recursos/imagenes/aed81eafca51449cbcc21b296890d74d9dd3d588.png";
import imgHeroCarousel1 from "../../recursos/imagenes/9a59421dc01ab6a7265d9147d3abf33d1210b1b0.png";
import imgHeroCarousel2 from "../../recursos/imagenes/829756ee755a52dd5565fc34801ad07081dc3d5a.png";
import imgHeroCarousel3 from "../../recursos/imagenes/8e85657db36622060dfb26f2074645c77e42e7fd.png";
import imgImageLaCeiba from "../../recursos/imagenes/23069cff9d3176399375c76d68759cbd72f9fa16.png";
import imgImageLaGranTurquesa from "../../recursos/imagenes/0c294c139f5fddad96feb3b16c0e5a444c171cf4.png";

interface ProyectoDetalleProps {
  nombreProyecto: string;
  descripcion: string;
  ubicacion: string;
  fechaEntrega: string;
  lotes: string;
  amenidades: string[];
  porcentajeAvance: number;
  detallesAvance: { nombre: string; porcentaje: number }[];
  imagenBanner: string;
  galeriaImagenes?: string[]; // Nueva prop para la galería
  onVolver?: () => void;
  volverTexto?: string; // Texto personalizado para el botón de volver
}

export function ProyectoDetalle({
  nombreProyecto,
  descripcion,
  ubicacion,
  fechaEntrega,
  lotes,
  amenidades,
  porcentajeAvance,
  detallesAvance,
  imagenBanner,
  galeriaImagenes,
  onVolver,
  volverTexto = "Volver al Inicio", // Valor por defecto
}: ProyectoDetalleProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [showProgress, setShowProgress] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Solicitud enviada:", formData);
    alert("¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.");
    setFormData({ nombre: "", email: "", telefono: "" });
  };

  // Usar imágenes de la galería si están disponibles, sino usar imágenes por defecto
  const portfolioImages = galeriaImagenes && galeriaImagenes.length > 0 ? galeriaImagenes : [
    imgHeroCarousel,
    imgHeroCarousel1,
    imgHeroCarousel2,
    imgHeroCarousel3,
    imgImageLaCeiba,
    imgImageLaGranTurquesa
  ];

  // Funciones para navegar en la galería (de 2 en 2)
  const handlePrevImages = () => {
    setCurrentImageIndex((prev) => Math.max(0, prev - 2));
  };

  const handleNextImages = () => {
    setCurrentImageIndex((prev) => Math.min(portfolioImages.length - 2, prev + 2));
  };

  const canGoPrev = currentImageIndex > 0;
  const canGoNext = currentImageIndex < portfolioImages.length - 2;

  return (
    <div style={{ width: "100%", minHeight: "100vh", background: "linear-gradient(to bottom, rgba(198, 41, 38, 0.97), #403838)" }}>
      {/* Header/Encabezado */}
      <div style={{ background: "#c62926", padding: "0 32px", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "relative", zIndex: 100 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <button
            onClick={onVolver}
            style={{
              background: "white",
              color: "#c62926",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "600",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
          >
            ← {volverTexto}
          </button>
        </div>
      </div>

      {/* Banner Superior */}
      <div style={{ width: "100%", height: "350px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)" }}>
        <img
          src={imgHeroCarousel}
          alt={nombreProyecto}
          style={{ width: "100%", height: "100%", objectFit: "cover", position: "absolute" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.4)" }} />
        <h1 style={{ color: "white", fontSize: "48px", fontWeight: "bold", textAlign: "center", position: "relative", zIndex: 10 }}>
          {nombreProyecto}
        </h1>
      </div>

      {/* Contenedor Principal */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 32px" }}>
        {/* Grid de 2 columnas */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", marginBottom: "48px" }}>
          {/* Columna Izquierda - Descripción */}
          <div style={{ background: "rgba(227, 66, 52, 0.91)", padding: "24px", borderRadius: "12px", color: "white" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Descripción del Proyecto</h2>
            
            <p style={{ lineHeight: "1.6", marginBottom: "24px", opacity: 0.9 }}>
              {descripcion}
            </p>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px" }}>📍</span>
              <div>
                <p style={{ opacity: 0.9 }}>{ubicacion}</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
              <span style={{ fontSize: "20px" }}>🏠</span>
              <div>
                <p style={{ opacity: 0.9 }}>{lotes}</p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "24px" }}>
              <span style={{ fontSize: "20px" }}>📅</span>
              <div>
                <p style={{ opacity: 0.9 }}>Entrega estimada: {fechaEntrega}</p>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.2)", paddingTop: "16px" }}>
              <h4 style={{ marginBottom: "12px", fontWeight: "600" }}>Caracteristicas:</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
                {amenidades.map((amenidad, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", opacity: 0.9 }}>
                    <span style={{ width: "6px", height: "6px", background: "white", borderRadius: "50%" }}></span>
                    {amenidad}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna Derecha - Formulario */}
          <div style={{ background: "rgba(227, 66, 52, 0.91)", padding: "24px", borderRadius: "12px", color: "white" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Agendar Visita</h2>
            
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Nombre completo</label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "14px",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Correo electrónico</label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "14px",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Teléfono</label>
                <input
                  type="tel"
                  placeholder="(123) 456-7890"
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "14px",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Fecha de visita</label>
                <input
                  type="date"
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "14px",
                    boxSizing: "border-box"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px", fontSize: "14px" }}>Hora de visita</label>
                <select
                  style={{
                    width: "100%",
                    padding: "12px",
                    background: "rgba(255,255,255,0.1)",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "6px",
                    color: "white",
                    fontSize: "14px",
                    boxSizing: "border-box"
                  }}
                >
                  <option style={{ color: "#333" }}>Selecciona una hora</option>
                  <option style={{ color: "#333" }}>8:00 AM</option>
                  <option style={{ color: "#333" }}>9:00 AM</option>
                  <option style={{ color: "#333" }}>10:00 AM</option>
                  <option style={{ color: "#333" }}>2:00 PM</option>
                  <option style={{ color: "#333" }}>3:00 PM</option>
                </select>
              </div>

              <button
                type="submit"
                style={{
                  background: "#c62926",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop: "8px"
                }}
              >
                Enviar solicitud
              </button>

              <p style={{ textAlign: "center", fontSize: "12px", opacity: 0.7 }}>
                Recibirás una confirmación por correo electrónico
              </p>
            </form>
          </div>
        </div>

        {/* Botón Ver Avances */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <button
            onClick={() => setShowProgress(!showProgress)}
            style={{
              background: "#c62926",
              color: "white",
              border: "none",
              padding: "12px 32px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600"
            }}
          >
            {showProgress ? "Ocultar avances" : "Ver avances del proyecto"}
          </button>
        </div>

        {/* Sección de Avances */}
        {showProgress && (
          <div style={{ background: "rgba(227, 66, 52, 0.91)", padding: "24px", borderRadius: "12px", marginBottom: "48px", color: "white" }}>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Avances de Obra</h2>
            
            <div style={{ marginBottom: "24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span>Progreso general del proyecto</span>
                <span style={{ fontWeight: "bold" }}>{porcentajeAvance}%</span>
              </div>
              <div style={{ width: "100%", height: "16px", background: "rgba(255,255,255,0.2)", borderRadius: "8px", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${porcentajeAvance}%`, background: "white", transition: "width 0.3s" }}></div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {detallesAvance.map((detalle, idx) => (
                <div key={idx} style={{ border: "1px solid rgba(255,255,255,0.1)", padding: "16px", borderRadius: "8px", background: "rgba(0,0,0,0.2)" }}>
                  <p style={{ fontSize: "14px", marginBottom: "8px" }}>{detalle.nombre}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ flex: 1, height: "8px", background: "rgba(255,255,255,0.2)", borderRadius: "4px", overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${detalle.porcentaje}%`, background: "white", transition: "width 0.3s" }}></div>
                    </div>
                    <span style={{ fontSize: "14px", fontWeight: "600", minWidth: "45px" }}>{detalle.porcentaje}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Carrusel/Portafolio - Formato libro (2 imágenes juntas) con flechas */}
        <div style={{ marginBottom: "48px" }}>
          <h2 style={{ textAlign: "center", color: "white", fontSize: "28px", fontWeight: "bold", marginBottom: "32px", textTransform: "uppercase", letterSpacing: "2px" }}>
            Galería del Proyecto
          </h2>
          
          {/* Contenedor con flechas */}
          <div style={{ position: "relative", maxWidth: "1200px", margin: "0 auto" }}>
            {/* Flecha Izquierda */}
            <button
              onClick={handlePrevImages}
              disabled={!canGoPrev}
              style={{
                position: "absolute",
                left: "-60px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                background: canGoPrev ? "rgba(227, 66, 52, 0.95)" : "rgba(100, 100, 100, 0.5)",
                border: "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canGoPrev ? "pointer" : "not-allowed",
                color: "white",
                fontSize: "36px",
                fontWeight: "bold",
                transition: "all 0.3s",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                lineHeight: "0",
                paddingTop: "0",
                paddingBottom: "0"
              }}
              onMouseEnter={(e) => {
                if (canGoPrev) {
                  e.currentTarget.style.background = "rgba(227, 66, 52, 1)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (canGoPrev) {
                  e.currentTarget.style.background = "rgba(227, 66, 52, 0.95)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }
              }}
            >
              ‹
            </button>

            {/* Contenedor de imágenes */}
            <div style={{ 
              display: "flex", 
              gap: "0", 
              overflow: "hidden",
              borderRadius: "8px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.4)"
            }}>
              <div style={{
                display: "flex",
                gap: "0",
                transform: `translateX(-${currentImageIndex * 50}%)`,
                transition: "transform 0.5s ease-in-out",
                width: "100%"
              }}>
                {portfolioImages.map((imgSrc, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      minWidth: "50%",
                      width: "50%",
                      height: "600px", 
                      overflow: "hidden", 
                      flexShrink: 0, 
                      background: "rgba(0,0,0,0.2)"
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`${nombreProyecto} - Vista ${idx + 1}`}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Flecha Derecha */}
            <button
              onClick={handleNextImages}
              disabled={!canGoNext}
              style={{
                position: "absolute",
                right: "-60px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                background: canGoNext ? "rgba(227, 66, 52, 0.95)" : "rgba(100, 100, 100, 0.5)",
                border: "none",
                borderRadius: "50%",
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: canGoNext ? "pointer" : "not-allowed",
                color: "white",
                fontSize: "36px",
                fontWeight: "bold",
                transition: "all 0.3s",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                lineHeight: "0",
                paddingTop: "0",
                paddingBottom: "0"
              }}
              onMouseEnter={(e) => {
                if (canGoNext) {
                  e.currentTarget.style.background = "rgba(227, 66, 52, 1)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1.1)";
                }
              }}
              onMouseLeave={(e) => {
                if (canGoNext) {
                  e.currentTarget.style.background = "rgba(227, 66, 52, 0.95)";
                  e.currentTarget.style.transform = "translateY(-50%) scale(1)";
                }
              }}
            >
              ›
            </button>
          </div>
          
          {/* Indicador de página */}
          <div style={{ textAlign: "center", marginTop: "24px" }}>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
              Páginas {currentImageIndex + 1}-{Math.min(currentImageIndex + 2, portfolioImages.length)} de {portfolioImages.length}
            </p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", marginTop: "12px" }}>
              {Array.from({ length: Math.ceil(portfolioImages.length / 2) }).map((_, idx) => (
                <div
                  key={idx}
                  style={{
                    width: currentImageIndex / 2 === idx ? "32px" : "12px",
                    height: "12px",
                    borderRadius: "6px",
                    background: currentImageIndex / 2 === idx ? "rgba(227, 66, 52, 0.95)" : "rgba(255,255,255,0.3)",
                    transition: "all 0.3s",
                    cursor: "pointer"
                  }}
                  onClick={() => setCurrentImageIndex(idx * 2)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
