import { COURSE } from "../constants";


const courseReducer = (state = false, action) => {
    switch (action.type) {
        case COURSE.LOAD:
            return true
        case COURSE.LOAD_SUCCESS:
            return false
        case COURSE.LOAD_FAIL:
            return false
        default:
            return state
    }
}

export default courseReducer;