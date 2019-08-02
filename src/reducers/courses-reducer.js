import { COURSE } from '../constants';

const coursesReducer = (state = [], action) => {
    if (action.type === COURSE.LOAD_SUCCESS) {
        return [...action.courses]
    } 
    else if (action.type === COURSE.ADD_COURSE) {
        return [...state, action.course]
    }
    return state
}

export default coursesReducer;
