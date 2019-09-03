// GET_START, GET_START_SUCCESS, GET_START_FAIL

import axios from 'axios';

import {
	GET_BUSINESS_START,
	GET_BUSINESS_SUCCESS,
	GET_BUSINESS_FAIL
} from './getBusiness';

// This is a placeholder for backend variables, whether dev or prod
const backendURL = process.env.REACT_APP_BACKEND_URL;

export const GET_START = 'GET_START';
export const GET_START_SUCCESS = 'GET_START_SUCCESS';
export const GET_START_FAIL = 'GET_START_FAIL';

export const startAction = dispatch => {
	dispatch({
		type: GET_START
	});

	return (
		axios
			// this url is also a placeholder at the moment as routes/endpoints are not all setup
			.get(`${backendURL}/mapdata/forStartingMapPosition`)
			.then(res => dispatch({ type: GET_START_SUCCESS, payload: res.data }))
			.catch(err => dispatch({ type: GET_START_FAIL, payload: err.data }))
	);
};

export { GET_BUSINESS_START, GET_BUSINESS_SUCCESS, GET_BUSINESS_FAIL };
