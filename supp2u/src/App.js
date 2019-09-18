import React, { useReducer, useEffect } from "react";
import Navigation from "./components/Navigation/Navigation";
import "./App.sass";
import BasicRoute from "./BasicRoute";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Search from "./components/Search/Search";
import axios from "axios";
import FoodCard from "./components/Search/FoodCard";
import { NavLink } from "react-router-dom";
toast.configure();

// const MOVIE_API_URL = "https://supp2udev.herokuapp.com/api/v1/search";
const FOOD_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const initialState = {
  loading: true,
  movies: [],
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_MOVIES_REQUEST":
      return {
        ...state,
        loading: true,
        errorMessage: null
      };
    case "SEARCH_MOVIES_SUCCESS":
      return {
        ...state,
        loading: false,
        movies: action.payload
      };
    case "SEARCH_MOVIES_FAILURE":
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
      type: "SEARCH_MOVIES_REQUEST"
    });

    // axios.get(`https://supp2udev.herokuapp.com/api/v1/search?query=${searchValue}`)
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
      .then(response => response.json())
      .then(jsonResponse => {
        console.log(jsonResponse);
        if (jsonResponse.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.Error
          });
        }
      });
  };

  const { movies, errorMessage, loading } = state;

  let displayResults = () => {
    if (movies) {
      return (
        <div className="movies">
          {loading && !errorMessage ? (
            <span>loading... </span>
          ) : errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            movies.map((movie, index) => (
              <FoodCard key={`${index}-${movie.Title}`} movie={movie} />
            ))
          )}
        </div>
      );
    } else {
      return;
    }
  };

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
