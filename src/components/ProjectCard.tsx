"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiGithub } from "react-icons/fi";

export default function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 h-full flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Technologies Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech: any) => (
            <span
              key={tech.id}
              className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/10 flex items-center gap-1"
            >
              {tech.icon}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/10">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary dark:hover:border-primary transition-all text-sm font-medium"
            >
              <FiGithub className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          <Link
            href={project.projectUrl}
            className="flex items-center gap-2 text-white bg-primary hover:bg-primary/90 px-4 py-2 rounded-lg transition-all text-sm font-medium shadow-lg shadow-primary/20 flex-1 justify-center group/btn"
          >
            <span>Voir détails</span>
            <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
