import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/withLatestFrom';

import {TodoActions} from '../state/todo.actions';
import {TodoAPI} from '../todo.service';

@Injectable()
export class TodoEffects {
  constructor (
    private action$: Actions,
    private api: TodoAPI
  ) {}

  @Effect() retrieveTodo$: Observable<Action> = this.action$
    .ofType(TodoActions.FETCH_TODO)
    .switchMap(() => this.api.retrieveTodo())
    .map((todos) => ({ type: TodoActions.RETRIEVE_TODO, payload: todos }));

  @Effect() addTodo$: Observable<Action> = this.action$
    .ofType(TodoActions.ADD_TODO)
    .switchMap(action => this.api.addTodo(action.payload))
    .map(todo => ({ type: TodoActions.ADDED_TODO, payload: todo }));

  @Effect() deleteTodo$: Observable<Action> = this.action$
    .ofType(TodoActions.DELETE_TODO)
    .mergeMap(
      (action) => this.api.deleteTodo(action.payload),
      (action, res) => {
        return ({ type: TodoActions.DELETED_TODO, payload: action.payload });
      }
    );
}
