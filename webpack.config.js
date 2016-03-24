'use strict';
const path = require('path');
const webpack = require('webpack');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

const pluginList = [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity,
    filename: 'vendor.bundle.js'
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': `"${env}"`
  })
];

if (isProd) { // add plugins in case we're in production
  pluginList.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false
  }));

  pluginList.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    output: {
      comments: false
    },
    sourceMap: false
  }));
}

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
  plugins: pluginList
};
