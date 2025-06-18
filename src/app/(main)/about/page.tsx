"use client";
import Moi from "@/components/sections/Me";
import Parcours from "@/components/sections/Parcours";
import Tech from "@/components/sections/Tech";

export default function AboutPage({
  section,
}: {
  section: "Moi" | "Parcours" | "Tech";
}) {
  return (
    <div>
      {section === "Moi" ? (
        <Moi />
      ) : section === "Parcours" ? (
        <Parcours />
      ) : (
        <Tech />
      )}
    </div>
  );
}
