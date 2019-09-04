import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import './reviews.sass'
import Reviews from "../../Reviews/add";

function ReviewPresentation(props) {
    //the GET call sets this state with the review data
    const [review, setReview] = useState([{
        "customer_id": null,
        "rating": null,
        "review":""
    }]);
    let [edit, setEdit] = useState(false);


    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${props.business_id}/reviews`)
        .then(res=>{
            setReview(res.data)
        })
        .catch(err=>{
            console.log('ERROR POST\n', err)
        })
    }, []);
    // check if current signed in user have already left a review
    for(let i = 0; i < review.length; i++){
        if(!edit && review[i].customer_id === parseInt(localStorage.customer_id)){
            console.log("revie numver",review);
            setEdit(true);
        }
    }
    const routeReviewToEdit =(id)=>{
        props.history.push(`/review/${id}`)
    };

    return (
        <div>
            {/* this renders reviews only if there ar reviews */}
            {review.customer_id === null ?
            <p>This restaurant has no reviews yet! <br/>Eaten there? Tell us how it went by adding a review!</p>
                :
            <div>
            <h1>Reviews</h1>
            {/* this function maps all the reviews out for the restaurant */}
            {review.map(review =>{
                return(
                    <div className="review-box">
                        <h3>user: {review.customer_id}</h3>
                        <p>Their Rating: {review.rating}</p>
                        <p>{review.review}</p>
                        {review.customer_id === parseInt(localStorage.customer_id) ?
                            <button onClick={()=>routeReviewToEdit(review.id)}>edit</button> : null
                        }
                    </div>

            )})}
            </div>}

            {edit ? <p> You have already left review, Thank you! </p>
                : <Reviews business_id={props.business_id} />
            }
        </div>
    )
}

export default ReviewPresentation
