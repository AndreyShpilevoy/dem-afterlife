/* eslint-disable no-undef, no-console , import/no-extraneous-dependencies */

const colors = require('colors'); // eslint-disable-line no-unused-vars
const express = require('express');
const fs = require('fs');
const open = require('open');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackConfig = require('../webpack.config');


const port = 60782;
const host = 'localhost';
const app = express();
const compiler = webpack(webpackConfig);
compiler.apply(new BundleAnalyzerPlugin({analyzerPort: port + 1}));
const middleware = webpackDevMiddleware(compiler, {
    contentBase: `http://${host}:${port}`,
    quiet: false,
    noInfo: false,
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
        assets: true,
        colors: true,
        version: false,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false
    }
});

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

const content = fs.readFileSync(path.join(__dirname, '../src/index.html'), 'utf-8');
const newValue = content.replace(/(?:<%(.*)%>)/g, '')
    .replace(/(<link (?:.*)>)/g, '')
    .replace(/src=""/g, 'src="/js/vendor.js"></script><script type="text/javascript" src="/js/app.js"');

app.get('*', (req, res) => {
    res.send(newValue);
});

app.listen(port, error => {
    if (error) {
        console.log(error.red);
    } else {
        open(`http://${host}:${port}`);
    }
});
