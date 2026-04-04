"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function CountUp({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const startTime = performance.now();

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      if (current !== start) {
        start = current;
        setCount(current);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
}

interface PricingPlan {
  key: string;
  name: string;
  description: string;
  price: number;
  period: string;
  features: string[];
  cta: string;
}

export default function PricingCards({
  plans,
  telegramLink,
}: {
  plans: PricingPlan[];
  telegramLink: string;
}) {
  return (
    <div className="grid sm:grid-cols-3 gap-6 items-start">
      {plans.map((plan, index) => {
        const isPopular = plan.key === "premium";
        return (
          <motion.div
            key={plan.key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              delay: index * 0.15,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className={`relative rounded-[2rem] p-8 text-center transition-all ${
              isPopular
                ? "bg-gradient-to-b from-[#8b5cf6]/10 to-white border-2 border-[#8b5cf6]/30 glow scale-[1.02] shadow-xl"
                : "bg-white border border-black/5 shadow-sm hover:shadow-lg"
            }`}
          >
            {isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8b5cf6] text-white text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-[#8b5cf6]/30">
                Popular
              </div>
            )}

            <div className="relative z-10">
              <h3 className="text-lg font-bold text-[#1a1a2e]">{plan.name}</h3>
              <p className="mt-1 text-xs text-[#1a1a2e]/40">{plan.description}</p>

              <div className="mt-8 mb-8">
                <span className="text-6xl font-bold text-[#1a1a2e] tracking-tight">
                  $<CountUp target={plan.price} duration={1.8} />
                </span>
                <span className="text-sm ml-2 text-[#1a1a2e]/40">{plan.period}</span>
              </div>

              <div className="h-px bg-black/5 mb-8 mx-4" />

              <ul className="space-y-4 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#8b5cf6]/10 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-[#8b5cf6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-[#1a1a2e]/60">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={telegramLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block mt-8 w-full py-4 rounded-2xl font-semibold text-sm transition-all ${
                  isPopular
                    ? "bg-[#8b5cf6] text-white hover:bg-[#a78bfa] hover:shadow-lg hover:shadow-[#8b5cf6]/25"
                    : "bg-[#1a1a2e] text-white hover:bg-[#2d2d5e]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
