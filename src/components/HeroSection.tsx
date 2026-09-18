"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TechnologiesShowcase from "@/components/TechnologiesShowcase";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "./Footer";

export default function HeroSection() {
  const { t } = useLanguage();

  // Entrance animations are CSS-driven (see globals.css) instead of framer-motion
  // `initial="hidden"`. They therefore start at the first paint and never wait
  // for hydration, which is what used to push LCP past 4s.
  return (
    <section className="tech-background pt-32 md:pt-36 pb-16 min-h-[100svh] relative overflow-hidden text-foreground">
      {/* Ambient background layers stay decorative and never intercept interaction. */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="tech-orb tech-orb-copper -left-24 top-16 size-80" />
        <div className="tech-orb tech-orb-teal -right-24 bottom-12 size-96" />
        <div className="animate-drift absolute bottom-0 left-0 size-72 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="absolute inset-x-0 top-10 z-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-foreground/10 to-transparent dark:via-white/10" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Partie texte */}
          <div className="lg:w-1/2 flex flex-col gap-10 text-center lg:text-left">
            <div className="flex flex-col gap-5">
              {/* Intentionally NOT animated: this <h1> is the LCP element and must
                  be painted with the first frame, not after hydration. */}
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.hero.greeting}{" "}
                <span className="text-primary">Emmanuel</span>
              </h1>

              <p className="animate-rise animation-delay-100 text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
                {t.hero.role}{" "}
                <span className="font-semibold text-primary/90 text-3xl inline-block transition-transform duration-200 hover:scale-105">
                  React/Next.js et SpringBoot
                </span>
                , {t.hero.description}
              </p>

              <div className="animate-rise animation-delay-200 space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start">
                <motion.a
                  href="#projects"
                  className="bg-primary/80 hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium
                          shadow-lg hover:shadow-primary/20 relative overflow-hidden text-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(152, 89, 55, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{t.hero.viewProjects}</span>
                  <motion.span
                    className="absolute inset-0 bg-white opacity-0"
                    whileHover={{ opacity: 0.1 }}
                  />
                </motion.a>

                <motion.a
                  href="/cv.pdf"
                  download="Emmanuel_CV.pdf"
                  className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800
                          px-6 py-3 rounded-lg font-medium relative overflow-hidden text-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{t.common.downloadCV}</span>
                  <motion.span
                    className="absolute inset-0 bg-gray-200 dark:bg-gray-700 opacity-0"
                    whileHover={{ opacity: 0.2 }}
                  />
                </motion.a>
              </div>
            </div>
            <TechnologiesShowcase />
          </div>

          {/* Partie image */}
          <div className="animate-scale-in lg:w-1/2 flex flex-col items-center gap-10 justify-center self-start max-lg:self-center p-10">
            <div className="relative w-full max-w-md rounded-full aspect-square">
              {/* Badge animé */}
              <div
                className="animate-rise animation-delay-300 absolute bottom-6 z-50 left-6 bg-white dark:bg-gray-800/50 px-4 py-2 rounded-full
                           shadow-lg flex items-center gap-2 transition-transform duration-300 hover:scale-105"
              >
                <div className="animate-pulse w-3 h-3 bg-primary/20 rounded-full" />
                <span className="font-medium">{t.hero.available}</span>
              </div>

              <div className="absolute inset-0 opacity-30 transition-opacity duration-300 hover:opacity-50" />
              <div className="relative w-full rounded-full max-w-md aspect-square overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_25px_50px_-12px_rgba(152,89,55,0.25)]">
                <Image
                  src="/picture.webp"
                  alt={t.common.profilePhoto}
                  width={440}
                  height={440}
                  sizes="(max-width: 1024px) 90vw, 448px"
                  className="object-contain rounded-full w-full h-full"
                  priority
                  fetchPriority="high"
                />
              </div>
            </div>
            <div className="animate-rise animation-delay-400 flex flex-col items-center gap-5">
              {/* h2 (not h3): the hero <h1> must not be followed by a skipped level. */}
              <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                {t.footer.socials}
              </h2>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all shadow-sm hover:shadow-lg hover:shadow-primary/30"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            <motion.a
              href="#contact"
              className="bg-primary/80 flex gap-3 hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-primary/20 relative overflow-hidden text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(152, 89, 55, 0.3)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4 ml-2" />
              <span className="relative z-10">{t.hero.contactMe}</span>
              <motion.span
                className="absolute inset-0 bg-white opacity-0"
                whileHover={{ opacity: 0.1 }}
              />
            </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateur de défilement (CSS only, transform-driven) */}
      <button
        type="button"
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full
                  border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer z-20
                  transition-transform duration-300 hover:scale-110 hover:border-primary/50 hover:bg-primary/10
                  hidden sm:flex"
        aria-label="Scroll down"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <svg
          className="animate-chevron w-4 h-4 md:w-5 md:h-5 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </button>
    </section>
  );
}
