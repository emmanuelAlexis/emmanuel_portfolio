"use client";
import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Parcours() {
  const timeline = [
    {
      year: "2021 - Présent",
      title: "Lead Developer",
      company: "Digital Innovations",
      location: "Paris, France",
      description:
        "Direction technique d'une équipe de 5 développeurs sur des projets SaaS. Architecture de solutions cloud-native et mise en place de processus CI/CD.",
      tags: ["React", "Node.js", "AWS", "Team Lead"],
    },
    {
      year: "2019 - 2021",
      title: "Développeur Full Stack",
      company: "Tech Solutions Inc.",
      location: "Lyon, France",
      description:
        "Conception d'applications web complexes pour clients internationaux. Développement de nouvelles fonctionnalités et optimisation des performances.",
      tags: ["Vue.js", "Laravel", "Docker"],
    },
    {
      year: "2018",
      title: "Master en Informatique",
      institution: "Université de Technologie",
      location: "Compiègne, France",
      description:
        "Spécialisation en architectures logicielles et intelligence artificielle. Major de promotion.",
      tags: ["Master 2", "IA", "Software Arch"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <div className="p-3 bg-primary/10 text-primary rounded-xl">
          <FiBriefcase className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Mon Parcours
        </h2>
      </div>

      <div className="relative">
        {/* Ligne verticale continue */}
        <div className="absolute left-8 md:left-1/2 top-4 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-transparent opacity-30" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Point central */}
              <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-gray-900 shadow-lg transform -translate-x-1/2 z-10 mt-1.5" />

              {/* Contenu (Carte) */}
              <div className="ml-20 md:ml-0 md:w-1/2 group">
                <div className={`bg-white dark:bg-gray-800/50 p-6 rounded-2xl border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden ${index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                  }`}>
                  {/* Effet de hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3 text-sm text-primary font-medium mb-3">
                      <span className="flex items-center gap-1.5 px-3 py-1 bg-primary/10 rounded-full">
                        <FiCalendar className="w-4 h-4" />
                        {item.year}
                      </span>
                      {item.location && (
                        <span className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400">
                          <FiMapPin className="w-4 h-4" />
                          {item.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h3>

                    <div className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">
                      {item.company || item.institution}
                    </div>

                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 rounded-lg"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Espace vide pour l'autre côté (desktop uniquement) */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
