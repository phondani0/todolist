import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';
import context from '../context/context';

class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            todoTitle: ""
        }
    }

    editClickHandler(todoId, title) {
        console.log(todoId);
        this.setState({ id: todoId, todoTitle: title });
    }

    handleChange = e => {
        this.setState({ todoTitle: e.target.value });
    }

    render() {
        return (
            <context.Consumer>
                {(context) =>
                    this.props.todos.map(todo => {
                        if (todo.renderForm && this.state.id === todo.id) {
                            return (
                                <form key={todo.id} onSubmit={(e) => context.editTodoItem(e, todo.id, this.state.todoTitle)}>
                                    <input type="text" className="form-control" value={this.state.todoTitle} onChange={this.handleChange} />
                                </form>
                            );
                        } else {
                            return <TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} onEditClicked={() => {
                                context.toggleRenderForm(todo.id);
                                this.editClickHandler(todo.id, todo.title)
                            }} />
                        }
                    })
                }
            </context.Consumer>
        );
    }
}

// PropTypes
Todos.propTypes = {
    todos: propTypes.array.isRequired
}

export default Todos;