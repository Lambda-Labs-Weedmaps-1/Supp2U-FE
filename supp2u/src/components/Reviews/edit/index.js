import React , {useEffect, useState}from "react";
import EditReviewPresentation from "../edit/EditReviewPresentation";
import api from "../../../config/Axios";

export default (props) => {
    let [review, setReview] = useState({});

    useEffect( ()=>{
         api.get(`/reviews/${props.match.params.id}`)
            .then(res=> setReview(res.data))
            .catch(err=> console.log(err));
    }, [props.match.params.id]);

    const editReviewSubmitHandler= (review) => {
        api.patch(`/reviews/${review.id}`, review)
            .then(()=> props.addReview(review))
            .catch(err=> console.log(err));
    };
    return (
        <>
        {review.id ?  <EditReviewPresentation editReviewSubmitHandler={editReviewSubmitHandler}  review={review}/>
    :null}
    </>
    )
}