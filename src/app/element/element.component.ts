import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'todo-element',
  template: `
    <div class="todo-element">
      <input type="checkbox" class="element-toggle" (click)="toggleElement($event)" [(ngModel)]="element.done" />
      <span class="element-label" [class.done]="element.done">{{element.text}}</span>
    </div>
  `,
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() element = <Todo>null;

  @Output('toggleElement') toggle = new EventEmitter();

  constructor() { }

  toggleElement(evt: Event) {
    this.toggle.emit(this.element);
  }

  ngOnInit() {
  }

}
