"use client";

import { getAllProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { use, useState } from "react";
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

    return (
        <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-950/50">
            <div className="max-w-6xl mx-auto">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-8 group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> {t.projectDetails.back}
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Carrousel d'images */}
                    <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl mb-6 group border border-gray-200 dark:border-gray-800">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentImageIndex}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={images[currentImageIndex].src}
                                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={currentImageIndex === 0}
                                />
                            </motion.div>
                        </AnimatePresence>
                        
                        {/* Contrôles du carrousel */}
                        {hasMultipleImages && (
                            <>
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                                    aria-label="Image précédente"
                                >
                                    <FiChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-all backdrop-blur-sm"
                                    aria-label="Image suivante"
                                >
                                    <FiChevronRight className="w-6 h-6" />
                                </button>
                                
                                {/* Indicateurs de pagination */}
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`h-2 rounded-full transition-all ${
                                                index === currentImageIndex
                                                    ? "w-8 bg-white"
                                                    : "w-2 bg-white/50 hover:bg-white/75"
                                            }`}
                                            aria-label={`Aller à l'image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full z-10">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-2xl md:text-4xl font-bold text-white mb-3"
                            >
                                {project.title}
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap gap-2"
                            >
                                {project.technologies.slice(0, 3).map((tech) => (
                                    <span key={tech.id} className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                                        {tech.icon}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-6">
                            <section>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-primary rounded-full" />
                                    {t.projectDetails.about}
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-base text-gray-600 dark:text-gray-300 leading-relaxed space-y-3">
                                    <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                        {project.description}
                                    </p>
                                    {project.detailedDescription && (
                                        <p className="text-sm leading-relaxed">
                                            {project.detailedDescription}
                                        </p>
                                    )}
                                </div>
                            </section>

                            <section>
                                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-primary rounded-full" />
                                    {t.projectDetails.technologies}
                                </h2>
                                <div className="space-y-4">
                                    {Object.entries(organizeTechnologiesByCategory(project.technologies, language)).map(([category, techs]) => (
                                        <div key={category} className="space-y-2">
                                            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide px-1">
                                                {category}
                                            </h3>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                                {techs.map((tech) => {
                                                    const techInfo = getTechInfo(tech.name || "", language);
                                                    return (
                                                        <motion.div
                                                            key={tech.id}
                                                            initial={{ opacity: 0, y: 10 }}
                                                            whileInView={{ opacity: 1, y: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.3 }}
                                                            className="flex items-start gap-2.5 p-2.5 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 hover:border-primary/30 hover:shadow-sm transition-all duration-300 group"
                                                        >
                                                            <div className="flex-shrink-0 p-1.5 bg-gray-50 dark:bg-gray-700/50 rounded-md group-hover:bg-primary/10 transition-colors">
                                                                <div className="text-lg">
                                                                    {tech.icon}
                                                                </div>
                                                            </div>
                                                            <div className="flex-1 min-w-0">
                                                                <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-0.5">
                                                                    {tech.name}
                                                                </h4>
                                                                {techInfo.description && (
                                                                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                                                                        {techInfo.description}
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 sticky top-20">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{t.projectDetails.links}</h3>
                                <div className="space-y-3">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                                    >
                                        <span className="flex items-center gap-2.5 text-sm font-medium text-gray-700 dark:text-gray-200">
                                            <FiGithub className="w-4 h-4" /> {t.common.sourceCode}
                                        </span>
                                        <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between w-full px-4 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                                    >
                                        <span className="flex items-center gap-2.5 text-sm font-medium">
                                            <FiExternalLink className="w-4 h-4" /> {t.common.viewProject}
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
