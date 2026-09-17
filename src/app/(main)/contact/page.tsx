import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez ADOLPHE Alexis Emmanuel, développeur Full-Stack React, Next.js et Spring Boot, pour échanger sur votre projet web ou mobile.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <section>
      <ContactSection />
    </section>
  );
}
