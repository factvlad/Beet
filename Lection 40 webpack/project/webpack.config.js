const path = require("path");
const webpack = require("webpack")
const HtmlWebpackplugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: "development",
    target: "web",
    context: path.resolve(__dirname, "./src"),
    entry: {
        // "ionicons-webpack!": "./ionicons-webpack/ionicons.config.js",
        main: "./main.js",
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].bundle.js"
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackplugin({
            template: "./template.html",
            filename: "index.html"
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CssMinimizerPlugin()
    ],
    module: {
        rules: [
            // изображения
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[path][name].[ext]',
                    },
                }],

            }, {
                test: /\.(scss)$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                    loader: 'css-loader', // translates CSS into CommonJS modules
                    options: {
                        sourceMap: true,
                    }
                }, {
                    loader: 'postcss-loader', // Run post css actions
                }, {
                    loader: 'sass-loader', // compiles Sass to CSS
                    options: {
                        sourceMap: true,
                    }
                }]
            },
        ],
    },
}

