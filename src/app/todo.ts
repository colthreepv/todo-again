import { idGenerator as generator } from './modules/id-generator';

export interface TodoElement {
  id: string;
  text: string;
  done: boolean;
}

export interface TodoList extends Array<TodoElement>{
  [index: number]: TodoElement;
  // byId: {};
};

export class Todo implements TodoElement {
  id: string;
  text: string;
  done: boolean;

  constructor(text: string, done: boolean) {
    this.id = generator();
    this.text = text;
    this.done = done;
  }

  toggle(): boolean {
    return this.done = !this.done;
  }
}
