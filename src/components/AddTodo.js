import React, { Component } from 'react'
import propTypes from 'prop-types';
import context from '../context/context';

class AddTodo extends Component {
    state = {
        todoTitle: ""
    }

    handleChange = e => {
        this.setState({ todoTitle: e.target.value });
    }

    render() {
        return (
            <context.Consumer>
                {(context) =>
                    context.state.renderForm === true ?
                        (<form onSubmit={(e) => context.addTodoItem(e, this.props.listId, this.state.todoTitle)}>
                            <div className="input-group">
                                <input type="text" className="form-control" value={this.state.todoTitle} onChange={this.handleChange} />
                            </div>
                        </form>)
                        :
                        <button className="btn btn-primary p-2" onClick={context.toggleForm}>+</button>
                }
            </context.Consumer>
        );
    }
}

// PropTypes
AddTodo.propTypes = {
    listId: propTypes.number.isRequired
}

export default AddTodo;
