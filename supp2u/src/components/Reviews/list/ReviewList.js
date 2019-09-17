import React, {useEffect, useState} from 'react'
import api from '../../../config/Axios'
import './reviews.sass'
import Reviews from "../../Reviews/add";
import ShowReview from "../../Reviews/show";
import EditReviewPresentation from "../edit";
import Route from "react-router-dom/es/Route";
import ReviewPresentation from "./ReviewPresentation";
import {toast} from "react-toastify";


function ReviewList(props) {
    //the GET call sets this state with the review data
    const [review, setReview] = useState([{}]);
    let [hasReview, setHasReview] = useState(false);
    let [loading, setLoading] = useState(true);
    let addReview = (newReview) =>{
        setReview([...review, newReview]);
        setHasReview(true);
    };
    let deleteReview = (id) =>{
        setReview(review.filter(review => review.id !== id));
        setHasReview(false);
        toast.info(`You have successfully deleted your review`);
    };
    let business_id = props.match.params.id;
    useEffect(() => {
        api.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${business_id}/reviews`)
            .then(res => {
                setReview(res.data);
                // check if current signed in user have already left a review
                res.data.forEach(review => {
                    if(review.customer_id === parseInt(localStorage.customer_id)){
                        setHasReview(true);
                    }
                });
                return res
            })
            .then(() => setLoading(false))
            .catch(err => {
                console.log('ERROR POST\n', err)
            });
    }, []);


    const routeReviewToEdit = (id) => {
        props.history.push(`/review/${id}`)
    };

    return (

        <div className={"review-list"}> {/* the class name is just for identifying the div on browser*/}
            {/* this renders reviews only if there are reviews */}
            <ReviewPresentation deleteReview={deleteReview}
                                review={props.getFiltered(review)}
                                routeReviewToEdit={routeReviewToEdit}
                                state={{loading, hasReview}}
                                business_id={business_id}
                                addReview={addReview}/>
        </div>
    )
}

export default ReviewList
