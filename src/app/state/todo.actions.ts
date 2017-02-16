import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Todo} from '../todo';

@Injectable()
export class TodoActions {
  static ADD_TODO_START = 'ADD_TODO_START';
  addTodo (text: string): Action {
    return { type: TodoActions.ADD_TODO_START, payload: {text} };
  }

  static ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
  addTodoSuccess (todo: Todo): Action {
    return { type: TodoActions.ADD_TODO_SUCCESS, payload: {todo} };
  }

  static ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';
  addTodoFailure (): Action {
    return { type: TodoActions.ADD_TODO_FAILURE, payload: {} };
  }

  static TOGGLE_TODO = 'TOGGLE_TODO';
  toggleTodo (id: number): Action {
    return { type: TodoActions.TOGGLE_TODO, payload: {id} };
  }

  static DELETE_TODO = 'DELETE_TODO';
  deleteTodo (id: number): Action {
    return { type: TodoActions.TOGGLE_TODO, payload: {id} };
  }
}
