import type { Metadata } from "next";
import TechnologiesShowcase from "@/components/TechnologiesShowcase";

export const metadata: Metadata = {
  title: "Technologies",
  description:
    "Technologies maîtrisées par ADOLPHE Alexis Emmanuel : React, Next.js, TypeScript, Spring Boot, NestJS, Flutter, PostgreSQL, Docker, Git et bien d'autres.",
  alternates: {
    canonical: "/about/technologies",
  },
};

export default function TechnologiesPage() {
  return <TechnologiesShowcase />;
}