import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
  }
  addItem() {
    this.setState((prevState) => {
      return {
        list: [...prevState.list, this.inputElem.value]
      }
    },() => {
      this.inputElem.value = '';
    })
  }
  deleteItem(index) {
    this.setState((prevState) => {
      const newList = [...prevState.list];
      newList.splice(index, 1);
      return { list: newList }
    })
  }
  render() {
    console.log(this.state.list);
    return (
      <div>
        <input type="text" ref={(input) => {this.inputElem = input}}/>
        <button onClick={this.addItem.bind(this)}>提交</button>
        <ul>
          {
            this.state.list.map((item, index) => (
              <TodoItem
                key={index}
                text={item}
                index={index}
                handleDelete={this.deleteItem.bind(this)}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;
