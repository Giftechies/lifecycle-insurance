/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
    ],
  },

  webpack(config) {
    // SVG as React component
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      resourceQuery: /component/,
      use: ['@svgr/webpack'],
    });

    // SVG as file (for next/image or <img>)
    config.module.rules.push({
      test: /\.svg$/i,
      type: 'asset/resource',
    });

    return config;
  },
};

module.exports = nextConfig;
