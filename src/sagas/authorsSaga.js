import { URL, AUTHOR } from "../constants";
import { setError, setAuthors } from "../actions/courses";
import { put, takeEvery, call } from "redux-saga/effects";
import { getAuthors } from "../api/authorApi";


function* watchAuthorsLoad() {
    yield takeEvery(AUTHOR.LOAD, handleFetchAuthors)
}


function* handleFetchAuthors() {
    const resAuthors = yield call(getAuthors)
    console.log('response authors:', resAuthors)
    yield put(setAuthors(resAuthors))
}

export default watchAuthorsLoad;
