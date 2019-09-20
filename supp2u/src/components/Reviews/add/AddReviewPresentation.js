import React, {useState} from "react";
import Rating from "react-rating";
import './addReviewStyle.sass';
export default({addReview, history})=>{

    let [review, setReview] = useState("");
    let [rating, setRating] = useState(0);
    const cancel = (e)=>{
        e.preventDefault();
        history.goBack();
    };
    const onSubmitHandler = e =>{
        e.preventDefault();
        addReview({review, rating})
    };
    return (
        
        <form onSubmit={onSubmitHandler}>
            <input type="text"
                   placeholder={"add Review"}
                   value={review}
                   onChange={(e) => setReview(e.target.value)}
            />
            <Rating
                fractions={2}
                initialRating={rating}
                onClick={setRating}
                emptySymbol="fa fa-star-o fa-2x low" //fa fa-star-o fa-2x low
                fullSymbol="fa fa-star fa-2x low"
            />
            <input type="submit" value="Add Review"/>
            <input type="submit" value="Cancel" onClick={cancel}/>
        </form>)
}