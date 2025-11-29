"use client";
import { featuredProjects } from "@/lib/data";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useLanguage } from "@/context/LanguageContext";

export const ProjectCard = ({
  project,
  index,
}: {
  index: number;
  project: (typeof featuredProjects)[0];
}) => {
  const { t } = useLanguage();

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
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 project-card"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
            {project.title}
          </h3>
          <p className="text-gray-200 mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-75">
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

        <div className="flex gap-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-150 opacity-0 group-hover:opacity-100">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
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
  const { t } = useLanguage();
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true, margin: "-100px" });

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
  }, [isInView, animate, scope]);

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary/60 to-blue-400 text-white rounded-lg font-medium hover:shadow-lg transition-all"
          >
            <span>{t.projects.viewAll}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
