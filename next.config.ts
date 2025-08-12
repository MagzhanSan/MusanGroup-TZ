import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.kapital.kz",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
