"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import AboutPage from "./page";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative overflow-hidden min-h-screen bg-gray-50/50 dark:bg-gray-950/50">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50">
          <div className="h-full bg-primary/70 animate-progress w-full origin-left" />
        </div>
      )}

      <section className="relative z-10 py-20 lg:py-28 transition-colors duration-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              À propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">moi</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionné par la création de solutions digitales innovantes qui
              allient performance et élégance.
            </p>
          </motion.div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-12">
            {/* Contenu */}
            <div className="w-full">
              {!isLoading ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <AboutPage />
                </motion.div>
              ) : (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
