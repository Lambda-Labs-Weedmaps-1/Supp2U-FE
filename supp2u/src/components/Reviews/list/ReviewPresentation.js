import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './reviews.sass'
import ShowReview from "../../Reviews/show";
import Reviews from "../add";


function ReviewPresentation({review, routeReviewToEdit, deleteReview, state, addReview, business_id}) {

    return (
        <div className={"review-list"}> {/* the class name is used just for identifying the div on DOM */}

            {review.customer_id === null ?
                <p>This restaurant has no reviews yet! <br/>Eaten there? Tell us how it went by adding a review!</p>
                :
                <>
                    <h1>Reviews</h1>
                    {/* this function maps all the reviews out for the restaurant */}
                    {review.map(review => {
                        return (
                            <ShowReview key={review} review={review} routeReviewToEdit={routeReviewToEdit} deleteReview={deleteReview}/>
                        )
                    })}
                </>
            }

            {/* check if user is customer then if they have left review already */}
            {/* loading state checks while the page is loading */}
            {localStorage.getItem("customer_id") != null ? <> {
                    state.hasReview ?
                       null
                        : state.loading  ?
                        <Reviews business_id={business_id} addReviewState={addReview}/> : "loading"
                }</>:
                // displays if they are not signed in as a customer
                <p>to add a review please create a customer account</p>}
        </div>
    )
}

export default ReviewPresentation
