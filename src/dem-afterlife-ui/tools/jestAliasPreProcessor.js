/* eslint-disable no-undef, no-console, max-statements, import/no-extraneous-dependencies */
const babelJest = require('babel-jest');
const {resolve} = require('./webpackAliasResolver');

const getWebpackAliasPreprocessor = src => src.replace(/(require|jest.mock)\('([^)]+)'/g, (match, p1, p2) => `${p1}('${resolve(p2)}'`);

const createTransformer = () => ({
    canInstrument: true,
    getCacheKey(fileData, filename, configString, _ref) {
        return babelJest.getCacheKey(fileData, filename, configString, _ref);
    },
    process(src, filename, config, transformOptions) {
        return getWebpackAliasPreprocessor(babelJest.process(src, filename, config, transformOptions));
    }
});
module.exports = createTransformer();