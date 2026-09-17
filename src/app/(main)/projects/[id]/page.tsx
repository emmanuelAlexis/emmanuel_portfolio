import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";
import { getAllProjects } from "@/lib/data";

type ProjectPageProps = {
  params: Promise<{ id: string }>;
};

// Server-side lookup so this route can expose real per-project metadata
// (title, description, canonical, Open Graph) instead of inheriting the
// homepage's description. `params` is forwarded to the client component, which
// unwraps it with React's `use()`.
function findProject(id: string) {
  return getAllProjects("fr").find((project) => String(project.id) === id);
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = findProject(id);

  if (!project) {
    return {
      title: "Projet introuvable",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${id}`,
    },
    openGraph: {
      type: "article",
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.imageUrl,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { id } = await params;

  if (!findProject(id)) {
    notFound();
  }

  return <ProjectDetailClient params={params} />;
}