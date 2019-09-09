import AuthService from './AuthService';

import axios from 'axios';

export const auth = new AuthService(
	'mCXBPD5PbbLbRS8sKVKm6Y5Pb5c3wIQB',
	'supp2u.auth0.com'
);


const api = axios.create({
  //! change to whatever port you're running front end from //
	baseURL: process.env.REACT_APP_BACKEND_URL,
});
if(localStorage.getItem("id_token")){
	api.defaults.headers.common["Authorization"] = localStorage.id_token;
}

export default  api;