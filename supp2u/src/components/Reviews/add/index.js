import React from "react";
import {addReview} from "../../../actions/reviewsAction";
import { connect } from "react-redux";
import AddReviewPresentation from "./AddReviewPresentation";
import {toast} from "react-toastify";

const mapPropsToState = ({customerReducer: {customer}}) =>({customer});
export default connect(mapPropsToState, {addReview})(({addReview, history, customer, business_id})=>{


    const addReviewHandler =(review) =>{
        
        addReview({...review, business_id}, localStorage.customer_id)
            .then((res) => {
                if(res.review){
                    toast.success(`Thank you for your feedback ${res.review}`);
                    // history.goBack();
                }else{
                    toast.error(`🔐 ️${res.response.data.message}`);
                    console.log();
                }
            });
    };
    return <AddReviewPresentation addReview={addReviewHandler} history={history}/>
})