'use strict';
const path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, 'src', 'main2.js')
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot', 'babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader?modules']
      }
    ]
  },
  devServer: {
    devtool: '#cheap-module-eval-source-map'
  }
};
