import { URL } from "../constants";

const fetchCourses = async page => {
    const response = await fetch(`${URL.COURSE_URL}`)
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors)
    }
    return data
}


export { fetchCourses };
