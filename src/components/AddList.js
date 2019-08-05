import React, { Component } from 'react'
import context from '../context/context';

class AddList extends Component {
    render() {
        return (
            <div className="card px-3 py-2">
                <context.Consumer>
                    {(context) =>
                        context.state.addNewList === true ?
                            (<form onSubmit={(e) => context.addListItem(e, context.state.input)}>
                                <div className="input-group">
                                    <input type="text" className="form-control" value={context.state.input} onChange={context.handleChange} />
                                </div>
                            </form>)
                            :
                            <button className="btn btn-primary p-2" onClick={context.addListClickHandler}>+</button>
                    }
                </context.Consumer>
            </div>
        );
    }
}

export default AddList;
