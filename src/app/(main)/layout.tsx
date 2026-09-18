"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Reset scroll position on route change.
  // NOTE: `children` is intentionally NOT gated behind a fake loading state.
  // Unmounting <main> right after hydration (300ms blank screen) forced the
  // browser to repaint everything and destroyed LCP / Speed Index.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
