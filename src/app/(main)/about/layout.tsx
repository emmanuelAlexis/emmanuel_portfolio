"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiAward, FiCode, FiUser } from "react-icons/fi";
import AboutPage from "./page";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);

  const stats = [
    {
      value: "5+",
      label: "Années d'expérience",
      icon: <FiAward className="w-6 h-6" />,
    },
    {
      value: "30+",
      label: "Projets livrés",
      icon: <FiCode className="w-6 h-6" />,
    },
    {
      value: "100%",
      label: "Satisfaction client",
      icon: <FiUser className="w-6 h-6" />,
    },
  ];

  const sections = [
    { name: "Moi" },
    { name: "Parcours" },
    { name: "Technologies" },
  ];

  const [section, setSection] = useState<"Moi" | "Parcours" | "Tech">("Moi");

  return (
    <div className="relative overflow-hidden">
      {/* Indicateur de chargement */}
      {isLoading && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50">
          <div className="h-full bg-primary/70 animate-progress w-full origin-left" />
        </div>
      )}

      <section className="relative z-10 py-24 transition-colors duration-500">
        <div className="container flex flex-col gap-6 mx-auto px-4 sm:px-6 lg:px-8">
          {/* En-tête */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              À propos de <span className="text-primary">moi</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
              Passionné par la création de solutions digitales innovantes qui
              allient performance et élégance
            </p>
          </motion.div>

          {/* Section principale */}
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Photo de profil */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-2/5 flex flex-col justify-center lg:sticky lg:top-24"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/picture.jpeg"
                  alt="Emmanuel A.A - Développeur Full Stack"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  quality={100}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h2 className="text-2xl font-bold">Emmanuel A.A</h2>
                  <p className="text-primary">Développeur Full Stack</p>
                </div>
              </div>
              {/* Statistiques */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 mt-12 sm:grid-cols-3 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ y: -5 }}
                    className="bg-background p-8 rounded-2xl shadow-lg border text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 * index }}
                  >
                    <div className="text-primary mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
                    <p className="text-foreground/80 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contenu et navigation */}
            <div className="lg:w-3/5 flex flex-col gap-6 w-full">
              {/* Barre de navigation */}
              <motion.div
                className="flex gap-3 items-center bg-background/80 backdrop-blur-sm w-max p-2 rounded-lg border"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {sections.map((sec) => (
                  <button
                    key={sec.name}
                    onClick={() => setSection(sec.name as any)}
                    className={`w-[100px] rounded text-center p-1 items-center transition-colors ${
                      section === sec.name
                        ? "bg-primary text-white font-medium"
                        : "bg-primary/5 hover:bg-primary/10"
                    }`}
                  >
                    {sec.name}
                  </button>
                ))}
              </motion.div>

              {/* Contenu des enfants avec gestion du chargement */}
              <div className="overflow-hidden">
                {!isLoading ? (
                  <AboutPage section={section} />
                ) : (
                  <div className="flex justify-center items-center h-full">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
