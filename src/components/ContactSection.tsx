"use client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import InputWithIcon from "./Inputs";
import { InfoIcon, Mail, User } from "lucide-react";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Contactez-moi
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Discutons de votre projet ou opportunité
          </motion.p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/50 rounded-lg text-primary">
                  <FiMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    emmanueladolphe0401@gmail.com
                  </p>
                  <a
                    href="mailto:emmanueladolphe0401@gmail.com"
                    className="text-primary hover:underline mt-1 inline-block"
                  >
                    Envoyer un message
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/50 rounded-lg text-primary">
                  <FiMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Localisation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Ville, Pays
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Disponible pour des opportunités locales et distantes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/50 rounded-lg text-primary">
                  <FiPhone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    Téléphone
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    +261 34 08 548 16
                  </p>
                  <a
                    href="tel:+261340854816"
                    className="text-primary/70 hover:underline mt-1 inline-block"
                  >
                    Appeler maintenant
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <form onSubmit={onSubmit} className="space-y-6">
              <InputWithIcon
                icon={User}
                type="text"
                placeholder="Jhon Doe"
                onChange={(value) => setName(value)}
                label="Nom Complet"
                value={name}
              />
              <InputWithIcon
                label="Email"
                onChange={(value) => setEmail(value)}
                value={email}
                type="email"
                icon={Mail}
                placeholder="exemple@domain.com"
              />

              <InputWithIcon
                label="Sujet"
                value={subject}
                onChange={(value) => setSubject(value)}
                type="text"
                icon={InfoIcon}
              />

              <InputWithIcon
                label="Message"
                value={message}
                onChange={(value) => setMessage(value)}
                type="textarea"
                icon={FaEnvelope}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-all"
              >
                Envoyer le message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
