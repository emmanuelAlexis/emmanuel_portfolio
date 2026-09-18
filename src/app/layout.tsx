import type { Metadata } from "next";
import "./globals.css";
import Providers from "./Providers";

// SEO Metadata
export const metadata: Metadata = {
  title: {
    default: "ADOLPHE Alexis Emmanuel - Développeur Full-Stack",
    template: "%s | ADOLPHE Alexis Emmanuel",
  },
  description: "Développeur Full-Stack spécialisé en React, Next.js et technologies modernes. Création d'expériences numériques exceptionnelles alliant performance et élégance.",
  keywords: [
    "ADOLPHE Alexis Emmanuel",
    "Développeur Full-Stack",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Développeur web",
    "Freelance",
  ],
  authors: [{ name: "ADOLPHE Alexis Emmanuel" }],
  creator: "ADOLPHE Alexis Emmanuel",
  publisher: "ADOLPHE Alexis Emmanuel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ADOLPHE Alexis Emmanuel - Développeur Full-Stack",
    description: "Développeur Full-Stack spécialisé en React, Next.js et technologies modernes. Création d'expériences numériques exceptionnelles alliant performance et élégance.",
    url: "https://emmanuel-portfolio-puce.vercel.app/", // TODO: Replace with actual domain
    siteName: "ADOLPHE Alexis Emmanuel Portfolio",
    images: [
      {
        url: "https://emmanuel-portfolio-puce.vercel.app//og-image.jpg", // TODO: Add actual OG image
        width: 1200,
        height: 630,
        alt: "ADOLPHE Alexis Emmanuel - Développeur Full-Stack",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADOLPHE Alexis Emmanuel - Développeur Full-Stack",
    description: "Développeur Full-Stack spécialisé en React, Next.js et technologies modernes. Création d'expériences numériques exceptionnelles alliant performance et élégance.",
    images: ["https://emmanuel-portfolio-puce.vercel.app//twitter-card.jpg"], // TODO: Add actual Twitter image
    creator: "@emmanuelAlexis", // TODO: Update with actual Twitter handle
  },
  // Additional SEO attributes
  referrer: "strict-origin-when-cross-origin",
  metadataBase: new URL("https://emmanuel-portfolio-puce.vercel.app/"), // TODO: Replace with actual domain
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "ADOLPHE Alexis Emmanuel",
              url: "https://emmanuel-portfolio-puce.vercel.app/", // TODO: Replace with actual domain
              sameAs: [
                "https://github.com/emmanuelAlexis",
                "https://linkedin.com/in/emmanuelalexis", // TODO: Update with actual LinkedIn
                "https://twitter.com/emmanuelAlexis", // TODO: Update with actual Twitter
              ],
              jobTitle: "Full-Stack Developer",
              description: "Développeur Full-Stack spécialisé en React, Next.js et technologies modernes. Création d'expériences numériques exceptionnelles alliant performance et élégance.",
              knowsAbout: [
                "React",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Node.js",
                "Spring Boot",
                "Flutter",
                "PostgreSQL",
                "Docker",
                "Git",
              ],
            }),
          }}
        />
      {/* Plausible Analytics */}
      {process.env.NEXT_PLAUSIBLE_DOMAIN && process.env.NEXT_PLAUSIBLE_URL && (
        <>
          <script
            defer
            data-domain={process.env.NEXT_PLAUSIBLE_DOMAIN}
            src={process.env.NEXT_PLAUSIBLE_URL}
          ></script>
          <noscript>
            <img
              alt=""
              src={`${process.env.NEXT_PLAUSIBLE_URL}?domain=${process.env.NEXT_PLAUSIBLE_DOMAIN}`}
              style={{ display: "none" }}
            />
          </noscript>
        </>
      )}
      {/* Google Analytics (alternative) */}
      {process.env.NEXT_GA_ID && (
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_GA_ID}', {
                anonymize_ip: true
              });
            `,
          }}
        />
      )}
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
        >
          Aller au contenu principal
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
