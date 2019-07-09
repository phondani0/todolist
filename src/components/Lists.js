import React, { Component } from 'react';
import Todos from './Todos';
import PropType from 'prop-types';

class Lists extends Component {
    constructor(props) {
        super(props);

        //State
        this.state = {
            lists: [{
                id: 1,
                showTodos: false,
                title: 'Movies to watch',
                todos: [{
                    id: 1,
                    title: 'Butter Fly Effect',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Forest Gump',
                    completed: false
                }]
            },
            {
                id: 2,
                showTodos: false,
                title: 'Places to visit',
                todos: [{
                    id: 1,
                    title: 'Bangalore',
                    completed: false
                },
                {
                    id: 2,
                    title: 'Mumbai',
                    completed: false
                }]
            }]
        }
        // Binding this
        this.toggleOnClick = this.toggleOnClick.bind(this);
        this.deleteTodoItem = this.deleteTodoItem.bind(this);
    }

    toggleOnClick(id) {
        let preState;
        preState = this.state.lists.map((list) => {
            if (list.id === id) {
                list.showTodos = !list.showTodos;
            }
            return list;
        });
        this.setState({ lists: preState });
    }

    deleteTodoItem(listId, todoId) {
        let newState = this.state.lists.map(list => {
            list.todos = list.todos.filter(todo => todo.id !== todoId || listId !== list.id ? todo : null);
            return list;
        });
        this.setState({ lists: newState });
    }

    render() {
        return this.state.lists.map((list) => {
            return (
                <div key={list.id} className="card px-3 py-2 mb-3">
                    <h4>{list.title}
                        <i className="fa fa-sort-down pl-2 text-danger" onClick={() => this.toggleOnClick(list.id)} style={{ cursor: "pointer" }}></i>
                    </h4>
                    <ul className="list-group list-unstyled">
                        {list.showTodos ? <Todos todos={list.todos} deleteClickHandler={todoId => this.deleteTodoItem(list.id, todoId)} /> : null}
                    </ul>
                </div>
            );
        });
    }
}
// PropTypes
Lists.PropType = {
    lists: PropType.array.isRequired
}

export default Lists;
