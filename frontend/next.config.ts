// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

// Access both local and remote media sources but still use the built-in Next.js Image Optimization API.
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      // },
      // {
      //   protocol: 'https',
      //   hostname: 'images.pexels.com',
      }
    ],
  },
};

module.exports = nextConfig;