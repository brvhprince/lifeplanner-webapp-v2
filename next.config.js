/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');

const withPWA = require('next-pwa')({
    disable: process.env.NODE_ENV === 'development',
    dest: 'public',
    runtimeCaching,
});

module.exports = withPWA({
    reactStrictMode: true,
    images: {
        domains: [
            'expocave.s3.eu-west-2.amazonaws.com',
            'expocave.com',
            'maps.googleapis.com',
            's3.amazonaws.com',
        ],
    },
    env: {
        ENVIRONMENT: process.env.ENVIRONMENT,
        API_URL: process.env.API_URL,
        SITE_URL: process.env.SITE_URL,
    },
    ...(process.env.ENVIRONMENT === 'production' && {
        typescript: {
            ignoreBuildErrors: true,
        },
        eslint: {
            ignoreDuringBuilds: true,
        },
    }),
});
