import { COURSE } from '../constants';

const coursesReducer = (state = [], action) => {
    if (action.type === COURSE.LOAD) {
        alert('Load Reducer')
        return [{
            "id": 1,
            "title": "Securing React Apps with Auth0",
            "slug": "react-auth0-authentication-security",
            "authorId": "2",
            "category": "JavaScript"
          }]
    }
    if (action.type === COURSE.LOAD_SUCCESS) {
        console.log('success-reducer:', [...action.courses])
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
