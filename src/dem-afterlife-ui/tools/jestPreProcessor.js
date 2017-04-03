/* eslint-disable no-undef, no-console, max-statements, import/no-extraneous-dependencies */
const babelJest = require('babel-jest');

module.exports = {
    process(src, filename) {
        if (filename.match(/\.(png|gif|jpeg|jpg|svg|tiff|bmp)$/)) {
            return '';
        }

        return babelJest.process(src, filename);
    }
};