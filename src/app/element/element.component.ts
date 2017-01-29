import { Component, Input, OnInit } from '@angular/core';
import { TodoElement } from '../todo';

@Component({
  selector: 'todo-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input()
  element: TodoElement;

  constructor() { }

  ngOnInit() {
  }

}
