import { withRouter } from 'react-router-dom'
import React from 'react';

import "./Add-Course-Button.css";
// this also works with react-router-native

const AddCourseButton = withRouter(({ history }) => (
  <button
    type='button'
    onClick={
        () => { history.push('/course') }
    }
    class="btn btn-primary" 
  >
    Add Course
  </button>
))

export default AddCourseButton;