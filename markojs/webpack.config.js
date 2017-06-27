const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');
const ENV = process.env.NODE_ENV || 'development';
const CSS_MAPS = ENV !== 'production';

let webpackConfig = {
  context: path.resolve(__dirname, "src"),
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
    filename: 'bundle.[hash].js'
  },
  resolve: {
    extensions: ['.js', '.marko'],
    modules: ['./', 'node_modules']
  },
  module: {
    rules: [
      {
        test: /\.marko$/,
        exclude: /node_modules/,
        use: 'marko-loader'
      },
      {
        test: /\.(scss|css)$/,
        exclude: [path.resolve(__dirname, 'node_modules')],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: CSS_MAPS, importLoaders: 1 }
            },
            {
              loader: `postcss-loader`,
              options: {
                sourceMap: CSS_MAPS,
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: CSS_MAPS
              }
            }
          ]
        })
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.(yml|yaml)/,
        use: ['json-loader', 'yaml-loader']
      },
      {
        test: /\.(xml|html|txt|md)$/,
        use: 'raw-loader'
      },
      {
        test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
        use: ENV ==='production' ? 'file-loader' : 'url-loader'
      }
    ]
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
      disable: ENV !== 'production'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: { collapseWhitespace: true }
    }),
    new CopyWebpackPlugin([
      { from: './manifest.json', to: './' },
      { from: './assets/favicon.ico', to: './' },
      { from: './assets/', to: './assets/' }
    ])
  ],

  stats: { colors: true },

  node: {
    global: true,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
    setImmediate: false
  }
};

const overrideConfig = require(`./webpack.${process.env.NODE_ENV}.config`);
module.exports = overrideConfig(webpackConfig);
