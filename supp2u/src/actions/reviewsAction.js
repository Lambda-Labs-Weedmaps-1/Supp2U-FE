import axios from "../config/Axios";

export const ADD_REVIEW_REQUEST = "ADD_REVIEW_REQUEST";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILED = "ADD_REVIEW_FAILED";

export const addReview = (review, business_id) => dispatch => {
    dispatch({type: ADD_REVIEW_REQUEST});
    axios.post(`users/${1}/business/${business_id}/review`, review)
        .then(res =>{ dispatch({type: ADD_REVIEW_SUCCESS, payload: res.data}); })
        .catch(err => {dispatch({type: ADD_REVIEW_FAILED, payload: err});});
};