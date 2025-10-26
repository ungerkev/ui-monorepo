import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/shared"],
  output: "standalone",
};

export default nextConfig;
