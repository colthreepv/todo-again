import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {Todo} from './todo';

@Injectable()
export class TodoAPI {
  constructor (private http: Http) {}

  retrieveTodo (): Observable<Todo[]> {
    return this.http.get('/api/v1/').map(res => res.json());
  }

  addTodo (title: string): Observable<Todo> {
    return this.http.post('/api/v1/', { title }).map(res => res.json());
  }

  deleteTodo (id: number): Observable<Response> {
    return this.http.delete('/api/v1/' + id);
  }
}
