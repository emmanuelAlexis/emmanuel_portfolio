"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        {children}
        <Toaster richColors />
      </ThemeProvider>
    </LanguageProvider>
  );
}
