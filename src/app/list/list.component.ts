import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoList } from '../todo';
import { Observable } from 'rxjs/Observable';

import {AppState} from '../state';
import {Store} from '@ngrx/store';

@Component({
  selector: 'todo-list',
  template: `
    <div class="todo-list" *ngFor="let todo of list | async">
      <todo-element [element]="todo" (toggleElement)="toggle(todo)" ></todo-element>
    </div>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list: Observable<any>;

  constructor (
    private store: Store<AppState>
  ) {
    this.list = store.select('todo');
    this.list.do(wat => console.log(wat));
    // this.list = listService.todos;
  }

  toggle (todo: Todo) {
    // this.listService.toggleTodo(todo);
    console.log('toggled element', todo);
  }

  ngOnInit () {}

}
