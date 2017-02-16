import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';

import {Todo} from '../todo';

@Injectable()
export class TodoActions {
  static ADD_TODO = 'ADD_TODO';
  static ADDED_TODO = 'ADDED_TODO';

  static TOGGLE_TODO = 'TOGGLE_TODO';
  static TOGGLED_TODO = 'TOGGLED_TODO';

  static DELETE_TODO = 'DELETE_TODO';
  static DELETED_TODO = 'DELETED_TODO';

  static FETCH_TODO = 'FETCH_TODO';
  static RETRIEVE_TODO = 'RETRIEVE_TODO';
}
