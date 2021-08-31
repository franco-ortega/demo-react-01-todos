import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos, onDeleteAllTodosClick }) => {
  const allTheTodos = todos.map((todo, i) => (
    <li key={i}>
      <Todo todo={todo} id={i} />
    </li>
  ));

  return (
    <div className={styles.TodoList}>
      <h2>List of Todos</h2>
      {todos.length >= 1 && <button onClick={onDeleteAllTodosClick}>Delete All Todos</button>}
      <ul>
        {allTheTodos}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteAllTodosClick: PropTypes.func.isRequired
};

export default TodoList;
