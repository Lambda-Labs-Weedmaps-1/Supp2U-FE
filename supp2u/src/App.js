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

// const MOVIE_API_URL = "https://supp2udev.herokuapp.com/api/v1/search";
const FOOD_API_URL = 'https://www.omdbapi.com/?s=man&apikey=4a3b711b';

const initialState = {
  loading: true,
  businesses: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SEARCH_BUSINESSES_REQUEST':
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case 'SEARCH_BUSINESSES_SUCCESS':
      return {
        ...state,
        loading: false,
        businesses: action.payload
      };
    case 'SEARCH_BUSINESSES_FAILURE':
      return {
        ...state,
        loading: false,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const search = searchValue => {
    dispatch({
      type: 'SEARCH_BUSINESSES_REQUEST'
    });

    fetch(`${process.env.REACT_APP_BACKEND_URL}search?query=${searchValue}`)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        if (jsonResponse[0].length || jsonResponse[1].length) {
          dispatch({
            type: 'SEARCH_BUSINESSES_SUCCESS',
            payload: jsonResponse[0].concat(jsonResponse[1])
          });
        } else {
          dispatch({
            type: 'SEARCH_BUSINESSES_FAILURE',
            error: jsonResponse.Error
          });
        }
      });
  };

  let displayResults = () => {
    console.log(businesses);
    if (businesses) {
      return (
        // Todo update classnames to "businesses"
        <div className="movies">
          {loading && !errorMessage ? (
            <span>loading... </span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            // <BusinessList businesses={businesses} />
            businesses.map(business => (
              <BusinessCard key={business.id} business={business} />
            ))
          )}
        </div>
      );
    } else {
      return;
    }
  };

  const { businesses, errorMessage, loading } = state;

  return (
    <div className="App">
      <Navigation />
      <Search search={search} />
      {displayResults()}
      <BasicRoute />
    </div>
  );
};

export default App;
