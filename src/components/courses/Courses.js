import React, { Component } from 'react';
import CourseList from "./Course-List";
import CourseForm from "./Course-Form";
class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            courses: [
              "React", "Redux", "React-router"
            ],
            currentCourse: ""
           }
        
        this.CourseFormRef = React.createRef()
        this.handleCourseSubmit = this.handleCourseSubmit.bind(this)
    }

    handleCourseSubmit(e) {
      e.preventDefault()
      const course_name = e.target["inputCourse"].value; //e.target.inputCourse.value;
      const courses = [...this.state.courses, course_name]
      this.setState({ courses, currentCourse: "" })
      this.CourseFormRef.current.resetForm()
    }


    render() { 
        return ( 
            <div>
              <CourseList courses = {this.state.courses}/>
              <CourseForm ref={this.CourseFormRef} course={this.state.currentCourse} handleCourseSubmit = { this.handleCourseSubmit} />
            </div>
         );
    }
}
 
export default Courses;