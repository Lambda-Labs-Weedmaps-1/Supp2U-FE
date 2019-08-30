import AuthService from './AuthService';

import axios from 'axios';

export const auth = new AuthService(
	'mCXBPD5PbbLbRS8sKVKm6Y5Pb5c3wIQB',
	'supp2u.auth0.com'
);

export const api = axios.create({
  //! change to whatever port you're running front end from //
	baseURL: 'http://localhost:9000'
});
