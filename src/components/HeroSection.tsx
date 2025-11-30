"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import TechPage from "@/app/(main)/about/technologies/page";
import { Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { socialLinks } from "./Footer";

export default function HeroSection() {
  const { t } = useLanguage();

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
    <section className="pt-20 min-h-screen relative overflow-hidden">
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
            className="lg:w-1/2 flex flex-col gap-10 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <div className="flex flex-col gap-5">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6"
                variants={item}
              >
                {t.hero.greeting}{" "}
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
                {t.hero.role}{" "}
                <motion.span
                  className="font-semibold text-primary/90 text-3xl"
                  whileHover={{ scale: 1.05 }}
                >
                  React/Next.js et SpringBoot
                </motion.span>
                , {t.hero.description}
              </motion.p>

              <motion.div
                className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center lg:justify-start"
                variants={item}
              >
                <motion.a
                  href="#projects"
                  className="bg-primary/80 hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium 
                          shadow-lg hover:shadow-primary/20 relative overflow-hidden text-center"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(7, 126, 66, 0.76)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
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
              </motion.div>
            </div>
            <TechPage />
          </motion.div>

          {/* Partie image */}
          <motion.div
            className="lg:w-1/2 flex flex-col items-center gap-10 justify-center self-start max-lg:self-center p-10"
            variants={imageVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div
              className="relative w-full max-w-md rounded-full  aspect-square shadow-2xl"
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
                <span className="font-medium">{t.hero.available}</span>
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
                  src="/picture.png"
                  alt={t.common.profilePhoto}
                  width={500}
                  height={500}
                  className="object-cover rounded-full w-full h-full"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <h3 className="text-lg font-semibold mb-6 text-gray-900 dark:text-white">
                {t.footer.socials}
              </h3>
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
            </motion.div>
            <motion.a
              href="#contact"
              className="bg-primary/80 flex gap-3 hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium 
                          shadow-lg hover:shadow-primary/20 relative overflow-hidden text-center"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(7, 126, 66, 0.76)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Phone className="w-4 h-4 ml-2" />
              <span className="relative z-10">{t.hero.contactMe}</span>
              <motion.span
                className="absolute inset-0 bg-white opacity-0"
                whileHover={{ opacity: 0.1 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de défilement animé */}
      <motion.div
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full 
                  border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center cursor-pointer z-20
                  hidden sm:flex"
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
          className="w-4 h-4 md:w-5 md:h-5 text-primary"
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
