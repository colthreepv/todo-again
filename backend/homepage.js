'use strict';
const path = require('path');
const levelup = require('levelup');
const Promise = require('bluebird');

const lvl = levelup(path.join(__dirname, '..', 'level.db'));
Promise.promisifyAll(lvl);

// client deps
const React = require('react');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;
const renderToString = require('react-dom/server').renderToString;
const App = require('../build/bundle').App;
const todoApp = require('../build/bundle').todoApp;

function homepage () {
  const initialState = getState().catch(NotFoundError, () => undefined);
  return initialState.then(templateHome);
}

module.exports = homepage;

// retrieves state from levelup
function getState () {
  return lvl.getAsync('state').then(data => JSON.parse(data));
}

function setState (state) {
  return lvl.putAsync('state', JSON.stringify(state));
}

function NotFoundError (err) { return err.notFound; }

// templating
function templateHome (initialState) {
  const store = createStore(todoApp, initialState);
  const html = renderToString(
    React.createElement(Provider, { store },
      React.createElement(App)
    )
  );

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="container">${html}</div>
    <script>window.STATE_FROM_SERVER = ${initialState}</script>
    <script src="/build/vendor.bundle.js"></script>
    <script src="/build/bundle.js"></script>
  </body>
  </html>`;
}
