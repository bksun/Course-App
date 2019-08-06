import { URL } from "../constants";
import { setCourses, setOneCourse, setError, deleteOneCourse } from "../actions/courses";
import { deleteCourse } from "../api/courseApi";
import { store } from "../App";

function fetchCourses() {
    return dispatch => {
        //call a function by passing a dispatch function to it.
        fetch(URL.COURSE_URL)
        .then(res => res.json())
        .then(resCourses => dispatch(setCourses(resCourses)))
        .then(resCourses => dispatch(deleteOneCourse(8)))
        .catch(error => setError(error.toString()))
    }
}

function addOneCourses(course) {
    
    alert('add course thunk called')
    console.log(course)

    return (dispatch) => {
        dispatch(setOneCourse(course))
    }
}


function deleteCourseThunk(id) {
    alert(`thunk ${id}`);
    deleteCourse(id)
    store.dispatch(deleteOneCourse(id))
}


export { fetchCourses, addOneCourses, deleteCourseThunk }
