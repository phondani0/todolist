import React, { Component } from 'react';
import Todos from './Todos';
import PropType from 'prop-types';

class Lists extends Component {
    state = {
        lists: [{
            id: 1,
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

    render() {
        return this.state.lists.map((list) => {
            return (
                <div key={list.id} className="card px-4 pt-3 pb-4 mb-3">
                    <h3>{list.title}
                        <i className="fa fa-sort-down"></i>
                    </h3>
                    <ul className="list-group list-unstyled">
                        <Todos todos={list.todos} />
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
