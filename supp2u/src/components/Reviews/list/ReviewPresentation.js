import React, {useEffect, useState} from 'react'
import Axios from 'axios'
import './reviews.sass'
import Reviews from "../../Reviews/add";
import ShowReview from "../../Reviews/show";


function ReviewPresentation(props) {
    //the GET call sets this state with the review data
    const [review, setReview] = useState([{
        "customer_id": null,
        "rating": null,
        "review": ""
    }]);
    let [hasReview, setHasReview] = useState(false);
    let [loading, setLoading] = useState(false);


    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${props.business_id}/reviews`)
            .then(res => {
                setReview(res.data);

                // check if current signed in user have already left a review
                for (let i = 0; i < res.data.length; i++) {
                    if (res.data[i].customer_id === parseInt(localStorage.customer_id)) {
                        setHasReview(true);
                    }
                }
            })
            .catch(err => {
                console.log('ERROR POST\n', err)
            });
        setLoading(true)
    }, []);


    const routeReviewToEdit = (id) => {
        props.history.push(`/review/${id}`)
    };

    return (
        <div className={"review-list"}> {/* the class name is just for identifying the div on browser*/}
            {/* this renders reviews only if there are reviews */}
            {review.customer_id === null ?
                <p>This restaurant has no reviews yet! <br/>Eaten there? Tell us how it went by adding a review!</p>
                :
                <>
                    <h1>Reviews</h1>
                    {/* this function maps all the reviews out for the restaurant */}
                    {review.map(review => {
                        return (
                            <ShowReview review={review} routeReviewToEdit={routeReviewToEdit}/>
                        )
                    })}
                </>
            }
            {/* check if user is customer then if they have left review already */}
            {localStorage.getItem("customer_id") != null ? <>{hasReview ?
                <p> You have already left review, Thank you! </p>
                : loading ?
                    <Reviews business_id={props.business_id}/> : "loading"
            }</>:
            // displays if they are not signed in as a customer
            <p>to add a review please create a customer account</p>}
        </div>
    )
}

export default ReviewPresentation
