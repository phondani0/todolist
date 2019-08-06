import React, { Component } from 'react'
import context from '../context/context';

class AddList extends Component {
    render() {
        return (
            <div className="">
                <context.Consumer>
                    {(context) =>
                        context.state.addNewList === true ?
                            (<form onSubmit={(e) => context.addListItem(e, context.state.input)}>
                                <div className="input-group">
                                    <input type="text" className="form-control" value={context.state.input} onChange={context.handleChange} placeholder="Add New List" />
                                </div>
                            </form>)
                            :
                            <button className="btn btn-block bg-main" onClick={context.addListClickHandler}><i className="fa fa-plus-circle fa-2x"></i></button>
                    }
                </context.Consumer>
            </div>
        );
    }
}

export default AddList;
