import {
    SiSpringboot, SiNextdotjs, SiPostgresql, SiTailwindcss, SiDotnet, SiSqlite,
    SiNestjs, SiPrisma, SiSocketdotio, SiJavascript, SiLaravel, SiMysql,
    SiOpencv, SiPython, SiQt, SiSoundcloud, SiTensorflow, SiReact, SiExpress,
    SiMongodb, SiDocker, SiGit, SiFigma, SiRedux, SiJest, SiFlutter, SiVite,
    SiGithubactions, SiTypescript, SiNodedotjs, SiFramer, SiHive, SiFirebase,
    SiMaterialdesign,
    SiBotblecms,
    SiGodotengine
} from "react-icons/si";
import { TbBrandCSharp, TbChess } from "react-icons/tb";
import { FaJava, FaNodeJs, FaTools, FaReact } from "react-icons/fa";
import { FiDatabase, FiTerminal, FiLayers } from "react-icons/fi";
import { translations } from "./translations";
import { BotIcon } from "lucide-react";

// Fonction pour obtenir les compétences
const getSkills = (lang: 'fr' | 'en' = 'fr') => {
    const t = translations[lang];

    return [
        {
            category: t.skills.categories.languages,
            icon: <FiLayers className="w-5 h-5" />,
            description: t.technologies.descriptions.frontend,
            items: [
                {
                    name: "TypeScript",
                    icon: <SiTypescript />,
                    color: "text-blue-600",
                    desc: "Superset JavaScript typé."
                },
                {
                    name: "Java",
                    icon: <FaJava />,
                    color: "text-red-500",
                    desc: "Langage orienté objet robuste."
                },
                {
                    name: "C#",
                    icon: <TbBrandCSharp />,
                    color: "text-purple-600",
                    desc: "Langage polyvalent Microsoft."
                },
                {
                    name: "Python",
                    icon: <SiPython />,
                    color: "text-blue-500",
                    desc: "Langage pour IA et Scripting."
                },
            ],
        },
        {
            category: t.skills.categories.frontend,
            icon: <FiLayers className="w-5 h-5" />,
            description: t.technologies.descriptions.frontend,
            items: [
                {
                    name: "Next.js",
                    icon: <SiNextdotjs />,
                    color: "text-black dark:text-white",
                    desc: t.technologies.items.nextjs.desc
                },
                {
                    name: "Tailwind",
                    icon: <SiTailwindcss />,
                    color: "text-cyan-500",
                    desc: t.technologies.items.tailwind.desc
                },
                {
                    name: "Flutter",
                    icon: <SiFlutter />,
                    color: "text-blue-400",
                    desc: t.technologies.items.flutter.desc
                }
            ],
        },
        {
            category: t.skills.categories.backend,
            icon: <FiTerminal className="w-5 h-5" />,
            description: t.technologies.descriptions.backend,
            items: [
                {
                    name: "Spring Boot",
                    icon: <SiSpringboot />,
                    color: "text-green-600",
                    desc: t.technologies.items.springboot.desc
                },
                {
                    name: "NestJS",
                    icon: <SiNestjs />,
                    color: "text-red-600",
                    desc: t.technologies.items.nestjs.desc
                },
                {
                    name: "Laravel",
                    icon: <SiLaravel />,
                    color: "text-red-500",
                    desc: t.technologies.items.laravel.desc
                },
                {
                    name: ".NET",
                    icon: <SiDotnet />,
                    color: "text-purple-600",
                    desc: "Framework de développement."
                },
            ],
        },
        {
            category: t.skills.categories.data,
            icon: <FiDatabase className="w-5 h-5" />,
            description: t.technologies.descriptions.database,
            items: [
                {
                    name: "PostgreSQL",
                    icon: <SiPostgresql />,
                    color: "text-blue-400",
                    desc: t.technologies.items.postgresql.desc
                },
                {
                    name: "MySQL",
                    icon: <SiMysql />,
                    color: "text-orange-500",
                    desc: t.technologies.items.mysql.desc
                },
                {
                    name: "SQLite",
                    icon: <SiSqlite />,
                    color: "text-blue-400",
                    desc: "Base de données légère."
                },
            ],
        },
        {
            category: t.skills.categories.devops,
            icon: <FaTools className="w-5 h-5" />,
            description: t.technologies.descriptions.devops,
            items: [
                {
                    name: "Docker",
                    icon: <SiDocker />,
                    color: "text-blue-500",
                    desc: t.technologies.items.docker.desc
                },
                {
                    name: "Git",
                    icon: <SiGit />,
                    color: "text-orange-500",
                    desc: t.technologies.items.git.desc
                },
                {
                    name: "Figma",
                    icon: <SiFigma />,
                    color: "text-purple-400",
                    desc: t.technologies.items.figma.desc
                },
                {
                    name: "GitHub Actions",
                    icon: <SiGithubactions />,
                    color: "text-blue-600",
                    desc: "Automatisation de workflow."
                },
            ],
        },
    ];
};

