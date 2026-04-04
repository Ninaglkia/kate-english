import { type ReactNode } from "react";

const icons = {
  certified: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle cx="24" cy="20" r="14" stroke="url(#grad1)" strokeWidth="2" fill="none" />
      <path d="M16 20l5 5 11-11" stroke="url(#grad1)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 34l6 8 6-8" stroke="url(#grad1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="rgba(139,92,246,0.1)" />
      <defs><linearGradient id="grad1" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#ec4899" /></linearGradient></defs>
    </svg>
  ),
  personalized: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <circle cx="24" cy="16" r="8" stroke="url(#grad2)" strokeWidth="2" />
      <path d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" />
      <path d="M30 12l6-6m0 0h-5m5 0v5" stroke="url(#grad2)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs><linearGradient id="grad2" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient></defs>
    </svg>
  ),
  flexible: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="6" y="10" width="36" height="28" rx="4" stroke="url(#grad3)" strokeWidth="2" />
      <path d="M6 18h36" stroke="url(#grad3)" strokeWidth="2" />
      <circle cx="18" cy="28" r="3" fill="url(#grad3)" opacity="0.3" />
      <circle cx="30" cy="28" r="3" fill="url(#grad3)" />
      <path d="M14 6v6m20-6v6" stroke="url(#grad3)" strokeWidth="2" strokeLinecap="round" />
      <defs><linearGradient id="grad3" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#f59e0b" /></linearGradient></defs>
    </svg>
  ),
};

const methodIcons = {
  conversation: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="4" y="8" width="26" height="18" rx="4" stroke="url(#gradM1)" strokeWidth="2" />
      <rect x="18" y="22" width="26" height="18" rx="4" stroke="url(#gradM1)" strokeWidth="2" fill="rgba(139,92,246,0.05)" />
      <circle cx="13" cy="17" r="1.5" fill="url(#gradM1)" /><circle cx="17" cy="17" r="1.5" fill="url(#gradM1)" /><circle cx="21" cy="17" r="1.5" fill="url(#gradM1)" />
      <path d="M26 31h8" stroke="url(#gradM1)" strokeWidth="2" strokeLinecap="round" />
      <defs><linearGradient id="gradM1" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#ec4899" /></linearGradient></defs>
    </svg>
  ),
  grammar: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <path d="M8 8h32v32a4 4 0 01-4 4H12a4 4 0 01-4-4V8z" stroke="url(#gradM2)" strokeWidth="2" fill="rgba(139,92,246,0.05)" />
      <path d="M8 8h32" stroke="url(#gradM2)" strokeWidth="3" strokeLinecap="round" />
      <path d="M14 18h20" stroke="url(#gradM2)" strokeWidth="2" strokeLinecap="round" />
      <path d="M14 24h14" stroke="url(#gradM2)" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
      <path d="M14 30h18" stroke="url(#gradM2)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
      <defs><linearGradient id="gradM2" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#06b6d4" /></linearGradient></defs>
    </svg>
  ),
  exams: (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
      <rect x="10" y="4" width="28" height="36" rx="3" stroke="url(#gradM3)" strokeWidth="2" />
      <path d="M18 16l4 4 8-8" stroke="url(#gradM3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 28h12" stroke="url(#gradM3)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <circle cx="36" cy="36" r="8" fill="#faf8f5" stroke="url(#gradM3)" strokeWidth="2" />
      <path d="M34 36l2 2 4-4" stroke="url(#gradM3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <defs><linearGradient id="gradM3" x1="0" y1="0" x2="48" y2="48"><stop offset="0%" stopColor="#8b5cf6" /><stop offset="100%" stopColor="#f59e0b" /></linearGradient></defs>
    </svg>
  ),
};

interface CardItem { title: string; description: string; }

export function AboutCards({ items }: { items: CardItem[] }) {
  const iconKeys = ["certified", "personalized", "flexible"] as const;
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl p-8 text-center group cursor-default border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            {icons[iconKeys[i]]}
          </div>
          <h3 className="text-base font-semibold text-[#1a1a2e] mb-2">{item.title}</h3>
          <p className="text-sm text-[#1a1a2e]/50 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function MethodCards({ items }: { items: CardItem[] }) {
  const iconKeys = ["conversation", "grammar", "exams"] as const;
  return (
    <div className="grid sm:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl p-8 text-center group cursor-default border border-black/5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
          <div className="text-xs text-[#8b5cf6]/50 font-mono mb-4">0{i + 1}</div>
          <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
            {methodIcons[iconKeys[i]]}
          </div>
          <h3 className="text-base font-semibold text-[#1a1a2e] mb-2">{item.title}</h3>
          <p className="text-sm text-[#1a1a2e]/50 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function AnimatedSection({ children, className = "" }: { children: ReactNode; className?: string; }) {
  return <div className={className}>{children}</div>;
}
