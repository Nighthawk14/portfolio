const merge = require('webpack-merge');

module.exports = function (origWebpackConfig) {
  return merge(origWebpackConfig, {
    devServer: {
      port: process.env.PORT || 8080,
      host: 'localhost',
      publicPath: '/',
      contentBase: './src',
      historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map'
  });
};
