import { COURSE } from '../constants';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case COURSE.LOAD_FAIL:
            return action.error

        case COURSE.LOAD:
        case COURSE.LOAD_SUCCESS:
            return null

        default:
            return state
    }
}

export default errorReducer;
