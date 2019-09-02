import axios from "axios";
const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BACKEND_URL}/`
});
if(localStorage.getItem("token_id")){
    instance.defaults.headers.common['Authorization'] = localStorage.getItem("id_token");

}
export {instance};