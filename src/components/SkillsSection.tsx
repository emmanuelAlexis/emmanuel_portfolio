"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { getSkills } from "@/lib/data";

const SkillCard = ({
  name,
  icon,
  color,
  desc,
}: {
  name: string;
  icon: React.ReactNode;
  color: string;
  desc?: string;
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group flex min-h-36 flex-col items-start justify-between rounded-2xl border border-foreground/10 bg-background/55 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-background/80 hover:shadow-xl hover:shadow-primary/5 cursor-default"
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

      <div>
        <span className="block font-semibold text-foreground text-sm md:text-base transition-colors">
          {name}
        </span>
        {desc && <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{desc}</span>}
      </div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const { t, language } = useLanguage();
  const skills = getSkills(language);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = skills[activeIndex];

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

        <div className="grid gap-5 lg:grid-cols-[240px_1fr] lg:items-stretch">
          <nav className="rounded-3xl border border-foreground/10 bg-background/40 p-2 shadow-xl shadow-black/5 backdrop-blur-md" aria-label="Skill categories">
            <div className="flex gap-2 overflow-x-auto lg:flex-col">
              {skills.map((category, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className={`flex min-w-max items-center gap-3 rounded-2xl px-4 py-3 text-left transition-all lg:w-full ${activeIndex === index ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "text-muted-foreground hover:bg-foreground/5 hover:text-foreground"}`}
                >
                  <span className="flex size-8 items-center justify-center rounded-xl bg-background/15">{category.icon}</span>
                  <span className="text-sm font-medium">{category.category}</span>
                  <span className="ml-auto hidden font-mono text-[10px] opacity-60 lg:block">{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </nav>

          <div className="min-h-[430px] rounded-3xl border border-foreground/10 bg-background/35 p-5 shadow-xl shadow-black/5 backdrop-blur-md md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="mb-8 flex items-start justify-between gap-4 border-b border-foreground/10 pb-6">
                  <div>
                    <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-primary">Selected focus</p>
                    <h3 className="text-2xl font-bold text-foreground md:text-3xl">{activeCategory.category}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">{activeCategory.description}</p>
                  </div>
                  <span className="font-mono text-xs tracking-[0.25em] text-muted-foreground">{String(activeIndex + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}</span>
                </div>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {activeCategory.items.map((skill, skillIndex) => (
                    <SkillCard key={skillIndex} {...skill} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
