"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import DarkModeToggle from "./DarkModeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { t } = useLanguage();

  // Gestion du défilement pour l'effet de header réduit
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items - sur la page d'accueil, on scroll vers les sections, sinon on navigue
  const navItems = [
    { path: "/#about", section: "about", label: t.nav.about },
    { path: "/#projects", section: "projects", label: t.nav.projects },
    { path: "/#skills", section: "skills", label: t.nav.skills },
    { path: "/#contact", section: "contact", label: t.nav.contact },
  ];

  // Fonction pour gérer le clic sur un lien de navigation
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    // Si le lien contient un hash (#), on scroll vers la section
    if (item.path.includes('#')) {
      e.preventDefault();
      if (pathname === '/') {
        // Si on est déjà sur la page d'accueil, on scroll directement
        const section = document.getElementById(item.section);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          closeMenu();
        }
      } else {
        // Sinon, on navigue vers la page d'accueil avec le hash
        window.location.href = item.path;
        closeMenu();
      }
    } else if (pathname === '/') {
      // Si on est sur la page d'accueil et que c'est un lien de section, on scroll
      e.preventDefault();
      const section = document.getElementById(item.section);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        closeMenu();
      }
    }
    // Sinon, on laisse le Link naviguer normalement vers la page
  };

  // Fermer le menu mobile quand on clique sur un lien
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
        : "py-4 bg-transparent"
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
                  ? { rotate: 45, y: 0, backgroundColor: "#3B82F6" }
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
                  ? { rotate: -45, y: 0, backgroundColor: "#3B82F6" }
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
            className="md:hidden overflow-hidden"
          >
            <motion.div
              className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
            >
              <ul className="py-4 space-y-4 px-4">
                {navItems.map((item) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={(e) => {
                        handleNavClick(e, item);
                        closeMenu();
                      }}
                      className={`block py-2 px-4 rounded-lg transition ${pathname === item.path
                        ? "bg-blue-50 dark:bg-blue-900/30 text-primary font-medium"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
                <motion.li
                  className="flex justify-center mt-6 gap-4"
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
