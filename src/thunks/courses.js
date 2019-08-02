import { URL } from "../constants";
import { setCourses, setOneCourse, setError } from "../actions/courses";

function fetchCourses() {
    return dispatch => {
        //call a function by passing a dispatch function to it.
        fetch(URL.COURSE_URL)
        .then(res => res.json())
        .then(resCourses => dispatch(setCourses(resCourses)))
        .catch(error => setError(error.toString()))
    }
}


function addOneCourses(course) {
    return (dispatch) => {
        dispatch(setOneCourse(course))
    }
}

export { fetchCourses, addOneCourses }
