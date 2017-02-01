'use strict';
/*jshint esversion: 6 */
/*jshint node: true */

const fs = require('fs');
const url = require('url');
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

const noop = require('lodash/noop');

const baseConfig = require('./webpack.config.base');
const HOST = '127.0.0.1';
const PORT = 8080;
const HOST_URI = `http://${HOST}:${PORT}`;

module.exports = webpackMerge.smart(baseConfig, {
    devtool: 'cheap-module-eval-source-map',
    entry: {
        app: [
            'webpack/hot/only-dev-server',
            `webpack-dev-server/client?${HOST_URI}`,
            baseConfig.entry.app
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.(less|css)$/,
                loader: 'style!css!postcss-loader!less?sourceMap',
            }
        ]
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        stats: 'minimal',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            '__DEV__': JSON.stringify(true)
        }),
        new HtmlWebpackPlugin({
            template: 'src/template.html'
        }),
    ]
});
