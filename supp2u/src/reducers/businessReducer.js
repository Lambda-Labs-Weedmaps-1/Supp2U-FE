import {GET_BUSINESS_START, GET_BUSINESS_SUCCESS, GET_BUSINESS_FAIL} from '../actions/index'

const initialBusState = {
    businesses: [],
    errors: "",
    gettingBusinesses: false,
}

export const businessGet = (state = initialBusState, action) => {
    switch (action.type) {

        case GET_BUSINESS_START:
            return {
                ...state,
                gettingBusinesses: true
            };

        case GET_BUSINESS_SUCCESS:
            return {
                ...state,
                gettingBusinesses: false,
                // this probably needs to change based on how
                // we are receiving the data ( lat/lon, etc )
                businesses: action.payload
            }

        case GET_BUSINESS_FAIL:
            return {
                ...state,
                gettingBusinesses: false,
                errors: action.payload
            }

            default:
                return state;
    }
}