import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import './reviews.sass'

function ReviewPresentation() {

    const [review, setReview] = useState([{
        "customer_id": null,
        "rating": null,
        "review":""
    }])

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/1/reviews`)
        .then(res=>{
            setReview(res.data)
            console.log(res)
        })
        .catch(err=>{
            console.log('ERROR POST\n', err)
        })
    }, [])

console.log(review)
    return (
        <div>
            {/* this renders reviews only if there ar reviews */}
            {review.customer_id === null ?
            <p>This restaurant has no reviews yet! <br/>Eaten there? Tell us how it went by adding a review!</p>:
            <div>
            <h1>Reviews</h1>
            {/* this function maps all the reviews out for the restaurant */}
            {review.map(review =>(
            <div className="review-box">
                <h3>user: {review.customer_id}</h3>
                <p>Their Rating: {review.rating}</p>
                <p>{review.review}</p>
            </div>
            ))}
            </div>}
        </div>
    )
}

export default ReviewPresentation
