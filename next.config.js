const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
  register: true,
  skipWaiting: true,
  extendDefaultRuntimeCaching: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  workboxOptions: {
    runtimeCaching: [
      // Your runtimeCaching array
    ]
  }
});

module.exports = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'platform-lookaside.fbsbx.com'
      }
    ]
  }
});
