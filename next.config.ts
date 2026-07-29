import { codeInspectorPlugin } from "code-inspector-plugin";
import type { NextConfig } from "next";

import staticRedirects from "./workers/legacy-redirects/static-redirects.json";

const nextConfig: NextConfig = {
  async redirects() {
    // Prod: hi-tech-legacy-redirects Worker. Dev only below. Sunset: lib/seo/legacyRedirects.ts
    return staticRedirects.redirects.map(({ path, destination }) => ({
      source: path,
      destination,
      permanent: true
    }));
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
