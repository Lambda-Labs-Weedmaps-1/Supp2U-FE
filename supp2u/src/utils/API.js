import  api  from './init';
import {toast} from "react-toastify";
//Todo refactor using try-catch blocks
export function pingApiServer() {
	return api
		.get('/')
		.then(function(response) {
			return response.data;
		})
		.catch(function(error) {
			return error.response.data;
		});
}
export function fetchProfilesNoAuth() {
	return api
		.get('/api/v1/users')
		.then(function(response) {
			return response.data;
		})
		.catch(function(error) {
			return error.response.data;
		});
}



export function fetchProfilesWithAuth(email, history) {
	console.log("history ", history );

	api
		.post('/auth/login', {email})
		.then(function(response) {
			if(response.status === 200){
				//successful login, redirect to landing page......
				let user = response.data;
				let name;
				if(user['business']){
					localStorage.setItem("business_id", user.business.id);
					localStorage.setItem("user_id", user.business.user_id);
					name = user.business.name;
				}else {
					localStorage.setItem("customer_id", user.customer.id);
					localStorage.setItem("user_id", user.customer.user_id);
					name = user.customer.custname
				}
				localStorage.setItem("id_token", response.data.token);

				toast.success(`Welcome back ${name} !`);
				// history.push('/');
				window.location.replace('/')

			} else if (response.status === 201){
				//lets register user as a business or a customer
				toast.success("Lets create a profile for you!");
				localStorage.setItem("user_id", response.data.id);
				// history.push('/register/customer');
				window.location.replace('/registration')
			}
		})
		.catch(function(error) {
			if(!error.response){
				toast.error("oh oh, problem on paradise, our server is down, Please try again");
				return error;
			}else{
				toast.error("oh oh, problem on paradise");
				return error.response.data;
			}
		});
}
