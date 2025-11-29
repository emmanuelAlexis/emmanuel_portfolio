"use client";
import { AnimatePresence } from "framer-motion";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col`}>
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
      </body>
    </html>
  );
}
