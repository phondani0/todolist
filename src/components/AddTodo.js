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
                    context.state.addNewTodo === true ?
                        (<form onSubmit={(e) => context.addTodoItem(e, this.props.listId, context.state.input)}>
                            <div className="input-group">
                                <input type="text" className="form-control" value={context.state.input} onChange={context.handleChange} placeholder="Add New Todo" />
                            </div>
                        </form>)
                        :
                        <div className="add_todo">
                            <i className="fa fa-plus-circle" onClick={context.addTodoClickHandler}></i>
                        </div>
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
