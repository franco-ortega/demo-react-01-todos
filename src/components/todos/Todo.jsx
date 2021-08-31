import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';

const Todo = ({ todo }) => {
  return (
    <div className={styles.Todo}>
      <input type="checkbox" />
      <span>{todo}</span>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.string.isRequired
};

export default Todo;