import React, { Component } from 'react';


class Todo extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoList: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({newItem: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const createNewItem = {
      id: Date.now(),
      input: this.state.newItem
    }

    this.setState(state => ({
      todoList: state.todoList.concat(createNewItem),
      newItem: ''
    }));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.itemInput} onChange={this.handleChange} placeholder={this.state.itemInput} />
        </form>
        <br />

        <br />
        <ul>
          {this.state.todoList.map(item => (
            <li key={item.id}>{item.input}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo
