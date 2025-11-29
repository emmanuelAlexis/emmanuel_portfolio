"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaReact,
  FaTools,
  FaJava
} from "react-icons/fa";
import { FiCode, FiDatabase, FiTerminal, FiLayers, FiCpu } from "react-icons/fi";
import {
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
  SiFigma,
  SiVite,
  SiGithubactions,
  SiNestjs,
  SiRedux,
  SiJest
} from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";

const TechPage = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(t.technologies.categories.frontend);
  
  // Mettre à jour la catégorie active quand la langue change
  useEffect(() => {
    setActiveCategory(t.technologies.categories.frontend);
  }, [t]);

  const technologies = [
    {
      category: t.technologies.categories.frontend,
      icon: <FiLayers className="w-5 h-5" />,
      description: t.technologies.descriptions.frontend,
      items: [
        {
          name: t.technologies.items.react.name,
          icon: <FaReact className="w-8 h-8 text-blue-400" />,
          desc: t.technologies.items.react.desc
        },
        {
          name: t.technologies.items.nextjs.name,
          icon: <SiNextdotjs className="w-8 h-8 text-black dark:text-white" />,
          desc: t.technologies.items.nextjs.desc
        },
        {
          name: t.technologies.items.tailwind.name,
          icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" />,
          desc: t.technologies.items.tailwind.desc
        },
        {
          name: t.technologies.items.flutter.name,
          icon: <SiFlutter className="w-8 h-8 text-blue-400" />,
          desc: t.technologies.items.flutter.desc
        },
      ],
    },
    {
      category: t.technologies.categories.backend,
      icon: <FiTerminal className="w-5 h-5" />,
      description: t.technologies.descriptions.backend,
      items: [
        {
          name: t.technologies.items.nodejs.name,
          icon: <FaNodeJs className="w-8 h-8 text-green-500" />,
          desc: t.technologies.items.nodejs.desc
        },
        {
          name: t.technologies.items.nestjs.name,
          icon: <SiNestjs className="w-8 h-8 text-red-600" />,
          desc: t.technologies.items.nestjs.desc
        },
        {
          name: t.technologies.items.springboot.name,
          icon: <SiSpringboot className="w-8 h-8 text-green-600" />,
          desc: t.technologies.items.springboot.desc
        },
        {
          name: t.technologies.items.laravel.name,
          icon: <FaLaravel className="w-8 h-8 text-red-500" />,
          desc: t.technologies.items.laravel.desc
        },
      ],
    },
    {
      category: t.technologies.categories.database,
      icon: <FiDatabase className="w-5 h-5" />,
      description: t.technologies.descriptions.database,
      items: [
        {
          name: t.technologies.items.postgresql.name,
          icon: <SiPostgresql className="w-8 h-8 text-blue-400" />,
          desc: t.technologies.items.postgresql.desc
        },
        {
          name: t.technologies.items.mysql.name,
          icon: <SiMysql className="w-8 h-8 text-orange-500" />,
          desc: t.technologies.items.mysql.desc
        },
      ],
    },
    {
      category: t.technologies.categories.devops,
      icon: <FaTools className="w-5 h-5" />,
      description: t.technologies.descriptions.devops,
      items: [
        {
          name: t.technologies.items.docker.name,
          icon: <SiDocker className="w-8 h-8 text-blue-500" />,
          desc: t.technologies.items.docker.desc
        },
        {
          name: t.technologies.items.git.name,
          icon: <SiGit className="w-8 h-8 text-orange-600" />,
          desc: t.technologies.items.git.desc
        },
        {
          name: t.technologies.items.figma.name,
          icon: <SiFigma className="w-8 h-8 text-purple-500" />,
          desc: t.technologies.items.figma.desc
        },
      ],
    },
  ];

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
                        {item.icon}
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
