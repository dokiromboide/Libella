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

      // Overlay con gradiente radial para fundirse con el fondo
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, 0, 0,
        canvas.width / 2, 0, canvas.height * 1.1
      );
      
      // Centro: más transparente para ver el video
      gradient.addColorStop(0, 'rgba(198, 41, 38, 0.05)');
      gradient.addColorStop(0.25, 'rgba(198, 41, 38, 0.15)');
      gradient.addColorStop(0.4, 'rgba(198, 41, 38, 0.3)');
      gradient.addColorStop(0.55, 'rgba(198, 41, 38, 0.45)');
      gradient.addColorStop(0.7, 'rgba(198, 41, 38, 0.65)');
      // Bordes: completamente opaco para fundirse con el header
      gradient.addColorStop(0.85, 'rgba(198, 41, 38, 0.85)');
      gradient.addColorStop(0.95, 'rgba(198, 41, 38, 0.95)');
      gradient.addColorStop(1, 'rgba(198, 41, 38, 1)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Gradiente adicional para suavizar aún más los bordes extremos
      const edgeGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 4, canvas.width * 0.25,
        canvas.width / 2, canvas.height / 4, canvas.width * 0.55
      );
      edgeGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      edgeGradient.addColorStop(0.7, 'rgba(0, 0, 0, 0.1)');
      edgeGradient.addColorStop(1, 'rgba(0, 0, 0, 0.5)');
      
      ctx.fillStyle = edgeGradient;
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
      className="absolute inset-0"
      style={{ 
        clipPath: "ellipse(140px 110px at 50% 0%)"
      }}
    />
  );
}
