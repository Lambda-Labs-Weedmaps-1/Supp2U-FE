import { api } from './init';
//Todo refactor using try-catch blocks
export function pingApiServer() {
	return api
		.get('/')
		.then(function(response) {
			return response.data;
		})
		.catch(function(error) {
			return error.response;
		});
}
export function fetchProfilesNoAuth() {
	return api
		.get('/api/v1/users')
		.then(function(response) {
			return response.data;
		})
		.catch(function(error) {
			return error.response;
		});
}
export function fetchProfilesWithAuth(token) {
	return api
		.get('/api/v1/users', { headers: { Authorization: 'Bearer ' + token } })
		.then(function(response) {
			return response.data;
		})
		.catch(function(error) {
			return error.response;
		});
}
