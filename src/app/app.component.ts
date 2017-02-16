import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="todoContainer">
      <todo-create></todo-create>
      <todo-list></todo-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
