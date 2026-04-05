"use client";

import { useEffect, useState } from "react";
import SoftAurora from "./SoftAurora";

export default function AuroraBackground() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none" style={{ willChange: "transform" }}>
      <SoftAurora
        speed={0.6}
        scale={1.5}
        brightness={1}
        color1="#f7f7f7"
        color2="#e100ff"
        noiseFrequency={2.5}
        noiseAmplitude={1}
        bandHeight={0.5}
        bandSpread={1}
        octaveDecay={0.1}
        layerOffset={0}
        colorSpeed={1}
        enableMouseInteraction={false}
      />
    </div>
  );
}
