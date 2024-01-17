/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      scrollRestoration: true,
    },
    images: {
      domains: ['firebasestorage.googleapis.com'],
    },
  };
  
  module.exports = nextConfig;
  