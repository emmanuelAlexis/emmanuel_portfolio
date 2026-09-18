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
      className="group flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-foreground/10 bg-background/55 p-4 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background/80 hover:shadow-xl hover:shadow-primary/5 cursor-default"
    >
      {/* The technology name is rendered underneath, so the icon is decorative:
          aria-hidden also keeps react-icons' redundant role="img" out of the
          accessibility tree. */}
      <div
        aria-hidden="true"
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
    <section className="section-atmosphere section-atmosphere-warm py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 grid gap-8 text-left lg:grid-cols-[0.8fr_1.2fr] lg:items-end"
        >
          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-primary">04 / expertise</p>
            <h2 className="max-w-xl text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              {t.skills.title}
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground lg:justify-self-end">
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
              <div className="overflow-hidden rounded-3xl border border-foreground/10 bg-background/35 p-5 shadow-2xl shadow-black/5 backdrop-blur-sm md:p-7">
                <div className="mb-6 flex items-center justify-between gap-4 border-b border-foreground/10 pb-5">
                  <h3 className="flex items-center gap-3 text-xl font-bold text-foreground md:text-2xl">
                    <span className="size-2 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
                    {category.category}
                  </h3>
                  <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {category.items.map((skill, skillIndex) => (
                    <SkillCard key={skillIndex} {...skill} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
