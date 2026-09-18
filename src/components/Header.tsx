"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();
  const headerRef = useRef<HTMLElement>(null);

  // Gestion du défilement pour l'effet de header réduit
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (
        isMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    // Ajouter l'écouteur seulement si le menu est ouvert
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Navigation items - sur la page d'accueil, on scroll vers les sections, sinon on navigue
  const navItems = [
    { path: "/#about", section: "about", label: t.nav.about },
    { path: "/#projects", section: "projects", label: t.nav.projects },
    { path: "/#skills", section: "skills", label: t.nav.skills },
    { path: "/#contact", section: "contact", label: t.nav.contact },
  ];

  // Fonction pour gérer le clic sur un lien de navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    e.preventDefault();

    // Fermer le menu immédiatement pour une meilleure UX
    setIsMenuOpen(false);

    if (pathname === '/') {
      // Si on est déjà sur la page d'accueil, on scroll directement
      const section = document.getElementById(item.section);
      if (section) {
        // Petit délai pour permettre au menu de se fermer avant le scroll
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else {
      // Sinon, on navigue vers la page d'accueil avec le hash
      window.location.href = item.path;
    }
  };

  // Fermer le menu mobile quand on clique sur un lien
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-2 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-6xl z-50 rounded-2xl border transition-all duration-300 ${scrolled
        ? "py-2.5 border-[#a85f38]/20 bg-[#fffaf4]/88 dark:border-white/10 dark:bg-gray-900/65 shadow-lg shadow-[#6b3b24]/10 backdrop-blur-xl"
        : "py-3 border-[#a85f38]/15 bg-[#fffaf4]/72 dark:border-white/10 dark:bg-gray-950/25 backdrop-blur-lg"
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo avec animation */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link href="/" className="text-2xl font-bold">
            <span className="text-primary">emmanuel</span>
            <span className="text-gray-500 dark:text-gray-400">.A.A</span>
          </Link>
        </motion.div>

        {/* Navigation desktop */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  prefetch={false}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-2 py-1 transition ${pathname.includes(item.path)
                    ? "text-primary font-medium"
                    : "text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                    }`}
                  scroll={false}
                >
                  {item.label}
                  {pathname.includes(item.path) && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
            <li>
              <DarkModeToggle variants="block" />
            </li>
          </ul>
        </nav>

        {/* Bouton menu mobile */}
        <motion.button
          className="md:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          whileTap={{ scale: 0.9 }}
          aria-label="Menu"
        >
          <div className="w-8 h-8 relative flex items-center justify-center">
            <motion.span
              className="absolute block w-6 h-0.5 bg-current rounded-full"
              animate={
                isMenuOpen
                  ? { rotate: 45, y: 0, backgroundColor: "#a85f38" }
                  : { rotate: 0, y: -5, backgroundColor: "currentColor" }
              }
            />
            <motion.span
              className="absolute block w-6 h-0.5 bg-current rounded-full"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="absolute block w-6 h-0.5 bg-current rounded-full"
              animate={
                isMenuOpen
                  ? { rotate: -45, y: 0, backgroundColor: "#a85f38" }
                  : { rotate: 0, y: 5, backgroundColor: "currentColor" }
              }
            />
          </div>
        </motion.button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden max-h-[calc(100svh-5rem)] overflow-y-auto overflow-x-hidden"
          >
            <motion.div
              className="border-t border-white/10 bg-gray-950/80 backdrop-blur-2xl"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
            >
              <ul className="flex flex-col gap-1.5 px-3 py-3">
                {navItems.map((item) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`block rounded-xl border px-4 py-2.5 text-sm transition ${pathname === item.path
                        ? "border-[#a85f38]/40 bg-[#a85f38]/15 text-[#d98a5d] font-medium"
                        : "border-transparent text-gray-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  className="mt-2 flex items-center justify-between border-t border-white/10 px-4 pt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <LanguageSwitcher />
                  <DarkModeToggle variants="block" />
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
