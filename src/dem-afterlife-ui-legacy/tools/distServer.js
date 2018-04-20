/* eslint-disable no-undef, no-console, max-statements, import/no-extraneous-dependencies, no-param-reassign */

import colors from 'colors'; // eslint-disable-line no-unused-vars
import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import BundleAnalyzerPlugin from 'webpack-bundle-analyzer/lib/BundleAnalyzerPlugin';
import webpackConfig from '../webpack.config';

const port = 60784;

const runExpressServer = () =>
    new Promise(
        (resolve, reject) => {
            const app = express();

            app.use(express.static('../dem-afterlife/wwwroot'));
            app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../../dem-afterlife/wwwroot/index.html')));
            app.listen(port, error => {
                if (error) {
                    reject(error);
                } else {
                    open(`http://localhost:${port}`);
                    resolve('It\'s ready to roll!');
                }
            });
        }
    );

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.green);

const compiler = webpack(webpackConfig);
compiler.apply(new BundleAnalyzerPlugin({analyzerPort: port + 1, openAnalyzer: false}));
compiler.run((error, stats) => {
    if (error) { // so a fatal error occurred. Stop here.
        console.log(error.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.errors.length > 0) {
        return jsonStats.errors.map(innerError => console.log(innerError.red));
    }

    if (jsonStats.warnings.length > 0) {
        console.log('Webpack generated the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    // if we got this far, the build succeeded.
    console.log('Your app is compiled in production mode in ../dem-afterlife/wwwroot.'.green);
    console.log('Starting up Express server...'.green);
    runExpressServer()
        .then(message => {
            console.log(message.green);
            return 0;
        })
        .catch(innerError => {
            console.log(innerError.red);
            return 1;
        });
    return 0;
});