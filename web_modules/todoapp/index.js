import React, { Component } from 'react';
import { Logo } from './logo.jsx';
import { Container } from './container.jsx';
import { Status } from './status.jsx';

class TodoApp extends Component {
  constructor (props) {
    super(props);
    this.typeTodo = typeTodo.bind(this);
    this.createTodo = createTodo.bind(this);
    this.toggleElem = toggleElem.bind(this);
    this.state = {
      list: [
        { text: 'Buy Pizza', toggle: false },
        { text: 'Eat Pizza', toggle: false }
      ],
      text: ''
    };
  }
  render () {
    const { text, list } = this.state;
    return (
      <section className="todoapp">
        <Logo/>
        <Container
          text={text}
          typeHandler={this.typeTodo}
          submitHandler={this.createTodo}
          todoList={list}
          toggleElem={this.toggleElem}
        />
        <Status/>
      </section>
    );
  }
}

function typeTodo (event) {
  const value = event.target.value;
  this.setState({
    text: value
  });
}

function createTodo (event) {
  event.preventDefault(); // this is a form submit!
  const value = this.state.text;
  if (value === '') return;
  const list = this.state.list;
  this.setState({
    list: list.concat([value]),
    text: ''
  });
}

function toggleElem (elem) { // elem is an Object
  const list = this.state.list;
  const setState = this.setState.bind(this);
  return function (event) {
    const newElem = Object.assign({}, elem, { toggle: !elem.toggle });

    setState({
      list: replaceObjInArray(elem, list, newElem)
    });
  };
}

function replaceObjInArray (obj, array, replaceObj) {
  const pos = array.indexOf(obj);
  if (pos === -1) throw Error('obj not found!');
  array[pos] = replaceObj;
  return array;
}

export { TodoApp };
