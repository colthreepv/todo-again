import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import 'rxjs/add/operator/switchMap';

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
}
