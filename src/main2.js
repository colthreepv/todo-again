import { createStore } from 'redux';
import { todoApp } from './reducers';
import { addTodo } from './actions';
const store = createStore(todoApp, window.STATE_FROM_SERVER);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addTodo('asdomasdo!'));

unsubscribe();
