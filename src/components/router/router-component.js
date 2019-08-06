import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";
import Courses from "../courses/Courses";

import CourseForm from "../form/Course-form";
import HomeContent from "../home/Home-Content";

class RouterComponent extends Component {
    render() { 
        return (
            <Fragment store={this.props.store}>
                <Route store={this.props.store} exact path="/courses" component={Courses} />
                <Route store={this.props.store} exact path="/course/:id" component={CourseForm} />
                <Route store={this.props.store} exact path="/course" component={CourseForm} />
                <Route store={this.props.store} exact path="/about" component={HomeContent} />
                <Route store={this.props.store} exact path="/" component={HomeContent} />
            </Fragment>
         );
    }
}
 
export default RouterComponent;