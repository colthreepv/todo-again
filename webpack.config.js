'use strict';
const path = require('path');
const webpack = require('webpack');

const pkg = require('./package.json');

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
} else {
  pluginList.push(new webpack.LoaderOptionsPlugin({
    minimize: false,
    debug: true
  }));
}

module.exports = {
  devtool: 'cheap-module-source-map', // not sure it works?
  entry: {
    js: path.join(__dirname, 'src', 'main.js'),
    vendor: Object.keys(pkg.dependencies)
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
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ]
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
