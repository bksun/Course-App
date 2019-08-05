import { COURSE, AUTHOR } from "../constants";

const setAuthors = (authors) => ({
    type: AUTHOR.LOAD_SUCCESS,
    authors
})


const setCourses = (courses) => ({
    type: COURSE.LOAD_SUCCESS,
    courses
})

const setOneCourse = (course) => ({
    type: COURSE.ADD_COURSE,
    course
})

const setError = (error) => ({
    type: COURSE.LOAD_FAIL,
    error
})

const loadCourses = () => ({
    type: COURSE.LOAD
})


export {
    setCourses,
    setError,
    loadCourses,
    setOneCourse,
    setAuthors
}
