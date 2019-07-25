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
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract(
                {
                    fallback: 'style-loader',
                    use: ['css-loader']
                }
            )
        },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            template: "index.html"
        }),
        new ExtractTextPlugin({ filename: 'css/style.css' })
    ]
}