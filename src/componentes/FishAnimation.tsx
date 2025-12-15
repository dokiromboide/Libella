import { useEffect, useRef } from 'react';

interface Fish {
  angle: number;
  speed: number;
  size: number;
  color: { r: number; g: number; b: number };
  tailColor: { r: number; g: number; b: number };
  orbitRadius: number;
  isFree: boolean;
  wanderOffset: number;
  wanderTimer: number;
  wanderDuration: number;
  wavePhase: number;
  x: number;
  y: number;
  rotation: number;
  verticalOffset: number;
  previousVerticalOffset: number;
}

const random = (min: number, max?: number): number => {
  if (max === undefined) {
    return Math.random() * min;
  }
  return min + Math.random() * (max - min);
};

const map = (value: number, start1: number, stop1: number, start2: number, stop2: number): number => {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
};

const lerp = (start: number, stop: number, amt: number): number => {
  return start + (stop - start) * amt;
};

// Implementación simple de noise (Perlin noise simplificado)
let noiseOffset = 0;
const noise = (x: number): number => {
  const X = Math.floor(x) & 255;
  x -= Math.floor(x);
  const u = x * x * x * (x * (x * 6 - 15) + 10);
  const a = Math.sin(X * 12.9898 + noiseOffset) * 43758.5453;
  const b = Math.sin((X + 1) * 12.9898 + noiseOffset) * 43758.5453;
  return (a - Math.floor(a)) * (1 - u) + (b - Math.floor(b)) * u;
};

