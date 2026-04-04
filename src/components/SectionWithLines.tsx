"use client";

import dynamic from "next/dynamic";

const FloatingLines = dynamic(() => import("@/components/FloatingLines"), {
  ssr: false,
});

export default function SectionWithLines({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 z-0 opacity-30">
        <FloatingLines
          linesGradient={["#E945F5", "#2F4BC0", "#E945F5"]}
          animationSpeed={1}
          interactive
          bendRadius={5}
          bendStrength={-0.5}
          mouseDamping={0.05}
          parallax
          parallaxStrength={0.2}
          mixBlendMode="normal"
        />
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}
