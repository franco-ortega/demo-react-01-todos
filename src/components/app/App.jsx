import React, { Component } from 'react';
import AddTodo from '../todos/AddTodo';
import TodoList from '../todos/TodoList';
import styles from './App.module.css';

class App extends Component {
  // creates state object
  state = {
    todo: '',
    todos: []
  };

  // key for local storage
  todosKey = 'TODOS'; 

  // place item in local storage with key
  setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  // retrieve item from local storage with key
  getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
  };

  // on load, checks local storage for a list of todos
  // if todos exists, place them in state
  // setState is needed to update state; do not mutate state directly
  componentDidMount = () => {
    const localTodos = this.getLocalStorage(this.todosKey);
    if(localTodos) this.setState({ todos: localTodos });
  };

  // places value of input into state
  onTodoChange = ({ target }) => {
    this.setState({
      todo: target.value
    });
  };

  // when form is submitted, todo is added to the list of todos
  // todo (along with value of input) is reset to empty
  // places updated todo list in local storage
  // async await allows setState to finish before todos are put...
  // ...in local storage
  onTodoSubmit = async(e) => {
    e.preventDefault();
    await this.setState({
      todos: [...this.state.todos, this.state.todo],
      todo: ''
    });

    this.setLocalStorage(this.todosKey, this.state.todos);
  };

  // deletes all todos
  // replaces todo list and local storage with empty array
  onDeleteAllTodosClick = () => {
    this.setState({ todos: [] });
    this.setLocalStorage('TODOS', []);
  };

  render() {
    return (
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
