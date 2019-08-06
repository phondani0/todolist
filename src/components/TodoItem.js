import React, { Component } from 'react'
import propTypes from 'prop-types';
import context from '../context/context';

class TodoItem extends Component {
    render() {
        return (
            <context.Consumer>
                {(context) =>
                    (<li className="todo-item">
                        {this.props.title}
                        <div className="float-right">
                            <i className="far fa-edit text-success px-2" style={{ cursor: "pointer" }} onClick={this.props.onEditClicked}></i>
                            <i className="far fa-times-circle text-danger" style={{ cursor: "pointer" }} onClick={() => context.deleteTodoItem(this.props.id)}></i>
                        </div>
                    </li>)
                }
            </context.Consumer>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    title: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired
}

export default TodoItem;
