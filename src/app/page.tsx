import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import {
  AboutCards,
  MethodCards,
  AnimatedSection,
} from "@/components/AnimatedCards";
import PricingCards from "@/components/PricingCards";
import GhostCursorLazy from "@/components/GhostCursorLazy";
import Text3D from "@/components/Text3D";

const TELEGRAM_LINK = "https://t.me/kate_english";

export default async function Home() {
  const t = await getTranslations();
  const locale = await getLocale();

  const aboutItems = [
    { title: t("about.experience"), description: t("about.experienceDesc") },
    { title: t("about.personalized"), description: t("about.personalizedDesc") },
    { title: t("about.flexible"), description: t("about.flexibleDesc") },
  ];

  const methodItems = [
    { title: t("method.conversation"), description: t("method.conversationDesc") },
    { title: t("method.grammar"), description: t("method.grammarDesc") },
    { title: t("method.exams"), description: t("method.examsDesc") },
  ];

  return (
    <main className="flex-1">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf8f5]/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight text-[#1a1a2e]">
            Kate<span className="text-[#8b5cf6]">.</span>English
          </span>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-6 text-sm text-[#1a1a2e]/50">
              <a href="#about" className="hover:text-[#1a1a2e] transition-colors">
                {t("nav.about")}
              </a>
              <a href="#method" className="hover:text-[#1a1a2e] transition-colors">
                {t("nav.method")}
              </a>
              <a href="#pricing" className="hover:text-[#1a1a2e] transition-colors">
                {t("nav.pricing")}
              </a>
            </div>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-[400px] h-[400px] rounded-full bg-pink-500/5 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#8b5cf6]/20 bg-[#8b5cf6]/5 text-[#8b5cf6] text-xs font-medium mb-6 tracking-wide uppercase">
              Online English Lessons
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              <span className="text-gradient">{t("hero.title")}</span>
            </h1>
            <p className="mt-6 text-lg text-[#1a1a2e]/50 max-w-lg mx-auto md:mx-0 leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-10 md:justify-start justify-center">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#8b5cf6] text-white rounded-full text-base font-semibold hover:bg-[#a78bfa] transition-all hover:shadow-lg hover:shadow-[#8b5cf6]/25"
              >
                {t("hero.cta")}
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 rounded-full text-base font-medium text-[#1a1a2e]/60 border border-black/10 hover:border-black/20 hover:text-[#1a1a2e] transition-all"
              >
                {t("nav.pricing")} &darr;
              </a>
            </div>
          </div>
          <div className="flex-shrink-0 relative">
            <div className="absolute inset-0 rounded-3xl bg-[#8b5cf6]/10 blur-3xl scale-90" />
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-3xl overflow-hidden border border-black/5 shadow-2xl">
              <Image
                src="/images/kate.jpg"
                alt="Kate — English Tutor"
                width={400}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About + Method + Pricing */}
      <>
        {/* About */}
        <section id="about" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="text-[#8b5cf6] text-sm font-medium uppercase tracking-widest mb-3">
                {t("nav.about")}
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1a1a2e]">
                {t("about.title")}
              </h2>
              <p className="mt-6 text-lg text-[#1a1a2e]/50 max-w-3xl mx-auto leading-relaxed">
                {t("about.description")}
              </p>
            </AnimatedSection>
            <AboutCards items={aboutItems} />
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
        </div>

        {/* Method */}
        <section id="method" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="text-[#8b5cf6] text-sm font-medium uppercase tracking-widest mb-3">
                {t("nav.method")}
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1a1a2e]">
                {t("method.title")}
              </h2>
            </AnimatedSection>
            <MethodCards items={methodItems} />
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-black/5 to-transparent" />
        </div>

        {/* Pricing */}
        <section id="pricing" className="py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <AnimatedSection className="text-center mb-16">
              <p className="text-[#8b5cf6] text-sm font-medium uppercase tracking-widest mb-3">
                {t("nav.pricing")}
              </p>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#1a1a2e]">
                {t("pricing.title")}
              </h2>
              <p className="mt-4 text-[#1a1a2e]/40">{t("pricing.subtitle")}</p>
            </AnimatedSection>
            <PricingCards
              plans={[
                {
                  key: "basic",
                  name: t("pricing.basic.name"),
                  description: t("pricing.basic.description"),
                  price: 15,
                  period: t("pricing.basic.period"),
                  features: t.raw("pricing.basic.features") as string[],
                  cta: t("hero.cta"),
                },
                {
                  key: "intermediate",
                  name: t("pricing.intermediate.name"),
                  description: t("pricing.intermediate.description"),
                  price: 25,
                  period: t("pricing.intermediate.period"),
                  features: t.raw("pricing.intermediate.features") as string[],
                  cta: t("hero.cta"),
                },
                {
                  key: "premium",
                  name: t("pricing.premium.name"),
                  description: t("pricing.premium.description"),
                  price: 40,
                  period: t("pricing.premium.period"),
                  features: t.raw("pricing.premium.features") as string[],
                  cta: t("hero.cta"),
                },
              ]}
              telegramLink={TELEGRAM_LINK}
            />
          </div>
        </section>
      </>

      {/* CTA - Ghost reveal effect */}
      <section className="py-24 px-4 sm:px-6 relative min-h-[500px] bg-[#0a0a0f] rounded-3xl mx-4 sm:mx-6 overflow-hidden">
        <GhostCursorLazy
          color="#B19EEF"
          brightness={3.5}
          edgeIntensity={0}
          trailLength={50}
          inertia={0.5}
          grainIntensity={0.05}
          bloomStrength={0.3}
          bloomRadius={1.5}
          bloomThreshold={0.02}
          fadeDelayMs={1000}
          fadeDurationMs={1500}
          mixBlendMode="screen"
        />
        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center justify-center min-h-[400px]">
          <Text3D text={t("cta.title")} className="w-full" />
          <p
            className="mt-6 text-lg select-none"
            style={{ color: "#0a0a0f", mixBlendMode: "difference" }}
          >
            {t("cta.subtitle")}
          </p>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-10 px-10 py-4 bg-[#0088cc] text-white rounded-full text-lg font-semibold hover:bg-[#006daa] transition-all hover:shadow-lg hover:shadow-[#0088cc]/25 relative z-20"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
            {t("cta.button")}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#1a1a2e]/30">
          <p>
            &copy; {new Date().getFullYear()} Kate.English. {t("footer.rights")}
          </p>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1a1a2e]/60 transition-colors"
          >
            {t("footer.telegram")}
          </a>
        </div>
      </footer>
    </main>
  );
}
