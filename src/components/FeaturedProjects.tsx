"use client";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const featuredProjects = [
  {
    id: 1,
    title: "Système de Gestion de Bibliothèque",
    description:
      "Application complète avec gestion des livres, auteurs, emprunts, avec interface d’upload d’images, rôles et relations Spring Boot / Next.js.",
    technologies: ["Spring Boot", "Next.js", "PostgreSQL", "Tailwind CSS"],
    imageUrl: "/picture.jpeg",
    projectUrl: "/projects/1",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Mini-Banque Numérique",
    description:
      "Plateforme bancaire locale avec comptes bancaires et Mobile Money, prêts, remboursements, génération de PDF et notifications.",
    technologies: ["Laravel", "Next.js", "MySQL", "Bootstrap"],
    imageUrl: "/picture.jpeg",
    projectUrl: "/projects/2",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Application de Chat en Temps Réel",
    description:
      "Messagerie avec rooms, rôles admin/guest, fichiers, WebSocket, et gestion complète avec NestJS + Prisma.",
    technologies: ["NestJS", "Prisma", "PostgreSQL", "Socket.IO", "Next.js"],
    imageUrl: "/picture.jpeg",
    projectUrl: "/projects/3",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Classificateur Vocal Hors-Ligne",
    description:
      "App vocale en local avec RNA entraîné, interface moderne PyQt5 et reconnaissance temps réel.",
    technologies: ["Python", "TensorFlow", "PyQt5", "Sounddevice"],
    imageUrl: "/picture.jpeg",
    projectUrl: "/projects/4",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 5,
    title: "Classificateur d’Images Offline",
    description:
      "Application offline avec MobileNetV2 pour prédire le genre (homme/femme) à partir d’images locales.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Tkinter"],
    imageUrl: "/picture.jpeg",
    projectUrl: "/projects/5",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 6,
    title: "Timer Intelligent Personnalisable",
    description:
      "Timer interactif avec déclenchement d’alerte sonore à partir d’un seuil défini.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    imageUrl: "/picture.jpeg",
    projectUrl: "/projects/6",
    githubUrl: "#",
    featured: true,
  },
];

export const ProjectCard = ({
  project,
  index,
}: {
  index: number;
  project: (typeof featuredProjects)[0];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1,
        delay: index * 0.5, // Délai progressif basé sur l'index
      }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative h-72">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              <span>Code</span>
            </motion.a>
          )}
          <motion.a
            href={project.projectUrl}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
          >
            <FiExternalLink className="w-5 h-5" />
            <span>Détails</span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default function FeaturedProjects() {
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
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      ref={scope}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Projets Récents
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une sélection de mes réalisations les plus significatives
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
            <span>Voir tous mes projets</span>
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
