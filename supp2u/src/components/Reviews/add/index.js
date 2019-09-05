import React from "react";
import {addReview} from "../../../actions/reviewsAction";
import {connect} from "react-redux";
import AddReviewPresentation from "./AddReviewPresentation";
import {toast} from "react-toastify";
import EditReveiwPresentaion from "../edit/EditReviewPresentation";

const mapPropsToState = ({customerReducer: {customer}}) => ({customer});

// edit={true} review={review}

export default connect(mapPropsToState, {addReview})(({addReview, history, customer, business_id, edit, review}) => {


    const addReviewHandler = (review) => {

        addReview({...review, business_id}, localStorage.customer_id)
            .then((res) => {
                if (res.review) {
                    toast.success(`Thank you for your feedback ${res.review}`);
                    // history.goBack();
                } else {
                    toast.error(`🔐 ️${res.response.data.message}`);
                    console.log();
                }
            });
    };
    const editReviewHandler= (review) => {
        // patch axios calll to edit a review.

    };
    return (
        <>
            {
                edit ? <EditReveiwPresentaion editReview={editReviewHandler}  review={review}/> :
                    <AddReviewPresentation addReview={addReviewHandler} history={history}/>
            }
        </>
    )
})