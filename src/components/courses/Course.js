import React, { Component } from 'react';

class Course extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            course: this.props.course
         }
    }

    render() {
        return ( 
            <li key={this.props.index.toString()}>{ this.state.course }</li>
         )
    }
}

export default Course;