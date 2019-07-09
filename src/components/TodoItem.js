import React, { Component } from 'react'
import propTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                {this.props.title}
                <div className="float-right">
                    <i className="far fa-edit text-success px-2" style={{ cursor: "pointer" }}></i>
                    <i className="far fa-times-circle text-danger" style={{ cursor: "pointer" }} onClick={this.props.onDeleteClicked}></i>
                </div>
            </li>
        );
    }
}
// PropTypes
TodoItem.propTypes = {
    title: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired
}

export default TodoItem;
