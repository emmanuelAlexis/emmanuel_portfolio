"use client";

import { featuredProjects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowLeft } from "react-icons/fi";
import { use } from "react";

export default function ProjectDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const projectId = parseInt(id);
    const project = featuredProjects.find((p) => p.id === projectId);

    if (!project) {
        return notFound();
    }

    return (
        <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-gray-950/50">
            <div className="max-w-5xl mx-auto">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary transition-colors mb-8 group"
                >
                    <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Retour aux projets
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl mb-12 group border border-gray-200 dark:border-gray-800">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-3xl md:text-5xl font-bold text-white mb-4"
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
                                    <span key={tech.id} className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10">
                                        {tech.icon}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-10">
                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-primary rounded-full" />
                                    À propos du projet
                                </h2>
                                <div className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p>{project.description}</p>
                                </div>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                                    <span className="w-1 h-8 bg-primary rounded-full" />
                                    Technologies
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech.id}
                                            className="px-5 py-2.5 bg-white dark:bg-gray-800 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-gray-700 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                                        >
                                            {tech.icon}
                                        </span>
                                    ))}
                                </div>
                            </section>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700 sticky top-24">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Liens du projet</h3>
                                <div className="space-y-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between w-full px-5 py-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                                    >
                                        <span className="flex items-center gap-3 font-medium text-gray-700 dark:text-gray-200">
                                            <FiGithub className="w-5 h-5" /> Code Source
                                        </span>
                                        <FiExternalLink className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between w-full px-5 py-4 bg-primary text-white rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
                                    >
                                        <span className="flex items-center gap-3 font-medium">
                                            <FiExternalLink className="w-5 h-5" /> Voir le projet
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
