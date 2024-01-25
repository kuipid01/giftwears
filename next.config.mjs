/** @type {import('next').NextConfig} */
import withPlaiceholder  from '@plaiceholder/next'
const nextConfig = {
    experimental: {
      scrollRestoration: true,
    },
    images: {
      remotePatterns: [
      {
      hostname: 'firebasestorage.googleapis.com',
      }
      ],
      },
   
   
  };
  export default withPlaiceholder(nextConfig)
 
  