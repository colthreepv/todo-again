import { Action } from '@ngrx/store';
import { List } from 'immutable';
import { TodoActions } from './todo.actions';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoListState = List<Todo>;

const initialState = List.of(null as Todo);

export default function (state = initialState, action: Action): TodoListState {
  switch (action.type) {
    case TodoActions.ADD_TODO_SUCCESS: {
      return state.push(action.payload);
    }

    // FIXME: missing AJAX
    case TodoActions.TOGGLE_TODO: {
      const todo: Todo = state.get(action.payload.idx);
      return state.set(action.payload.idx, Object.assign({}, todo, { completed: !todo.completed }));
    }

    case TodoActions.DELETE_TODO: {
      return state.delete(action.payload.idx);
    }

    // missing actions!
    default: { return state; }
  }
}
