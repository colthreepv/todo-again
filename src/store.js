import { createStore, applyMiddleware } from 'redux';
import { todoApp } from './reducers';
import thunk from 'redux-thunk';

export default createStore(
  todoApp,
  window.STATE_FROM_SERVER,
  applyMiddleware(thunk)
);
