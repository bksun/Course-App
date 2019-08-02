import { COURSE } from '../constants';

const coursesReducer = (state = [], action) => {
    if (action.type === COURSE.LOAD_SUCCESS) {
        alert('Action Success from course-reducer')
        return [...state, ...action.courses]
    }
    return state
}

export default coursesReducer;
