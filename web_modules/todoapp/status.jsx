import React, { PropTypes, Component } from 'react';
const css = require('./status.css');

export class Status extends Component {
  render () {
    return (
      <footer className={css.footer}>
        <span className={css.todoCount}><strong>2</strong> items left</span>
      </footer>
    );
  }
}
