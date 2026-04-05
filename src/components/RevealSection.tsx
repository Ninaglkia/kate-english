"use client";

import { useRef, useState } from "react";

export default function RevealSection({
  title,
  subtitle,
  buttonText,
  buttonLink,
}: {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [active, setActive] = useState(false);

  function updatePos(clientX: number, clientY: number) {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: ((clientX - rect.left) / rect.width) * 100,
      y: ((clientY - rect.top) / rect.height) * 100,
    });
    setActive(true);
  }

  return (
    <div
      ref={sectionRef}
      className="relative min-h-[400px] sm:min-h-[600px] rounded-3xl mx-4 sm:mx-6 overflow-hidden cursor-none"
      style={{ backgroundColor: "#050508" }}
      onMouseMove={(e) => updatePos(e.clientX, e.clientY)}
      onTouchMove={(e) => {
        const t = e.touches[0];
        if (t) updatePos(t.clientX, t.clientY);
      }}
      onMouseLeave={() => setActive(false)}
      onTouchEnd={() => setActive(false)}
    >
      {/* Light glow that follows cursor */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: active ? 1 : 0,
          background: `radial-gradient(circle 250px at ${pos.x}% ${pos.y}%, rgba(177, 158, 239, 0.35) 0%, transparent 100%)`,
        }}
      />

      {/* Hidden text revealed by cursor light via CSS mask */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${active ? "300px" : "0px"} at ${pos.x}% ${pos.y}%, black 0%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${active ? "300px" : "0px"} at ${pos.x}% ${pos.y}%, black 0%, transparent 100%)`,
          transition: active ? "none" : "-webkit-mask-image 0.5s, mask-image 0.5s",
        }}
      >
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[1.1]">
          {title}
        </h2>
        <p className="mt-6 sm:mt-8 text-base sm:text-lg text-white/70">
          {subtitle}
        </p>
      </div>

      {/* Custom cursor dot */}
      {active && (
        <div
          className="absolute w-4 h-4 rounded-full bg-white/80 pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_20px_rgba(177,158,239,0.8)]"
          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
        />
      )}

      {/* Button always visible */}
      <div className="absolute bottom-12 sm:bottom-16 left-0 right-0 flex justify-center">
        <a
          href={buttonLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 bg-[#0088cc] text-white rounded-full text-base sm:text-lg font-semibold hover:bg-[#006daa] transition-all hover:shadow-lg hover:shadow-[#0088cc]/25"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
          </svg>
          {buttonText}
        </a>
      </div>

      {/* Hint text */}
      <p className="absolute top-6 left-0 right-0 text-center text-white/20 text-xs sm:text-sm">
        ✦ {typeof window !== "undefined" && "ontouchstart" in window ? "Touch" : "Move cursor"} to reveal ✦
      </p>
    </div>
  );
}
