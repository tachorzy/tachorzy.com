/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Reference: https://nextjs.org/docs/api-reference/next.config.js/environment-variables 
  // for client side env variables
  env: { 
    GETFORM_KEY: process.env.GETFORM_KEY,
  },
  images: {
    domains: [`${process.env.NEXT_PUBLIC_SUPABASE_URL}`],
    remotePatterns: [
      {
        protocol: "https",
        hostname: new URL(process.env.NEXT_PUBLIC_SUPABASE_URL).hostname,
      },
    ],
  }
}

module.exports = nextConfig
