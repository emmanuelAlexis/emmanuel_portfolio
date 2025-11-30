"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiMail, FiMapPin, FiPhone, FiSend } from "react-icons/fi";
import InputWithIcon from "./Inputs";
import { InfoIcon, Mail, User } from "lucide-react";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

import { toast } from "sonner";

export default function ContactSection() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Une erreur est survenue');
      }

      toast.success('Message envoyé avec succès ! Je vous répondrai dès que possible.');
      // Reset form
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      toast.error("Erreur lors de l'envoi du message. Veuillez réessayer.");
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            {t.contact.badge}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400"
          >
            {t.contact.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            {t.contact.subtitle}
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-6/12 space-y-8"
          >
            <div className="bg-white dark:bg-gray-800/50 p-8 rounded-3xl shadow-xl shadow-gray-100/50 dark:shadow-none border border-gray-100 dark:border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {t.common.coordinates}
              </h3>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {t.contact.info.email}
                    </h4>
                    <a
                      href="mailto:emmanueladolphe0401@gmail.com"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors block break-all"
                    >
                      emmanueladolphe0401@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-2xl text-purple-600 dark:text-purple-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FiMapPin className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {t.contact.info.location}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 break-words">
                      Fianarantsoa, Madagascar
                    </p>
                    <span className="text-sm text-green-600 dark:text-green-400 font-medium mt-1 inline-block">
                      • {t.contact.info.availableRemote}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-5 group"
                >
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-2xl text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                      {t.contact.info.phone}
                    </h4>
                    <a
                      href="tel:+261340854816"
                      className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors block break-all"
                    >
                      +261 34 08 548 16
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:w-6/12"
          >
            <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-2xl shadow-gray-200/50 dark:shadow-black/20 border border-gray-100 dark:border-gray-700">
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                  <InputWithIcon
                    icon={User}
                    type="text"
                    placeholder={t.contact.form.namePlaceholder}
                    onChange={(value) => setName(value)}
                    label={t.contact.form.name}
                    value={name}
                  />
                  <InputWithIcon
                    label={t.contact.form.email}
                    onChange={(value) => setEmail(value)}
                    value={email}
                    type="email"
                    icon={Mail}
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>

                <InputWithIcon
                  label={t.contact.form.subject}
                  value={subject}
                  onChange={(value) => setSubject(value)}
                  type="text"
                  icon={InfoIcon}
                  placeholder={t.contact.form.subjectPlaceholder}
                />

                <InputWithIcon
                  label={t.contact.form.message}
                  value={message}
                  onChange={(value) => setMessage(value)}
                  type="textarea"
                  icon={FaEnvelope}
                  placeholder={t.contact.form.messagePlaceholder}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r from-primary to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-3 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>{t.contact.form.send}</span>
                      <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div >
    </section >
  );
}
