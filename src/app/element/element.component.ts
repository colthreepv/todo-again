import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-element',
  template: `
    <div class="todo-element">
      <input type="checkbox" class="element-toggle" (click)="toggle.emit(this.element)" [checked]="element.completed" />
      <span class="element-label" [class.done]="element.completed">{{element.title}}</span>
      <i class="icon delete" (click)="delete.emit(this.element)"></i>
    </div>
  `,
  styleUrls: ['./element.component.css']
})
export class ElementComponent {
  @Input() element: Todo = null;
  @Output() toggle: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor () {}
}
