import { COURSE } from '../constants';

const coursesReducer = (state = [], action) => {
    if (action.type === COURSE.LOAD) {
        return []
    }
    if (action.type === COURSE.LOAD_SUCCESS) {
        return [...action.courses]
    } 
    else if (action.type === COURSE.ADD_COURSE) {
        return [...state, action.course]
    }
    else if (action.type === COURSE.COURSE_DELETE) {
        return state.filter(item => {
            if (item.id !== action.courseId) {
                return item;
            }
        });
    }
    return state
}

export default coursesReducer;
