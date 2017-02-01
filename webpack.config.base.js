'use strict';
/*jshint esversion: 6 */
/*jshint node: true */

const path = require('path');
const webpack = require('webpack');
const packageJson = require('./package.json');

const dependencies = Object.keys(packageJson.dependencies).filter(d => d !== 'normalize.css');
const BASE_DIR = __dirname;
const ENV = process.env.NODE_ENV;

module.exports = {
    ENV,
    entry: {
        app: path.join(BASE_DIR, 'src', 'app', 'client.js'),
        vendor: dependencies
    },
    resolve: {
        alias: {
            basedir: path.resolve(BASE_DIR)
        },
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(BASE_DIR, './dist'),
        publicPath: '/',
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        noParse: dependencies, // TODO if smth goes wrong, check this
        preLoaders: [
            {
                loader: 'eslint',
                include: [path.join(BASE_DIR, 'src')],
                exclude: /(node_modules|bower_components|dist)/,
                test: /\.jsx?$/
            }
        ],
        loaders: [
            { test: /\.(html|txt)/, loader: 'raw' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.(woff|woff2|eot|ttf)$/, loader: 'url-loader?limit=100000', exclude: /https/ },
            { test: /\.(png|jpg|jpeg)$/, loader: 'file?name=assets/[name].[ext]', exclude: /https/ },
            {
                test: /\.svg$/,
                loader: 'svg-sprite?' + JSON.stringify({
                    name: '[name]_[hash]',
                    prefixize: true
                })
            }
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            'ENV': JSON.stringify(ENV),
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['app', 'vendor'],
            minChunks: Infinity
        })
    ]
};
