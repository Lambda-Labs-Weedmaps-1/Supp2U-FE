import React from "react";
import {addCustomer} from "../../../actions/customerActions";
import { connect } from "react-redux";
import AddCustomerPresentation from "./AddCustomerPresentation";
import {toast} from "react-toastify";

export default connect(null, {addCustomer})(({addCustomer, history})=>{

    const addCustomerHandler = (name)=>{

        addCustomer({user_id: localStorage.getItem("user_id"), custname: name})
            .then((res) => {
                if(res.user_id){
                    toast.success(`Welcome to yelp Clone ${name}`);
                    history.push('/');
                }else{
                    toast.error("Oh no! something went wrong, Please try again", res.response);
                }
            });
    };
    const routeBusinessRegistration = () =>{
        history.push("/businesses/create");
    };
    return <div className={"customer"}>
        <AddCustomerPresentation addCustomer={addCustomerHandler} history={history}/>

        <button onClick={routeBusinessRegistration}>Register as Business</button>
    </div>
})