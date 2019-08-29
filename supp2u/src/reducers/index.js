import { combineReducers } from 'redux';

// break most of this out to other reducers (business,customer, etc) later, just setting up intial store atm
import {GET_START, GET_START_SUCCESS, GET_START_FAIL} from '../actions/index'

const initialState = {
    maplocation: "",
    error: "",
    gettingMap: false
}

export const landingState = ( state = initialState, action) => {
    switch (action.type) {

        case GET_START:
            return {
                ...state,
                getLocation: true
            };

        case GET_START_SUCCESS:
            return {
                ...state,
                gettingLocation: false,
                maplocation: action.payload
            };

        case GET_START_FAIL:
            return {
                ...state,
                gettingLocation: false,
                error: action.payload
            }

        default:
            return state;


    }
}

// export default combineReducers({
//     businessReducer,
//     customerReducer,
//     location,
//     etc
//   });


export default landingState;