import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

interface HeroBannerProps {
  type?: 'video' | 'carousel';
  videoUrl?: string;
  images?: string[];
  title?: string;
  subtitle?: string;
}

export function HeroBanner({ 
  type = 'carousel', 
  videoUrl, 
  images = [],
  title = "NUESTROS PROYECTOS",
  subtitle = "Descubre nuestra cartera de desarrollos inmobiliarios"
}: HeroBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (type === 'carousel' && isPlaying && images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [type, isPlaying, images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#1e1717] to-[rgba(135,21,21,0.97)] pt-20 md:pt-24 lg:pt-28 pb-12 md:pb-16 lg:pb-20 overflow-hidden">
      {/* Background Media Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {type === 'video' && videoUrl ? (
          <div className="relative w-full h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            >
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#1e1717]/70 via-[#1e1717]/60 to-[rgba(135,21,21,0.97)]/80" />
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.2, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {images[currentIndex] && (
                <>
                  <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#1e1717]/80 via-[#1e1717]/70 to-[rgba(135,21,21,0.97)]/90" />
                </>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 py-12 md:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white mb-4 md:mb-6 lg:mb-8 px-2 tracking-wider text-3xl md:text-4xl lg:text-5xl"
          >
            {title}
          </motion.h1>
          
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeInOut" }}
            className="w-16 md:w-24 lg:w-32 h-[2px] md:h-[3px] bg-gradient-to-r from-transparent via-white/70 to-transparent mx-auto mb-4 md:mb-6 lg:mb-8"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-white/85 max-w-2xl lg:max-w-3xl mx-auto px-4 text-sm md:text-base lg:text-lg leading-relaxed"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* Carousel Controls */}
      {type === 'carousel' && images.length > 1 && (
        <>
          {/* Navigation Arrows - Hidden on mobile, optimized positioning */}
          <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 items-center justify-between px-4 lg:px-8 xl:px-12 pointer-events-none z-20">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="pointer-events-auto bg-[#1e1717]/40 backdrop-blur-md border-white/10 text-white hover:bg-[#af2c28]/60 hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="pointer-events-auto bg-[#1e1717]/40 backdrop-blur-md border-white/10 text-white hover:bg-[#af2c28]/60 hover:border-white/20 transition-all duration-300 shadow-xl"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </Button>
          </div>

          {/* Dots Indicator - Better mobile spacing */}
          <div className="absolute bottom-4 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 lg:gap-3 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-500 ${ 
                  index === currentIndex 
                    ? 'bg-white w-6 md:w-10 lg:w-12 h-1.5 md:h-2 shadow-lg shadow-white/30' 
                    : 'bg-white/30 hover:bg-white/50 w-1.5 md:w-2 h-1.5 md:h-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
