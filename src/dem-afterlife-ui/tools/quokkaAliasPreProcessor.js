/* eslint-disable no-underscore-dangle, no-undef, no-console, max-statements, import/no-extraneous-dependencies, prefer-rest-params */
const Module = require('module');
const {resolve} = require('./webpackAliasResolver');

const originalLoad = Module._load;


Module._load = function loadModule() {
    arguments[0] = resolve(arguments[0]);
    return originalLoad.apply(this, arguments);
};