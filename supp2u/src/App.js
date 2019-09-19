import React, { useReducer, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.sass';
import BasicRoute from './BasicRoute';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Search from './components/Search/Search';
import BusinessCard from './components/Search/BusinessCard';
import { Route, Redirect } from 'react-router-dom';

toast.configure();

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <BasicRoute />
    </div>
  );
};

export default App;
