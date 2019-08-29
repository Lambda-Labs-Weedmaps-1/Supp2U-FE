import React,{useState} from "react";
import {addReview} from "../../../actions/reviewsAction";
import { connect } from "react-redux";
import AddReviewPresentation from "./AddReviewPresentation";

export default connect(null, {addReview})(({addReview, history})=>{
    let [review, setReview] = useState("");

    const addReviewHandler =(e) =>{
        e.preventDefault();
        addReview(review, 1);
    };
    const cancel = (e)=>{
        e.preventDefault();
        history.goBack();
    };
    return <AddReviewPresentation review={review} setReview={setReview} addReview={addReviewHandler} cancel={cancel}/>
})