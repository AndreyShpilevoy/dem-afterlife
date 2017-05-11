/* eslint-disable no-undef, no-console, max-statements, import/no-extraneous-dependencies */
const path = require('path');
const babelJest = require('babel-jest');
const transform = require('transform-jest-deps');
const config = require('../webpack.config.js');

const getWebpackAliasPreprocessor = webpackConfig => {
    const aliases = Object.keys(webpackConfig.resolve.alias).map(key => {
        const value = webpackConfig.resolve.alias[key];
        return {key, value};
    });

    const resolve = require => {
        for (let i = 0; i < aliases.length; i++) {
            const alias = aliases[i];
            const regex = new RegExp(`^${alias.key}$|^${alias.key}(\\/)`);

            if (regex.test(require)) {
                return path.normalize(require.replace(regex, `${alias.value}$1`)).replace(/\\/g, '/');
            }
        }

        return require;
    };

    return {
        process(src) {
            return transform(src, resolve);
        }
    };
};


module.exports = {
    process(src, filePath) {
        return getWebpackAliasPreprocessor(config).process(babelJest.process(src, filePath), filePath);
    }
};
