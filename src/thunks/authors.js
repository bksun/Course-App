import { URL } from "../constants";
import { setError, setAuthors } from "../actions/courses";

function fetchAuthors() {
    return dispatch => {
        fetch(URL.AUTHOR_URL)
        .then(res => res.json())
        .then(resAuthors => dispatch(setAuthors(resAuthors)))
        .catch(error => setError(error.toString()))
    }
}


export { fetchAuthors }
