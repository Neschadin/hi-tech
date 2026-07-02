import { codeInspectorPlugin } from "code-inspector-plugin";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/lenovo-warranty",
        destination: "/services/lenovo",
        permanent: true
      }
    ];
  },
  async rewrites() {
    return process.env.NODE_ENV !== "development"
      ? []
      : [
          {
            source: "/api/repair-status",
            destination: "http://localhost:8787/"
          }
        ];
  },
  // output: 'standalone',
  experimental: {
    appNewScrollHandler: true
  },
  logging: {
    // browserToTerminal: true,
    serverFunctions: true
  },
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: "turbopack"
    })
  }
  // eslint: { ignoreDuringBuilds: true },
};

module.exports = nextConfig;

import("@opennextjs/cloudflare").then((m) => m.initOpenNextCloudflareForDev());
