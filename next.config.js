const path = require('path');
const withSass = require('@zeit/next-sass');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        camelCase: true
    },
    webpack: (config) => {
        config.resolve.alias['~'] = path.resolve(__dirname, 'src/');
        config.resolve.alias['@ui'] = path.resolve(__dirname, '@ui/');
        config.resolve.alias['@lib'] = path.resolve(__dirname, '@lib/');
        return config;
    }
});