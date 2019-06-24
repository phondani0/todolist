import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => {
            return <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />;
        });
    }
}

// PropTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired
}

export default Todos;