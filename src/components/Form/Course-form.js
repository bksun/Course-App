import React, { Component } from 'react';

import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { fetchCourses, addOneCourses } from "../../thunks/courses";
import { fetchAuthors } from "../../thunks/authors";

class CourseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // input_title: this.props.course["title"],
            // input_author: this.props.course.author,
            // input_category: this.props.course.category
        }
        this.handleChange = this.handleChange.bind(this)
    }
    componentDidMount(){
        this.props.fetchAuthors()
    }

    handleChange(e) {
        this.setState({
            input_title: e.target.value,
            input_author: e.target["inputAuthor"].value,
            input_category: e.target["inputCategory"].value
        })
    }

    resetForm() {
        this.setState({
            inputTitle: "",
            inputAuthor: "",
            inputCategory: ""
          })
    }

    render() {
        const form = 
        <form onSubmit = { this.props.handleCourseSubmit } id="course-form">
            {/* <div className="form-group mx-sm-3 mb-2">
                <input type="text" onChange={this.handleChange} className="form-control" name="inputTitle"  id="inputTitle" value={this.state.current_course.inputTitle} placeholder="Enter Title" required/>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" onChange={this.handleChange} className="form-control" name="inputAuthor"  id="inputAuthor" value={this.state.current_course.inputAuthor} placeholder="Enter Author" required/>
            </div>
            <div className="form-group mx-sm-3 mb-2">
                <input type="text" onChange={this.handleChange} className="form-control" name="inputCategory"  id="inputCategory" value={this.state.current_course.inputCategory} placeholder="Enter Category" required/>
            </div> */}
            <button type="submit" className="btn btn-primary mb-2">Save</button>
        </form>

        return (
            <div id="course-form">
                <h2>Add Courses</h2>
                { form }
            </div>
         );
    }
}


function mapStateToProps(state, props) {
    if (props.match.params._id != "undefined") {
        return {
            course: state.courses.find(item => item._id === props.match.params._id)
        }
    }

    return { course: null };
}

export default connect(mapStateToProps, { fetchCourses, addOneCourses, fetchAuthors })(CourseForm);
