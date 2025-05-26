/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  // Remove any src directory configuration
  distDir: '.next',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': require('path').resolve(__dirname),
    }
    return config
  },
}
// frontend/next.config.js
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
}
module.exports = nextConfig 