import { ProyectoDetalle } from "./ProyectosDetalle";

// ===== ALTOS DE CATTLEYA =====
export function AltosDelCattleya() {
  return (
    <ProyectoDetalle
      nombreProyecto="Altos de Cattleya"
      descripcion="Un desarrollo residencial único que combina la modernidad con la naturaleza. Parcelas amplias en un conjunto cerrado con seguridad 24/7 y excelentes vías de acceso. Ideal para familias que buscan calidad de vida y privacidad."
      ubicacion="Totoró - vereda de Aguas Tibias, Cauca. (Kilómetro 6)"
      fechaEntrega="Diciembre 2025"
      lotes="Parcelas desde 1000m² en conjunto cerrado"
      amenidades={[
        "Portería 24/7",
        "Vías internas pavimentadas",
        "Áreas verdes comunes",
        "Paisaje natural privilegiado",
        "Sistema de drenaje moderno",
        "Servicios públicos garantizados",
      ]}
      porcentajeAvance={75}
      detallesAvance={[
        { nombre: "Infraestructura", porcentaje: 95 },
        { nombre: "Áreas comunes", porcentaje: 60 },
      ]}
      imagenBanner="../imagenes/0c294c139f5fddad96feb3b16c0e5a444c171cf4.png"
    />
  );
}

// ===== AMSTERDORP (AmsterHaus) =====
export function AmsterHaus() {
  return (
    <ProyectoDetalle
      nombreProyecto="AmsterHaus"
      descripcion="Hermosos apartamentos y apartaestudios en el corazón de Popayán. Diseñado con espacios modernos y funcionales, perfectos para profesionales y estudiantes. Ubicación estratégica con fácil acceso a comercios, universidades y servicios."
      ubicacion="Popayán Cra 20 #55 N 64 (A dos minutos de Café La Palma)"
      fechaEntrega="Marzo 2026"
      lotes="Apartamentos desde 55m² y apartaestudios desde 33,29 m²"
      amenidades={[
        "Portería moderna",
        "Ascensores de última generación",
        "Parqueaderos techados",
        "Espacios verdes comunes",
        "Salón social",
        "Vigilancia permanente",
      ]}
      porcentajeAvance={60}
      detallesAvance={[
        { nombre: "Estructura", porcentaje: 85 },
        { nombre: "Acabados", porcentaje: 45 },
      ]}
      imagenBanner="../imagenes/aed81eafca51449cbcc21b296890d74d9dd3d588.png"
    />
  );
}

// ===== LA CEIBA =====
export function LaCeiba() {
  return (
    <ProyectoDetalle
      nombreProyecto="La Ceiba Campestre"
      descripcion="Espacio campestre exclusivo con escrituras de 3000m² en copropiedad y listas para escriturar. Un oasis de tranquilidad en las afueras de la ciudad, con acceso a carrilera antigua y vistas panorámicas del valle."
      ubicacion="Calibio, antigua carrilera, a 4.4km de la Variante Norte"
      fechaEntrega="Noviembre 2025"
      lotes="Lotes desde 200m² hasta 500m², diseñados para construir la casa de tus sueños"
      amenidades={[
        "Casa club",
        "Alberca",
        "Áreas verdes",
        "Seguridad 24/7",
        "Gimnasio",
        "Salón de eventos",
      ]}
      porcentajeAvance={85}
      detallesAvance={[
        { nombre: "Escrituración", porcentaje: 100 },
        { nombre: "Servicios", porcentaje: 80 },
      ]}
      imagenBanner="../imagenes/23069cff9d3176399375c76d68759cbd72f9fa16.png"
    />
  );
}

// ===== LA GRAN TURQUESA =====
export function LaGranTurquesa() {
  return (
    <ProyectoDetalle
      nombreProyecto="La Gran Turquesa"
      descripcion="Exclusivo condominio campestre con amplias parcelas desde 1000m². Ofrece un estilo de vida premium en un entorno natural privilegiado. Ubicado en zona estratégica con fácil acceso a la ciudad y vías principales."
      ubicacion="Totoró, Cauca. (Kilómetro 4)"
      fechaEntrega="Enero 2026"
      lotes="Parcelas desde 1000m² con común compartida en copropiedad"
      amenidades={[
        "Portería de lujo",
        "Campos deportivos",
        "Piscina comunitaria",
        "Zonas de recreación",
        "Jardines paisajísticos",
        "Seguridad perimetral",
      ]}
      porcentajeAvance={45}
      detallesAvance={[
        { nombre: "Adecuación de terreno", porcentaje: 80 },
        { nombre: "Servicios básicos", porcentaje: 30 },
      ]}
      imagenBanner="figma:asset/0c294c139f5fddad96feb3b16c0e5a444c171cf4.png"
    />
  );
}
