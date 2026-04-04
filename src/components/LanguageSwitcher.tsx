"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher({ locale }: { locale: string }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function switchLocale(newLocale: string) {
    document.cookie = `locale=${newLocale};path=/;max-age=31536000`;
    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <div className="flex items-center gap-0.5 p-1 rounded-full bg-black/5 border border-black/5">
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
          locale === "en"
            ? "bg-[#8b5cf6] text-white shadow-md"
            : "text-[#1a1a2e]/50 hover:text-[#1a1a2e]/80"
        }`}
        disabled={isPending}
      >
        EN
      </button>
      <button
        onClick={() => switchLocale("ru")}
        className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
          locale === "ru"
            ? "bg-[#8b5cf6] text-white shadow-md"
            : "text-[#1a1a2e]/50 hover:text-[#1a1a2e]/80"
        }`}
        disabled={isPending}
      >
        RU
      </button>
    </div>
  );
}
