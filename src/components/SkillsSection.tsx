"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaReact, FaGitAlt, FaDocker, FaPython, FaJava
} from "react-icons/fa";
import {
  SiNextdotjs, SiTypescript, SiTailwindcss, SiRedux, SiNestjs,
  SiSpringboot, SiPostgresql, SiJest, SiFlutter, SiMysql, SiExpress,
  SiDotnet, SiSqlite, SiPrisma, SiSocketdotio
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const SkillCard = ({ name, icon, color }: { name: string; icon: React.ReactNode; color: string }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className="relative group w-[130px] md:w-[150px] flex flex-col items-center justify-center p-4 md:p-6 bg-white dark:bg-gray-800/50 backdrop-blur-md rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-black/40 border border-gray-100 dark:border-gray-700 hover:border-primary/50 overflow-hidden transition-all duration-300"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Animated Border Gradient */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent group-hover:ring-primary/20 transition-all duration-500" />

      <div className={`text-4xl md:text-5xl mb-3 md:mb-4 ${color} transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 drop-shadow-sm`}>
        {icon}
      </div>

      <span className="font-medium text-gray-700 dark:text-gray-200 text-center text-xs md:text-sm tracking-wide group-hover:text-primary transition-colors duration-300">
        {name}
      </span>

      {/* Bottom Progress Bar Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px",
  });

  const skills = [
    {
      category: "Langages",
      items: [
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
        { name: "Java", icon: <FaJava />, color: "text-orange-600" },
        { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
        { name: "C#", icon: <TbBrandCSharp />, color: "text-purple-600" },
      ],
    },
    {
      category: "Frontend & Mobile",
      items: [
        { name: "React", icon: <FaReact />, color: "text-cyan-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-black dark:text-white" },
        { name: "Flutter", icon: <SiFlutter />, color: "text-sky-500" },
        { name: "Tailwind", icon: <SiTailwindcss />, color: "text-cyan-500" },
        { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "NestJS", icon: <SiNestjs />, color: "text-red-600" },
        { name: "Spring Boot", icon: <SiSpringboot />, color: "text-green-600" },
        { name: ".NET", icon: <SiDotnet />, color: "text-purple-700" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-600 dark:text-gray-300" },
        { name: "Socket.IO", icon: <SiSocketdotio />, color: "text-black dark:text-white" },
      ],
    },
    {
      category: "Data & ORM",
      items: [
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-600" },
        { name: "MySQL", icon: <SiMysql />, color: "text-orange-500" },
        { name: "SQLite", icon: <SiSqlite />, color: "text-blue-400" },
        { name: "Prisma", icon: <SiPrisma />, color: "text-teal-600" },
      ],
    },
    {
      category: "DevOps & Tools",
      items: [
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
        { name: "Jest", icon: <SiJest />, color: "text-red-700" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-6">
            Arsenal Technique
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Une expertise complète couvrant l'ensemble du cycle de développement, de la conception à la mise en production.
          </p>
        </motion.div>

        <div className="space-y-20">
          {skills.map((category, idx) => (
            <motion.div
              key={category.category}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={containerVariants}
              className="relative"
            >
              <div className="flex items-center gap-4 mb-10">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 shrink-0">
                  {category.category}
                </h3>
                <div className="h-px bg-gradient-to-r from-gray-200 via-gray-300 to-transparent dark:from-gray-700 dark:via-gray-600 w-full" />
              </div>

              <motion.div
                className="flex flex-wrap gap-6 md:gap-8"
                variants={containerVariants}
              >
                {category.items.map((skill) => (
                  <motion.div key={skill.name} variants={itemVariants}>
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}