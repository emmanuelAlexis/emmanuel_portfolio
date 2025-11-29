export type Language = 'fr' | 'en';

export const translations = {
    fr: {
        nav: {
            about: "À propos",
            projects: "Projets",
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
            p1: "Développeur Full Stack avec <span class='font-semibold text-primary'>3 ans d'expérience</span> dans la conception d'applications web performantes. Je combine expertise technique et sens du design pour créer des expériences utilisateur exceptionnelles.",
            p2: "Mon approche est centrée sur la qualité du code, les bonnes pratiques et les architectures modernes. Je m'adapte rapidement aux nouvelles technologies tout en maintenant une base solide de fondamentaux.",
            p3: "En dehors du web, je suis passionné par le desktop, et les nouvelles tendances tech.",
            coffee: "Toujours prêt pour un café !",
        },
        footer: {
            quickLinks: "Liens rapides",
            socials: "Réseaux sociaux",
            copyright: "Tous droits réservés",
            designedBy: "Conçu et développé avec ❤️ par Emmanuel A.A",
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
            library: {
                title: "Bibliothèque Numérique",
                description: "Plateforme de gestion de bibliothèque avec téléchargement de livres, espaces de discussion et système de notation.",
                detailedDescription: "Cette application complète de gestion de bibliothèque permet aux utilisateurs de télécharger et consulter des livres numériques. Elle inclut un système de discussion pour échanger sur les ouvrages, un système de notation et de commentaires, ainsi qu'une interface d'administration complète pour la gestion des utilisateurs et du contenu. L'application utilise Spring Boot pour le backend avec une API REST sécurisée, Next.js pour le frontend avec un design moderne et responsive, et PostgreSQL pour la base de données relationnelle.",
            },
            libraryFull: {
                title: "Système de Gestion de Bibliothèque",
                description: "Application complète avec gestion des livres, auteurs, emprunts, avec interface d'upload d'images, rôles et relations Spring Boot / Next.js.",
            },
            bank: {
                title: "Mini-Banque Numérique",
                description: "Plateforme bancaire locale avec comptes bancaires et Mobile Money, prêts, remboursements, génération de PDF et notifications.",
            },
            stock: {
                title: "Système de Gestion de Stock",
                description: "Logiciel de bureau pour la gestion commerciale : stocks, ventes, clients et fournisseurs avec authentification sécurisée.",
                detailedDescription: "Application desktop complète développée en C# avec .NET 8.0 pour la gestion commerciale d'une entreprise. Le système permet de gérer les stocks en temps réel, suivre les ventes et les achats, gérer les clients et fournisseurs avec leurs historiques, générer des factures et rapports, et inclut un système d'authentification sécurisé avec différents niveaux d'accès. L'interface utilisateur est intuitive avec SQLite comme base de données locale pour une performance optimale.",
            },
            chat: {
                title: "Chat en Temps Réel",
                description: "Messagerie instantanée avec salons, rôles utilisateurs et partage de fichiers en temps réel.",
                detailedDescription: "Application de messagerie instantanée moderne avec communication en temps réel via WebSocket. Les utilisateurs peuvent créer et rejoindre des salons de discussion, partager des fichiers, et bénéficier d'un système de rôles (admin, modérateur, utilisateur) avec permissions granulaires. L'application utilise NestJS pour le backend avec architecture modulaire, Prisma comme ORM pour PostgreSQL, et Socket.IO pour la communication en temps réel. Le frontend Next.js offre une expérience utilisateur fluide avec notifications en temps réel.",
            },
            chatApp: {
                title: "Application de Chat en Temps Réel",
                description: "Messagerie avec rooms, rôles admin/guest, fichiers, WebSocket, et gestion complète avec NestJS + Prisma.",
            },
            voiceClassifier: {
                title: "Classificateur Vocal Hors-Ligne",
                description: "App vocale en local avec RNA entraîné, interface moderne PyQt5 et reconnaissance temps réel.",
            },
            imageClassifier: {
                title: "Classificateur d'Images Offline",
                description: "Application offline avec MobileNetV2 pour prédire le genre (homme/femme) à partir d'images locales.",
            },
            timer: {
                title: "Timer Intelligent Personnalisable",
                description: "Timer interactif avec déclenchement d'alerte sonore à partir d'un seuil défini.",
            },
        },
    },
    en: {
        nav: {
            about: "About",
            projects: "Projects",
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
            p1: "Full Stack Developer with <span class='font-semibold text-primary'>3 years of experience</span> in designing high-performance web applications. I combine technical expertise and design sense to create exceptional user experiences.",
            p2: "My approach focuses on code quality, best practices, and modern architectures. I adapt quickly to new technologies while maintaining a solid foundation of fundamentals.",
            p3: "Outside of the web, I am passionate about desktop development and new tech trends.",
            coffee: "Always ready for a coffee!",
        },
        footer: {
            quickLinks: "Quick Links",
            socials: "Social Media",
            copyright: "All rights reserved",
            designedBy: "Designed and developed with ❤️ by Emmanuel A.A",
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
            library: {
                title: "Digital Library",
                description: "Library management platform with book downloads, discussion spaces and rating system.",
                detailedDescription: "This complete library management application allows users to download and browse digital books. It includes a discussion system to exchange about works, a rating and comment system, as well as a complete administration interface for managing users and content. The application uses Spring Boot for the backend with a secure REST API, Next.js for the frontend with a modern and responsive design, and PostgreSQL for the relational database.",
            },
            libraryFull: {
                title: "Library Management System",
                description: "Complete application with book, author, and loan management, image upload interface, roles and relationships Spring Boot / Next.js.",
            },
            bank: {
                title: "Mini Digital Bank",
                description: "Local banking platform with bank accounts and Mobile Money, loans, repayments, PDF generation and notifications.",
            },
            stock: {
                title: "Stock Management System",
                description: "Desktop software for business management: inventory, sales, customers and suppliers with secure authentication.",
                detailedDescription: "Complete desktop application developed in C# with .NET 8.0 for business management. The system allows real-time inventory management, tracking sales and purchases, managing customers and suppliers with their histories, generating invoices and reports, and includes a secure authentication system with different access levels. The user interface is intuitive with SQLite as a local database for optimal performance.",
            },
            chat: {
                title: "Real-Time Chat",
                description: "Instant messaging with rooms, user roles and real-time file sharing.",
                detailedDescription: "Modern instant messaging application with real-time communication via WebSocket. Users can create and join discussion rooms, share files, and benefit from a role system (admin, moderator, user) with granular permissions. The application uses NestJS for the backend with modular architecture, Prisma as ORM for PostgreSQL, and Socket.IO for real-time communication. The Next.js frontend offers a smooth user experience with real-time notifications.",
            },
            chatApp: {
                title: "Real-Time Chat Application",
                description: "Messaging with rooms, admin/guest roles, files, WebSocket, and complete management with NestJS + Prisma.",
            },
            voiceClassifier: {
                title: "Offline Voice Classifier",
                description: "Local voice app with trained neural network, modern PyQt5 interface and real-time recognition.",
            },
            imageClassifier: {
                title: "Offline Image Classifier",
                description: "Offline application with MobileNetV2 to predict gender (male/female) from local images.",
            },
            timer: {
                title: "Customizable Smart Timer",
                description: "Interactive timer with sound alert trigger from a defined threshold.",
            },
        },
    },
};
