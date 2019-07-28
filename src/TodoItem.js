import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    const { text, index, handleDelete } = this.props;
    return (
      <li onClick={() => handleDelete(index)}>{text}</li>
    )
  }
}

export default TodoList;
