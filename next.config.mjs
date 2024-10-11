/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      scrollRestoration: true,
      excludeDefaultMomentLocales: false,
    },
    
    images: {
      domains: ['firebasestorage.googleapis.com'],
    },
  };
 
export default (nextConfig);
  