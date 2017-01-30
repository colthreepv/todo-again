import { Component, OnInit } from '@angular/core';

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
export class CreateComponent implements OnInit {
  newText: string = '';

  constructor() { }

  createTodo(evt: Event) {
    // add a new todo in the List service
    console.log('created new todo');
    this.newText = '';
  }

  ngOnInit() {
  }

}
