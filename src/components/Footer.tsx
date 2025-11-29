"use client";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/votreprofil",
      icon: <FiGithub className="w-5 h-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/votreprofil",
      icon: <FiLinkedin className="w-5 h-5" />,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/votreprofil",
      icon: <FiTwitter className="w-5 h-5" />,
    },
    {
      name: "Email",
      url: "mailto:contact@votredomaine.com",
      icon: <FiMail className="w-5 h-5" />,
    },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Animation de scroll vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900/80 text-white pt-12 pb-6 relative"
    >
      <div className="container mx-auto px-4">
        {/* Bouton retour en haut */}
        {isVisible && (
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-primary to-blue-600/40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
              aria-label="Retour en haut"
              whileHover={{
                y: -5,
                scale: 1.1,
                boxShadow: "0 5px 15px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <FiArrowUp className="w-5 h-5" />
            </motion.button>
          </motion.div>
        )}

        {/* Contenu principal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo et copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <Link href="/" className="text-2xl font-bold mb-2 inline-block">
              <span className="text-primary">Emmanuel</span>
              <span className="text-gray-300">.A.A</span>
            </Link>
            <p className="text-gray-400">
              © {currentYear} Tous droits réservés
            </p>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center md:items-start"
          >
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-primary/40 transition"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:text-primary/40 transition"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-primary/40 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-center md:text-left">
              Réseaux sociaux
            </h3>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -3, color: "#60A5FA" }}
                  className="text-gray-400 hover:text-blue-400 transition-colors p-2 rounded-full bg-gray-800 hover:bg-gray-700"
                  aria-label={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Ligne de séparation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px bg-gray-700 my-8 w-full"
        />

        {/* Mentions légales */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-gray-500 text-sm"
        >
          <p>Conçu et développé avec ❤️ par Emmanuel A.A</p>
          <p className="mt-1">Dernière mise à jour : {currentYear}</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
