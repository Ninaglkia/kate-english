"use client";

export default function Text3D({ text }: { text: string }) {
  const depth = 5;
  return (
    <div className="relative w-full text-center select-none" style={{ perspective: "800px" }}>
      <div style={{ transform: "rotateX(2deg)", transformStyle: "preserve-3d", position: "relative" }}>
        {Array.from({ length: depth }, (_, i) => (
          <span
            key={i}
            aria-hidden={i > 0}
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight block leading-[1.1]"
            style={{
              color: "#050508",
              mixBlendMode: "difference",
              position: i === 0 ? "relative" : "absolute",
              inset: i === 0 ? undefined : 0,
              transform: `translateZ(${-i * 3}px)`,
              textShadow: i === 0 ? "none" : undefined,
              pointerEvents: "none",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
