"use client";
import { getAllProjects } from "@/lib/data";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useMemo } from "react";
import { FiGithub, FiExternalLink, FiLock, FiUnlock, FiEyeOff } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

type Project = ReturnType<typeof getAllProjects>[0];

export const ProjectCard = ({
  project,
  index,
}: {
  index: number;
  project: Project;
}) => {
  const { t } = useLanguage();
  const [isActive, setIsActive] = useState(false);

  const accessConfig = {
    public: {
      icon: <FiUnlock className="w-3 h-3" />,
      label: t.projects.access.public,
      color: "bg-green-500/20 text-green-400 border-green-500/20"
    },
    protected: {
      icon: <FiLock className="w-3 h-3" />,
      label: t.projects.access.protected,
      color: "bg-blue-500/20 text-blue-900 border-blue-500/20"
    },
    private: {
      icon: <FiEyeOff className="w-3 h-3" />,
      label: t.projects.access.private,
      color: "bg-red-500/20 text-red-400 border-red-500/20"
    }
  };

  const accessInfo = accessConfig[project.access as keyof typeof accessConfig] || accessConfig.private;

  // Gérer le clic/tap pour les appareils mobiles
  const handleCardClick = (e: React.MouseEvent) => {
    // Ne pas activer si on clique sur un lien
    if ((e.target as HTMLElement).tagName === 'A' || (e.target as HTMLElement).closest('a')) {
      return;
    }
    setIsActive(!isActive);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      whileHover={{ y: -12 }}
      onClick={handleCardClick}
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 project-card cursor-pointer ${isActive ? 'is-active' : ''}`}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          quality={90}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-90' : 'opacity-80 group-hover:opacity-90'}`} />

        {/* Access Badge */}
        <div className={`absolute top-4 right-4 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 z-10 ${accessInfo.color}`}>
          {accessInfo.icon}
          <span>{accessInfo.label}</span>
        </div>
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end pointer-events-none">
        <div className={`transform transition-transform duration-500 ${isActive ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'}`}>
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
            {project.title}
          </h3>
          <p className={`text-gray-200 mb-4 line-clamp-2 transition-opacity duration-500 delay-100 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
            {project.description}
          </p>
        </div>

        <div className={`flex flex-wrap gap-2 mb-4 transform transition-transform duration-500 delay-75 ${isActive ? 'translate-y-0' : 'translate-y-8 group-hover:translate-y-0'}`}>
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech.id}
              className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10"
            >
              {tech.icon}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className={`flex gap-4 transform transition-all duration-500 delay-150 pointer-events-auto ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}`}>
          {project.access === 'public' && project.githubLinks && project.githubLinks.length > 0 && (
            <motion.a
              href={project.githubLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-white bg-black/50 hover:bg-black/70 px-4 py-2 rounded-lg backdrop-blur-sm transition-colors text-sm font-medium"
            >
              <FiGithub className="w-4 h-4" />
              <span>{t.projects.code}</span>
            </motion.a>
          )}
          <motion.a
            href={project.projectUrl}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-white bg-primary/80 hover:bg-primary px-4 py-2 rounded-lg backdrop-blur-sm transition-colors text-sm font-medium shadow-lg shadow-primary/20"
          >
            <FiExternalLink className="w-4 h-4" />
            <span>{t.projects.details}</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturedProjects() {
  const { t, language } = useLanguage();
  const allProjects = getAllProjects(language);
  const [filter, setFilter] = useState<"all" | "recent" | "mobile" | "nextjs" | "springboot" | "nestjs">("all");
  // const [filter, setFilter] = useState<"all" | "recent" | "mobile" | "ai" | "nextjs" | "springboot" | "nestjs">("all");
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });

  // Fonction pour vérifier si un projet correspond à une technologie
  const hasTechnology = (project: Project, techName: string): boolean => {
    return project.technologies.some(tech =>
      tech.name?.toLowerCase().includes(techName.toLowerCase())
    );
  };

  // Filtrer les projets
  const filteredProjects = useMemo(() => {
    let filtered = [...allProjects];

    if (filter === "recent") {
      // Trier par date (les plus récents en premier)
      filtered = filtered.sort((a, b) => {
        const dateA = new Date(a.date || "2020-01").getTime();
        const dateB = new Date(b.date || "2020-01").getTime();
        return dateB - dateA;
      });
      // Prendre les 3 plus récents
      filtered = filtered.slice(0, 3);
    } else if (filter === "mobile") {
      // Filtrer les projets avec Flutter ou technologies mobiles
      filtered = filtered.filter(project =>
        hasTechnology(project, "Flutter") ||
        hasTechnology(project, "React Native") ||
        hasTechnology(project, "Mobile")
      );
      // } else if (filter === "ai") {
      //   // Filtrer les projets avec IA/ML
      //   filtered = filtered.filter(project =>
      //     hasTechnology(project, "TensorFlow") ||
      //     hasTechnology(project, "Python") ||
      //     hasTechnology(project, "OpenCV") ||
      //     project.title.toLowerCase().includes("classificateur") ||
      //     project.title.toLowerCase().includes("classifier") ||
      //     project.title.toLowerCase().includes("assist")
      //   );
    } else if (filter === "nextjs") {
      filtered = filtered.filter(project =>
        hasTechnology(project, "Next.js") ||
        hasTechnology(project, "NextJS")
      );
    } else if (filter === "springboot") {
      filtered = filtered.filter(project =>
        hasTechnology(project, "Spring Boot") ||
        hasTechnology(project, "SpringBoot")
      );
    } else if (filter === "nestjs") {
      filtered = filtered.filter(project =>
        hasTechnology(project, "NestJS") ||
        hasTechnology(project, "Nest.js")
      );
    }

    return filtered;
  }, [allProjects, filter]);

  useEffect(() => {
    if (isInView && scope.current) {
      const cards = Array.from(scope.current.querySelectorAll(".project-card"));
      if (cards.length > 0) {
        animate(
          cards,
          { opacity: 1, y: 0 },
          { delay: stagger(0.1), duration: 0.6, ease: "easeInOut" }
        );
      }
    }
  }, [isInView, animate, scope, filteredProjects]);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900" ref={scope}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {t.projects.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="flex gap-2 flex-wrap justify-center">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === "all"
                ? "bg-primary text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {t.projects.filters.all}
            </button>
            <button
              onClick={() => setFilter("recent")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === "recent"
                ? "bg-primary text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {t.projects.filters.recent}
            </button>
            <button
              onClick={() => setFilter("mobile")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === "mobile"
                ? "bg-primary text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {t.projects.filters.mobile}
            </button>
            {/* <button
              onClick={() => setFilter("ai")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === "ai"
                ? "bg-primary text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {t.projects.filters.ai}
            </button> */}
            <button
              onClick={() => setFilter("nextjs")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === "nextjs"
                ? "bg-primary text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {t.projects.filters.nextjs}
            </button>
            <button
              onClick={() => setFilter("springboot")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === "springboot"
                ? "bg-primary text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {t.projects.filters.springboot}
            </button>
            <button
              onClick={() => setFilter("nestjs")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${filter === "nestjs"
                ? "bg-primary text-white shadow-lg"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
            >
              {t.projects.filters.nestjs}
            </button>
          </div>
        </motion.div>

        {/* Liste des projets */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard index={index} key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t.projects.noProjects}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
