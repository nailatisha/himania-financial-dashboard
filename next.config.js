/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Skip static optimization for API routes during build
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig
