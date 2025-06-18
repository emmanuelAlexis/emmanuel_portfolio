"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiUser } from "react-icons/fi";

export default function Moi() {
  return (
    <div>
      <div className="flex items-center gap-4">
        <div className="p-3 text-primary rounded-xl">
          <FiUser className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-semibold">Présentation</h2>
      </div>
      {/* Section Présentation */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-3xl p-8 md:p-10 h-[400px] overflow-auto shadow-xl border border-gray-100 dark:border-gray-700"
      >
        <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          <p>
            Développeur Full Stack avec 5 ans d'expérience dans la conception
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
          <p>
            En dehors du code, je suis passionné par l'UX design, la
            photographie et les nouvelles tendances tech. Ces centres d'intérêt
            nourrissent ma créativité et enrichissent mes réalisations
            techniques.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
