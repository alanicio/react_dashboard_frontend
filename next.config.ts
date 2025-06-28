import type { NextConfig } from "next";

const nextConfig: NextConfig = {
   async redirects() {
      return [
         {
            source: "/",
            destination: "/dashboard",
            permanent: true,
         },
      ];
   },
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "cdn.jsdelivr.net",
            pathname: "/gh/faker-js/**",
         },
         {
            protocol: "https",
            hostname: "avatars.githubusercontent.com",
         },
      ],
   },
};

export default nextConfig;
