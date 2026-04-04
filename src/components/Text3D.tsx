"use client";

import { useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Text3D({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [8, -8]);
  const rotateY = useTransform(springX, [0, 1], [-8, 8]);

  const layers = useMemo(() => {
    const count = 8;
    return Array.from({ length: count }, (_, i) => ({
      z: -(i * 3),
      opacity: 1 - i * 0.08,
      color: `rgba(10, 10, 15, ${1 - i * 0.1})`,
    }));
  }, []);

  function handlePointerMove(e: React.PointerEvent) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  }

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      className={`${className}`}
      style={{ perspective: "600px" }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        {layers.map((layer, i) => (
          <span
            key={i}
            aria-hidden={i > 0}
            className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight select-none block"
            style={{
              color: layer.color,
              mixBlendMode: "difference",
              transform: `translateZ(${layer.z}px)`,
              position: i === 0 ? "relative" : "absolute",
              inset: i === 0 ? undefined : 0,
              opacity: layer.opacity,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
