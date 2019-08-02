import { COURSE } from "../constants";

const setCourses = (courses) => ({
    type: COURSE.LOAD_SUCCESS,
    courses
})

const setError = (error) => ({
    type: COURSE.LOAD_FAIL,
    error
})

const loadCourses = () => ({
    type: IMAGES.LOAD
})


export {
    setCourses,
    setError,
    loadCourses
}
