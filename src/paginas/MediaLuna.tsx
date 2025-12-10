import { ALL } from "dns";
import { m } from "motion/react";
// ============================================
// SECCIÓN: HERO CON CARRUSEL
// ============================================ 
function HeroSection({ 
  carouselImages, 
  currentSlide, 
  nextSlide,
}: {
  carouselImages: string[];
  currentSlide: number;
    nextSlide: () => void;
}) {
    return (
    <div className="hero-section">
      <div className="carousel">
        {carouselImages.map((image, index) => (
            <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={index === currentSlide ? "active" : ""}
            />
        ))}
      </div>
        <button onClick={nextSlide}>Next</button>
    </div>
  );
}
// ============================================
// SECCIÓN: FIN HERO CON CARRUSEL
// ============================================
export default HeroSection;