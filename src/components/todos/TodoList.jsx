import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = ({ todos }) => {
  const allTheTodos = todos.map((todo, i) => (
    <Todo key={i} todo={todo} id={i} />
  ));

  return (
    <div className={styles.TodoList}>
      {allTheTodos}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
};

export default TodoList;
