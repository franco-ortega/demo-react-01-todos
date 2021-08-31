import React, { Component } from 'react';
import styles from './App.module.css';

class App extends Component {
  render() {
    return(
      <main className={styles.App}>
        <h1>Todos App</h1>
        <section>
          <div>Add a Todo</div>
          <div>Todo List</div>
        </section>
      </main>
    );
  }
}

export default App;