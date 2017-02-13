import { idGenerator as generator } from './modules/id-generator';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

export interface TodoList extends Array<Todo>{
  [index: number]: Todo;
};

// export class Todo implements Todo {
//   id: string;
//   text: string;
//   done: boolean;

//   constructor(text: string, done: boolean) {
//     this.id = generator();
//     this.text = text;
//     this.done = done;
//   }

//   toggle(): boolean {
//     return this.done = !this.done;
//   }
// }
