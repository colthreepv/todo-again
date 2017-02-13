// import '@ngrx/core/add/operator/select';
import {compose} from '@ngrx/core/compose';
// import {storeLogger} from 'ngrx-store-logger';
import {Action} from '@ngrx/store';
import todoReducer from './data.todo.reducer';

// import heroListReducer, * as fromHeroList from './hero-list';
// import heroReducer, * as fromHero from './hero';

// uncomment the storeLogger import and this line
// and comment out the other export default line to turn on
// the store logger to see the actions as they flow through the store
// turned this off by default as i found the logger kinda noisy

// export default compose(combineReducers)({
//   todo: todoListReducer
// });

export interface LeafState {
  [name: string]: any;
}

export interface AppState {
  ui: LeafState;
  data: LeafState;
}

export default function (state: AppState, action: Action): AppState {
  return {
    ui: {},
    data: {
      todo: todoReducer(state.data['todo'], action)
    }
  };
}

export * from './todo.actions';
