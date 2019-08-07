import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import configureStore from "./store/store";

const store = configureStore()

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
            <App store={store} />
        </Provider>
    </BrowserRouter>

    , document.getElementById('root'));

    