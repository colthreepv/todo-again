import React from 'react';
const css = require('./todo-logo.css');

export class TodoLogo extends React.Component {
  render () {
    return <h1 className={css.todoLogo}>todos</h1>;
  }
}
