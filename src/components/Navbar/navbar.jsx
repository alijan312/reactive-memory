import React, { Component } from 'react';
import './navbar.css'

class Navbar extends Component {
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <ul className="navbar-nav text-center">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Reactive Memory <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Click an image to start</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Score: {} | Top Score: {} </a>
                    </li>
                </ul>
            </nav>
        );
    };
}
 
export default Navbar;