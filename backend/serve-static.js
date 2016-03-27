'use strict';
const path = require('path');
const serveStatic = require('serve-static');
const serveMiddleware = serveStatic(path.join(__dirname, '..', 'build'));

function serve (req, res, next) {
  req.url = req.url.replace('/build/', '');
  next();
}

module.exports = [serve, serveMiddleware];
