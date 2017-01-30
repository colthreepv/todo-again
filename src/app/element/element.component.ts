import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { TodoElement } from '../todo';

@Component({
  selector: 'todo-element',
  template: `
    <div class="todo-element">
      <input type="checkbox" class="element-toggle" (click)="toggleElement($event)" />
      <span class="element-label" [class.done]="element.done">{{element.text}}</span>
    </div>
  `,
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() element = <TodoElement>null;

  @Output('toggleElement') toggle = new EventEmitter();

  constructor() { }

  toggleElement(evt: Event) {
    this.toggle.emit(this.element);
  }

  ngOnInit() {
  }

}
