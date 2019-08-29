import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App.js';
// import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';

const store = createStore(
    rootReducer,
    applyMiddleware( thunk, logger )
);

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));

