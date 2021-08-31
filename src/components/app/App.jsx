import React, { Component } from 'react';
import AddTodo from '../todos/AddTodo';
import styles from './App.module.css';

class App extends Component {
  // Todo is entered -> gets added to state (array)

  state = {
    todo: '',
    todos: []
  }

  onTodoChange = ({ target }) => {
    this.setState({
      todo: target.value
    });
  }

  onTodoSubmit = (e) => {
    console.log('form submitted');
    e.preventDefault();
    let { todos, todo } = this.state;
    todos.push(todo); 
    console.log(this.state.todos);
  }

  render() {
    return(
      <main className={styles.App}>
        <h1>Todos App</h1>
        <div>
          <AddTodo
            onTodoSubmit={this.onTodoSubmit}
            onTodoChange={this.onTodoChange}
            // todos={this.state.todos}
            // todo={this.state.todo}
          />
          <div>Todo List</div>
        </div>
      </main>
    );
  }
}

export default App;