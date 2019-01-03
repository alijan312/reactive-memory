import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav text-center">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Reactive Memory <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Click on an image to start the Game</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Your Current Score: {} | Top Score: {} </a>
                        </li>
                        </ul>
                </nav>
            </div>
        );
    };
}
 
export default Navbar;