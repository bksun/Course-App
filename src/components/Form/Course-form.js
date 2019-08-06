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
            id: this.props.currentCourse ? this.props.currentCourse.id : "",
            title: this.props.currentCourse ? this.props.currentCourse.title : "",
            authorId: this.props.currentCourse ? this.props.currentCourse.authorId : "",
            category: this.props.currentCourse ? this.props.currentCourse.category : "",
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
                const title = e.target["title"].value;
                const authorId = e.target["authorId"].value;
                const category = e.target["category"].value;

                if (this.props.currentCourse.id) {
                    this.props.currentCourse.title = title;
                    this.props.currentCourse.category = category;
                    this.props.currentCourse.authorId = authorId;
                    saveCourse(this.props.currentCourse)
                } else {
                    const course =  {
                        title,
                        authorId,
                        category
                    }
                    saveCourse(course)
                }
                
            this.props.history.push('/courses')
        }
        catch(error) {
            this.props.history.push('/courses')
        }
    }

    resetForm() {
        this.setState({
                title: "",
                authorId: "",
                category: ""
            }
          )
    }

    render() {
        const form = 
        <form onSubmit = { this.handleCourseSubmit } id="course-form">
            <div className="form-group mx-sm-3 mb-2">
                <label for="title">Title</label>
                <input type="text" onChange={this.handleChange} className="form-control" name="title"  id="title" value={this.state.title} placeholder="Enter Title" required/>
            </div>

            <div className="form-group mx-sm-3 mb-2">
                <label for="authorId">Author</label>
                <select class="form-control" id="authorId">
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
                <label for="category">Category</label>
                <input type="text" onChange={this.handleChange} className="form-control" name="category"  id="category" value={this.state.category} placeholder="Enter Category" required/>
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
    if (props.match.params.id != "undefined") {

        const id = props.match.params.id;
        const currentCourse = state.courses.find(function(element) {
            return element.id == id;
          });
        return {
            currentCourse: currentCourse,
            authors: state.authors,
            courses: state.courses
        }
    }

    return { 
        currentCourse: state.currentCourse,
        authors: state.authors,
        courses: state.courses
    }
}

export default connect(mapStateToProps, { fetchCourses, addOneCourses, fetchAuthors, saveCourse })(CourseForm);
