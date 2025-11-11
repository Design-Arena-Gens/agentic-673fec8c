"use client";

import { useEffect, useRef } from "react";

type Strand = {
  x: number;
  y: number;
  angle: number;
  speed: number;
  length: number;
  wobble: number;
  color: string;
};

const STRAND_COUNT = 120;
const COLORS = [
  "rgba(255, 204, 102, 0.8)",
  "rgba(255, 255, 204, 0.7)",
  "rgba(255, 221, 153, 0.85)",
  "rgba(244, 187, 68, 0.75)",
];

function createStrand(width: number, height: number): Strand {
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    angle: Math.random() * Math.PI * 2,
    speed: 0.3 + Math.random() * 0.6,
    length: 30 + Math.random() * 80,
    wobble: Math.random() * 0.4 + 0.2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
}

export default function GratedRealityStage() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    const setupCanvas = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    setupCanvas();

    const strands: Strand[] = Array.from({ length: STRAND_COUNT }, () =>
      createStrand(width, height),
    );

    let animationFrame: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(255, 250, 238, 0.6)");
      gradient.addColorStop(1, "rgba(255, 229, 153, 0.35)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      strands.forEach((strand, index) => {
        const pulse = Math.sin(time / 500 + index) * strand.wobble;
        strand.x += Math.cos(strand.angle) * strand.speed;
        strand.y += Math.sin(strand.angle) * strand.speed;

        if (strand.x < -strand.length) strand.x = width + strand.length;
        if (strand.x > width + strand.length) strand.x = -strand.length;
        if (strand.y < -strand.length) strand.y = height + strand.length;
        if (strand.y > height + strand.length) strand.y = -strand.length;

        ctx.save();
        ctx.translate(strand.x, strand.y);
        ctx.rotate(strand.angle + pulse);

        const gradientStroke = ctx.createLinearGradient(
          -strand.length / 2,
          0,
          strand.length / 2,
          0,
        );
        gradientStroke.addColorStop(0, "rgba(255, 255, 240, 0.4)");
        gradientStroke.addColorStop(0.5, strand.color);
        gradientStroke.addColorStop(1, "rgba(255, 255, 255, 0.6)");

        ctx.strokeStyle = gradientStroke;
        ctx.lineWidth = 6 + Math.sin(time / 400 + index) * 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(-strand.length / 2, 0);
        ctx.lineTo(strand.length / 2, 0);
        ctx.stroke();
        ctx.restore();
      });

      time += 16;
      animationFrame = requestAnimationFrame(draw);
    };

    const onResize = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      setupCanvas();
    };

    animationFrame = requestAnimationFrame(draw);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-amber-50/40 shadow-xl backdrop-blur">
      <canvas
        ref={canvasRef}
        className="h-[320px] w-full max-w-full"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/50 via-transparent to-amber-100/60" />
      <div className="pointer-events-none absolute inset-0 border border-white/40 mix-blend-overlay opacity-50" />
      <div className="pointer-events-none absolute -top-10 left-1/2 h-32 w-[120%] -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
    </div>
  );
}
