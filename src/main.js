import { createStore } from 'redux';
import { todoApp } from './reducers';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';

let store, DevTools;
store = createStore(
  todoApp,
  window.STATE_FROM_SERVER
  // applyMiddleware(thunk)
);

if (process.env.NODE_ENV === 'development') {
  store = require('./development').store;
  DevTools = require('./development').DevTools;
}

let rootElem;
if (process.env.NODE_ENV === 'production') {
  rootElem = (
    <Provider store={store}>
      <App/>
    </Provider>
  );
} else {
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
