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
    const { actAddTodo, actTypeTodo, actCheckTodo } = this.props;
    // const actCheckTodo = function () {};
    return (
      <section className="todoapp">
        <Logo/>
        <Container
          text={typing}
          typeHandler={actTypeTodo}
          submitHandler={(evt) => actAddTodo(evt, typing)}
          todoList={todos}
          toggleElem={actCheckTodo}
        />
        <Status/>
      </section>
    );
  }
}
App.propTypes = {
  typing: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,

  actAddTodo: PropTypes.func.isRequired,
  actTypeTodo: PropTypes.func.isRequired,
  actCheckTodo: PropTypes.func.isRequired
};

// Handlers
function typeHandler (evt) {
  return actions.typeTodo(evt.target.value);
}
function submitHandler (evt, text) {
  evt.preventDefault();
  return actions.addTodo(text);
}
function toggleElem (id) {
  return actions.checkTodo(id);
}

function mapStateToProps (state) {
  return { todos: state.todos.list, typing: state.typing };
}

function mapDispatchToProps (dispatch) {
  // return bindActionCreators({
  //   actAddTodo: createTodo,
  //   actTypeTodo: typeTodo,
  //   actCheckTodo: toggleElem
  // }, dispatch);
  return {
    actAddTodo: bindActionCreators(submitHandler,dispatch),
    actTypeTodo: bindActionCreators(typeHandler, dispatch),
    actCheckTodo: bindActionCreators(toggleElem, dispatch)
  };
}

const TodoApp = connect(mapStateToProps, mapDispatchToProps)(App);

export { TodoApp };
