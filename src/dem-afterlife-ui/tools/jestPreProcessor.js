/* eslint-disable no-undef, no-console, max-statements, import/no-extraneous-dependencies */
const babelJest = require('babel-jest');

module.exports = {
    process(src, filename) {
        return babelJest.process(src, filename);
    }
};