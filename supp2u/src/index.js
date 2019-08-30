import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App.js';
// import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const store = createStore(
    rootReducer,
    applyMiddleware( thunk, logger )
);

toast.configure();

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