export function FishAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fishRef = useRef<Fish[]>([]);
  const animationRef = useRef<number>();
  const frameCountRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Densidad en borde, fondo desvanecido
    const numFish = 250;
    const radiusX = 160;
    const radiusY = 110;

    fishRef.current = [];
    for (let i = 0; i < numFish; i++) {
      // Ángulo -30 a 210 (rango completo de movimiento para continuidad)
      const angle = map(i, 0, numFish, -30, 220);
      // Más concentración en el borde usando random³
      const randomFactor = random(0.8);
      const orbitScale = 0.7 + (randomFactor * 0.4); // Mayor separación radial 
      fishRef.current.push({
        angle,
        speed: random(0.2, 0.45),
        size: 4,
        color: {
          r: 0,
          g: 0,
          b: 0
        },
        tailColor: { r: 0, g: 0, b: 0 },
        orbitRadius: orbitScale,
        isFree: random(1) < 0.35,
        wanderOffset: random(1000),
        wanderTimer: 0,
        wanderDuration: Math.floor(random(200, 400)),
        wavePhase: random(360),
        x: 0,
        y: 0,
        rotation: 0,
        verticalOffset: 0,
        previousVerticalOffset: 0
      });
    }

    startTimeRef.current = Date.now();

    const animate = () => {
      frameCountRef.current++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Progresivo: animación de revelado gradual de izquierda a derecha
      const elapsedTime = (Date.now() - startTimeRef.current) / 1000;
      const revealDuration = 0.8; // Aparición gradual de los peces
      const revealProgress = Math.min(1, elapsedTime / revealDuration);

      // Dibuja los peces PRIMERO
      ctx.save();
      ctx.beginPath();
      ctx.ellipse(canvas.width / 2, 0, canvas.width / 2, canvas.height, 0, 0, Math.PI);
      ctx.clip();
      ctx.translate(canvas.width / 2, 0);

      fishRef.current.forEach((fish) => {
        updateFish(fish);
        drawFish(ctx, fish, revealProgress);
      });

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

  const updateFish = (fish: Fish) => {
    const radiusX = 140;
    const radiusY = 110;
    const verticalShift = -7; // Desplazamiento para mover los peces hacia arriba
    fish.angle -= fish.speed;
    if (fish.angle < -30) {
      fish.angle = 210 + (fish.angle + 30);
    } else if (fish.angle > 210) {
      fish.angle = (fish.angle - 210) - 30;
    }

    const angleRad = (fish.angle * Math.PI) / 180;
    const baseX = Math.cos(angleRad) * radiusX * fish.orbitRadius;
    const baseY = Math.sin(angleRad) * radiusY * fish.orbitRadius + verticalShift;

    const perpX = -Math.sin(angleRad);
    const perpY = Math.cos(angleRad);
    const wave = Math.sin((fish.wavePhase * Math.PI) / 180) * 1.5;
    fish.wavePhase += 4;
    const offsetX = perpX * wave;
    const offsetY = perpY * wave;

    if (fish.isFree) {
      // Movimiento fluido hacia arriba y abajo usando seno
      fish.previousVerticalOffset = fish.verticalOffset;
      const targetVerticalOffset = Math.sin(fish.wanderOffset * 0.05) * 5; // oscila entre -5 y +5
      fish.verticalOffset = lerp(fish.verticalOffset, targetVerticalOffset, 0.03);
      const targetSpeed = map(noise(fish.wanderOffset + 500), 0, 1, 0.2, 0.65);
      fish.speed = lerp(fish.speed, targetSpeed, 0.02);
      fish.wanderOffset += 1; // incremento para la oscilación
      fish.wanderTimer++;
      if (fish.wanderTimer > fish.wanderDuration) {
        fish.isFree = false;
      }
      const newBaseX = Math.cos(angleRad) * radiusX * fish.orbitRadius;
      const newBaseY = Math.sin(angleRad) * radiusY * fish.orbitRadius + verticalShift;
      fish.x = lerp(fish.x || newBaseX, newBaseX + offsetX, 0.1);
      fish.y = lerp(fish.y || newBaseY, newBaseY + offsetY + fish.verticalOffset, 0.1);
    } else {
      // Regreso suave a la órbita original
      fish.previousVerticalOffset = fish.verticalOffset;
      fish.verticalOffset = lerp(fish.verticalOffset, 0, 0.05);
      const targetX = baseX + offsetX;
      const targetY = baseY + offsetY + fish.verticalOffset;
      fish.x = lerp(fish.x || targetX, targetX, 0.08);
      fish.y = lerp(fish.y || targetY, targetY, 0.08);
      if (random(1) < 0.015) { // probabilidad de volverse rebelde
        fish.isFree = true;
        fish.wanderTimer = 0;
        fish.wanderDuration = Math.floor(random(150, 350));
      }
    }
    
    // Calcular la velocidad vertical y ajustar la inclinación
    const verticalVelocity = fish.verticalOffset - fish.previousVerticalOffset;
    // Convertir la velocidad vertical a grados de inclinación (limitado a ±20 grados)
    const tiltAngle = Math.max(-20, Math.min(20, verticalVelocity * 15));
    fish.rotation = fish.angle + 90 + (fish.speed < 0 ? 180 : 0) + tiltAngle;
  };

  const drawFish = (ctx: CanvasRenderingContext2D, fish: Fish, revealProgress?: number) => {
    // Zonas de exclusión ajustadas para logos agrupados cerca del centro y más arriba
    const logoZones = [
      { x: -43, y: -15, radius: 18 },  // Ojo de Oso - más a la izquierda
      { x: 0, y: -15, radius: 24 },     // Libella - cerca del centro, arriba
      { x: 43, y: -15, radius: 20 }     // Suelo 360 - más a la derecha
    ];
    let opacity = 1.0;

    // Revelado de izquierda a derecha
    if (revealProgress !== undefined && revealProgress < 1) {
      const canvasWidth = 280;
      const canvasHalfWidth = canvasWidth / 2;
      // Posición absoluta del pez en el canvas (fish.x es relativo al centro)
      const fishAbsoluteX = fish.x + canvasHalfWidth;
      
      // Línea de revelado que se mueve de izquierda a derecha
      const currentRevealX = revealProgress * canvasWidth;
      const fadeRange = 60;
      
      if (fishAbsoluteX > currentRevealX + fadeRange) {
        // El pez aún no ha sido revelado
        return;
      } else if (fishAbsoluteX > currentRevealX) {
        // El pez está en la zona de transición
        const fadeProgress = 1 - (fishAbsoluteX - currentRevealX) / fadeRange;
        opacity = Math.min(opacity, Math.max(0, fadeProgress));
      }
      // Si fishAbsoluteX <= currentRevealX, el pez está completamente revelado
    }

    const fadeRange = 0;
    if (fish.angle < fadeRange) {
      opacity = Math.min(opacity, Math.max(0, fish.angle / fadeRange));
    } else if (fish.angle > 200 - fadeRange) {
      opacity = Math.min(opacity, Math.max(0, (200 - fish.angle) / fadeRange));
    } else if (fish.angle < 0 || fish.angle > 200) {
      opacity = 0;
    }

    for (const zone of logoZones) {
      const distance = Math.sqrt(
        Math.pow(fish.x - zone.x, 2) + Math.pow(fish.y - zone.y, 2)
      );
      if (distance < zone.radius) {
        opacity = Math.min(opacity, 0.6 + (distance / zone.radius * 0.4));
      } else if (distance < zone.radius + 10) {
        opacity = Math.min(opacity, 0.85 + ((distance - zone.radius) / 10) * 0.15);
      }
    }
    if (opacity < 0.05) return;

    ctx.save();
    ctx.globalAlpha = opacity;
    ctx.translate(fish.x, fish.y);
    ctx.rotate((fish.rotation * Math.PI) / 180);

    // Cuerpo negro mate
    ctx.fillStyle = `rgb(${fish.color.r}, ${fish.color.g}, ${fish.color.b})`;
    ctx.strokeStyle = `rgba(0, 0, 0)`;
    ctx.beginPath();
    ctx.moveTo(-fish.size * 1.2, -fish.size / 1.5);
    ctx.lineTo(-fish.size * 1.2, fish.size / 1.5);
    ctx.lineTo(fish.size * 1.8, 0);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  };

  return (
    <canvas
      ref={canvasRef}
      width={280}
      height={110}
      className="absolute inset-0 rounded-b-[280px]"
      style={{ clipPath: 'ellipse(140px 110px at 50% 0%)' }}
    />
  );
}
