"use client";

export default function Text3D({ text }: { text: string }) {
  const depth = 6;
  return (
    <div className="relative w-full text-center" style={{ perspective: "600px" }}>
      <div style={{ transform: "rotateX(3deg)", transformStyle: "preserve-3d" }}>
        {Array.from({ length: depth }, (_, i) => (
          <span
            key={i}
            aria-hidden={i > 0}
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight select-none block leading-[1.1]"
            style={{
              color: "#050508",
              mixBlendMode: "difference",
              transform: `translateZ(${-i * 2}px)`,
              position: i === 0 ? "relative" : "absolute",
              inset: i === 0 ? undefined : 0,
              opacity: 1 - i * 0.12,
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
