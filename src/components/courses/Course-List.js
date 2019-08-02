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
        let titleStyle = {
          marginLeft: '150px',
          fontSize: '14px'
        }

        let headerStyle = {
          fontWeight: "Bold"
        }

        let listStyle = {
          margin: "15px 10px"
        }

        return ( 
            <div id="course-list">
              <h2>Courses</h2>
              <AddCourseButton />

              <ul class="list-group">
              { this.props.courses.length > 0 &&
                <li style={headerStyle} key="9999999999" class="list-group-item d-flex ">
                  <span style={titleStyle} >Title</span>
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
                </div>}
              </div>
            </div>
         );
    }
}
 
export default CourseList;