import React, {useState} from "react";
import Rating from "react-rating";
// editReview={editReviewHandler}  review={review}
export default({ editReviewSubmitHandler, review})=>{

    let [reviewState, setReview] = useState(review);
    const cancel = (e)=>{
        e.preventDefault();
        window.location.href = `/business/${review.business_id}`
    };
    const onSubmitHandler = e =>{
        e.preventDefault();
        editReviewSubmitHandler(reviewState)
    };
    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text"
                   placeholder={"add Review"}
                   value={reviewState.review}
                   onChange={(e) => setReview({...review, review: e.target.value})}
            />
            <Rating
                fractions={2}
                initialRating={reviewState.rating}
                onChange={(e) => setReview({...reviewState, rating: e})}
            />
            <input type="submit" value="Update Review"/>
            <input type="submit" value="Cancel" onClick={cancel}/>
        </form>)
}