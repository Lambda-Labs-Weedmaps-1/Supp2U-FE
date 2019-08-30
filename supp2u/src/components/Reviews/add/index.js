import React from "react";
import {addReview} from "../../../actions/reviewsAction";
import { connect } from "react-redux";
import AddReviewPresentation from "./AddReviewPresentation";
import {toast} from "react-toastify";

export default connect(null, {addReview})(({addReview, history})=>{

    const addReviewHandler =(review) =>{
        const customer_id = 1;
        addReview({...review, business_id: 3}, customer_id)
            .then((res) => {
                if(res.review){
                    toast.success("Thank you for your feedback", res.review);
                    history.goBack();
                }else{
                    toast.error("Oh no! something went wrong, Please try again", res.response);
                }
            });
    };
    return <AddReviewPresentation addReview={addReviewHandler} history={history}/>
})