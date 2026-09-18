"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import HeroSection from "@/components/HeroSection";
import Me from "@/components/sections/Me";
import { useLanguage } from "@/context/LanguageContext";

// Lazy load components below the fold for better performance
const FeaturedProjects = dynamic(() => import("@/components/FeaturedProjects"), {
  loading: () => (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse space-y-4">
          <div className="h-16 bg-gray-200 rounded-lg w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-1/2" />
          <div className="flex space-x-3">
            <div className="h-10 w-10 bg-gray-200 rounded-full" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-2/3" />
              <div className="h-2 bg-gray-200 rounded w-1/2" />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
});

const SkillsSection = dynamic(() => import("@/components/SkillsSection"), {
  loading: () => (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse">
          <div className="h-12 bg-gray-200 rounded-lg w-2/3" />
          <div className="h-8 bg-gray-200 rounded w-1/2 mt-2" />
        </div>
      ))}
    </div>
  ),
});

const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => (
    <div className="space-y-6">
      <div className="animate-pulse">
        <div className="h-12 bg-gray-200 rounded-lg w-1/2" />
        <div className="h-8 bg-gray-200 rounded w-1/3 mt-2" />
      </div>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="h-10 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2 mt-2" />
          </div>
        ))}
      </div>
    </div>
  ),
});

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
    <div className="site-scroll-background relative overflow-hidden">
      {/* Hero Section - toujours visible */}
      <section className="relative">
        <HeroSection />
      </section>

      {/* About Section */}
      <ScrollAnimationSection id="about">
        <section className="section-atmosphere section-deferred relative min-h-screen overflow-hidden py-20 lg:py-28">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
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
              {/* h2, not h1: the page must expose a single <h1> (the Hero's) so the
                  heading order stays sequentially descending. */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                {t.about.pageTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary">
                  {t.about.pageTitle === "About" ? "me" : "moi"}
                </span>
              </h2>
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
      <ScrollAnimationSection delay={0.2} id="projects" className="section-deferred scroll-mt-28">
        <FeaturedProjects />
      </ScrollAnimationSection>

      {/* Skills Section avec apparition/disparition */}
      <ScrollAnimationSection delay={0.2} id="skills" className="section-deferred">
        <SkillsSection />
      </ScrollAnimationSection>

      <ScrollAnimationSection delay={0.2} id="contact" className="section-deferred">
        <ContactSection />
      </ScrollAnimationSection>

      {/* Bouton retour en haut */}
      <ScrollToTopButton />
    </div>
  );
}

// Section reveal — one `whileInView` per section. The previous version combined
// useAnimation + useInView + useEffect, which started hidden and re-rendered the
// whole subtree on every intersection change (extra main-thread work right after
// hydration). `once: true` also lets each section stay visible once revealed.
function ScrollAnimationSection({
  children,
  delay = 0,
  id,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  id?: string;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}

// Bouton retour en haut.
// The previous implementation attached `useInView` to this *fixed* element, which
// always intersects the viewport, so the button was permanently stuck in its
// "hidden" variant (and it re-rendered on every intersection change). It now
// reacts to the scroll position through a single passive listener, and hides
// again near the bottom of the page where the Footer renders its own
// back-to-top button (so the two never overlap).
function ScrollToTopButton() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    let lastVisible = false;

    const updateVisibility = () => {
      frame = 0;
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const nextVisible = scrolled > window.innerHeight && scrolled < maxScroll - 320;

      if (nextVisible !== lastVisible) {
        lastVisible = nextVisible;
        setIsVisible(nextVisible);
      }
    };

    const handleViewportChange = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", handleViewportChange, { passive: true });
    window.addEventListener("resize", handleViewportChange, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleViewportChange);
      window.removeEventListener("resize", handleViewportChange);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-3 right-4 z-50 sm:bottom-8 sm:right-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <a
        href="#top"
        className="flex size-11 items-center justify-center rounded-full border border-[#a85f38]/70 bg-background/80 text-[#a85f38] shadow-lg shadow-[#a85f38]/15 backdrop-blur-md transition-all hover:bg-[#a85f38] hover:text-white"
        aria-label={t.common.scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          focusable="false"
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
