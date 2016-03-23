import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Logo } from './logo.jsx';
import { Container } from './container.jsx';
import { Status } from './status.jsx';
import * as actions from '../../src/actions';

class App extends Component {
  render () {
    const { typing, todos } = this.props;
    const { addTodo, typeTodo, checkTodo } = this.props;
    return (
      <section className="todoapp">
        <Logo/>
        <Container
          text={typing}
          typeHandler={typeTodo}
          submitHandler={(evt) => addTodo(evt, typing)}
          todoList={todos}
          toggleElem={checkTodo}
        />
        <Status/>
      </section>
    );
  }
}
App.propTypes = {
  typing: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,

  addTodo: PropTypes.func.isRequired,
  typeTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired
};

// from Handlers to ActionCreators
function addTodo (evt, text) {
  evt.preventDefault();
  return actions.addTodo(text);
}
function typeTodo (evt) {
  return actions.typeTodo(evt.target.value);
}
function checkTodo (id) {
  return actions.checkTodo(id);
}

function mapStateToProps (state) {
  return { todos: state.todos.list, typing: state.typing };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addTodo,
    typeTodo,
    checkTodo
  }, dispatch);
}

const TodoApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { TodoApp };
