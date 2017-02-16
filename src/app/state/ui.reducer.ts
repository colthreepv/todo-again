import { Action } from '@ngrx/store';
import { Map } from 'immutable';
import { UiActions } from './ui.actions';

import { Todo } from '../todo';

export interface UiState {
  [key: string]: any;
};

// const initialState = Map.of(null as Todo);

const initialState: UiState = {
  ajax_error: false
};

export default function (state = initialState, action: Action): UiState {
  switch (action.type) {
    // missing actions!
    default: { return state; }
  }
}
