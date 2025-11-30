"use client";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getSkills } from "@/lib/data";

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
      whileHover={{ y: -5 }}
      className="group flex flex-col items-center justify-center gap-2 p-4 rounded-xl transition-all duration-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 cursor-default"
    >
      <div
        className={`text-4xl md:text-5xl ${color} transition-transform duration-300 group-hover:scale-110 filter drop-shadow-sm`}
      >
        {icon}
      </div>

      <span className="font-medium text-gray-600 dark:text-gray-400 text-sm md:text-base group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default function SkillsSection() {
  const { t, language } = useLanguage();
  const skills = getSkills(language);

  return (
    <section id="skills" className="py-24 bg-gray-50/50 dark:bg-gray-900/50 relative overflow-hidden">
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