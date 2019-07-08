import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark mb-3">
                <div className="container">
                    <a href="/" className="navbar-brand">Todolist</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;