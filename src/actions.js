import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const TYPE_TODO = 'TYPE_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const SAVE_STATE_START = 'SAVE_STATE_START';
export const SAVE_STATE_DONE = 'SAVE_STATE_DONE';

export function addTodo (text) {
  return { type: ADD_TODO, text };
}

export function typeTodo (text) {
  return { type: TYPE_TODO, text };
}

export function checkTodo (id) {
  return { type: CHECK_TODO, id };
}

export function saveState () {
  return function (dispatch, getState) {
    dispatch({ type: SAVE_STATE_START });
    return axios.post('/state', getState())
      .then(() => {
        dispatch({ type: SAVE_STATE_DONE });
      });
  };
}
