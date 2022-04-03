const nextTranslate = require('next-translate');
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// });

module.exports = nextTranslate({
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    // Will be available on both server and client
    baseURL: process.env.BASE_URL,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },
});
