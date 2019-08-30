import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0718e4b554715a686ad9d7ffd131b8cfcaa12a06
import './index.sass';
import App from './App.js';
// import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index.js';
<<<<<<< HEAD
=======
import './index.css';

// import App from './App';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';

>>>>>>> 773b30641cbc1f64b96a466853053b7d11f74d69
=======
import './App.js'
>>>>>>> 0718e4b554715a686ad9d7ffd131b8cfcaa12a06

const store = createStore(
    rootReducer,
    applyMiddleware( thunk, logger )
);

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));

