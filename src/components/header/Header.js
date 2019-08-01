import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
    render() { 
        return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-light bg-light custom-header">
        
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                         <Link className="item" activeclassname="active" to="/">Home</Link>
                        </li>
                        &nbsp;|&nbsp;
                        <li className="nav-item">
                         <Link className="item" activeclassname="active" to="/courses">Courses</Link>
                        </li>
                        &nbsp;|&nbsp;
                        <li className="nav-item">
                         <Link className="item" activeclassname="active" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
         );
    }
}
 
export default Header;