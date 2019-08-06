import React, { Component } from 'react';

import Course from "./Course";
import AddCourseButton from "./button/Add-Course-Button";

import { deleteCourse } from "../../api/courseApi";
import "./styles/course.css";

class CourseList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() { 
        const courseError = 
          <div className="text-danger">
            courses not available for now!
          </div>

        const courseList = 
          <ul class="list-group">
            <li class="list-group-item d-flex ">
              <button className="title-header btn">Title</button>
              <span id="author" class="author badge badge-warning badge-pill">Author</span>
              <span id="category" class="category badge badge-primary badge-pill">Category</span>
            </li>

            {  this.props.courses.map((course, index) => (
                <Course key={course.id.toString()} course = { course } delete={deleteCourse} authors = { this.props.authors } index = { index } />
              ))
            }
          </ul>

          return ( 
            <div id="course-list">
              <h2>Courses</h2>
              <AddCourseButton />

              { this.props.courses.length <= 0 ? courseError : courseList }
              
                
            </div>
         );
    }
}
 
export default CourseList;