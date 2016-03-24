import { createStore } from 'redux';
import { todoApp } from './reducers';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';

let store;
if (process.env.NODE_ENV === 'production') {
  store = createStore(
    todoApp,
    window.STATE_FROM_SERVER
    // applyMiddleware(thunk)
  );
} else {
  store = require('./store.dev').default;
}

let rootElem;
if (process.env.NODE_ENV === 'production') {
  rootElem = (
    <Provider store={store}>
      <App/>
    </Provider>
  );
} else {
  const DevTools = require('./devtools').default;
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
