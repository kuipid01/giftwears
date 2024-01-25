/** @type {import('next').NextConfig} */
import withPlaiceholder  from '@plaiceholder/next'
const nextConfig = {
    experimental: {
      scrollRestoration: true,
    },
    images: {
      domains: ['firebasestorage.googleapis.com'],
      remotePatterns: ['https://firebasestorage.googleapis.com/**/*'],
    },
  
   
  };
  export default withPlaiceholder(nextConfig)
 
  