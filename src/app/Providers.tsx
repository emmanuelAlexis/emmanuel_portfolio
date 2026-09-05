"use client";

import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <LanguageProvider>
        <ThemeProvider>
          {children}
          <Toaster richColors />
        </ThemeProvider>
      </LanguageProvider>
    </AnimatePresence>
  );
}