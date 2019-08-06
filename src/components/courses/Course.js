import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./styles/course.css";
class Course extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            course: this.props.course,
            authors: this.props.authors
         }
    }

    resolveAuthorNameFromId = (authorId) => {
        for (const author of this.props.authors) {
            if (author.id == authorId) {
                return author.name
            }
        }
        return authorId
    }

    handleDeleteCourse = (id) => {
        this.props.delete(id)
    }

    render() {
        return (
            <li key={ this.state.course.id } class="list-group-item d-flex ">
                <button className="btn btn-info">Watch</button>
                <button onClick={() => {this.handleDeleteCourse(this.state.course.id)}}  className="btn btn-danger">
                    {/* <Link className="item" activeclassname="active" to={`/course/${this.state.course.id}`}> */}
                        <span>Delete</span>
                    {/* </Link> */}
                </button>
                
                <Link className="item" activeclassname="active" to={`/course/${this.state.course.id}`}>
                    <span>{ this.state.course.title }</span>
                </Link>

                <span id="author" className="author badge badge-warning badge-pill">{ this.resolveAuthorNameFromId(this.state.course.authorId) }</span>
                <span id="category" className="category badge badge-primary badge-pill">{ this.state.course.category }</span>
            </li>
         )
    }
}

export default Course;