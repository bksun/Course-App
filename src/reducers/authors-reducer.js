import { AUTHOR } from '../constants';

const authorsReducer = (state = [], action) => {
    if (action.type === AUTHOR.LOAD_SUCCESS) {
        return [...action.authors]
    } 
    else if (action.type === AUTHOR.ADD_AUTHOR) {
        return [...state, action.author]
    }
    return state
}

export default authorsReducer;
