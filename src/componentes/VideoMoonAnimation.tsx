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

      // Máscara de opacidad radial: 100% opaco en el centro, 0% en los bordes
      const opacityGradient = ctx.createRadialGradient(
        canvas.width / 2, 0, 0,
        canvas.width / 2, 0, canvas.height * 1.1
      );

     /* // Centro: 100% opaco (se ve completamente)
      // Centro: 100% opaco (se ve completamente)
      opacityGradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
      opacityGradient.addColorStop(0.6, 'rgba(0, 0, 0, 0)'); // Hasta 60% sigue siendo 100% opaco
      // Desde 60% hasta 100%: transición suave de opaco a 80% transparente
      opacityGradient.addColorStop(1, 'rgba(0, 0, 0, 0.8)'); // 0.8 alpha en máscara = 80% transparente
      */
      // Aplicar la máscara con globalCompositeOperation
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = opacityGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Restaurar el modo de composición normal
      ctx.globalCompositeOperation = 'source-over';

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
      width={350}
      height={175}
      className="absolute inset-0"
      style={{
        clipPath: "circle(175px at 50% 0%)"
      }}
    />
  );
}
