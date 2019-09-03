import {ADD_CUSTOMER_REQUEST, ADD_CUSTOMER_FAILED, ADD_CUSTOMER_SUCCESS} from "../actions/customerActions";
const initialState = {
    error: "",
    status: {
        requesting: false,
        succeed: false,
        failed: false
    }
};

export default (state=initialState, action) =>{
    switch (action.type) {
        case ADD_CUSTOMER_REQUEST:
            return {...state, status:{...state.status, requesting: true}, error: ""};
        case ADD_CUSTOMER_SUCCESS:
            return {...state, status: {...state.status, requesting: false, succeed: true}};
        case ADD_CUSTOMER_FAILED:
            return {...state, status: {...state.status, requesting: false, succeed: false, failed: true}};
        default:
            return state
    }
};