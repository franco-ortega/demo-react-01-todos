import React, { Component } from 'react';
import styles from './AddTodo.module.css';
import PropTypes from 'prop-types';

class AddTodo extends Component {
  render() {
    return(
      <section className={styles.AddTodo}>
        <h2>Add a Todo</h2>
        <form onSubmit={this.props.onTodoSubmit}>
          <label>
            <input
              placeholder="enter todo"
              value={this.props.todo}
              onChange={this.props.onTodoChange}
            />
          </label>
          <button>Submit Todo</button>
        </form>
      </section>
    );
  }
}

AddTodo.propTypes = {
  onTodoSubmit: PropTypes.func.isRequired,
  onTodoChange: PropTypes.func.isRequired,
  todo: PropTypes.string.isRequired
};

export default AddTodo;