import React, { Component } from 'react';

import Course from "./Course";

class CourseList extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() { 
        return ( 
            <div>
              <h2>Courses</h2>
              <ul class="list-group">
                { this.props.courses.length > 0 &&
                  this.props.courses.map((course, index) => (
                    <Course key={course.id.toString()} course={ course } index = { index } />
                  ))
                }
              </ul>
              <div>
                { this.props.courses.length <= 0 && <div className="text-danger">
                    No courses are available for now!
                </div>}
              </div>
            </div>
         );
    }
}
 
export default CourseList;