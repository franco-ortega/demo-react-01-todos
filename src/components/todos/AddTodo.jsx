import React from 'react';
import styles from './AddTodo.module.css';
import PropTypes from 'prop-types';

const AddTodo = ({ onTodoSubmit, onTodoChange, todo }) => {
  return (
    <section className={styles.AddTodo}>
      <h2>Add a Todo</h2>
      <form onSubmit={onTodoSubmit}>
        <label>
          <input
            placeholder="enter todo"
            value={todo}
            onChange={onTodoChange}
          />
        </label>
        <button>Submit Todo</button>
      </form>
    </section>
  );
};

AddTodo.propTypes = {
  onTodoSubmit: PropTypes.func.isRequired,
  onTodoChange: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired
};

export default AddTodo;
