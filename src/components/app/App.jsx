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

  todosKey = 'TODOS';

  setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };


  componentDidMount = () => {
    const localTodos = this.getLocalStorage(this.todosKey);
    if(localTodos) this.setState({ todos: localTodos });
  };

  onTodoChange = ({ target }) => {
    this.setState({
      todo: target.value
    });
  };

  onTodoSubmit = async(e) => {
    e.preventDefault();
    await this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ''
    });

    this.setLocalStorage(this.todosKey, this.state.todos);
  };

  onDeleteAllTodosClick = () => {
    this.setState({ todos: []});
    this.setLocalStorage('TODOS', []);
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
            onDeleteAllTodosClick={this.onDeleteAllTodosClick}
          />
        </div>
      </main>
    );
  }
}

export default App;