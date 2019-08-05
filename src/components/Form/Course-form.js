import React, { Component } from 'react';

import { Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { getCourses, saveCourse, deleteCourse } from "../../api/courseApi";
import { fetchCourses, addOneCourses } from "../../thunks/courses";
import { fetchAuthors } from "../../thunks/authors";

class CourseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_title: this.props.currentCourse ? this.props.currentCourse.input_title : "",
            input_author: this.props.currentCourse ? this.props.currentCourse.input_author : "",
            input_category: this.props.currentCourse ? this.props.currentCourse.input_category.value : "",
            done: false
        }
    }
    
    componentDidMount(){
        this.props.fetchAuthors()
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    createCourseSlug(course_name) {
        return course_name.split(" ").join("-")
    }

    handleCourseSubmit = (e) => {
        try {
            e.preventDefault()
            alert('handle add course..')
            const title = e.target["input_title"].value;
            const authorId = e.target["input_author"].value;
            const category = e.target["input_category"].value;
            const course =  {
            title,
            authorId,
            category
            }
            console.log(course)
            
            saveCourse(course)
            this.props.history.push('/courses')
        }
        catch(error) {
            this.props.history.push('/courses')
        }
    }

    resetForm() {
        this.setState({
                input_title: "",
                input_author: "",
                input_category: ""
            }
          )
    }

    render() {
        const form = 
        <form onSubmit = { this.handleCourseSubmit } id="course-form">
            <div className="form-group mx-sm-3 mb-2">
                <label for="input_title">Title</label>
                <input type="text" onChange={this.handleChange} className="form-control" name="input_title"  id="input_title" value={this.state.input_title} placeholder="Enter Title" required/>
            </div>

            <div className="form-group mx-sm-3 mb-2">
                <label for="input_author">Author</label>
                <select class="form-control" id="input_author">
                    {
                        this.props.authors.map( author => {
                        return (
                            <option value={author.id}>{author.name}</option> 
                        )
                        })
                    }
                </select>
            </div>

            <div className="form-group mx-sm-3 mb-2">
                <label for="input_category">Category</label>
                <input type="text" onChange={this.handleChange} className="form-control" name="input_category"  id="input_category" value={this.state.input_category} placeholder="Enter Category" required/>
            </div>
            
            <button type="submit" className="btn btn-primary mb-2">Save</button>
        </form>

        return (
            <div id="course-form">
                <h2>Add Courses</h2>
                {this.state.done ? <Redirect to="/courses" /> : form }
            </div>
         );
    }
}


function mapStateToProps(state, props) {
    // if (props.match.params._id != "undefined") {
    //     return {
    //         authors: state.authors,
    //         currentCourse: state.courses.find(item => item._id === props.match.params._id),
    //         text: {}
    //     }
    // }

    return { 
        currentCourse: state.currentCourse,
        authors: state.authors,
        courses: state.courses
    }
}

export default connect(mapStateToProps, { fetchCourses, addOneCourses, fetchAuthors, saveCourse })(CourseForm);
