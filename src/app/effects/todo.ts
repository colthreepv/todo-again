import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action, Store} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

import {State} from '../state';
import {TodoActions} from '../state/todo.actions';
import {UiActions} from '../state/ui.actions';
import {TodoAPI} from '../todo.service';

const ajaxErr = { type: UiActions.AJAX_ERROR };

@Injectable()
export class TodoEffects {
  constructor (
    private action$: Actions,
    private api: TodoAPI,
    private store: Store<State>
  ) {}

  @Effect() retrieveTodo$: Observable<Action> = this.action$
    .ofType(TodoActions.FETCH_TODO)
    .switchMap(() => {
      const returnError = Math.random() > 0.2;
      return returnError ? Observable.throw('Bad Stuff Happened sir') : this.api.retrieveTodo();
    })
    .catch(err => {
      console.log('Please tell me what happened', err);
      this.store.dispatch({ type: UiActions.AJAX_ERROR });
      setTimeout(() => {
        this.store.dispatch({ type: TodoActions.FETCH_TODO });
      }, 1000);
      return Observable.empty();
    })
    .map((todos) => {
      console.log('will this be executed anyway?');
      return { type: TodoActions.RETRIEVE_TODO, payload: todos };
    });

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
