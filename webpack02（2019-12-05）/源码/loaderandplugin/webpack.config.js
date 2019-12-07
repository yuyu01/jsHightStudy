const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    // mode: 'development',
    mode: 'production',

    devtool: 'source-map',

    entry: {
        // 'urlLoader': './src/urlLoader.js',
        'cssLoader': './src/cssLoader.js'
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        outputPath: './images/',
                        publicPath: '/dist/images',
                        // 字节
                        limit: 100
                    }
                }
            },

            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    // {
                    //     loader: 'style-loader',
                    //     options: {
                    //         insert: 'body'
                    //     }
                    // },
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "My App",
            filename: "app.html",
            template: "./html/template.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]

};