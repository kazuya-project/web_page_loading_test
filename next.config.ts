import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/web_page_loading_test' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/web_page_loading_test/' : '',
};

export default nextConfig;
