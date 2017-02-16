import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-element',
  template: `
    <div class="todo-element">
      <input type="checkbox" class="element-toggle" (click)="toggle.emit(this.element)" [checked]="element.completed" />
      <span class="element-label" [class.done]="element.completed">{{element.title}}</span>
    </div>
  `,
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() element: Todo = null;

  @Output() toggle: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor () {}
  ngOnInit () {}
}
