import React, { Component } from 'react'
import propTypes from 'prop-types';

class TodoItem extends Component {
    render() {
        return <li className="list-group-item">{this.props.title}</li>;
    }
}
// PropTypes
TodoItem.propTypes = {
    title: propTypes.string.isRequired,
    completed: propTypes.bool.isRequired
}

export default TodoItem;
