import React from 'react';
import PropTypes from 'prop-types';
import styles from './Todo.module.css';

const Todo = ({ todo, id }) => {
  return (
    <div className={styles.Todo}>
      <label htmlFor={id}>
        <input type="checkbox" id={id} />
        <span>{todo}</span>
      </label>
    </div>
  );
};

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};

export default Todo;
