import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // The hero / profile PNGs are ~0.8-1 MB each; let Next serve AVIF/WebP first
    // and cache the optimized variants for 30 days.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
  experimental: {
    // react-icons and lucide-react ship huge barrel entry points. This rewrites
    // them into per-icon deep imports so unused icons are neither bundled nor
    // parsed on the main thread.
    optimizePackageImports: ["react-icons", "lucide-react"],
  },
  // Emits .map files so the "Missing source maps for large first-party
  // JavaScript" audit passes. They are only fetched when DevTools is open.
  productionBrowserSourceMaps: true,
  headers() {
    return [
      {
        // Apply these headers to all routes
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
