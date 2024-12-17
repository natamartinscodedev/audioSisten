import type { NextConfig } from "next";
import { webpack } from "next/dist/compiled/webpack/webpack";

// const nextConfig: NextConfig = {
//   /* config options here */

// };

// export default nextConfig;

module.exports = {
  webpack: (config: any, { isServer }: any) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      url: require.resolve("url"),
    };

    config.plugins.push(
      new webpack.DefinePlugin({
        "import.meta.url": "null", // Adiciona suporte básico
      })
    );

    return config;
  },
};
