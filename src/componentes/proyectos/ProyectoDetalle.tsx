import { useState } from "react";
import { PDFViewer } from "../PDFViewer";
import { FileText } from "lucide-react";

// Importar imágenes desde la carpeta recursos


interface ProyectoDetalleProps {
  nombreProyecto: string;
  descripcion: string;
  ubicacion: string;
  fechaEntrega: string;
  lotes: string;
  amenidades: string[];
  porcentajeAvance?: number;
  detallesAvance?: { nombre: string; porcentaje: number }[];
  imagenBanner: string;
  pdfPortfolio?: string;
  qrButtons?: {
    page: number;
    x: string;
    y: string;
    width: string;
    height: string;
    url: string;
    label?: string;
  }[];
  onVolver?: () => void;
  origenTexto?: string;
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
  pdfPortfolio,
  qrButtons,
  onVolver,
  origenTexto,
}: ProyectoDetalleProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
  });
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Solicitud enviada:", formData);
    alert("¡Solicitud enviada con éxito! Nos pondremos en contacto pronto.");
    setFormData({ nombre: "", email: "", telefono: "" });
  };

  // Función para manejar la apertura del PDF
  const handleOpenPDF = () => {
    if (pdfPortfolio) {
      // Si es La Gran Turquesa o AmsterHaus, abrir en nueva pestaña (PDF directo)
      if (nombreProyecto === "La Gran Turquesa" || nombreProyecto === "AmsterHaus") {
        window.open(pdfPortfolio, '_blank');
      } else {
        // Para otros proyectos, abrir en modal
        setIsPDFOpen(true);
      }
    }
  };



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
            ← {origenTexto || 'Volver al Inicio'}
          </button>
        </div>
      </div>

      {/* Banner Superior */}
      <div style={{ width: "100%", height: "350px", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)" }}>
        <img
          src={imagenBanner}
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

            {pdfPortfolio && (
              <div style={{ marginBottom: "16px" }}>
                <button
                  onClick={handleOpenPDF}
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.15)",
                    border: "2px solid rgba(255,255,255,0.3)",
                    color: "white",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "600",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.25)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <FileText style={{ width: "20px", height: "20px" }} />
                  Ver portafolio
                </button>
                {(nombreProyecto === "La Gran Turquesa" || nombreProyecto === "AmsterHaus") && (
                  <p style={{ fontSize: '13px', marginTop: '10px', color: '#fff', textAlign: 'center', fontWeight: '500' }}>
                    * Te redirigirás a una nueva pestaña
                  </p>
                )}
              </div>
            )}

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


      </div>

      {/* PDF Viewer Modal */}
      {pdfPortfolio && (
        <PDFViewer
          pdfUrl={pdfPortfolio}
          isOpen={isPDFOpen}
          onClose={() => setIsPDFOpen(false)}
          title={`Portafolio - ${nombreProyecto}`}
          qrButtons={qrButtons}
        />
      )}
    </div>
  );
}
