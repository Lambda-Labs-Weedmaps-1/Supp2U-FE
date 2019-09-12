// GET_BUSINESS_START, GET_BUSINESS_SUCCESS, GET_BUSINESS_FAIL

import axios from 'axios';

// This is a placeholder for backend variables, whether dev or prod
const backendURL = process.env.REACT_APP_BACKEND_URL;

export const GET_BUSINESS_START = 'GET_BUSINESS_START';
export const GET_BUSINESS_FAIL = 'GET_BUSINESS_FAIL';
export const GET_BUSINESS_SUCCESS = 'GET_BUSINESS_SUCCESS';

export const getBusinessInfo = dispatch => {
	// just in case we need to pull something locally
	// const token = localStorage.getItem("something");

	dispatch({
		type: GET_BUSINESS_START
	});

	//url is currently a placeholder for implementation later
	return axios
		.get(`${backendURL}/mapdata/forBusinessInfo`)
		.then(res => {
			console.log('goes here');
			dispatch({
				type: GET_BUSINESS_SUCCESS,
				payload: res.data
			});
		})
		.catch(err => {
			dispatch({
				type: GET_BUSINESS_FAIL,
				payload: err.data
			});
		});
};
