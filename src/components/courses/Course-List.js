import React, { Component } from 'react';

import Course from "./Course";
import AddCourseButton from "./button/Add-Course-Button";
import "./styles/course.css";

class CourseList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    

    render() { 
        
        return ( 
            <div id="course-list">
              <h2>Courses</h2>
              <AddCourseButton />

              <ul class="list-group">
              { this.props.courses.length > 0 &&
                <li class="list-group-item d-flex ">
                  <span>Title</span>
                  <span id="author" className="badge">Author</span>
                  <span id="category" className="badge">Category</span>
                </li>
                  && 
                  this.props.courses.map((course, index) => (
                    <Course key={course.id.toString()} course={ course } index = { index } />
                  ))
                }
              </ul>
              <div>
                { this.props.courses.length <= 0 && <div className="text-danger">
                  courses not available for now!
                </div>
                }
              </div>
            </div>
         );
    }
}
 
export default CourseList;