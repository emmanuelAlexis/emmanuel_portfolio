"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiGithub, FiLock, FiUnlock, FiEyeOff } from "react-icons/fi";

import { useLanguage } from "@/context/LanguageContext";

export default function ProjectCard({
  project,
  index,
}: {
  project: any;
  index: number;
}) {
  const { t } = useLanguage();

  const accessConfig = {
    public: {
      icon: <FiUnlock className="w-3 h-3" />,
      label: t.projects.access.public,
      color: "bg-emerald-500/15 text-emerald-300 border-emerald-400/25"
    },
    protected: {
      icon: <FiLock className="w-3 h-3" />,
      label: t.projects.access.protected,
      color: "bg-[#a85f38]/20 text-[#e0a178] border-[#a85f38]/30"
    },
    private: {
      icon: <FiEyeOff className="w-3 h-3" />,
      label: t.projects.access.private,
      color: "bg-rose-500/15 text-rose-300 border-rose-400/25"
    }
  };

  const accessInfo = accessConfig[project.access as keyof typeof accessConfig] || accessConfig.private;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      whileHover={{ y: -10 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-foreground/10 bg-background/55 shadow-xl shadow-black/10 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:border-[#a85f38]/45 hover:shadow-2xl hover:shadow-[#a85f38]/10"
    >
      {/* Image Section */}
      <div className="relative h-60 overflow-hidden border-b border-white/10">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:brightness-90"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-75" />

        {/* Access Badge */}
        <div className={`absolute top-4 right-4 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium border flex items-center gap-1.5 z-10 ${accessInfo.color}`}>
          {accessInfo.icon}
          <span>{accessInfo.label}</span>
        </div>

        {/* Technologies Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech: any) => (
            <span
              key={tech.id}
              className="flex items-center gap-1 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md"
            >
              {tech.icon}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="bg-white/20 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-sm font-medium border border-white/10">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-grow flex-col bg-background/35 p-6 transition-colors duration-300 group-hover:bg-background/75 md:p-7">
        <h3 className="mb-3 text-xl font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-[#d98a5d]">
          {project.title}
        </h3>
        <p className="mb-6 line-clamp-3 flex-grow text-muted-foreground transition-colors duration-300 group-hover:text-foreground/85">
          {project.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          {project.access === 'public' && project.githubLinks && project.githubLinks.length > 0 && (
            <a
              href={project.githubLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-foreground/15 px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-[#a85f38]/60 hover:bg-[#a85f38]/10 hover:text-foreground"
            >
              <FiGithub className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          <Link
            href={project.projectUrl}
            className="group/btn flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#a85f38] px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-[#a85f38]/20 transition-all hover:bg-[#bd7148]"
          >
            <span>Voir détails</span>
            <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
