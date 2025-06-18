"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTools,
} from "react-icons/fa";
import { FiCode, FiDatabase, FiTerminal } from "react-icons/fi";
import {
  SiCssdesignawards,
  SiDocker,
  SiExpress,
  SiFlutter,
  SiGit,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const TechPage = () => {
  const [cat, setCat] = useState("Front-end");

  const technologies = [
    {
      categorie: "Front-end",
      icon: <SiCssdesignawards className="w-6 h-6" />,
      items: [
        { name: "React", icon: <FaReact className="w-6 h-6" />, level: 90 },
        {
          name: "Next.js",
          icon: <SiNextdotjs className="w-6 h-6" />,
          level: 85,
        },
        {
          name: "TypeScript",
          icon: <SiTypescript className="w-6 h-6" />,
          level: 80,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-6 h-6" />,
          level: 85,
        },
        {
          name: "Flutter",
          icon: <SiFlutter className="w-6 h-6" />,
          level: 70,
        },
      ],
    },
    {
      categorie: "Back-end",
      icon: <FiTerminal className="w-6 h-6" />,
      items: [
        { name: "Node.js", icon: <FaNodeJs className="w-6 h-6" />, level: 90 },
        { name: "Laravel", icon: <FaLaravel className="w-6 h-6" />, level: 80 },
        { name: "Python", icon: <FaPython className="w-6 h-6" />, level: 75 },
        {
          name: "Express",
          icon: <SiExpress className="w-6 h-6" />,
          level: 80,
        },
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="w-6 h-6" />,
          level: 70,
        },
      ],
    },
    {
      categorie: "Outils & DevOps",
      icon: <FaTools className="w-6 h-6" />,
      items: [
        { name: "Docker", icon: <SiDocker className="w-6 h-6" />, level: 75 },
        { name: "Git", icon: <SiGit className="w-6 h-6" />, level: 85 },
      ],
    },
    {
      categorie: "Bases de données",
      icon: <FiDatabase className="w-6 h-6" />,
      items: [
        { name: "MySql", icon: <SiMysql className="w-6 h-6" />, level: 80 },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql className="w-6 h-6" />,
          level: 75,
        },
      ],
    },
  ];
  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 rounded-xl text-primary">
          <FiCode className="w-6 h-6" />
        </div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
          Mes Technologies
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="rounded-3xl flex flex-col gap-5 p-8 md:p-10 shadow-xl border border-gray-100 dark:border-gray-700"
      >
        <motion.div
          className="flex gap-3 items-start flex-wrap max-w-[100%] bg-background/80 backdrop-blur-sm w-max p-2 rounded-lg border"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {technologies.map((tech) => (
            <button
              key={tech.categorie}
              onClick={() => setCat(tech.categorie)}
              className={`px-4 py-2 flex gap-2 items-center rounded-lg transition-colors ${
                cat === tech.categorie
                  ? "bg-primary text-white font-medium"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
            >
              {tech.icon} {tech.categorie}
            </button>
          ))}
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {technologies.map(
            (tech, index) =>
              tech.categorie === cat && (
                <motion.div
                  key={tech.categorie}
                  className="col-span-2 sm:col-span-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-4 flex gap-3 items-center text-gray-900 dark:text-white">
                    {tech.icon}
                    {tech.categorie}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tech.items.map((item, idx) => (
                      <motion.div
                        key={item.name}
                        className="flex items-center gap-3 p-4 bg-primary/5 rounded-lg"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05 }}
                        whileHover={{ y: -5 }}
                      >
                        <div className="text-foreground">{item.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white">
                            {item.name}
                          </h4>
                          <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-1.5 mt-2">
                            <div
                              className="bg-primary h-1.5 rounded-full"
                              style={{ width: `${item.level}%` }}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default TechPage;
