'use strict';
const express = require('express');
const bodyparser = require('body-parser');
const promesso = require('promesso');

const homepage = require('./homepage');
const serveStatic = require('./serve-static');

const app = express();

app.use(bodyparser.json());

app.use((req, res, next) => { console.log(req.url); next(); });

app.get('/build/*', serveStatic);

app.get('/', promesso(homepage));
app.post('/state', function (res, req, next) {
  console.log('POST /state');
  console.log(req.body);
  res.send({ status: 'ok' });
});
app.use((err, req, res, next) => {
  console.log(err.stack);
});

function listenCallback () {
  const address = this.address();
  console.log(`Server listening to http://${address.address}:${address.port}/`);
}

if (require.main === module) app.listen(8080, '127.0.0.1', listenCallback);
