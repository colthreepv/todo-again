import { Action } from '@ngrx/store';
import { Map } from 'immutable';
import { TodoActions } from './todo.actions';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoListState = Map<string, Todo>;

// const initialState = Map.of(null as Todo);

const initialState = Map({
  asdomasdo: {
    id: 'asdomasdo',
    text: 'Hello World',
    completed: false
  },
  castorualdo: {
    id: 'castorualdo',
    text: 'Yeahhhh',
    completed: true
  }
});

export default function (state = initialState, action: Action): TodoListState {
  switch (action.type) {
    case TodoActions.ADD_TODO_SUCCESS: {
      const newTodo: Todo = action.payload;
      return state.set(newTodo.id, newTodo);
    }

    // FIXME: missing AJAX
    case TodoActions.TOGGLE_TODO: {
      const todo: Todo = state.get(action.payload);
      return state.set(action.payload, Object.assign({}, todo, { completed: !todo.completed }));
    }

    case TodoActions.DELETE_TODO: {
      return state.delete(action.payload.id);
    }

    // missing actions!
    default: { return state; }
  }
}
