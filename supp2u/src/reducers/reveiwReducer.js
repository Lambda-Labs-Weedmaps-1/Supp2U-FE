import {ADD_REVIEW_REQUEST, ADD_REVIEW_FAILED, ADD_REVIEW_SUCCESS} from "../actions/reviewsAction";
const initialState = {
    body:"",
    error: "",
    status: {
        requesting: false,
        succeed: false,
        failed: false
    }
};

export default (state=initialState, action) =>{
    switch (action.type) {
        case ADD_REVIEW_REQUEST:
            return {...state, status:{...state.status, requesting: true}, error: ""};
        case ADD_REVIEW_SUCCESS:
            return {...state, status: {...state.status, requesting: false, succeed: true}};
        case ADD_REVIEW_FAILED:
            return {...state, status: {...state.status, requesting: false, succeed: false, failed: true}};
        default:
            return state
    }
};