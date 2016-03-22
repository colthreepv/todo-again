export const ADD_TODO = 'ADD_TODO';
export const TYPE_TODO = 'TYPE_TODO';
export const CHECK_TODO = 'CHECK_TODO';

export function addTodo (text) {
  return { type: ADD_TODO, text };
}

export function typeTodo (text) {
  return { type: TYPE_TODO, text };
}

export function checkTodo (id) {
  return { type: CHECK_TODO, id };
}
