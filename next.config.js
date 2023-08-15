/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: { serverActions: true },
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
};

module.exports = nextConfig;
