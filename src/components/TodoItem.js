import React, { Component } from 'react'
import propTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.title}</li>
                </ul>
            </div>
        );
    }
}
// PropTypes
TodoItem.propTypes = {
    title: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired
}

export default TodoItem;
