import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // All photos are local files in /public/images. Next.js resizes them and
    // serves AVIF/WebP automatically.
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      // One canonical URL for the homepage (audit: /index.html duplicated /)
      { source: "/index.html", destination: "/", permanent: true },
      // Old single-page anchors are now real pages
      { source: "/index", destination: "/", permanent: true },
      // www -> apex
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tmsynergy.com" }],
        destination: "https://tmsynergy.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
