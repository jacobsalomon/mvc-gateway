"use client";

import { useEffect, useRef } from "react";

// Subtle computer-vision HUD effect for the wasted-hours ticker.
// Draws a faint grid + a single scan line that sweeps downward.
// Pure canvas — no libraries. Respects reduced motion.
const GRID_SPACING = 60; // pixels between grid lines
const GRID_OPACITY = 0.06; // faint but visible
const SCAN_SPEED = 0.00008; // how fast the scan line moves (slower = more deliberate)
const SCAN_HEIGHT = 150; // height of the scan line glow in pixels
const SCAN_OPACITY = 0.12; // peak brightness of the scan line

export default function HudScan() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Respect reduced-motion preference — show static grid only
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      drawStaticGrid(canvas);
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // ── Static grid lines ──
      ctx.strokeStyle = `rgba(255,255,255,${GRID_OPACITY})`;
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let x = GRID_SPACING; x < width; x += GRID_SPACING) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      // Horizontal lines
      for (let y = GRID_SPACING; y < height; y += GRID_SPACING) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // ── Small crosshairs at grid intersections ──
      ctx.strokeStyle = `rgba(255,255,255,${GRID_OPACITY * 1.5})`;
      const cross = 4;
      for (let x = GRID_SPACING; x < width; x += GRID_SPACING) {
        for (let y = GRID_SPACING; y < height; y += GRID_SPACING) {
          ctx.beginPath();
          ctx.moveTo(x - cross, y);
          ctx.lineTo(x + cross, y);
          ctx.moveTo(x, y - cross);
          ctx.lineTo(x, y + cross);
          ctx.stroke();
        }
      }

      // ── Sweeping scan line ──
      // Moves from top to bottom, then loops
      const scanY = (time * SCAN_SPEED * height) % (height + SCAN_HEIGHT * 2) - SCAN_HEIGHT;

      // Draw the scan line as a horizontal gradient band
      const gradient = ctx.createLinearGradient(0, scanY - SCAN_HEIGHT / 2, 0, scanY + SCAN_HEIGHT / 2);
      gradient.addColorStop(0, "rgba(255,255,255,0)");
      gradient.addColorStop(0.5, `rgba(255,255,255,${SCAN_OPACITY})`);
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, scanY - SCAN_HEIGHT / 2, width, SCAN_HEIGHT);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// Static fallback — just the grid, no animation
function drawStaticGrid(canvas: HTMLCanvasElement) {
  const dpr = window.devicePixelRatio || 1;
  const width = canvas.offsetWidth;
  const height = canvas.offsetHeight;
  canvas.width = width * dpr;
  canvas.height = height * dpr;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  ctx.strokeStyle = `rgba(255,255,255,${GRID_OPACITY})`;
  ctx.lineWidth = 0.5;

  for (let x = GRID_SPACING; x < width; x += GRID_SPACING) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = GRID_SPACING; y < height; y += GRID_SPACING) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }
}
