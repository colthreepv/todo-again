import React from 'react';
import { TodoLogo } from './todo-logo.jsx';
const css = require('./todo-container.css');

class NoopElem extends React.Component {
  render () {
    return null;
  }
}

class TodoList extends NoopElem {}
class TodoFilters extends NoopElem {}

export class TodoContainer extends React.Component {
  render () {
    return (
      <div>
        <TodoLogo/>
        <div className={css.todoContainer}>
          <TodoList/>
          <TodoFilters/>
        </div>
      </div>
    );
  }
}
