"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Me from "@/components/sections/Me";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    // Handle hash scrolling on mount
    const hash = window.location.hash;
    if (hash) {
      // Small timeout to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section - toujours visible */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* About Section */}
      <ScrollAnimationSection id="about">
        <section className="relative overflow-hidden min-h-screen bg-gray-50/50 dark:bg-gray-950/50 py-20 lg:py-28">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl relative z-10">
            {/* En-tête */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                {t.about.pageTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">
                  {t.about.pageTitle === "About" ? "me" : "moi"}
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {t.about.pageSubtitle}
              </p>
            </motion.div>

            {/* Contenu About */}
            <Me />
          </div>
        </section>
      </ScrollAnimationSection>

      {/* Featured Projects avec apparition/disparition */}
      <ScrollAnimationSection delay={0.2} id="projects">
        <FeaturedProjects />
      </ScrollAnimationSection>

      {/* Skills Section avec apparition/disparition */}
      <ScrollAnimationSection delay={0.2} id="skills">
        <SkillsSection />
      </ScrollAnimationSection>

      <ScrollAnimationSection delay={0.2} id="contact">
        <ContactSection />
      </ScrollAnimationSection>

      {/* Bouton retour en haut */}
      <ScrollToTopButton />
    </main>
  );
}

// Composant réutilisable pour les sections animées
function ScrollAnimationSection({
  children,
  delay = 0,
  id,
}: {
  children: React.ReactNode;
  delay?: number;
  id?: string;
}) {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px -100px 0px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
            delay,
          },
        },
        hidden: {
          opacity: 0,
          y: 50,
          transition: {
            duration: 0.3,
            ease: "easeIn",
          },
        },
      }}
    >
      {children}
    </motion.section>
  );
}

// Bouton retour en haut amélioré
function ScrollToTopButton() {
  const { t } = useLanguage();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="fixed bottom-8 right-8 z-50"
      initial="hidden"
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 },
        },
        hidden: {
          opacity: 0,
          y: 20,
          transition: { duration: 0.3 },
        },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href="#top"
        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-colors"
        aria-label={t.common.scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </a>
    </motion.div>
  );
}
