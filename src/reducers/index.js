import { combineReducers } from 'redux'

import coursesReducer from "./courses-reducer";
import errorReducer from "./error-reducer";
import loadingReducer from "./loading-reducer";

const rootReducer = combineReducers({
    isLoading: loadingReducer,
    courses: coursesReducer,
    error: errorReducer
})

export default rootReducer;
