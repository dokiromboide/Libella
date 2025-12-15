import { useEffect, useRef } from "react";

interface VideoMoonAnimationProps {
  src: string;
}

export function VideoMoonAnimation({ src }: VideoMoonAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;

    videoRef.current = video;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Clip de media luna
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(
        canvas.width / 2,
        0,
        canvas.width / 2,
        canvas.height,
        0,
        0,
        Math.PI
      );
      ctx.clip();

      if (video.readyState >= 2) {
        // Dibuja el video
        ctx.drawImage(
          video,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      // Overlay con gradiente para integrar con el fondo rojo
      // Gradiente radial desde el centro hacia los bordes
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 0, 0,
        canvas.width / 2, 0, canvas.height * 1.2
      );
      
      // Centro: más transparente para ver el video
      gradient.addColorStop(0, 'rgba(198, 41, 38, 0.1)');
      gradient.addColorStop(0.3, 'rgba(198, 41, 38, 0.2)');
      gradient.addColorStop(0.5, 'rgba(198, 41, 38, 0.35)');
      gradient.addColorStop(0.7, 'rgba(198, 41, 38, 0.5)');
      // Bordes: más opaco para mezclar con el header
      gradient.addColorStop(0.85, 'rgba(198, 41, 38, 0.65)');
      gradient.addColorStop(1, 'rgba(198, 41, 38, 0.8)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Viñeta sutil en los bordes para suavizar la transición
      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 3, canvas.width * 0.3,
        canvas.width / 2, canvas.height / 3, canvas.width * 0.6
      );
      vignetteGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      vignetteGradient.addColorStop(1, 'rgba(0, 0, 0, 0.4)');
      
      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.restore();

      animationRef.current = requestAnimationFrame(render);
    };

    video.addEventListener("play", render);
    video.play();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      video.pause();
    };
  }, [src]);

  return (
    <canvas
      ref={canvasRef}
      width={280}
      height={110}
      className="absolute inset-0 rounded-b-[280px]"
      style={{ 
        clipPath: "ellipse(140px 110px at 50% 0%)",
        mixBlendMode: "normal"
      }}
    />
  );
}
