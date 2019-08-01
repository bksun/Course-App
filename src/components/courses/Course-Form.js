import React, { Component } from 'react';

class CourseForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCourse: this.props.course
        }
        
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
        this.setState({
          currentCourse: e.target.value
        })
    }

    resetForm() {
        this.setState({
            currentCourse: ""
          })
    }

    render() {
        return (
            <div>
                <h2>Add Courses</h2>
                <form onSubmit = { this.props.handleCourseSubmit } className="form-inline" id="course-form">
                    <div className="form-group mx-sm-3 mb-2">
                        <input type="text" onChange={this.handleChange} className="form-control" name="inputCourse"  id="inputCourse" value={this.state.currentCourse} placeholder="Enter Course" required/>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Save</button>
                </form>
            </div>
         );
    }
}

export default CourseForm;