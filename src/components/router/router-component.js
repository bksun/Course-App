import React, { Component, Fragment } from 'react';
import { Route } from "react-router-dom";
import Courses from "../courses/Courses";

import CourseForm from "../form/Course-form";
import HomeContent from "../home/Home-Content";

class RouterComponent extends Component {
    render() { 
        return (
            <Fragment>
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/course" component={CourseForm} />
                <Route exact path="/course/:_id" component={CourseForm} />
                <Route exact path="/about" component={HomeContent} />
                <Route exact path="/" component={HomeContent} />
            </Fragment>
         );
    }
}
 
export default RouterComponent;