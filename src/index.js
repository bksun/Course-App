import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from "./store/store";

const store = configureStore()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
            <App />
        </Provider>
    </BrowserRouter>

    , document.getElementById('root'));
