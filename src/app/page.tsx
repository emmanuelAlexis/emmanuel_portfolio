"use client";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function Home() {
  return (
    <div className="text-foreground flex items-center bg-background">
      <DarkModeToggle variants="fixed" />
      <h1 className="text-6xl">Home</h1>
      <DarkModeToggle variants="block" />
    </div>
  );
}
