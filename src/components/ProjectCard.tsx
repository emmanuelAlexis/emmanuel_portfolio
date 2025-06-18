"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

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
        delay: index * 0.1, // Délai progressif basé sur l'index
      }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-48">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span key={tech} className="px-2 py-1 rounded text-primary text-sm">
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={project.projectUrl}
          className="text-primary hover:underline font-medium"
        >
          Voir le projet →
        </Link>
      </div>
    </motion.div>
  );
}
