"use client";

// Lightweight animated dot-grid background for the hero section.
// Uses pure CSS — no canvas, no heavy libraries.
// Dots pulse subtly at random intervals for a "living" feel.
export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base dot pattern — small dots in a regular grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated glow layer — larger, softer dots that pulse */}
      <div
        className="absolute inset-0 animate-grid-pulse opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(230,227,224,0.9) 1.5px, transparent 1.5px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "0 0",
        }}
      />

      {/* Second pulse layer, offset and slower for depth */}
      <div
        className="absolute inset-0 animate-grid-pulse-slow opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(201,168,124,0.6) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          backgroundPosition: "20px 20px",
        }}
      />

      {/* Radial gradient mask — dots fade out toward edges */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, var(--color-dark-950) 75%)",
        }}
      />
    </div>
  );
}
