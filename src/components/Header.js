import React, { Component, Fragment } from 'react';
import { Link, Route } from "react-router-dom";

import CourseForm from "./Form/Course-form";
import HomeContent from "../components/Home/Home-Content";
class Header extends Component {
    render() { 
        return (
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                         <Link className="item" activeClassName="active" to="/">Home</Link>
                        </li>
                        &nbsp;|&nbsp;
                        <li class="nav-item">
                         <Link className="item" activeClassName="active" to="/courses">Courses</Link>
                        </li>
                        &nbsp;|&nbsp;
                        <li class="nav-item">
                         <Link className="item" activeClassName="active" to="/about">About</Link>
                        </li>
                    </ul>
                </div>

            </nav>

                <Route exact path="/courses/new" component={CourseForm} />
                <Route exact path="/courses/doc/:_id" component={CourseForm} />
                <Route exact path="/courses" component={CourseForm} />
                <Route exact path="/about" component={HomeContent} />
                <Route exact path="/" component={HomeContent} />
        </Fragment>
         );
    }
}
 
export default Header;