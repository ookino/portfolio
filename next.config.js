// const withPlugins = require('next-compose-plugins');
// const withBundleAnalyzer = require('@next/bundle-analyzer');

// const bundleAnalyzer = withBundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });
// const nextConfig = {
//   reactStrictMode: true,
// };

// module.exports = withPlugins([[bundleAnalyzer]], nextConfig);

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /* If trying out the experimental appDir, comment the i18n config out
   * @see https://github.com/vercel/next.js/issues/41980 */
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
};
module.exports = config;
