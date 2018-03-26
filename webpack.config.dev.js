const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');
const resolve = require('path').resolve;
const webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  target: 'web',
  module: {
    rules: [{
      test: /\.js?$/,
      use: 'babel-loader',
      include: [
        path.join(__dirname, 'src')
      ]
    }, {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        use: [
          'css-loader?sourceMap',
          `sass-loader?sourceMapContents=true`,
          'postcss-loader'
        ]
      })
    }]
  },
  resolve: {
    alias: {
      'components': resolve(__dirname, 'src/components'),
      'data': resolve(__dirname, 'src/data'),
      'views': resolve(__dirname, 'src/views')
    },
    extensions: ['*', '.js', '.jsx'],
    modules: [
      'src',
      'node_modules'
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BUILD_TARGET': JSON.stringify('bundle')
      }
    }),
    new ExtractTextPlugin('style.css')
  ],
  devServer: {
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  output: {
    path: path.join(__dirname, '.build'),
    publicPath: 'http://localhost:3001/',
    filename: 'bundle.js'
  }
}
