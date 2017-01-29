import { Component, Input, OnInit } from '@angular/core';
import { TodoList } from '../todo';

@Component({
  selector: 'todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input()
  list: TodoList

  constructor() {
    this.list = [
      { id: 'asdomasdo', text: 'Hello World', done: false }
    ];
  }

  ngOnInit() {
  }

}
