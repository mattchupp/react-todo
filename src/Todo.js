import React, { Component } from 'react';
import './App.css';


class Todo extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      todoList: [],
      itemCompleted: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxClick = this.handleCheckboxClick.bind(this);
  }

  handleChange(event) {
    this.setState({newItem: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.newItem.length === 0) {
      return;
    }

    const createNewItem = {
      id: Date.now(),
      input: this.state.newItem
    }

    this.setState(state => ({
      todoList: state.todoList.concat(createNewItem),
      completed: false,
      newItem: ''
    }));
  }

  /* handle checkbox being clicked for each item */
  handleCheckboxClick(event) {
    if(this.state.itemCompleted === true) {
      this.setState({itemCompleted: false});
    } else {
      this.setState({itemCompleted: true});
    }
  }


  render() {

    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.newItem}
            onChange={this.handleChange}
            placeholder={this.state.itemInput}
          />
        </form>
        <br />

        <ul>
          {this.state.todoList.map(item => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={this.state.itemCompleted}
                onClick={this.handleCheckboxClick}
              />
              <span className={this.state.itemCompleted ? 'completed' : null }>{item.input}</span>
            </li>
          ))}
        </ul>

      </div>
    );
  }
}

export default Todo
