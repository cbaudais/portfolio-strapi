const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'funny-talent-236dd195b1.media.strapiapp.com',
      }
    ],
  },
};

module.exports = nextConfig;