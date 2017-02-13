import {compose} from '@ngrx/core/compose';
import {Action, ActionReducer, combineReducers} from '@ngrx/store';
import {storeLogger} from 'ngrx-store-logger';

import { environment } from '../../environments/environment';
import todoReducer from './data.todo.reducer';

export interface LeafState {
  [name: string]: any;
}

export interface State {
  todo: LeafState;
}

const reducers: State = {
  todo: todoReducer
};

const developmentReducer: ActionReducer<State> = compose(storeLogger(), combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export default function reducer (state: State, action: Action): State {
  if (environment.production) {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

export * from './todo.actions';
