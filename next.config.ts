import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options here */
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',       // URL users/Google will request
        destination: '/sitemap.xml/', // actual route in app folder
      },
    ];
  },
};

export default nextConfig;
  