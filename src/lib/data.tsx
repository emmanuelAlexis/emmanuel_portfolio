import { SiSpringboot, SiNextdotjs, SiPostgresql, SiTailwindcss, SiDotnet, SiSqlite, SiNestjs, SiPrisma, SiSocketdotio } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export const featuredProjects = [
    {
        id: 1,
        title: "Bibliothèque Numérique",
        description: "Plateforme de gestion de bibliothèque avec téléchargement de livres, espaces de discussion et système de notation.",
        technologies: [
            {
                id: 0,
                icon: <SiSpringboot size="1.5rem" title="Spring Boot" />,
            },
            {
                id: 1,
                icon: <SiNextdotjs size="1.5rem" title="Next.js" />,
            },
            {
                id: 2,
                icon: <SiPostgresql size="1.5rem" title="PostgreSQL" />,
            },
            {
                id: 3,
                icon: <SiTailwindcss size="1.5rem" title="TailwindCSS" />,
            },
        ],
        imageUrl: "/biblio/illustration_2.png",
        images: [
            {
                id: 0,
                src: "/biblio/illustration_2.png",
            }
        ],
        projectUrl: "/projects/1",
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        id: 2,
        title: "Système de Gestion de Stock",
        description: "Logiciel de bureau pour la gestion commerciale : stocks, ventes, clients et fournisseurs avec authentification sécurisée.",
        technologies: [
            {
                id: 4,
                icon: <TbBrandCSharp size="1.5rem" title="C#" />,
            },
            {
                id: 5,
                icon: <SiDotnet size="1.5rem" title=".NET 8.0" />,
            },
            {
                id: 6,
                icon: <SiSqlite size="1.5rem" title="SQLite" />,
            },
        ],
        imageUrl: "/stock/illustration_2.png",
        projectUrl: "/projects/2",
        liveUrl: "#",
        githubUrl: "#",
        featured: true
    },
    {
        id: 3,
        title: "Chat en Temps Réel",
        description:
            "Messagerie instantanée avec salons, rôles utilisateurs et partage de fichiers en temps réel.",
        technologies: [
            {
                id: 7,
                icon: <SiNestjs size="1.5rem" title="NestJS" />,
            },
            {
                id: 8,
                icon: <SiPrisma size="1.5rem" title="Prisma" />,
            },
            {
                id: 9,
                icon: <SiPostgresql size="1.5rem" title="PostgreSQL" />,
            },
            {
                id: 10,
                icon: <SiSocketdotio size="1.5rem" title="Socket.IO" />,
            },
            {
                id: 11,
                icon: <SiNextdotjs size="1.5rem" title="Next.js" />,
            },
        ],
        imageUrl: "/chat/illustration_2.png",
        projectUrl: "/projects/3",
        liveUrl: "#",
        githubUrl: "#",
        featured: true,
    },
];