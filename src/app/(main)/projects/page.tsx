"use client";
import ProjectCard from "@/components/ProjectCard";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiOpencv,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiQt,
  SiSocketdotio,
  SiSoundcloud,
  SiSpringboot,
  SiTailwindcss,
  SiTensorflow,
} from "react-icons/si";

const projects = [
  {
    id: 1,
    title: "Système de Gestion de Bibliothèque",
    description:
      "Application complète avec gestion des livres, auteurs, emprunts, avec interface d’upload d’images, rôles et relations Spring Boot / Next.js.",
    technologies: [
      {
        id: 0,
        icon: <SiSpringboot size="1.5rem" title="Spring Boot" />,
      },
      {
        id: 1,
        icon: <SiNextdotjs size="1.5rem" title="NextJs" />,
      },
      {
        id: 2,
        icon: <SiPostgresql size="1.5rem" title="PostgreSql" />,
      },
      {
        id: 3,
        icon: <SiTailwindcss size="1.5rem" title="Tailwindcss" />,
      },
    ],
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
    technologies: [
      {
        id: 4,
        icon: <SiLaravel size="1.5rem" title="Laravel" />
      },
      {
        id: 5,
        icon: <SiNextdotjs size="1.5rem" title="NextJs" />,
      },
      {
        id: 6,
        icon: <SiMysql size="1.5rem" title="MySql" />,
      },
      {
        id: 7,
        icon: <SiTailwindcss size="1.5rem" title="Tailwindcss" />,
      },



    ],
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
    technologies: [
      {
        id: 8,
        icon: <SiNestjs size="1.5rem" title="NestJS" />
      },
      {
        id: 9,
        icon: <SiPrisma size="1.5rem" title="Prisma" />,
      },
      {
        id: 10,
        icon: <SiPostgresql size="1.5rem" title="PostgreSql" />
      },
      {
        id: 11,
        icon: <SiSocketdotio size="1.5rem" title="Socket.io" />
      },
      {
        id: 12,
        icon: <SiNextdotjs size="1.5rem" title="NextJS" />
      },
    ],
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
    technologies: [
      {
        id: 13,
        icon: <SiPython size="1.5rem" title="Python" />,
      },
      {
        id: 14,
        icon: <SiTensorflow size="1.5rem" title="TensorFlow" />,
      },
      {
        id: 15,
        icon: <SiQt size="1.5rem" title="PyQt5" />,
      },
      {
        id: 16,
        icon: <SiSoundcloud size="1.5rem" title="SoundService" />,
      },
    ],
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
    technologies: [
      {
        id: 17,
        icon: <SiPython size="1.5rem" title="Python" />,
      },
      {
        id: 18,
        icon: <SiTensorflow size="1.5rem" title="TensorFlow" />,
      },
      {
        id: 19,
        icon: <SiOpencv size="1.5rem" title="OpenCv" />,
      },
    ],
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
    technologies: [
      {
        id: 20,
        icon: <SiNextdotjs size="1.5rem" title="NextJS" />,
      },
      {
        id: 21,
        icon: <SiJavascript size="1.5rem" title="Javascript" />,
      },
      {
        id: 22,
        icon: <SiTailwindcss size="1.5rem" title="Tailwindcss" />,
      },
    ],
    imageUrl: "/picture.jpeg",
    projectUrl: "/projects/6",
    githubUrl: "#",
    featured: true,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectsPage() {
  return (
    <section className="py-24 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
            Mes Projets
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez une collection de mes travaux récents, allant des applications web complexes aux outils utilitaires.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <ProjectCard
                index={project.id}
                project={project}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
