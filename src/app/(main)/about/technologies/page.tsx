"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getSkills } from "@/lib/data";

const TechPage = () => {
  const { t, language } = useLanguage();
  const technologies = getSkills(language);
  const [activeCategory, setActiveCategory] = useState(technologies[0].category);

  // Mettre à jour la catégorie active quand la langue change
  useEffect(() => {
    // On reset sur la première catégorie quand la langue change pour éviter des mismatchs
    const currentTechs = getSkills(language);
    setActiveCategory(currentTechs[0].category);
  }, [language]);

  return (
    <div className="flex flex-col hidden lg:flex gap-8">
      <div className="flex flex-col xl:flex-row gap-8">
        {/* Sidebar Navigation */}
        <div className="xl:w-1/4">
          <div className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-100 dark:border-gray-700/50 sticky top-24">
            {technologies.map((tech) => (
              <button
                key={tech.category}
                onClick={() => setActiveCategory(tech.category)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-left mb-1 last:mb-0 ${activeCategory === tech.category
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                  }`}
              >
                <span className={activeCategory === tech.category ? "text-white" : "text-gray-400"}>
                  {tech.icon}
                </span>
                <span className="font-medium">{tech.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:w-3/4">
          {technologies.map((tech) => (
            activeCategory === tech.category && (
              <motion.div
                key={tech.category}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {tech.category}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {tech.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {tech.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="group bg-white dark:bg-gray-800/50 p-4 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 flex flex-wrap items-start gap-4"
                    >
                      <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <div className={`text-2xl ${item.color || "text-gray-600"}`}>
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechPage;
