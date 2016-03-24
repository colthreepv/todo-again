'use strict';
const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    devtool: '#cheap-module-eval-source-map'
  },
  entry: {
    js: path.join(__dirname, 'src', 'main.js'),
    vendor: ['react', 'react-redux', 'redux']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules']
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      'web_modules'
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    })
  ]
};
