"use client";
import { motion } from "framer-motion";
import { ComputerIcon } from "lucide-react";
import Image from "next/image";
import { FiAward, FiCode, FiUser, FiHeart, FiCoffee } from "react-icons/fi";
import { SiInternetcomputer } from "react-icons/si";

export default function Moi() {

  return (
    <div className="flex flex-col gap-10">
      {/* Section Présentation avec Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

        {/* Colonne Texte */}
        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary/10 text-primary rounded-xl">
                <FiUser className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Qui suis-je ?</h2>
            </div>

            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Développeur Full Stack avec <span className="font-semibold text-primary">3 ans d'expérience</span> dans la conception
                d'applications web performantes. Je combine expertise technique et
                sens du design pour créer des expériences utilisateur
                exceptionnelles.
              </p>
              <p>
                Mon approche est centrée sur la qualité du code, les bonnes
                pratiques et les architectures modernes. Je m'adapte rapidement aux
                nouvelles technologies tout en maintenant une base solide de
                fondamentaux.
              </p>
              <p className="flex items-center gap-2">
                <ComputerIcon className="text-green-500" />
                <span>
                  En dehors du web, je suis passionné par le desktop, et les nouvelles tendances tech.
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Colonne Image */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-3 transition-transform duration-500 blur-xl" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white dark:border-gray-800">
              <Image
                src="/picture.jpeg"
                alt="Emmanuel A.A"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <FiCoffee className="w-5 h-5" />
                  <span className="font-medium">Toujours prêt pour un café !</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
