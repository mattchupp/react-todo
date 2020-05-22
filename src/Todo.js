import React, { Component } from 'react';


class Todo extends Component {
  constructor() {
    super();
    this.state = {
      itemInput: '',
      todoList: []
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({itemInput: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const newItem = {
      id: Date.now(),
      input: this.state.itemInput
    }

    this.setState(state => ({
      todoList: state.todoList.concat(newItem),
      itemInput: ''
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
