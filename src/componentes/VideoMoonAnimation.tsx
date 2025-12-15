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

      // Clip de media luna (igual que antes)
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
        ctx.drawImage(
          video,
          0,
          0,
          canvas.width,
          canvas.height
        );
      }

      // Overlay oscuro sutil (opcional)
      ctx.fillStyle = "rgba(0,0,0,0.25)";
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
      style={{ clipPath: "ellipse(140px 110px at 50% 0%)" }}
    />
  );
}
