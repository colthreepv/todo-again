import { Component } from '@angular/core';
import {Store} from '@ngrx/store';

import {Todo} from '../todo';
import {State, TodoActions} from '../state';

@Component({
  selector: 'todo-create',
  template: `
    <div>
      <form (ngSubmit)="createTodo($event)" #createForm="ngForm" novalidate>
        <input type="text" placeholder="What needs to be done?" class="create-todo" autoFocus
          name="create" [(ngModel)]="newText" />
      </form>
    </div>
  `,
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  newText = '';

  constructor (
    private store: Store<State>
  ) {}

  createTodo (evt: Event) {
    // FIXME: AJAX not getting called
    // const newTodo: Todo = { id: 'wtf', text: this.newText, done: false };
    this.store.dispatch({ type: TodoActions.ADD_TODO, payload: this.newText });
    this.newText = '';
  }

}
