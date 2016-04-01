'use strict';
require('babel-register')({
  babelrc: false,
  presets: ['es2015', 'react'],
  plugins: ['css-modules-transform'],
  only: 'src'
});

const l = require('./level');
const bundles = require('./config').bundles;

// client deps
const React = require('react');
const createStore = require('redux').createStore;
const Provider = require('react-redux').Provider;
const renderToString = require('react-dom/server').renderToString;
const App = require('../src/app').default;
const todoApp = require('../src/reducers').todoApp;

function homepage () {
  const initialState = l.getState().catch(l.NotFoundError, () => undefined);
  return initialState.then(templateHome);
}

module.exports = homepage;

// templating
function templateHome (initialState) {
  console.log(initialState);
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
    <script>window.STATE_FROM_SERVER = ${JSON.stringify(initialState)}</script>
    <script src="/build/${bundles.vendor}"></script>
    <script src="/build/${bundles.js}"></script>
  </body>
  </html>`;
}
