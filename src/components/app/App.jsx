import React, { Component } from 'react';
import AddTodo from '../todos/AddTodo';
import TodoList from '../todos/TodoList';
import styles from './App.module.css';

class App extends Component {
  // Todo is entered -> gets added to state (array)
  state = {
    todo: '',
    todos: []
  };

  onTodoChange = ({ target }) => {
    this.setState({
      todo: target.value
    });
  };

  onTodoSubmit = (e) => {
    e.preventDefault();
    this.setState(prevState => ({
      todos: [...prevState.todos, prevState.todo]
    }));
    this.setState({
      todo: ''
    });
  };

  render() {
    console.log(this.state.todo);
    console.log(this.state.todos);
    return(
      <main className={styles.App}>
        <h1>Todos App</h1>
        <div>
          <AddTodo
            onTodoSubmit={this.onTodoSubmit}
            todo={this.state.todo}
            onTodoChange={this.onTodoChange}
          />
          <TodoList
            todos={this.state.todos}
          />
        </div>
      </main>
    );
  }
}

export default App;