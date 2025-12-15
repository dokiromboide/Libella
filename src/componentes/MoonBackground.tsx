import { useEffect, useRef } from 'react';

export function MoonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Dibuja el fondo de la media luna
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(canvas.width / 2, 0, canvas.width / 2, canvas.height, 0, 0, Math.PI);
      ctx.clip();

      // Gradiente radial desde el centro: negro en el centro, rojo suave hacia los bordes
      // Los logos están aproximadamente a 60-90px del centro (z-[3])
      // Los peces están en un radio de aproximadamente 98-126px (70%-90% de 140px/110px)
      // El degradado debe terminar donde empiezan los peces (radio mínimo de órbita)
      const gradientRadius = 95; // Termina donde empiezan los peces (70% de 140px)
      const fadeGradient = ctx.createRadialGradient(
        canvas.width / 2, 0, 0,
        canvas.width / 2, 0, gradientRadius
      );
      fadeGradient.addColorStop(0, 'rgba(0, 0, 0, 0.95)');              // Centro negro intenso
      fadeGradient.addColorStop(0.5, 'rgba(0, 0, 0, 0.95)');           // Negro dominante con toque muy sutil de rojo
      fadeGradient.addColorStop(0.65, 'rgba(0, 0, 0, 0.95)');        // Negro con proporción mayor, rojo sutil
      fadeGradient.addColorStop(0.9, 'rgba(0, 0, 0, 0.95)');        // Negro en menor proporción, rojo más presente
      fadeGradient.addColorStop(0.8, 'rgba(0, 0, 0, 0.95)');         // Negro en proporción moderada con rojo visible
      fadeGradient.addColorStop(0.93, 'rgba(46, 0, 0, 0.95)');        // Rojo dominante pero con tono oscuro
      fadeGradient.addColorStop(0.95, 'rgba(140, 30, 27, 0.80)');
      fadeGradient.addColorStop(0.99, 'rgba(198, 41, 38, 0.70)');
      fadeGradient.addColorStop(1, 'rgba(0, 20, 10, 0)');// Rojo #C62926 transparente en el borde

      ctx.fillStyle = fadeGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.restore();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={280}
      height={110}
      className="absolute inset-0 rounded-b-[300px]"
      style={{ clipPath: 'ellipse(160px 110px at 50% 0%)' }}
    />
  );
}
