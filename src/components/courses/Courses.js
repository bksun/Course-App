import React, { Component } from 'react';
import CourseList from "./Course-List";
import CourseForm from "./Course-Form";
class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            courses: [
              "React", "Redux", "React-router"
            ]
           }
    }
    render() { 
        return ( 
            <div>
              <CourseList courses = {this.state.courses}/>
              <CourseForm />
            </div>
         );
    }
}
 
export default Courses;