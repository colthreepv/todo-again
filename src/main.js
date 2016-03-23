import { createStore } from 'redux';
import { todoApp } from './reducers';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './app';

const store = createStore(
  todoApp,
  window.STATE_FROM_SERVER
  // applyMiddleware(thunk)
);

const unsubscribe = store.subscribe(() => { console.log(store.getState()); });

// store.dispatch(addTodo('asdomasdo!'));

// unsubscribe();

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('container')
);
