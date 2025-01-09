/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'ar'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en-US',
    // This is a list of locale domains and the default locale they
    // should handle (these are only required when setting up domain routing)
    // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
    domains: [
      {
        domain: 'example.com/en',
        defaultLocale: 'en-US',
      },
      {
        domain: 'example.com/ar',
        defaultLocale: 'ar',
      },
    ],
  },
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
