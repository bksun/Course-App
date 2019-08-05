import { combineReducers } from 'redux'

import coursesReducer from "./courses-reducer";
import errorReducer from "./error-reducer";
import loadingReducer from "./loading-reducer";
import authorsReducer from "./authors-reducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    courses: coursesReducer,
    authors: authorsReducer,
    error: errorReducer,
    currentCourse: {}
})

export default rootReducer;
