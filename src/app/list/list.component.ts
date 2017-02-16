import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoList } from '../todo';
import { Observable } from 'rxjs/Observable';

import {State, TodoActions} from '../state';
import {Store} from '@ngrx/store';

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
    private store: Store<State>
  ) {
    this.list = store.select('todo');
    this.list.do(wat => console.log(wat));
    // this.list = listService.todos;
  }

  toggle (todo: Todo) {
    // this.listService.toggleTodo(todo);
    this.store.dispatch({ type: TodoActions.TOGGLE_TODO, payload: todo.id });
    console.log('toggled element', todo);
  }

  ngOnInit () {}

}
