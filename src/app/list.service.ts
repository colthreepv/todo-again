import { Injectable } from '@angular/core';
import { Todo, TodoElement, TodoList } from './todo';
import { BehaviorSubject } from 'rxjs/behaviorsubject'
import { Observable } from 'rxjs/observable';

@Injectable()
export class ListService {
  private source: BehaviorSubject<TodoList> = new BehaviorSubject([]);
  public todos: Observable<TodoList> = this.source.asObservable();

  constructor() { }

  // addTodo()
}
