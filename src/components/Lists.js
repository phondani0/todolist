import React, { Component } from 'react';
import Todos from './Todos';
import PropType from 'prop-types';

class Lists extends Component {
    constructor(props) {
        super(props);
        this.toggleOnClick = this.toggleOnClick.bind(this);

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
    }

    toggleOnClick(id) {
        let preState;
        console.log(id);
        preState = this.state.lists.map((list) => {
            if (list.id === id) {
                list.showTodos = !list.showTodos;
            }
            return list;
        });
        console.log(preState);
        this.setState({ lists: preState });
    }

    render() {
        return this.state.lists.map((list) => {
            return (
                <div key={list.id} className="card px-3 py-2 mb-3">
                    <h3>{list.title}
                        <i className="fa fa-sort-down pl-2" onClick={() => this.toggleOnClick(list.id)}></i>
                    </h3>
                    <ul className="list-group list-unstyled">
                        {list.showTodos ? <Todos todos={list.todos} /> : null}
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
