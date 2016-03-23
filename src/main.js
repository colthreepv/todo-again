import { createStore } from 'redux';
import { todoApp } from './reducers';
import { addTodo } from './actions';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { TodoApp } from 'todoapp';

const store = createStore(todoApp, window.STATE_FROM_SERVER);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(addTodo('asdomasdo!'));

// unsubscribe();

render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('container')
);
