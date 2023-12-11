/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

nextConfig.webpack = (config, context) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: '@svgr/webpack',
  });
  return config;
};

module.exports = nextConfig;
