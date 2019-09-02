import React from "react";
import {addCustomer} from "../../../actions/customerActions";
import { connect } from "react-redux";
import AddCustomerPresentation from "./AddCustomerPresentation";
import {toast} from "react-toastify";

export default connect(null, {addCustomer})(({addCustomer, history})=>{

    const addCustomerHandler = ()=>{
        let user_id=1; //TODO get user_id from localStorage
        addCustomer(user_id)
            .then((res) => {
                if(res.review){
                    toast.success("Welcome to yelp Clone");
                    history.goBack();
                }else{
                    toast.error("Oh no! something went wrong, Please try again", res.response);
                }
            });
    };
    return <AddCustomerPresentation addCustomer={addCustomerHandler} history={history}/>
})