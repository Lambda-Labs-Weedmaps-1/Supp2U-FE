import React from 'react'
// import Axios from 'axios'
import './reviews.sass'
import ShowReview from "../../Reviews/show";
import Reviews from "../add";
// import SearchCard from "../../../utils/SearchCard";


function ReviewPresentation({review, routeReviewToEdit, deleteReview, state, addReview, business_id}) {
    if(state.loading ) {
        return <p>Loading</p>
    }
    return (
            <div className={"review-list"}> {/* the class name is used just for identifying the div on DOM */}
                {/* check if user is customer then if they have left review already */}
                {/* loading state checks while the page is loading */}

                { state.hasReview || !localStorage.customer_id ?
                null
                :
                <Reviews business_id={business_id} addReviewState={addReview}/>}
                {review.customer_id === null ?
                        <p>This restaurant has no reviews yet! <br/>Eaten there? Tell us how it went by adding a review!</p>
                        :
                        <>
                            {/* this function maps all the reviews out for the restaurant */}
                            {review.map(review => {
                                return (
                                    <ShowReview key={review.id} review={review} routeReviewToEdit={routeReviewToEdit} deleteReview={deleteReview}/>
                                )
                            })}
                        </>
                    }
            </div>
    )
}

export default ReviewPresentation
