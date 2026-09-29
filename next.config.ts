import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/privacidade", destination: "/privacy", permanent: true },
      { source: "/politica-de-cookies", destination: "/cookies", permanent: true },
    ];
  },
};

export default nextConfig;
