"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section - toujours visible */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* Skills Section avec apparition/disparition */}
      <ScrollAnimationSection>
        <SkillsSection />
      </ScrollAnimationSection>

      {/* Featured Projects avec apparition/disparition */}
      <ScrollAnimationSection delay={0.5}>
        <FeaturedProjects />
      </ScrollAnimationSection>

      <ScrollAnimationSection delay={0.2}>
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
}: {
  children: React.ReactNode;
  delay?: number;
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
        aria-label="Retour en haut"
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
