export type Language = 'fr' | 'en';

export const translations = {
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact",
        },
        hero: {
            greeting: "Bonjour, je suis",
            role: "Développeur Full-Stack spécialisé en",
            description: "créant des expériences numériques exceptionnelles.",
            viewProjects: "Voir mes projets",
            contactMe: "Contactez-moi",
            available: "Disponible",
        },
        skills: {
            title: "Mes Compétences",
            subtitle: "Une stack technique complète et moderne — du frontend au backend, en passant par le mobile et le DevOps.",
            categories: {
                languages: "Langages",
                frontend: "Frontend & Mobile",
                backend: "Backend",
                data: "Data & ORM",
                devops: "DevOps & Tools",
            },
        },
        projects: {
            title: "Mes Projets",
            subtitle: "Découvrez une collection de mes travaux récents, allant des applications web complexes aux outils utilitaires.",
            viewAll: "Voir tous mes projets",
            code: "Code",
            details: "Détails",
            back: "Retour aux projets",
            aboutProject: "À propos du projet",
            technologies: "Technologies",
            links: "Liens du projet",
            viewProject: "Voir le projet",
            filters: {
                all: "Tous",
                recent: "Récents",
                mobile: "Mobile",
                ai: "IA",
                nextjs: "NextJS",
                springboot: "SpringBoot",
                nestjs: "NestJS",
            },
            access: {
                public: "Public",
                protected: "Protégé",
                private: "Privé",
            },
            noProjects: "Aucun projet trouvé",
        },
        projectsPage: {
            title: "Mes Projets",
            subtitle: "Découvrez une collection de mes travaux récents, allant des applications web complexes aux outils utilitaires.",
        },
        projectDetails: {
            back: "Retour aux projets",
            about: "À propos du projet",
            technologies: "Technologies",
            links: "Liens du projet",
            code: "Voir le code",
            live: "Voir le site",
        },
        contact: {
            badge: "Contact",
            title: "Parlons de votre projet",
            subtitle: "Une idée en tête ? Je suis toujours ouvert aux nouvelles opportunités et collaborations intéressantes.",
            info: {
                email: "Email",
                location: "Localisation",
                phone: "Téléphone",
                availableRemote: "Disponible en remote",
            },
            form: {
                name: "Nom Complet",
                namePlaceholder: "Votre nom",
                email: "Email",
                emailPlaceholder: "exemple@email.com",
                subject: "Sujet",
                subjectPlaceholder: "De quoi s'agit-il ?",
                message: "Message",
                messagePlaceholder: "Racontez-moi tout...",
                send: "Envoyer le message",
            },
        },
        about: {
            title: "Qui suis-je ?",
            pageTitle: "À propos de",
            pageSubtitle: "Passionné par la création de solutions digitales innovantes qui allient performance et élégance.",
            p1: "Développeur Full Stack avec <span class='font-semibold text-primary'>une Licence en science des ordinateurs</span> dans la conception d'applications web performantes. Je combine expertise technique et sens du design pour créer des expériences utilisateur exceptionnelles.",
            p2: "Mon approche est centrée sur la qualité du code, les bonnes pratiques et les architectures modernes. Je m'adapte rapidement aux nouvelles technologies tout en maintenant une base solide de fondamentaux.",
            p3: "En dehors du web, je suis passionné par le desktop, et les nouvelles tendances tech.",
            coffee: "Toujours prêt pour un café !",
        },
        footer: {
            quickLinks: "Liens rapides",
            socials: "Réseaux sociaux",
            copyright: "Tous droits réservés",
            designedBy: "Conçu et développé par Emmanuel A.A",
            lastUpdate: "Dernière mise à jour",
        },
        common: {
            scrollToTop: "Retour en haut",
            downloadCV: "Télécharger le CV",
            profilePhoto: "Photo de profil",
            coordinates: "Coordonnées",
            sourceCode: "Code Source",
            viewProject: "Voir le projet",
        },
        technologies: {
            categories: {
                frontend: "Front-end",
                backend: "Back-end",
                database: "Bases de données",
                devops: "Outils & DevOps",
            },
            descriptions: {
                frontend: "Création d'interfaces utilisateur modernes et réactives.",
                backend: "Logique serveur, API et gestion des données.",
                database: "Stockage et optimisation des données.",
                devops: "Outils pour le développement, le déploiement et la collaboration.",
            },
            items: {
                react: {
                    name: "React",
                    desc: "Bibliothèque principale pour mes interfaces.",
                },
                nextjs: {
                    name: "Next.js",
                    desc: "Framework React pour la production.",
                },
                tailwind: {
                    name: "Tailwind CSS",
                    desc: "Styling utilitaire rapide et flexible.",
                },
                flutter: {
                    name: "Flutter",
                    desc: "Développement mobile multiplateforme.",
                },
                nodejs: {
                    name: "Node.js",
                    desc: "Runtime JavaScript côté serveur.",
                },
                nestjs: {
                    name: "NestJS",
                    desc: "Framework Node.js progressif.",
                },
                springboot: {
                    name: "Spring Boot",
                    desc: "Framework Java pour entreprises.",
                },
                laravel: {
                    name: "Laravel",
                    desc: "Framework PHP élégant.",
                },
                postgresql: {
                    name: "PostgreSQL",
                    desc: "SGBD relationnel avancé.",
                },
                mysql: {
                    name: "MySQL",
                    desc: "Base de données relationnelle populaire.",
                },
                docker: {
                    name: "Docker",
                    desc: "Conteneurisation d'applications.",
                },
                git: {
                    name: "Git",
                    desc: "Contrôle de version distribué.",
                },
                figma: {
                    name: "Figma",
                    desc: "Design d'interface et prototypage.",
                },
            },
        },
        parcours: {
            title: "Mon Parcours",
        },
        projectsData: {
            chessAssist: {
                title: "ChessAssist",
                description: "Assistant d'échecs intelligent propulsé par l'IA avec moteur Minimax optimisé et interface moderne.",
                detailedDescription: "Application web d'assistance aux échecs combinant une interface élégante avec un moteur d'IA puissant. Utilise l'algorithme Minimax avec élagage Alpha-Beta, tables de transposition et quiescence search pour des suggestions de coups en temps réel. L'interface offre un échiquier interactif, un historique des coups en notation algébrique, et un mode sombre avec animations fluides via Framer Motion. Développée avec Next.js 15, React 19, TypeScript et chess.js pour la logique d'échecs.",
            },
            biblio: {
                title: "Bibliothèque Numérique",
                description: "Application web de bibliothèque numérique avec gestion des utilisateurs, livres, auteurs et interactions sociales.",
                detailedDescription: "Plateforme complète de bibliothèque numérique avec frontend Next.js 15 et backend Spring Boot. Permet la gestion des utilisateurs avec photos de profil, publication et gestion de livres par les utilisateurs, gestion des auteurs, espace de discussion et notation par livre, et téléchargement sécurisé des livres. Le frontend utilise React Query pour la consommation de l'API, TailwindCSS pour le design, et React Hook Form avec Zod pour les formulaires. Le backend offre une API RESTful avec Spring Security (JWT), Spring Data JPA, stockage de fichiers (images et PDF), et base de données PostgreSQL/H2.",
            },
            globydep: {
                title: "Globydep / Mofidra",
                description: "Gestionnaire de dépenses hebdomadaires, mensuelles et annuelles avec gestion d'emprunts et notifications.",
                detailedDescription: "Application mobile Flutter pour suivre, analyser et optimiser les dépenses personnelles. Permet de planifier des semaines avec solde initial, gérer les dépenses obligatoires et ponctuelles, suivre les emprunts auprès des contacts, et visualiser l'activité dans un dashboard animé. Inclut des notifications locales pour rappels d'emprunts et alertes de solde faible, stockage local avec Hive pour le mode hors-ligne, et synchronisation Firebase optionnelle. Interface avec thème clair/sombre et graphiques de dépenses (Pie/Bar charts).",
            },
            roomApp: {
                title: "Conv-Ghost - Room Application",
                description: "Application de messagerie éphémère avec salons de discussion privés, communication temps réel et partage de fichiers.",
                detailedDescription: "Plateforme de messagerie instantanée construite avec Next.js 15 et NestJS permettant de créer des salons de discussion éphémères et sécurisés. Le frontend offre une interface moderne avec Tailwind CSS 4, animations Framer Motion, mode sombre, et communication temps réel via Socket.IO. Fonctionnalités : authentification JWT, création de salons avec mot de passe, chat en temps réel, partage de fichiers et médias, sélecteur d'emojis, gestion de profil, et téléchargement de fichiers. Le backend NestJS fournit une API RESTful complète avec WebSocket pour la messagerie instantanée.",
            },
            regionDiana: {
                title: "Portail Région Diana",
                description: "Portail citoyen et interface d'administration pour les services de la Région Diana.",
                detailedDescription: "Système complet avec deux interfaces Next.js : un portail client pour les citoyens et une interface d'administration pour les agents. Le portail client permet aux usagers d'accéder aux services et informations de la région avec une interface moderne et responsive. L'interface d'administration offre une gestion complète des données, contenus et paramètres via un dashboard sécurisé. Les deux applications consomment une API backend commune et sont optimisées pour la performance avec Next.js et déploiement en production.",
            },
            nextFrontStarter: {
                title: "Next.js Startup Frontend",
                description: "Template de démarrage Next.js moderne avec support du mode sombre, composants UI réutilisables et configuration optimisée.",
                detailedDescription: "Template frontend Next.js 15 prêt à l'emploi avec App Router, TypeScript et React 19. Inclut un système de thème clair/sombre via ThemeProvider personnalisé, Tailwind CSS 4 pour le styling rapide, et composants UI réutilisables (DarkModeToggle, inputs). Intègre des notifications toast avec Sonner, animations avec Framer Motion, et outils modernes (Turbopack, PostCSS). Conçu comme point de départ pour nouveaux projets avec routing, theming et bonnes pratiques configurés par défaut.",
            },
        },
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
        },
        hero: {
            greeting: "Hello, I am",
            role: "Full-Stack Developer specialized in",
            description: "creating exceptional digital experiences.",
            viewProjects: "View my projects",
            contactMe: "Contact me",
            available: "Available",
        },
        skills: {
            title: "My Skills",
            subtitle: "A complete and modern technical stack — from frontend to backend, including mobile and DevOps.",
            categories: {
                languages: "Languages",
                frontend: "Frontend & Mobile",
                backend: "Backend",
                data: "Data & ORM",
                devops: "DevOps & Tools",
            },
        },
        projects: {
            title: "My Projects",
            subtitle: "Discover a collection of my recent work, ranging from complex web applications to utility tools.",
            viewAll: "View all projects",
            code: "Code",
            details: "Details",
            back: "Back to projects",
            aboutProject: "About the project",
            technologies: "Technologies",
            links: "Project Links",
            viewProject: "View Project",
            filters: {
                all: "All",
                recent: "Recent",
                mobile: "Mobile",
                ai: "AI",
                nextjs: "NextJS",
                springboot: "SpringBoot",
                nestjs: "NestJS",
            },
            access: {
                public: "Public",
                protected: "Protected",
                private: "Private",
            },
            noProjects: "No projects found",
        },
        projectsPage: {
            title: "My Projects",
            subtitle: "Discover a collection of my recent work, ranging from complex web applications to utility tools.",
        },
        projectDetails: {
            back: "Back to projects",
            about: "About the project",
            technologies: "Technologies",
            links: "Project Links",
            code: "View Code",
            live: "View Site",
        },
        contact: {
            badge: "Contact",
            title: "Let's talk about your project",
            subtitle: "Have an idea? I am always open to new opportunities and interesting collaborations.",
            info: {
                email: "Email",
                location: "Location",
                phone: "Phone",
                availableRemote: "Available remotely",
            },
            form: {
                name: "Full Name",
                namePlaceholder: "Your name",
                email: "Email",
                emailPlaceholder: "example@email.com",
                subject: "Subject",
                subjectPlaceholder: "What is it about?",
                message: "Message",
                messagePlaceholder: "Tell me everything...",
                send: "Send message",
            },
        },
        about: {
            title: "Who am I?",
            pageTitle: "About",
            pageSubtitle: "Passionate about creating innovative digital solutions that combine performance and elegance.",
            p1: "Full Stack Developer with <span class='font-semibold text-primary'>a Computer Science Licence Degree</span> in designing high-performance web applications. I combine technical expertise and design sense to create exceptional user experiences.",
            p2: "My approach focuses on code quality, best practices, and modern architectures. I adapt quickly to new technologies while maintaining a solid foundation of fundamentals.",
            p3: "Outside of the web, I am passionate about desktop development and new tech trends.",
            coffee: "Always ready for a coffee!",
        },
        footer: {
            quickLinks: "Quick Links",
            socials: "Social Media",
            copyright: "All rights reserved",
            designedBy: "Designed and developed by Emmanuel A.A",
            lastUpdate: "Last update",
        },
        common: {
            scrollToTop: "Back to top",
            downloadCV: "Download CV",
            profilePhoto: "Profile photo",
            coordinates: "Contact Information",
            sourceCode: "Source Code",
            viewProject: "View Project",
        },
        technologies: {
            categories: {
                frontend: "Front-end",
                backend: "Back-end",
                database: "Databases",
                devops: "Tools & DevOps",
            },
            descriptions: {
                frontend: "Creating modern and reactive user interfaces.",
                backend: "Server logic, APIs and data management.",
                database: "Data storage and optimization.",
                devops: "Tools for development, deployment and collaboration.",
            },
            items: {
                react: {
                    name: "React",
                    desc: "Main library for my interfaces.",
                },
                nextjs: {
                    name: "Next.js",
                    desc: "React framework for production.",
                },
                tailwind: {
                    name: "Tailwind CSS",
                    desc: "Fast and flexible utility styling.",
                },
                flutter: {
                    name: "Flutter",
                    desc: "Cross-platform mobile development.",
                },
                nodejs: {
                    name: "Node.js",
                    desc: "JavaScript server-side runtime.",
                },
                nestjs: {
                    name: "NestJS",
                    desc: "Progressive Node.js framework.",
                },
                springboot: {
                    name: "Spring Boot",
                    desc: "Enterprise Java framework.",
                },
                laravel: {
                    name: "Laravel",
                    desc: "Elegant PHP framework.",
                },
                postgresql: {
                    name: "PostgreSQL",
                    desc: "Advanced relational database.",
                },
                mysql: {
                    name: "MySQL",
                    desc: "Popular relational database.",
                },
                docker: {
                    name: "Docker",
                    desc: "Application containerization.",
                },
                git: {
                    name: "Git",
                    desc: "Distributed version control.",
                },
                figma: {
                    name: "Figma",
                    desc: "Interface design and prototyping.",
                },
            },
        },
        parcours: {
            title: "My Journey",
        },
        projectsData: {
            chessAssist: {
                title: "ChessAssist",
                description: "Intelligent chess assistant powered by AI with optimized Minimax engine and modern interface.",
                detailedDescription: "Chess assistance web application combining an elegant interface with a powerful AI engine. Uses Minimax algorithm with Alpha-Beta pruning, transposition tables and quiescence search for real-time move suggestions. The interface offers an interactive chessboard, move history in algebraic notation, and dark mode with smooth animations via Framer Motion. Built with Next.js 15, React 19, TypeScript and chess.js for chess logic.",
            },
            biblio: {
                title: "Digital Library",
                description: "Digital library web application with user management, books, authors and social interactions.",
                detailedDescription: "Complete digital library platform with Next.js 15 frontend and Spring Boot backend. Enables user management with profile photos, book publication and management by users, author management, discussion space and rating per book, and secure book downloads. The frontend uses React Query for API consumption, TailwindCSS for design, and React Hook Form with Zod for forms. The backend offers a RESTful API with Spring Security (JWT), Spring Data JPA, file storage (images and PDFs), and PostgreSQL/H2 database.",
            },
            globydep: {
                title: "Globydep / Mofidra",
                description: "Weekly, monthly and annual expense manager with loan management and notifications.",
                detailedDescription: "Flutter mobile application to track, analyze and optimize personal expenses. Allows planning weeks with initial balance, managing mandatory and occasional expenses, tracking loans from contacts, and visualizing activity in an animated dashboard. Includes local notifications for loan reminders and low balance alerts, local storage with Hive for offline mode, and optional Firebase synchronization. Interface with light/dark theme and expense charts (Pie/Bar charts).",
            },
            roomApp: {
                title: "Conv-Ghost - Room Application",
                description: "Ephemeral messaging application with private discussion rooms, real-time communication and file sharing.",
                detailedDescription: "Instant messaging platform built with Next.js 15 and NestJS enabling creation of ephemeral and secure discussion rooms. The frontend offers a modern interface with Tailwind CSS 4, Framer Motion animations, dark mode, and real-time communication via Socket.IO. Features: JWT authentication, password-protected room creation, real-time chat, file and media sharing, emoji picker, profile management, and file downloads. The NestJS backend provides a complete RESTful API with WebSocket for instant messaging.",
            },
            regionDiana: {
                title: "Diana Region Portal",
                description: "Citizen portal and administration interface for Diana Region services.",
                detailedDescription: "Complete system with two Next.js interfaces: a client portal for citizens and an administration interface for agents. The client portal allows users to access regional services and information with a modern and responsive interface. The administration interface offers complete management of data, content and settings via a secure dashboard. Both applications consume a common backend API and are optimized for performance with Next.js and production deployment.",
            },
            nextFrontStarter: {
                title: "Next.js Startup Frontend",
                description: "Modern Next.js starter template with dark mode support, reusable UI components and optimized configuration.",
                detailedDescription: "Ready-to-use Next.js 15 frontend template with App Router, TypeScript and React 19. Includes light/dark theme system via custom ThemeProvider, Tailwind CSS 4 for rapid styling, and reusable UI components (DarkModeToggle, inputs). Integrates toast notifications with Sonner, animations with Framer Motion, and modern tooling (Turbopack, PostCSS). Designed as a starting point for new projects with routing, theming and best practices configured by default.",
            },
        },
    },
};
