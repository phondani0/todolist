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
                <div key={list.id}>
                    <h2>{list.title}</h2>
                    <Todos todos={list.todos} />
                    <br />
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
