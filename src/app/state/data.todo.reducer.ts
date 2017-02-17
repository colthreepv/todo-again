import { Action } from '@ngrx/store';
import { Map } from 'immutable';
import { TodoActions } from './todo.actions';

import { Todo } from '../todo';

export type TodoListState = Map<string, Todo>;

// const initialState = Map.of(null as Todo);

const initialState: TodoListState = Map<string, Todo>();

export default function (state = initialState, action: Action): TodoListState {
  switch (action.type) {
    case TodoActions.ADDED_TODO: {
      const newTodo: Todo = action.payload;
      return state.set(newTodo.id, newTodo);
    }

    // FIXME: missing AJAX
    case TodoActions.TOGGLE_TODO: {
      const todo: Todo = state.get(action.payload);
      return state.set(action.payload, Object.assign({}, todo, { completed: !todo.completed }));
    }

    case TodoActions.DELETED_TODO: {
      return state.delete(action.payload);
    }

    case TodoActions.RETRIEVE_TODO: {
      const payload: Todo[] = action.payload;
      const hashed = payload.reduce((hash, curr: Todo) => { hash[curr.id] = curr; return hash; }, {});
      return Map<string, Todo>(hashed);
    }

    default: { return state; }
  }
}
