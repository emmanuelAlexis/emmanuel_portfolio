"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const pathnameT = usePathname();

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 300); // simulate route transition duration

    return () => clearTimeout(timeout);
  }, [pathnameT]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {isLoading ? (
        <>
          <div className="fixed top-0 left-0 right-0 h-1 bg-primary z-50">
            <div className="bg-primary/70 animate-progress w-full origin-left" />
          </div>
          <div className="min-h-screen"></div>
        </>
      ) : (
        <main className="pt-20">{children}</main>
      )}
      <Footer />
    </div>
  );
}
