import api from "../config/Axios";

export const ADD_REVIEW_REQUEST = "ADD_REVIEW_REQUEST";
export const ADD_REVIEW_SUCCESS = "ADD_REVIEW_SUCCESS";
export const ADD_REVIEW_FAILED = "ADD_REVIEW_FAILED";

export const addReview = (review, customer_id) => dispatch => {
    dispatch({type: ADD_REVIEW_REQUEST});
    return api.post(`customers/${customer_id}/reviews`, review)
        .then(res =>{
            dispatch({type: ADD_REVIEW_SUCCESS, payload: res.data});
            return res.data
        })
        .catch(err =>  {
            dispatch({type: ADD_REVIEW_FAILED, payload: err});
            return err
        });
};