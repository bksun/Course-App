import { all } from "redux-saga/effects";
import watchCoursesLoad from "./coursesSaga";
import watchAuthorsLoad from "./authorsSaga";

function* rootSaga() {
    yield all([
        watchCoursesLoad(),
        watchAuthorsLoad()
    ])
}

export default rootSaga;