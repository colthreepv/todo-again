import { Component, Input, OnInit } from '@angular/core';
import { Todo, TodoList } from '../todo';

@Component({
  selector: 'todo-list',
  template: `
    <div class="todo-list" *ngFor="let todo of list">
      <todo-element [element]="todo" (toggleElement)="toggle(todo)" ></todo-element>
    </div>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() list = <TodoList>null;

  constructor() {
    this.list = [
      new Todo('First cool todo element', false)
    ];
  }

  toggle(todo: Todo) {
    todo.toggle();
    console.log('toggled element', todo);
  }

  ngOnInit() {
  }

}
