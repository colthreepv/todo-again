import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import 'rxjs/add/operator/do';

import {Todo} from '../todo';
import {State, TodoActions} from '../state';
import {TodoAPI} from '../todo.service';

@Component({
  selector: 'todo-list',
  template: `
    <div class="todo-list" *ngFor="let todo of list | async | mapToArray">
      <todo-element [element]="todo" (toggle)="toggle(todo)" (delete)="delete(todo)"></todo-element>
    </div>
    <button (click)="reload()">Reload stuff plz</button>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: Observable<any>;

  constructor (
    private store: Store<State>,
    private api: TodoAPI
  ) {
    this.list = store.select('todo');
  }

  toggle (todo: Todo) {
    this.store.dispatch({ type: TodoActions.TOGGLE_TODO, payload: todo.id });
  }

  delete (todo: Todo) {
    this.store.dispatch({ type: TodoActions.DELETE_TODO, payload: todo.id });
  }

  reload () {
    this.store.dispatch({ type: TodoActions.FETCH_TODO });
  }

  ngOnInit () {
    this.store.dispatch({ type: TodoActions.FETCH_TODO });
  }

}
