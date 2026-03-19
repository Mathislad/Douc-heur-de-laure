import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh5.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "graph.facebook.com",
      },
      {
        protocol: "https",
        hostname: "img3.beautynailhairsalons.com",
      },
      {
        protocol: "https",
        hostname: "img4.beautynailhairsalons.com",
      },
      {
        protocol: "https",
        hostname: "img5.beautynailhairsalons.com",
      },
    ],
  },
};

export default nextConfig;
