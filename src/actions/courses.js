import { COURSE, AUTHOR } from "../constants";

const setCourses = (courses) => ({
    type: COURSE.LOAD_SUCCESS,
    courses
})

const setOneCourse = (course) => {
    alert('set one course action')
    console.log("course-action: ", course)
    return {
    type: COURSE.ADD_COURSE,
    course
 }
}

const setOneCourseUtil = (course) => {
    return {
    type: COURSE.ADD_COURSE_UTIL,
    course
 }
}

const deleteOneCourse = (courseId) => ({
    type: COURSE.COURSE_DELETE,
    courseId
})

const deleteOneCourseUtil = (courseId) => ({
    type: COURSE.COURSE_DELETE_UTIL,
    courseId
})

const setError = (error) => ({
    type: COURSE.LOAD_FAIL,
    error
})

const loadCourses = () => ({
    type: COURSE.LOAD
})

const setAuthors = (authors) => ({
    type: AUTHOR.LOAD_SUCCESS,
    authors
})

const loadAuthors = () => ({
    type: AUTHOR.LOAD
})


export {
    setCourses,
    setError,
    loadCourses,
    setOneCourse,
    deleteOneCourse,
    setAuthors,
    loadAuthors,
    setOneCourseUtil,
    deleteOneCourseUtil
}
