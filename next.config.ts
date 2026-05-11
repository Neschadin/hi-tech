import { codeInspectorPlugin } from 'code-inspector-plugin';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/lenovo-warranty',
        destination: '/services/lenovo',
        permanent: true,
      },
    ];
  },
  // output: 'standalone',
  experimental: {
    appNewScrollHandler: true,
  },
  logging: {
    // browserToTerminal: true,
    serverFunctions: true,
  },
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: 'turbopack',
    }),
  },
  // eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;
