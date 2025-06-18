"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroSection() {
  // Variantes d'animation pour les éléments
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "anticipate",
        delay: 0.4,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.8,
      },
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="py-20 min-h-screen relative overflow-hidden">
      {/* Background décoratif animé */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl"
          initial={{ x: "-50%", y: "50%" }}
          animate={{
            x: ["-50%", "-55%", "-50%"],
            y: ["50%", "55%", "50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Partie texte */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={item}
            >
              Bonjour, je suis{" "}
              <motion.span
                className="text-primary"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(37, 99, 235, 0)",
                    "0 0 10px rgba(52, 211, 113, 0.671)",
                    "0 0 0px rgba(37, 99, 235, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                Emmanuel
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl mb-8 max-w-2xl mx-auto lg:mx-0"
              variants={item}
            >
              Développeur Full-Stack spécialisé en{" "}
              <motion.span
                className="font-semibold text-primary/60"
                whileHover={{ scale: 1.05 }}
              >
                React/Next.js et SpringBoot
              </motion.span>
              , créant des expériences numériques exceptionnelles.
            </motion.p>

            <motion.div
              className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start"
              variants={item}
            >
              <motion.button
                className="bg-primary/70 hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-medium 
                          shadow-lg hover:shadow-primary/20 relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(14, 150, 82, 0.692)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Voir mes projets</span>
                <motion.span
                  className="absolute inset-0 bg-white opacity-0"
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.button>

              <motion.button
                className="border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 
                          px-6 py-3 rounded-lg font-medium relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 4px 14px rgba(0, 0, 0, 0.1)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Contactez-moi</span>
                <motion.span
                  className="absolute inset-0 bg-gray-200 dark:bg-gray-700 opacity-0"
                  whileHover={{ opacity: 0.2 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Partie image */}
          <motion.div
            className="lg:w-1/2 flex justify-center"
            variants={imageVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="relative w-full max-w-md rounded-full aspect-square shadow-2xl"
              transition={{ duration: 0.4 }}
            >
              {/* Badge animé */}
              <motion.div
                className="absolute bottom-6 z-50 left-6 bg-white dark:bg-gray-800/50 px-4 py-2 rounded-full 
                           shadow-lg flex items-center gap-2"
                variants={badgeVariants}
                initial="hidden"
                animate="show"
                whileHover="pulse"
              >
                <motion.div
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.8, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span className="font-medium">Disponible</span>
              </motion.div>
              <motion.div
                className="absolute inset-0
                           opacity-30"
                whileHover={{ opacity: 0.5 }}
              />
              <motion.div
                className="relative w-full rounded-full max-w-md aspect-square overflow-hidden"
                whileHover={{
                  boxShadow: "0 25px 50px -12px rgba(11, 161, 44, 0.671)",
                  scale: 1.02,
                }}
                transition={{ duration: 0.4 }}
              >
                <Image
                  src="/picture.jpeg" // Remplacez par le chemin de votre image
                  alt="Photo de profil"
                  width={500}
                  height={500}
                  className="object-cover rounded-full w-full h-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement animé */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full 
                  border-2 border-gray-300 flex items-center justify-center cursor-pointer"
        animate={{
          y: [0, -10, 0],
          borderColor: ["#d1d5db", "#3BF679FF", "#D2DBD1FF"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.2, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <motion.svg
          className="w-4 h-4 text-primary"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{
            y: [0, 5, 0],
            opacity: [1, 0.7, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </motion.svg>
      </motion.div>
    </section>
  );
}
