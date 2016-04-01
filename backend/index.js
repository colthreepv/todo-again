'use strict';
const express = require('express');
const bodyparser = require('body-parser');
const promesso = require('promesso');

const homepage = require('./homepage');
const api = require('./api');
const serveStatic = require('./serve-static');

const isProd = process.env.NODE_ENV === 'production';
const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => { console.log(req.url); next(); });

if (!isProd) {
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackConfig = require('../webpack.config');
  app.use(webpackMiddleware(webpack(webpackConfig), {
    publicPath: '/build/'
  }));
} else {
  app.get('/build/*', serveStatic);
}

app.get('/', promesso(homepage));
app.post('/state', promesso(api.postState));
app.use((err, req, res, next) => {
  console.log(err.stack);
});

function listenCallback () {
  const address = this.address();
  console.log(`Server listening to http://${address.address}:${address.port}/`);
}

if (require.main === module) app.listen(8080, '127.0.0.1', listenCallback);
