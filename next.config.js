const path = require('path');
const withCss = require('@zeit/next-css');
const withSass = require('@zeit/next-sass');

let config = withSass(withCss({
    cssModules: true,
    cssLoaderOptions: {
        camelCase: true
    },
    sassLoaderOptions: {
        camelCase: true
    },
    webpack: (config) => {
        config.resolve.alias['~'] = path.resolve(__dirname, 'src/');
        config.resolve.alias['@ui'] = path.resolve(__dirname, '@ui/');
        config.resolve.alias['@lib'] = path.resolve(__dirname, '@lib/');
        return config;
    }
}));

module.exports = config;