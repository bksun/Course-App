import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { fetchAuthors } from "../../thunks/authors";
// import { fetchCourses, addOneCourses, deleteCourseThunk } from "../../sagas/coursesSaga";
import CourseList from "./Course-List";
import { store } from "../../App";
import { loadCourses } from "../../actions/courses";

class Courses extends Component {

  static propTypes = {
    // courses: PropTypes.array.isRequired,
    // currentCourse: PropTypes.any.isRequired,
    // fetchCourses: PropTypes.func.isRequired,
    // fetchAuthors: PropTypes.func.isRequired,
    // addOneCourses: PropTypes.func.isRequired
  }

    constructor(props) {
        super(props);
        this.CourseFormRef = React.createRef()
        this.handleCourseSubmit = this.handleCourseSubmit.bind(this)
    }

  componentDidMount(){
    this.props.fetchCourses()
  }

    createCourseSlug(course_name) {
      return course_name.split(" ").join("-")
    }

    handleCourseSubmit(e) {
      e.preventDefault()
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


function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors,
    currentCourse: state.currentCourse
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCourses: () => dispatch(loadCourses())
})

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
