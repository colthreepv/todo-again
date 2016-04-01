import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import debounce from 'lodash/debounce';

import { Logo, Container, Status } from './modules/todoapp';
import * as actions from './actions';

import css from './modules/todoapp/container.css';

class App extends Component {
  render () {
    const { typing, todos } = this.props;
    const { addTodo, typeTodo, checkTodo } = this.props;
    return (
      <section className={css.todoApp}>
        <Logo/>
        <Container
          text={typing}
          typeHandler={typeTodo}
          submitHandler={(evt) => addTodo(evt, typing)}
          todoList={todos}
          toggleElem={checkTodo}
        />
        <Status todoList={todos}/>
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

/**
 * wrapActions does the job of sandwiching
 *
 * 1) the Action gets created calling the ActionCreator
 * 2) then the saveState gets dispatched
 * 3) then the original Action gets returned
 *
 * but (2) only happens every 400ms
 */
function wrapActions (action, dispatch) {
  const delayedSave = debounce(function () {
    dispatch(actions.saveState());
  }, 400);
  return function () {
    const val = action.apply(this, arguments);
    delayedSave();
    return val;
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    addTodo: wrapActions(addTodo, dispatch),
    typeTodo: wrapActions(typeTodo, dispatch),
    checkTodo: wrapActions(checkTodo, dispatch)
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
