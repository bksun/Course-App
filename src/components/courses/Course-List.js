import React, { Component } from 'react';

import Course from "./Course";

class CourseList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            courses: this.props.courses
         }
    }

    render() { 
        return ( 
            <div>
              <ul>
                { this.state.courses.length > 0 &&
                  this.state.courses.map((course, index) => (
                    <Course course={ course } index = { index } />
                  ))
                }
              </ul>
              <div>
                { this.state.courses.length <= 0 && <div className="text-danger">
                    No courses are available for now!
                </div>}
              </div>
            </div>
         );
    }
}
 
export default CourseList;