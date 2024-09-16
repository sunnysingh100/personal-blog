/** @type {import('next').NextConfig} */

import {withContentlayer} from "next-contentlayer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.devtool = "source-map"; // Enable source maps for better debugging
    }
    return config;
  },
};

export default withContentlayer(nextConfig);
