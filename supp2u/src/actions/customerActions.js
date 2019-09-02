import api from "../config/Axios";

export const ADD_CUSTOMER_REQUEST = "ADD_CUSTOMER_REQUEST";
export const ADD_CUSTOMER_SUCCESS = "ADD_CUSTOMER_SUCCESS";
export const ADD_CUSTOMER_FAILED = "ADD_CUSTOMER_FAILED";

export const addCustomer = (user_id) => dispatch => {
    dispatch({type: ADD_CUSTOMER_REQUEST});
    return api.post(`/users/${user_id}/customers`)
        .then(res =>{
            dispatch({type: ADD_CUSTOMER_SUCCESS, payload: res.data});
            return res.data
        })
        .catch(err =>  {
            dispatch({type: ADD_CUSTOMER_FAILED, payload: err});
            return err
        });
};