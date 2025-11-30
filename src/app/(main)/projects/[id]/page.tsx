"use client";

import { getAllProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft, FiChevronLeft, FiChevronRight, FiLock, FiUnlock, FiEyeOff } from "react-icons/fi";
import { use, useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

// Fonction pour obtenir la description et la catégorie d'une technologie
function getTechInfo(techName: string, lang: 'fr' | 'en'): { description: string; category: string } {
    const techInfo: Record<string, { fr: { desc: string; cat: string }; en: { desc: string; cat: string } }> = {
        "Spring Boot": {
            fr: { desc: "Framework Java pour le développement d'applications backend robustes", cat: "Backend" },
            en: { desc: "Java framework for building robust backend applications", cat: "Backend" }
        },
        "Next.js": {
            fr: { desc: "Framework React pour applications web performantes et SEO-friendly", cat: "Frontend" },
            en: { desc: "React framework for performant and SEO-friendly web applications", cat: "Frontend" }
        },
        "PostgreSQL": {
            fr: { desc: "Base de données relationnelle avancée et open-source", cat: "Base de données" },
            en: { desc: "Advanced open-source relational database", cat: "Database" }
        },
        "TailwindCSS": {
            fr: { desc: "Framework CSS utilitaire pour un design rapide et moderne", cat: "Frontend" },
            en: { desc: "Utility-first CSS framework for rapid modern design", cat: "Frontend" }
        },
        "C#": {
            fr: { desc: "Langage de programmation orienté objet pour applications .NET", cat: "Langage" },
            en: { desc: "Object-oriented programming language for .NET applications", cat: "Language" }
        },
        ".NET": {
            fr: { desc: "Plateforme de développement Microsoft pour applications cross-platform", cat: "Backend" },
            en: { desc: "Microsoft development platform for cross-platform applications", cat: "Backend" }
        },
        "SQLite": {
            fr: { desc: "Base de données légère embarquée pour applications locales", cat: "Base de données" },
            en: { desc: "Lightweight embedded database for local applications", cat: "Database" }
        },
        "NestJS": {
            fr: { desc: "Framework Node.js progressif pour applications backend scalables", cat: "Backend" },
            en: { desc: "Progressive Node.js framework for scalable backend applications", cat: "Backend" }
        },
        "Prisma": {
            fr: { desc: "ORM moderne pour TypeScript avec gestion de base de données", cat: "ORM" },
            en: { desc: "Modern ORM for TypeScript with database management", cat: "ORM" }
        },
        "Socket.IO": {
            fr: { desc: "Bibliothèque pour communication en temps réel bidirectionnelle", cat: "Backend" },
            en: { desc: "Library for bidirectional real-time communication", cat: "Backend" }
        },
        "Laravel": {
            fr: { desc: "Framework PHP élégant pour développement web rapide", cat: "Backend" },
            en: { desc: "Elegant PHP framework for rapid web development", cat: "Backend" }
        },
        "MySQL": {
            fr: { desc: "Système de gestion de base de données relationnelle populaire", cat: "Base de données" },
            en: { desc: "Popular relational database management system", cat: "Database" }
        },
        "Python": {
            fr: { desc: "Langage de programmation polyvalent pour IA et développement", cat: "Langage" },
            en: { desc: "Versatile programming language for AI and development", cat: "Language" }
        },
        "TensorFlow": {
            fr: { desc: "Framework d'apprentissage automatique et deep learning", cat: "IA/ML" },
            en: { desc: "Machine learning and deep learning framework", cat: "AI/ML" }
        },
        "PyQt5": {
            fr: { desc: "Framework Python pour interfaces graphiques desktop", cat: "Frontend" },
            en: { desc: "Python framework for desktop graphical interfaces", cat: "Frontend" }
        },
        "OpenCV": {
            fr: { desc: "Bibliothèque pour traitement d'images et vision par ordinateur", cat: "IA/ML" },
            en: { desc: "Library for image processing and computer vision", cat: "AI/ML" }
        },
        "JavaScript": {
            fr: { desc: "Langage de programmation pour développement web interactif", cat: "Langage" },
            en: { desc: "Programming language for interactive web development", cat: "Language" }
        },
    };

    const info = techInfo[techName];
    if (!info) return { description: "", category: "" };

    const data = info[lang];
    return { description: data.desc, category: data.cat };
}

// Fonction pour organiser les technologies par catégorie
function organizeTechnologiesByCategory(
    technologies: Array<{ id: number; icon: React.ReactNode; name?: string }>,
    lang: 'fr' | 'en'
) {
    const categories: Record<string, Array<{ id: number; icon: React.ReactNode; name?: string }>> = {};

    technologies.forEach((tech: { id: number; icon: React.ReactNode; name?: string }) => {
        const info = getTechInfo(tech.name || "", lang);
        const category = info.category || (lang === 'fr' ? "Autre" : "Other");

        if (!categories[category]) {
            categories[category] = [];
        }
        categories[category].push(tech);
    });

    return categories;
}

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { t, language } = useLanguage();
    const allProjects = getAllProjects(language);
    const { id } = use(params);
    const projectId = parseInt(id);
    const project = allProjects.find((p) => p.id === projectId);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    if (!project) {
        return notFound();
    }

    const images = project.images || [{ id: 0, src: project.imageUrl }];
    const hasMultipleImages = images.length > 1;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (!hasMultipleImages || isHovered) return;

        const interval = setInterval(() => {
            nextImage();
        }, 5000);

        return () => clearInterval(interval);
    }, [hasMultipleImages, isHovered, images.length]);

    const accessConfig = {
        public: {
            icon: <FiUnlock className="w-4 h-4" />,
            label: t.projects.access.public,
            color: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20"
        },
        protected: {
            icon: <FiLock className="w-4 h-4" />,
            label: t.projects.access.protected,
            color: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20"
        },
        private: {
            icon: <FiEyeOff className="w-4 h-4" />,
            label: t.projects.access.private,
            color: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
        }
    };

    const accessInfo = accessConfig[project.access as keyof typeof accessConfig] || accessConfig.private;

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-950/50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] right-[-5%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] left-[-5%] w-[25%] h-[25%] bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <nav className="mb-8 flex items-center justify-between">
                    <Link
                        href="/#projects"
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                        <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                        {t.projectDetails.back}
                    </Link>
                </nav>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    {/* Header Section with Title and Date/Category if available */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <div className="flex flex-wrap items-center gap-4 mb-2">
                                <motion.h1
                                    className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {project.title}
                                </motion.h1>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium border flex items-center gap-2 ${accessInfo.color}`}>
                                    {accessInfo.icon}
                                    {accessInfo.label}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.slice(0, 3).map((tech) => (
                                    <span key={tech.id} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/10">
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: Image & Description (8 cols) */}
                        <div className="lg:col-span-8 space-y-8">
                            {/* Image Carousel */}
                            <div
                                className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 group"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentImageIndex}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0"
                                    >
                                        <Image
                                            src={images[currentImageIndex].src}
                                            alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                            fill
                                            className="object-scale-down"
                                            priority={currentImageIndex === 0}
                                        />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Controls */}
                                {hasMultipleImages && (
                                    <>
                                        <div className="absolute inset-0 flex items-center justify-between p-4 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <button
                                                onClick={(e) => { e.preventDefault(); prevImage(); }}
                                                className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white border border-white/20 transition-all transform hover:scale-110 pointer-events-auto"
                                                aria-label="Previous image"
                                            >
                                                <FiChevronLeft className="w-6 h-6" />
                                            </button>
                                            <button
                                                onClick={(e) => { e.preventDefault(); nextImage(); }}
                                                className="p-3 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-md text-white border border-white/20 transition-all transform hover:scale-110 pointer-events-auto"
                                                aria-label="Next image"
                                            >
                                                <FiChevronRight className="w-6 h-6" />
                                            </button>
                                        </div>

                                        {/* Pagination Dots */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 z-20">
                                            {images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => setCurrentImageIndex(index)}
                                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                                        ? "w-6 bg-white"
                                                        : "w-2 bg-white/50 hover:bg-white/80"
                                                        }`}
                                                    aria-label={`Go to image ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>

                            {/* Description */}
                            <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="p-2 bg-primary/10 rounded-lg text-primary">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    {t.projectDetails.about}
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                        {project.description}
                                    </p>
                                    {project.detailedDescription && (
                                        <p className="text-base opacity-90">
                                            {project.detailedDescription}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Links & Tech (4 cols) */}
                        <div className="lg:col-span-4 space-y-6">
                            {/* Links Card */}
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg shadow-primary/5 border border-gray-100 dark:border-gray-700 sticky top-24">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <FiExternalLink className="w-5 h-5 text-primary" />
                                    {t.projectDetails.links}
                                </h3>
                                <div className="space-y-3">
                                    {project.liveUrl && project.liveUrl !== "#" && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 font-medium"
                                        >
                                            <FiExternalLink className="w-5 h-5" /> {t.common.viewProject}
                                        </a>
                                    )}

                                    {project.githubLinks && project.githubLinks.length > 0 && project.githubLinks.map((link: any, idx: number) => (
                                        <a
                                            key={idx}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 border border-gray-200 dark:border-gray-600 font-medium hover:border-gray-300"
                                        >
                                            <FiGithub className="w-5 h-5" />
                                            <span>{link.label || t.common.sourceCode}</span>
                                        </a>
                                    ))}

                                    {(!project.liveUrl || project.liveUrl === "#") && (!project.githubLinks || project.githubLinks.length === 0) && (
                                        <div className="text-center text-gray-500 dark:text-gray-400 py-4 italic">
                                            {accessInfo.label === "Private" ? "Code privé" : "Aucun lien disponible"}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Technologies */}
                            <div className="bg-white dark:bg-gray-800/50 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                    <span className="p-2 bg-purple-500/10 rounded-lg text-purple-500">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </span>
                                    {t.projectDetails.technologies}
                                </h3>
                                <div className="space-y-6">
                                    {Object.entries(organizeTechnologiesByCategory(project.technologies, language)).map(([category, techs]) => (
                                        <div key={category}>
                                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1">
                                                {category}
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {techs.map((tech) => (
                                                    <div
                                                        key={tech.id}
                                                        className="group relative flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700/30 rounded-xl border border-gray-100 dark:border-gray-700/50 hover:border-primary/30 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 cursor-default"
                                                    >
                                                        <span className="text-lg text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform">
                                                            {tech.icon}
                                                        </span>
                                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                                                            {tech.name}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
