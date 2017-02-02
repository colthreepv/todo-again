import { Injectable } from '@angular/core';
import { Todo, TodoElement, TodoList } from './todo';
import { BehaviorSubject } from 'rxjs/behaviorsubject'
import { Observable } from 'rxjs/observable';

@Injectable()
export class ListService {
  private source: BehaviorSubject<TodoList> = new BehaviorSubject([]);
  public todos: Observable<TodoList> = this.source.asObservable();

  constructor() { }

  addTodo(text: string){
    const newTodo = new Todo(text, false);
    this.source.next([...this.source.getValue(), newTodo]);
  }

  toggleTodo(which: TodoElement) {

  }
}
