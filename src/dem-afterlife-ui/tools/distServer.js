/* eslint-disable no-undef, no-console , import/no-extraneous-dependencies */

const colors = require('colors'); //eslint-disable-line no-unused-vars
const express = require('express');
const open = require('open');
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');

const runExpressServer = () =>
    new Promise(
        (resolve, reject) => {
            const app = express();
            const port = 60784;

            app.use(express.static('../dem-afterlife/wwwroot'));
            app.get('*', (req, res) => (res.sendFile(path.join(__dirname, '../../dem-afterlife/wwwroot/index.html'))));
            app.listen(port, (error) => {
                if (error) {
                    reject(error);
                }
                else {
                    open(`http://localhost:${port}`);
                    resolve('It\'s ready to roll!');
                }
            });
        }
    );

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.green);

webpack(webpackConfig).run((error, stats) => {

    if (error) { // so a fatal error occurred. Stop here.
        console.log(error.bold.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if (jsonStats.hasWarnings) {
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
        .catch(error => {
            console.log(error.red);
            return 1;
        });
});