const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
    rules: [
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
        ),
      },
      {
        test: /\.svg$/,
        issuer: {
            test: /\.jsx?$/,
        },
        use: [{
            loader: '@svgr/webpack',
            options: {
                // TODO add special plugin to svgo
                svgo: false,
            },
        }, 'url-loader?limit=10000&mimetype=image/svg+xml'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader?limit=5000&name=assets/[name].[hash].[ext]?'],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'views/index.html'),
      filename: 'index.html',
    }),
    new ExtractTextPlugin({ filename: 'css/style.css' })
  ]
}