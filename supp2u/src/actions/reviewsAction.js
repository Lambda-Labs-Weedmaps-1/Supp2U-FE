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

export const DELETE_REVIEW_REQUEST = "DELETE_REVIEW_REQUEST";
export const DELETE_REVIEW_SUCCESS = "DELETE_REVIEW_SUCCESS";
export const DELETE_REVIEW_FAILED = "DELETE_REVIEW_FAILED";

export const deleteReview = (review_id) => dispatch => {
    dispatch({type: DELETE_REVIEW_REQUEST});
    return api.delete(`reviews/${review_id}/`)
        .then(res =>{
            dispatch({type: DELETE_REVIEW_SUCCESS, payload: res.data});
            return res.data
        })
        .catch(err =>  {
            dispatch({type: DELETE_REVIEW_FAILED, payload: err});
            return err
        });
};