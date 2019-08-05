import React, { Component } from 'react';
import Todos from './Todos';
import PropType from 'prop-types';
import context from '../context/context';

class Lists extends Component {
    constructor(props) {
        super(props);

        //State
        this.state = {
            lists: [{
                id: 1,
                showTodos: false,
                title: 'Movies to watch'
            },
            {
                id: 2,
                showTodos: false,
                title: 'Places to visit'
            }],

            todos: [{
                id: 1,
                postId: 1,
                title: 'Butter Fly Effect',
                completed: false,
                renderForm: false
            },
            {
                id: 2,
                postId: 1,
                title: 'Forest Gump',
                completed: false,
                renderForm: false
            },
            {
                id: 3,
                postId: 2,
                title: 'Bangalore',
                completed: false,
                renderForm: false
            },
            {
                id: 4,
                postId: 2,
                title: 'Mumbai',
                completed: false,
                renderForm: false
            }]
        }

        //Binding this
        this.toggleOnClick = this.toggleOnClick.bind(this);
    }

    toggleOnClick(id) {
        const lists = [...this.state.lists];
        const newLists = lists.map((list) => {
            if (list.id === id) {
                list.showTodos = !list.showTodos;
            }
            return list;
        });
        this.setState({ lists: newLists });
    }

    toggleRenderForm = (todoId) => {
        const todos = [...this.state.todos];
        const newTodos = todos.map((todo) => {
            if (todo.id === todoId) {
                todo.renderForm = true;
            }
            return todo;
        });
        this.setState({ todos: newTodos });
    }

    editTodoItem = (e, todoId, title) => {
        e.preventDefault();
        const todos = [...this.state.todos];
        const newTodos = todos.map(todo => {
            if (todo.id === todoId) {
                todo.title = title;
                todo.renderForm = false;
            }
            return todo;
        });
        this.setState({ todos: newTodos });
    }

    deleteTodoItem = (todoId) => {
        const todos = [...this.state.todos];
        const newTodos = todos.filter(todo => todo.id !== todoId);
        this.setState({ todos: newTodos });
    }

    render() {
        return this.state.lists.map((list) => {
            return (
                <div key={list.id} className="card px-3 py-2 mb-3">
                    <h4>{list.title}
                        <i className="fa fa-sort-down pl-2 text-danger" onClick={() => this.toggleOnClick(list.id)} style={{ cursor: "pointer" }}></i>
                    </h4>
                    <ul className="list-group list-unstyled">
                        {list.showTodos ?
                            <context.Provider value={{
                                state: this.state,
                                toggleRenderForm: this.toggleRenderForm,
                                editTodoItem: this.editTodoItem,
                                deleteTodoItem: this.deleteTodoItem
                            }}>
                                <Todos todos={this.state.todos.filter(todo => todo.postId === list.id)} />
                            </context.Provider>
                            : null}
                    </ul>
                </div >
            );
        });
    }
}

// PropTypes
Lists.PropType = {
    lists: PropType.array.isRequired
}

export default Lists;
