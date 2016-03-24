import { createStore } from 'redux';
import { todoApp } from './reducers';
import DevTools from './devtools';

export default createStore(
  todoApp,
  window.STATE_FROM_SERVER,
  DevTools.instrument()
);
