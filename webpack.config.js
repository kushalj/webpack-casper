
const path = require('path');  
const webpack = require('webpack');  
const autoprefixer = require('autoprefixer');

module.exports = {  
    entry: [
        path.join(__dirname, './assets/js/webpack.entry.js')
    ],
     output: {
        path: __dirname + '/assets/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(ttf|eot|woff)(\?.*)?$/,
                loaders: ['url-loader']
            },
            {
                test: /\.(svg)(\?.*)?$/,
                loaders: ['url-loader', 'svgo-loader']
            },
            {
                test:   /\.css$/,
                loaders: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['eslint-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
}; // end config

