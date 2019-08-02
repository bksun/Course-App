import { URL } from "../constants";
import { setCourses, setError } from "../actions/courses";

function fetchCourses() {
    return dispatch => {
        //call a function by passing a dispatch function to it.
        alert('fetching data from api');
        fetch(URL.COURSE_URL)
        .then(res => res.json())
        .then(resCourses => dispatch(setCourses(resCourses)))
        .catch(error => setError(error.toString()))
    }
}

export { fetchCourses }
