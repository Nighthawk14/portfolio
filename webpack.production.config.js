// @AngularClass

/*
 * Helper: root(), and rootDir() are defined at the bottom
 */
 var path = require('path');
 // Webpack Plugins
 var webpack = require('webpack');
 var ProvidePlugin = require('webpack/lib/ProvidePlugin');
 var DefinePlugin = require('webpack/lib/DefinePlugin');
 var OccurenceOrderPlugin = require('webpack/lib/optimize/OccurenceOrderPlugin');
 var DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
 var UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
 var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
 var CopyWebpackPlugin = require('copy-webpack-plugin');
 var HtmlWebpackPlugin = require('html-webpack-plugin');
 var WebpackMd5Hash    = require('webpack-md5-hash');
 var ENV = process.env.NODE_ENV = process.env.ENV = 'production';
 var HOST = process.env.HOST || '0.0.0.0';
 var PORT = process.env.PORT || 8080;
var autoprefixer = require('autoprefixer');
var precss       = require('precss');
// Webpack Plugins
var metadata = {
  title: 'Antoine Savignac',
  baseUrl: '/',
  host: HOST,
  port: PORT,
  ENV: ENV
};

/*
 * Config
 */
module.exports = {
  metadata: metadata,
  // for faster builds use 'eval'
  devtool: 'source-map',
  debug: true, // remove in production

  entry: {
    'vendor': './src/vendor.ts',
    'app': './src/bootstrap.ts' // our angular app
  },

  // Config for our build files
  output: {
    path: root('dist'),
    filename: '[name].[chunkhash].bundle.js',
    sourceMapFilename: '[name].[chunkhash].bundle.map',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  resolve: {
    // ensure loader extensions match
    extensions: ['','.ts','.js','.json', '.css', '.html', '.scss']
  },

  module: {
    preLoaders: [
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        exclude: [
          /node_modules/
        ]
      }
    ],
    loaders: [
      // Support for .ts files.
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        query: {
          // remove TypeScript helpers to be injected below by DefinePlugin
          'compilerOptions': {
            'removeComments': true,
            'noEmitHelpers': true,
          },
          'ignoreDiagnostics': [
            2403, // 2403 -> Subsequent variable declarations
            2300, // 2300 -> Duplicate identifier
            2374, // 2374 -> Duplicate number index signature
            2375  // 2375 -> Duplicate string index signature
          ]
        },
        exclude: [ /\.(spec|e2e)\.ts$/, /node_modules\/(?!(ng2-.+))/ ]
      },

      // Support for *.json files.
      { test: /\.json$/,  loader: 'json-loader' },

      // Support for CSS as raw text
      { test: /\.css$/,   loader: 'raw-loader' },

      // support for .html as raw text
      { test: /\.html$/,  loader: 'raw-loader' },

      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
			{ test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },

      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'raw-loader!postcss-loader!sass-loader'
      }
    ],
    noParse: [ /.+zone\.js\/dist\/.+/, /.+angular2\/bundles\/.+/ ]
  },
  postcss: function () {
        return [autoprefixer, precss];
  },
  plugins: [
    new WebpackMd5Hash(),
    new DedupePlugin(),
    new OccurenceOrderPlugin(true),
    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.[chunkhash].bundle.js',
      minChunks: Infinity
    }),
    // static assets
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets'
      }
    ]),
    // generating html
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new DefinePlugin({
      // Environment helpers
      'process.env': {
        'ENV': JSON.stringify(metadata.ENV),
        'NODE_ENV': JSON.stringify(metadata.ENV)
      },
      // TypeScript helpers
      '__metadata': 'Reflect.metadata',
      '__decorate': 'Reflect.decorate'
    }),
    new ProvidePlugin({
      // '__metadata': 'ts-helper/metadata',
      // '__decorate': 'ts-helper/decorate',
      '__awaiter': 'ts-helper/awaiter',
      '__extends': 'ts-helper/extends',
      '__param': 'ts-helper/param',
      'Reflect': 'es7-reflect-metadata/dist/browser'
    }),
    new UglifyJsPlugin({
      // beautify: true,
      // mangle: false,
      comments: false,
      compress : {
        screw_ie8 : true
      },
      mangle: {
        screw_ie8 : true
      }
    })
   // include uglify in production
  ],

  // Other module loader config
  tslint: {
    emitErrors: true,
    failOnHint: true
  },
  node: {
    global: 'window',
    progress: false,
    crypto: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};

// Helper functions

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

function rootNode(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return root.apply(path, ['node_modules'].concat(args));
}
