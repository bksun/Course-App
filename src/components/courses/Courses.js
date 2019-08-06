import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAuthors } from "../../thunks/authors";
import { fetchCourses, addOneCourses, deleteCourseThunk } from "../../thunks/courses";
import CourseList from "./Course-List";
import { store } from "../../App";

class Courses extends Component {
    constructor(props) {
        super(props);
        this.CourseFormRef = React.createRef()
        this.handleCourseSubmit = this.handleCourseSubmit.bind(this)
    }

  componentDidMount(){
    this.props.fetchCourses()
    this.props.fetchAuthors()
  }

    createCourseSlug(course_name) {
      return course_name.split(" ").join("-")
    }

    handleCourseSubmit(e) {
      e.preventDefault()
      const course_name = e.target["inputCourse"].value; //e.target.inputCourse.value;
      const course =  {
        id: 100 + this.props.courses.length,
        title: course_name,
        slug: this.createCourseSlug(course_name),
        authorId: 1,
        category: 'JavaScript'
      }
      this.props.addOneCourses(course)
      this.CourseFormRef.current.resetForm()
    }

    handleDeleteCourse = (id) => {
      try {
        this.props.deleteCourseThunk(id)
      } catch (error) {
        this.props.history.push("/courses")
      }
    }

    render() { 
        return (
            <div>
              <CourseList store={store} courses = {this.props.courses} delete={this.handleDeleteCourse} authors = {this.props.authors}/>
              {/* <CourseForm ref={this.CourseFormRef} course={this.props.courses[0]} handleCourseSubmit = { this.handleCourseSubmit} /> */}
            </div>
         );
    }
}

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
  currentCourse: PropTypes.any.isRequired,
  fetchCourses: PropTypes.func.isRequired,
  fetchAuthors: PropTypes.func.isRequired,
  addOneCourses: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
    currentCourse: state.currentCourse
  }
}

export default connect(mapStateToProps, { fetchCourses, addOneCourses, fetchAuthors, deleteCourseThunk })(Courses);
