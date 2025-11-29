"use client";

import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Language } from "@/lib/translations";

const languages: { code: Language; label: string; flag: string }[] = [
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "en", label: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const currentLanguage = languages.find((l) => l.code === language) || languages[0];
    const nextLanguage = languages.find((l) => l.code !== language) || languages[1];

    const handleToggle = () => {
        setLanguage(nextLanguage.code);
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleToggle}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Changer la langue vers ${nextLanguage.label}`}
            title={`Passer à ${nextLanguage.label}`}
        >
            <motion.span
                key={currentLanguage.code}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                className="text-xl"
                role="img"
                aria-label={currentLanguage.label}
            >
                {currentLanguage.flag}
            </motion.span>
            <span className="text-sm font-semibold">{currentLanguage.code.toUpperCase()}</span>
        </motion.button>
    );
}
