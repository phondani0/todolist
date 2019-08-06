import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';
import PropType from 'prop-types';
import context from '../context/context';

class Lists extends Component {
    render() {
        return (
            <context.Consumer>
                {(context) => context.state.lists.map(list => (
                    <div key={list.id} className="list-item card px-3 py-3 mb-3">
                        <h4>{list.title}
                            <i className="fa fa-sort-down pl-2 text-main" onClick={() => context.toggleOnClick(list.id)} style={{ cursor: "pointer" }}></i>
                        </h4>
                        <ul className="list-unstyled mb-0">
                            {list.showTodos ?
                                <React.Fragment>
                                    <Todos todos={context.state.todos.filter(todo => todo.listId === list.id)} />
                                    <AddTodo listId={list.id} />
                                </React.Fragment>
                                : null}
                        </ul>
                    </div >
                ))}
            </context.Consumer>
        )
    }
}

// PropTypes
Lists.PropType = {
    lists: PropType.array.isRequired
}

export default Lists;
