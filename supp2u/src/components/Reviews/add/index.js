import React from "react";
import {addReview} from "../../../actions/reviewsAction";
import { connect } from "react-redux";
import AddReviewPresentation from "./AddReviewPresentation";
import {toast} from "react-toastify";

const mapPropsToState = ({customerReducer: {customer}}) =>({customer});
export default connect(mapPropsToState, {addReview})(({addReview, history, customer})=>{

    const addReviewHandler =(review) =>{
        const business_id =3; //TODO get business id from redux store or params
        addReview({...review, business_id}, localStorage.customer_id)
            .then((res) => {
                if(res.review){
                    toast.success(`Thank you for your feedback ${res.review}`);
                    history.goBack();
                }else{
                    toast.error(`🔐 ️${res.response.data.message}`);
                    console.log();
                }
            });
    };
    return <AddReviewPresentation addReview={addReviewHandler} history={history}/>
})