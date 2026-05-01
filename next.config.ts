import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    // Allow images from the local public folder (default) and any future CDN
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
  },
  // Ensure trailing slashes work properly on Hostinger
  trailingSlash: false,
};

export default nextConfig;
