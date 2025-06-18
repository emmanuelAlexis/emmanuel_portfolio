import ProjectCard from "@/components/ProjectCard";
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
      <SiSpringboot size="1.5rem" title="Spring Boot" />,
      <SiNextdotjs size="1.5rem" title="NextJs" />,
      <SiPostgresql size="1.5rem" title="PostgreSql" />,
      <SiTailwindcss size="1.5rem" title="Tailwindcss" />,
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
      <SiLaravel size="1.5rem" title="Laravel" />,
      <SiNextdotjs size="1.5rem" title="NextJs" />,
      <SiMysql size="1.5rem" title="MySql" />,
      <SiTailwindcss size="1.5rem" title="Tailwindcss" />,
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
      <SiNestjs size="1.5rem" title="NestJS" />,
      <SiPrisma size="1.5rem" title="Prisma" />,
      <SiPostgresql size="1.5rem" title="PostgreSql" />,
      <SiSocketdotio size="1.5rem" title="Socket.io" />,
      <SiNextdotjs size="1.5rem" title="NextJS" />,
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
      <SiPython size="1.5rem" title="Python" />,
      <SiTensorflow size="1.5rem" title="TensorFlow" />,
      <SiQt size="1.5rem" title="PyQt5" />,
      <SiSoundcloud size="1.5rem" title="SoundService" />,
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
      <SiPython size="1.5rem" title="Python" />,
      <SiTensorflow size="1.5rem" title="TensorFlow" />,
      <SiOpencv size="1.5rem" title="OpenCv" />,
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
      <SiNextdotjs size="1.5rem" title="NextJS" />,
      <SiJavascript size="1.5rem" title="Javascript" />,
      <SiTailwindcss size="1.5rem" title="Tailwindcss" />,
    ],
    imageUrl: "/picture.jpeg",
    projectUrl: "/projects/6",
    githubUrl: "#",
    featured: true,
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Mes Projets</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              index={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
