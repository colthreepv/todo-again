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
      <todo-element [element]="todo" (toggle)="toggle(todo)"></todo-element>
    </div>
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
    this.list.do(wat => console.log(wat));
  }

  toggle (todo: Todo) {
    this.store.dispatch({ type: TodoActions.TOGGLE_TODO, payload: todo.id });
    console.log('toggled element', todo);
  }

  ngOnInit () {
    // this.api.addTodo('Hello World!').subscribe(wat => console.log(wat));
    // this.api.retrieveTodo().subscribe(wat => console.log(wat));
    this.store.dispatch({ type: TodoActions.FETCH_TODO });
  }

}
