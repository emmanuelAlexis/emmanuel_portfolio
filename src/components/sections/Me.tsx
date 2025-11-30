"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Me() {
  const { t } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Colonne Texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white relative inline-block">
              {t.about.title}
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
            </h2>

            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                <span>☕</span>
                <span>{t.about.coffee}</span>
              </div>
            </div>
          </motion.div>

          {/* Colonne Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center max-sm:hidden"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6 transform transition-transform group-hover:rotate-12"></div>
              <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 rounded-2xl -rotate-6 transform transition-transform group-hover:-rotate-12"></div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src="/picture.png" // Assurez-vous d'avoir votre photo ici
                  alt="Emmanuel A.A"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
