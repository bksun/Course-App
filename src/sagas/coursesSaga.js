import { URL, COURSE, AUTHOR } from "../constants";
import { setCourses, loadCourses, setOneCourse, setError, deleteOneCourse } from "../actions/courses";
import { deleteCourse, saveCourse } from "../api/courseApi";
import { put, takeEvery, call } from "redux-saga/effects";
// import { fetchCourses } from "../api-client/index";
import { getCourses } from "../api/courseApi";
import { resolve } from "q";

// watcher saga
function* watchCoursesLoad() {
    yield takeEvery(COURSE.LOAD, handleFetchCourses)
    yield takeEvery(COURSE.LOAD_SUCCESS, getCourses)
    // yield takeEvery(COURSE.ADD_COURSE, addOneCourses)
    yield takeEvery(COURSE.ADD_COURSE_UTIL, addOneCoursesUtil)
    yield takeEvery(COURSE.COURSE_DELETE_UTIL, deleteCourseSaga)
    // yield takeEvery(COURSE.COURSE_DELETE, deleteCourseSaga)
}

//worker saga
function* handleFetchCourses() {
    const resCourses = yield call(getCourses)
    yield put(setCourses(resCourses))
}

export function* addOneCourses(course) {
    const resAuth = yield call(saveCourse, course.course)
    yield put(setOneCourse(resAuth))
}

export function* addOneCoursesUtil(course) {
    const resAuth = yield call(saveCourse, course.course)
    yield put(setOneCourse(resAuth))
}

function* deleteCourseSaga(course) {
    yield call(deleteCourse, course.courseId)
    yield put(deleteOneCourse(course.courseId))
}


export default watchCoursesLoad;
