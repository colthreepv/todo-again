import { createStore } from 'redux';
import { todoApp } from './reducers';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';

let DevTools;
let store = createStore( // defaults to production
  todoApp,
  window.STATE_FROM_SERVER
  // applyMiddleware(thunk)
);

if (process.env.NODE_ENV === 'development' && process.env.DEVTOOLS === true) {
  store = require('./development').store;
  DevTools = require('./development').DevTools;
}

if (process.env.NODE_ENV === 'development' && process.env.DEVTOOLS === false) {
  store = require('./store.dev').default;
}

let rootElem = ( // defaults to production
  <Provider store={store}>
    <App/>
  </Provider>
);

if (process.env.NODE_ENV === 'development' && process.env.DEVTOOLS === true) {
  rootElem = (
    <Provider store={store}>
      <div>
        <App/>
        <DevTools/>
      </div>
    </Provider>
  );
}

render(rootElem, document.getElementById('container'));
