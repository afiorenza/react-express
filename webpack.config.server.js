const nodeExternals = require('webpack-node-externals');
const path = require('path');
const StartServerPlugin = require('start-server-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: [
    'webpack/hot/poll?1000',
    './server'
  ],
  watch: true,
  target: 'node',
  externals: [nodeExternals({
    whitelist: ['webpack/hot/poll?1000']
  })],
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }]
  },
  plugins: [
    new StartServerPlugin('server.js'),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BUILD_TARGET': JSON.stringify('server')
      }
    })
  ],
  output: {
    path: path.join(__dirname, '.build'),
    filename: 'server.js'
  }
}
