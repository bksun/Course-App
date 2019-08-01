import { createStore, applyMiddleware, compose } from "redux";
// import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../reducers/index";

const configureStore = () => {
    const store = createStore(
        rootReducer,
        composeWithDevTools(
            applyMiddleware(thunk)
        )
    )
    return store
}

export default configureStore;