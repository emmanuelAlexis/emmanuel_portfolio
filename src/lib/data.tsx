import { SiSpringboot, SiNextdotjs, SiPostgresql, SiTailwindcss, SiDotnet, SiSqlite, SiNestjs, SiPrisma, SiSocketdotio, SiJavascript, SiLaravel, SiMysql, SiOpencv, SiPython, SiQt, SiSoundcloud, SiTensorflow } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { translations } from "./translations";

// Fonction pour obtenir tous les projets
const getAllProjects = (lang: 'fr' | 'en' = 'fr') => {
    const t = translations[lang];
    
    return [
        {
            id: 1,
            title: t.projectsData.library.title,
            description: t.projectsData.library.description,
            detailedDescription: t.projectsData.library.detailedDescription,
            technologies: [
                {
                    id: 0,
                    icon: <SiSpringboot size="1.5rem" title="Spring Boot" />,
                    name: "Spring Boot"
                },
                {
                    id: 1,
                    icon: <SiNextdotjs size="1.5rem" title="Next.js" />,
                    name: "Next.js"
                },
                {
                    id: 2,
                    icon: <SiPostgresql size="1.5rem" title="PostgreSQL" />,
                    name: "PostgreSQL"
                },
                {
                    id: 3,
                    icon: <SiTailwindcss size="1.5rem" title="TailwindCSS" />,
                    name: "TailwindCSS"
                },
            ],
            imageUrl: "/biblio/illustration_2.png",
            images: [
                {
                    id: 0,
                    src: "/biblio/illustration_2.png",
                },
                {
                    id: 1,
                    src: "/biblio/illustration_1.png",
                },
                {
                    id: 2,
                    src: "/biblio/biblio-1.png",
                },
                {
                    id: 3,
                    src: "/biblio/biblio-2.png",
                }
            ],
            projectUrl: "/projects/1",
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
            date: "2024-01"
        },
        {
            id: 2,
            title: t.projectsData.stock.title,
            description: t.projectsData.stock.description,
            detailedDescription: t.projectsData.stock.detailedDescription,
            technologies: [
                {
                    id: 4,
                    icon: <TbBrandCSharp size="1.5rem" title="C#" />,
                    name: "C#"
                },
                {
                    id: 5,
                    icon: <SiDotnet size="1.5rem" title=".NET 8.0" />,
                    name: ".NET"
                },
                {
                    id: 6,
                    icon: <SiSqlite size="1.5rem" title="SQLite" />,
                    name: "SQLite"
                },
            ],
            imageUrl: "/stock/illustration_2.png",
            images: [
                {
                    id: 0,
                    src: "/stock/illustration_2.png",
                },
                {
                    id: 1,
                    src: "/stock/illustration_1.png",
                }
            ],
            projectUrl: "/projects/2",
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
            date: "2023-12"
        },
        {
            id: 3,
            title: t.projectsData.chat.title,
            description: t.projectsData.chat.description,
            detailedDescription: t.projectsData.chat.detailedDescription,
            technologies: [
                {
                    id: 7,
                    icon: <SiNestjs size="1.5rem" title="NestJS" />,
                    name: "NestJS"
                },
                {
                    id: 8,
                    icon: <SiPrisma size="1.5rem" title="Prisma" />,
                    name: "Prisma"
                },
                {
                    id: 9,
                    icon: <SiPostgresql size="1.5rem" title="PostgreSQL" />,
                    name: "PostgreSQL"
                },
                {
                    id: 10,
                    icon: <SiSocketdotio size="1.5rem" title="Socket.IO" />,
                    name: "Socket.IO"
                },
                {
                    id: 11,
                    icon: <SiNextdotjs size="1.5rem" title="Next.js" />,
                    name: "Next.js"
                },
            ],
            imageUrl: "/chat/illustration_2.png",
            images: [
                {
                    id: 0,
                    src: "/chat/illustration_2.png",
                }
            ],
            projectUrl: "/projects/3",
            liveUrl: "#",
            githubUrl: "#",
            featured: true,
            date: "2024-02"
        },
        {
            id: 4,
            title: t.projectsData.libraryFull.title,
            description: t.projectsData.libraryFull.description,
            technologies: [
                {
                    id: 0,
                    icon: <SiSpringboot size="1.5rem" title="Spring Boot" />,
                    name: "Spring Boot"
                },
                {
                    id: 1,
                    icon: <SiNextdotjs size="1.5rem" title="NextJs" />,
                    name: "Next.js"
                },
                {
                    id: 2,
                    icon: <SiPostgresql size="1.5rem" title="PostgreSql" />,
                    name: "PostgreSQL"
                },
                {
                    id: 3,
                    icon: <SiTailwindcss size="1.5rem" title="Tailwindcss" />,
                    name: "TailwindCSS"
                },
            ],
            imageUrl: "/picture.jpeg",
            images: [
                {
                    id: 0,
                    src: "/picture.jpeg",
                }
            ],
            projectUrl: "/projects/1",
            liveUrl: "#",
            githubUrl: "#",
            featured: false,
            date: "2023-11"
        },
        {
            id: 5,
            title: t.projectsData.bank.title,
            description: t.projectsData.bank.description,
            technologies: [
                {
                    id: 4,
                    icon: <SiLaravel size="1.5rem" title="Laravel" />,
                    name: "Laravel"
                },
                {
                    id: 5,
                    icon: <SiNextdotjs size="1.5rem" title="NextJs" />,
                    name: "Next.js"
                },
                {
                    id: 6,
                    icon: <SiMysql size="1.5rem" title="MySql" />,
                    name: "MySQL"
                },
                {
                    id: 7,
                    icon: <SiTailwindcss size="1.5rem" title="Tailwindcss" />,
                    name: "TailwindCSS"
                },
            ],
            imageUrl: "/picture.jpeg",
            images: [
                {
                    id: 0,
                    src: "/picture.jpeg",
                }
            ],
            projectUrl: "/projects/2",
            liveUrl: "#",
            githubUrl: "#",
            featured: false,
            date: "2023-10"
        },
        {
            id: 6,
            title: t.projectsData.chatApp.title,
            description: t.projectsData.chatApp.description,
            technologies: [
                {
                    id: 8,
                    icon: <SiNestjs size="1.5rem" title="NestJS" />,
                    name: "NestJS"
                },
                {
                    id: 9,
                    icon: <SiPrisma size="1.5rem" title="Prisma" />,
                    name: "Prisma"
                },
                {
                    id: 10,
                    icon: <SiPostgresql size="1.5rem" title="PostgreSql" />,
                    name: "PostgreSQL"
                },
                {
                    id: 11,
                    icon: <SiSocketdotio size="1.5rem" title="Socket.io" />,
                    name: "Socket.IO"
                },
                {
                    id: 12,
                    icon: <SiNextdotjs size="1.5rem" title="NextJS" />,
                    name: "Next.js"
                },
            ],
            imageUrl: "/picture.jpeg",
            images: [
                {
                    id: 0,
                    src: "/picture.jpeg",
                }
            ],
            projectUrl: "/projects/3",
            liveUrl: "#",
            githubUrl: "#",
            featured: false,
            date: "2024-01"
        },
        {
            id: 7,
            title: t.projectsData.voiceClassifier.title,
            description: t.projectsData.voiceClassifier.description,
            technologies: [
                {
                    id: 13,
                    icon: <SiPython size="1.5rem" title="Python" />,
                    name: "Python"
                },
                {
                    id: 14,
                    icon: <SiTensorflow size="1.5rem" title="TensorFlow" />,
                    name: "TensorFlow"
                },
                {
                    id: 15,
                    icon: <SiQt size="1.5rem" title="PyQt5" />,
                    name: "PyQt5"
                },
                {
                    id: 16,
                    icon: <SiSoundcloud size="1.5rem" title="SoundService" />,
                    name: "SoundService"
                },
            ],
            imageUrl: "/picture.jpeg",
            images: [
                {
                    id: 0,
                    src: "/picture.jpeg",
                }
            ],
            projectUrl: "/projects/4",
            liveUrl: "#",
            githubUrl: "#",
            featured: false,
            date: "2023-09"
        },
        {
            id: 8,
            title: t.projectsData.imageClassifier.title,
            description: t.projectsData.imageClassifier.description,
            technologies: [
                {
                    id: 17,
                    icon: <SiPython size="1.5rem" title="Python" />,
                    name: "Python"
                },
                {
                    id: 18,
                    icon: <SiTensorflow size="1.5rem" title="TensorFlow" />,
                    name: "TensorFlow"
                },
                {
                    id: 19,
                    icon: <SiOpencv size="1.5rem" title="OpenCv" />,
                    name: "OpenCV"
                },
            ],
            imageUrl: "/picture.jpeg",
            images: [
                {
                    id: 0,
                    src: "/picture.jpeg",
                }
            ],
            projectUrl: "/projects/5",
            liveUrl: "#",
            githubUrl: "#",
            featured: false,
            date: "2023-08"
        },
        {
            id: 9,
            title: t.projectsData.timer.title,
            description: t.projectsData.timer.description,
            technologies: [
                {
                    id: 20,
                    icon: <SiNextdotjs size="1.5rem" title="NextJS" />,
                    name: "Next.js"
                },
                {
                    id: 21,
                    icon: <SiJavascript size="1.5rem" title="Javascript" />,
                    name: "JavaScript"
                },
                {
                    id: 22,
                    icon: <SiTailwindcss size="1.5rem" title="Tailwindcss" />,
                    name: "TailwindCSS"
                },
            ],
            imageUrl: "/picture.jpeg",
            images: [
                {
                    id: 0,
                    src: "/picture.jpeg",
                }
            ],
            projectUrl: "/projects/6",
            liveUrl: "#",
            githubUrl: "#",
            featured: false,
            date: "2024-03"
        },
    ];
};

const getFeaturedProjects = (lang: 'fr' | 'en' = 'fr') => {
    const allProjects = getAllProjects(lang);
    // Retourner seulement les projets featured
    return allProjects.filter(p => p.featured);
};

// Export par défaut pour compatibilité (utilise 'fr' par défaut)
export const featuredProjects = getFeaturedProjects('fr');

// Export de la fonction pour utilisation avec traductions
export { getFeaturedProjects, getAllProjects };