// Fonction pour obtenir tous les projets
const getAllProjects = (lang: 'fr' | 'en' = 'fr') => {
    const t = translations[lang];

    return [
        {
            id: 1,
            title: t.projectsData.chessAssist.title,
            description: t.projectsData.chessAssist.description,
            detailedDescription: t.projectsData.chessAssist.detailedDescription,
            technologies: [
                {
                    id: 0,
                    icon: <SiNextdotjs size="1.5rem" title="Next.js" />,
                    name: "Next.js"
                },
                {
                    id: 1,
                    icon: <SiReact size="1.5rem" title="React" />,
                    name: "React"
                },
                {
                    id: 2,
                    icon: <SiTypescript size="1.5rem" title="TypeScript" />,
                    name: "TypeScript"
                },
                {
                    id: 3,
                    icon: <TbChess size="1.5rem" title="chess.js" />,
                    name: "chess.js"
                },
                {
                    id: 4,
                    icon: <SiFramer size="1.5rem" title="Framer Motion" />,
                    name: "Framer Motion"
                },
                {
                    id: 5,
                    icon: <SiTailwindcss size="1.5rem" title="TailwindCSS" />,
                    name: "TailwindCSS"
                },
                {
                    id: 6,
                    icon: <SiGodotengine size="1.5rem" title="AI" />,
                    name: "AI"
                },
            ],
            imageUrl: "/chess/illustration_1.png",
            images: [
                {
                    id: 0,
                    src: "/chess/home.png",
                },
                {
                    id: 1,
                    src: "/chess/game.png",
                },
                {
                    id: 2,
                    src: "/chess/dark.png",
                }
            ],
            projectUrl: "/projects/1",
            liveUrl: "https://chess-assistantio.vercel.app/",
            githubLinks: [
                { label: "Frontend", url: "https://github.com/emmanuelAlexis/chessAssistant.git" }
            ],
            access: "public",
            featured: true,
            date: "2025-01"
        },
        {
            id: 2,
            title: t.projectsData.devTracker.title,
            description: t.projectsData.devTracker.description,
            detailedDescription: t.projectsData.devTracker.detailedDescription,
            technologies: [
                {
                    id: 0,
                    icon: <SiNextdotjs size="1.5rem" title="Next.js" />,
                    name: "Next.js"
                },
                {
                    id: 1,
                    icon: <SiDotnet size="1.5rem" title="ASP.NET Core" />,
                    name: "ASP.NET Core"
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
                {
                    id: 4,
                    icon: <SiFramer size="1.5rem" title="Framer Motion" />,
                    name: "Framer Motion"
                },
            ],
            imageUrl: "/devtracker/illustration_tracker.png",
            images: [
                {
                    id: 0,
                    src: "/devtracker/home.png",
                },
                {
                    id: 1,
                    src: "/devtracker/projects.png",
                },
                {
                    id: 2,
                    src: "/devtracker/form.png",
                }
            ],
            projectUrl: "/projects/2",
            liveUrl: "#",
            githubLinks: [],
            access: "private",
            featured: true,
            date: "2025-01"
        },
        {
            id: 3,
            title: t.projectsData.globydep.title,
            description: t.projectsData.globydep.description,
            detailedDescription: t.projectsData.globydep.detailedDescription,
            technologies: [
                {
                    id: 0,
                    icon: <SiFlutter size="1.5rem" title="Flutter" />,
                    name: "Flutter"
                },
                {
                    id: 1,
                    icon: <SiHive size="1.5rem" title="Hive" />,
                    name: "Hive"
                },
                {
                    id: 2,
                    icon: <SiFirebase size="1.5rem" title="Firebase" />,
                    name: "Firebase"
                },
            ],
            imageUrl: "/globydep/illustration_1.png",
            images: [
                {
                    id: 0,
                    src: "/globydep/dashboard.png",
                },
                {
                    id: 1,
                    src: "/globydep/expenses.png",
                },
                {
                    id: 2,
                    src: "/globydep/loans.png",
                }
            ],
            projectUrl: "/projects/3",
            liveUrl: "#",
            githubLinks: [],
            access: "private",
            featured: true,
            date: "2024-12"
        },
        {
            id: 4,
            title: t.projectsData.roomApp.title,
            description: t.projectsData.roomApp.description,
            detailedDescription: t.projectsData.roomApp.detailedDescription,
            technologies: [
                {
                    id: 0,
                    icon: <SiNextdotjs size="1.5rem" title="Next.js" />,
                    name: "Next.js"
                },
                {
                    id: 1,
                    icon: <SiNestjs size="1.5rem" title="NestJS" />,
                    name: "NestJS"
                },
                {
                    id: 2,
                    icon: <SiMaterialdesign size="1.5rem" title="Material-UI" />,
                    name: "Material-UI"
                },
                {
                    id: 3,
                    icon: <SiTypescript size="1.5rem" title="TypeScript" />,
                    name: "TypeScript"
                },
            ],
            imageUrl: "/room/home.png",
            images: [
                {
                    id: 0,
                    src: "/room/home.png",
                },
                {
                    id: 1,
                    src: "/room/dashboard.png",
                },
                {
                    id: 2,
                    src: "/room/discussion.png",
                }
            ],
            projectUrl: "/projects/4",
            liveUrl: "#",
            githubLinks: [],
            access: "private",
            featured: true,
            date: "2024-11"
        },
        {
            id: 5,
            title: t.projectsData.regionDiana.title,
            description: t.projectsData.regionDiana.description,
            detailedDescription: t.projectsData.regionDiana.detailedDescription,
            technologies: [
                {
                    id: 0,
                    icon: <SiNextdotjs size="1.5rem" title="Next.js" />,
                    name: "Next.js"
                },
                {
                    id: 1,
                    icon: <SiSpringboot size="1.5rem" title="Spring Boot" />,
                    name: "Spring Boot"
                },
                {
                    id: 2,
                    icon: <SiPostgresql size="1.5rem" title="PostgreSQL" />,
                    name: "PostgreSQL"
                },
                {
                    id: 3,
                    icon: <SiTypescript size="1.5rem" title="TypeScript" />,
                    name: "TypeScript"
                },
            ],
            imageUrl: "/region/illustration_region.png",
            images: [
                {
                    id: 0,
                    src: "/region/auth_1.png",
                },
                {
                    id: 1,
                    src: "/region/auth_2.png",
                },
                {
                    id: 2,
                    src: "/region/dashboard.png",
                },
                {
                    id: 3,
                    src: "/region/light.png",
                },
                {
                    id: 4,
                    src: "/region/responsive.png",
                },
                {
                    id: 5,
                    src: "/region/form.png",
                }
            ],
            projectUrl: "/projects/5",
            liveUrl: "https://front-client-region-8vbl3y0nh-emmanuelalexis-projects.vercel.app/",
            githubLinks: [],
            access: "protected",
            featured: true,
            date: "2024-10"
        },
        {
            id: 6,
            title: t.projectsData.nextFrontStarter.title,
            description: t.projectsData.nextFrontStarter.description,
            detailedDescription: t.projectsData.nextFrontStarter.detailedDescription,
            technologies: [
                {
                    id: 0,
                    icon: <SiNextdotjs size="1.5rem" title="Next.js" />,
                    name: "Next.js"
                },
                {
                    id: 1,
                    icon: <SiReact size="1.5rem" title="React" />,
                    name: "React"
                },
                {
                    id: 2,
                    icon: <SiTypescript size="1.5rem" title="TypeScript" />,
                    name: "TypeScript"
                },
                {
                    id: 3,
                    icon: <SiTailwindcss size="1.5rem" title="TailwindCSS" />,
                    name: "TailwindCSS"
                },
                {
                    id: 4,
                    icon: <SiFramer size="1.5rem" title="Framer Motion" />,
                    name: "Framer Motion"
                },
            ],
            imageUrl: "/starter/illustration_starter.png",
            images: [
                {
                    id: 0,
                    src: "/starter/illustration_starter.png",
                },
                {
                    id: 1,
                    src: "/starter/home.png",
                },
            ],
            projectUrl: "/projects/6",
            liveUrl: "https://next-theme-starter-docs.vercel.app/",
            githubLinks: [
                { label: "Template", url: "https://github.com/emmanuelAlexis/next_front_startup_with_dark_mode.git" }
            ],
            access: "public",
            featured: true,
            date: "2024-09"
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
export { getFeaturedProjects, getAllProjects, getSkills };