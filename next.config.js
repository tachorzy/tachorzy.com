/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Reference: https://nextjs.org/docs/api-reference/next.config.js/environment-variables 
  // for client side env variables
  env: { 
    GETFORM_KEY: process.env.GETFORM_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: '**.supabase.co',
        port: '',
        pathname:"/storage/v1/object/public/travel-photos/**",
      },
    ],
  }
}

module.exports = nextConfig
