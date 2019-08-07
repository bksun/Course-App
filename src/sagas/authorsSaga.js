import { URL, AUTHOR } from "../constants";
import { setError, setAuthors } from "../actions/courses";
import { put, takeEvery } from "redux-saga/effects";


function* watchAuthorsLoad() {
    yield takeEvery(AUTHOR.LOAD_SUCCESS, fetchAuthors)
}

function* fetchAuthors() {
    let courses = yield fetch(URL.AUTHOR_URL)
    courses = courses.json()
    yield put(setAuthors(courses))
}

export default watchAuthorsLoad;
