const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    devtool: 'source-map',
    entry: {
        main: [
            'babel-polyfill',
            'react-hot-loader/patch',
            './index.jsx',
        ]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    context: path.resolve(__dirname, './'),
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }
        },
        {
            test: /\.jsx?$/,
            use: ['babel-loader', 'eslint-loader'],
            exclude: /node_modules/,
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },

            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            },
            {
                test: /\.pcss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            camelCase: true,
                            localIdentName: '[local]_[hash:base64:5]',
                        },
                    },
                    { loader: 'postcss-loader' },
                ],
            },
        ]
    },
    resolve: {
        modules: ['./', 'node_modules'],
        extensions: ['.js', '.jsx', '.pcss'],
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            template: "index.html"
        }),
        new ExtractTextPlugin({ filename: 'css/style.css' })
    ]
}