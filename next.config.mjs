/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      scrollRestoration: true,
        missingSuspenseWithCSRBailout: false,
    },
    images: {
      domains: ['firebasestorage.googleapis.com'],
    },
  };
 
export default (nextConfig);
  