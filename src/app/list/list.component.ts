import { Component, Input, OnInit } from '@angular/core';
import { TodoElement, TodoList } from '../todo';
import { ListService } from '../list.service';
import { Observable } from 'rxjs/observable';

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
  @Input() list = <Observable<TodoList>>null;

  constructor(private listService: ListService) {
     this.list = listService.todos;
  }

  toggle(todo: TodoElement) {
    this.listService.toggleTodo(todo);
    console.log('toggled element', todo);
  }

  ngOnInit() {
  }

}
