import { Injectable } from '@angular/core';
import { Todo, TodoList } from './todo';

import { Alea, AleaPrng } from './modules/alea';
import { base62 } from './modules/base62';

@Injectable()
export class ListService {
  private source: TodoList;

  private seed: number = Math.random();
  private prng: AleaPrng;

  constructor() {
    this.prng = new Alea(this.seed);

    this.source.next([{ text: 'Hello world dude!', id: base62(this.prng.next()), done: false }]);
  }

  addTodo(text: string){
    const newTodo = <Todo>{id: base62(this.prng.next()), text, done: false};
    this.source.next([...this.source.getValue(), newTodo]);
  }

  toggleTodo(which: Todo) {
    const oldList = this.source.getValue();
    const idx = oldList.indexOf(which);
    const newList = oldList.slice(0);
    newList.splice(idx, 1, Object.assign({}, which, { done: !which.done }));
    this.source.next(newList);
  }
}
