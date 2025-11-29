"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiFigma,
  SiRedux,
  SiJest,
  SiDotnet,
  SiSqlite,
  SiPrisma,
  SiSocketdotio,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";

const SkillCard = ({
  name,
  icon,
  color,
}: {
  name: string;
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative group w-[130px] md:w-[150px] flex flex-col items-center justify-center p-6 bg-white/90 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100/80 dark:border-gray-700/80 hover:border-primary/30 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-primary/10"
    >
      {/* Effet de fond gradient au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Bordure animée */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div
        className={`text-4xl md:text-5xl mb-4 ${color} group-hover:scale-110 transition-transform duration-500 drop-shadow-sm`}
      >
        {icon}
      </div>

      <span className="font-semibold text-gray-800 dark:text-gray-100 text-center tracking-tight text-sm lg:text-base">
        {name}
      </span>

      {/* Indicateur de progression animé */}
      <motion.div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-primary/70 rounded-t-full"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function SkillsSection() {
  const { t } = useLanguage();

  const skills = [
    {
      category: t.skills.categories.languages,
      items: [
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "JavaScript", icon: <SiReact />, color: "text-yellow-400" },
        { name: "Java", icon: <FaJava />, color: "text-red-500" },
        { name: "C#", icon: <TbBrandCSharp />, color: "text-purple-600" },
      ],
    },
    {
      category: t.skills.categories.frontend,
      items: [
        { name: "React", icon: <SiReact />, color: "text-cyan-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-black dark:text-white" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
      ],
    },
    {
      category: t.skills.categories.backend,
      items: [
        { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-500" },
        { name: ".NET", icon: <SiDotnet />, color: "text-purple-600" },
        { name: "Socket.IO", icon: <SiSocketdotio />, color: "text-black dark:text-white" },
      ],
    },
    {
      category: t.skills.categories.data,
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "SQLite", icon: <SiSqlite />, color: "text-blue-400" },
        { name: "Prisma", icon: <SiPrisma />, color: "text-blue-900 dark:text-white" },
      ],
    },
    {
      category: t.skills.categories.devops,
      items: [
        { name: "Docker", icon: <SiDocker />, color: "text-blue-500" },
        { name: "Git", icon: <SiGit />, color: "text-orange-500" },
        { name: "Figma", icon: <SiFigma />, color: "text-purple-400" },
        { name: "Jest", icon: <SiJest />, color: "text-red-600" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.skills.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="space-y-16">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-200 flex items-center justify-center gap-3">
                <span className="w-8 h-1 bg-primary rounded-full" />
                {category.category}
                <span className="w-8 h-1 bg-primary rounded-full" />
              </h3>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                {category.items.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}