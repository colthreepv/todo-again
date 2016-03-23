import { idGenerator as generator } from './id-generator';
import { ADD_TODO, CHECK_TODO } from './actions';
import { TYPE_TODO } from './actions';

import { combineReducers } from 'redux';

// first Todo Manually created
const firstTodo = {
  text: 'Hello World',
  done: true,
  id: generator()
};

const initialList = [firstTodo];
const initialById = {};
initialById[firstTodo.id] = firstTodo; // add todo to init
const initialTodos = { list: initialList, byId: initialById };

function todos (state = initialTodos, action) {
  switch (action.type) {
  case ADD_TODO: {
    const newTodo = { text: action.text, done: false, id: generator() };
    const hashPatch = {};
    hashPatch[newTodo.id] = newTodo;
    return {
      list: [...state.list, newTodo],
      byId: Object.assign({}, state.byId, hashPatch)
    };
  }
  case CHECK_TODO: {
    const todo = state.byId[action.id];
    const newTodo = Object.assign({}, todo, { done: !todo.done });
    const hashPatch = {};
    hashPatch[newTodo.id] = newTodo;
    return {
      list: state.list.map(listItem => {
        if (listItem.id === action.id) return newTodo;
        return listItem;
      }),
      byId: Object.assign({}, state.byId, hashPatch)
    };
  }
  default: return state;
  }
}

function typing (state = '', action) {
  switch (action.type) {
  case TYPE_TODO:
    return action.text;
  default:
    return state;
  }
}

export const todoApp = combineReducers({ todos, typing });
