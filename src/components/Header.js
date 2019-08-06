import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark mb-3">
                <div className="container">
                    <a href="/" className="navbar-brand mx-auto">TodoList</a>
                </div>
            </nav>
        );
    }
}

export default Header;