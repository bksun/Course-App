import { URL } from "../constants";
import { setCourses, setOneCourse, setError, deleteOneCourse } from "../actions/courses";
import { deleteCourse, saveCourse } from "../api/courseApi";
import { store } from "../App";

function fetchCourses() {
    return dispatch => {
        fetch(URL.COURSE_URL)
        .then(res => res.json())
        .then(resCourses => dispatch(setCourses(resCourses)))
        .catch(error => setError(error.toString()))
    }
}

function addOneCourses(course) {
    saveCourse(course) 
    return dispatch => {
        fetch(URL.COURSE_URL)
        .then(res => res.json())
        .then(resCourses => dispatch(setCourses(resCourses)))
        .catch(error => setError(error.toString()))
    }
}


function deleteCourseThunk(id) {
    deleteCourse(id)
    store.dispatch(deleteOneCourse(id))
}


export { fetchCourses, addOneCourses, deleteCourseThunk }
