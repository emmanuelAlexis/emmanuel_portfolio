"use client";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

export default function Parcours() {
  const timeline = [
    {
      year: "2018",
      title: "Master en Informatique",
      institution: "Université de Technologie",
      description:
        "Spécialisation en architectures logicielles et intelligence artificielle.",
    },
    {
      year: "2019",
      title: "Développeur Full Stack",
      company: "Tech Solutions Inc.",
      description:
        "Conception d'applications web complexes pour clients internationaux.",
    },
    {
      year: "2021",
      title: "Lead Developer",
      company: "Digital Innovations",
      description:
        "Direction technique d'une équipe de 5 développeurs sur des projets SaaS.",
    },
  ];

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 text-primary rounded-xl">
          <FiBriefcase className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Mon Parcours
        </h2>
      </div>
      {/* Timeline Parcours */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-700"
      >
        {" "}
        <div className="relative">
          {/* Ligne de timeline */}
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-16 pb-10 last:pb-0"
            >
              {/* Point sur la timeline */}
              <div className="absolute left-0 top-15 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-sm">
                {item.year}
              </div>

              <div className="bg-primary/5 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {item.institution || item.company}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
