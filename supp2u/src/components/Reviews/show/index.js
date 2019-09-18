import React from 'react';
import DeleteButton from "../../../utils/DeleteButton";
import Rating from "react-rating";
import user from '../../../assets/user-1.jpg';
import moment from "moment";

export default ({review, routeReviewToEdit, deleteReview}) => {
    if (!review.customer) {
        return <p>Review is Loading</p>
    } 
    return (
        <div className="review-box">
            <div className="review__header">
                <div className="review__info">
                    <div className="review__info--photo">
                        <img src={review.customer.image ? review.customer.image.url : user} alt="user info"/>
                        Photo by Aiony Haust on Unsplash
                    </div>
                    <div className="review__info--user">
                        <p>{review.customer.custname}</p>
                        <p>{ moment(review.updated_at).startOf('day').fromNow()
                        }</p>
                    </div>
                </div>
                <Rating initialRating={review.rating} readonly={true}
                />
            </div>
            <p>{review.review}</p>
            {/*render edit or delete button for authenticated user*/}
            {review.customer_id === parseInt(localStorage.customer_id) ?
                <>
                    <button className={"btn"}
                            onClick={() => routeReviewToEdit(review.id)} >Edit
                    </button>
                    <DeleteButton deleteType={"reviews"} id={review.id} title={"Confirm to delete"} callback={()=> deleteReview(review.id)} />
                </>
                : null
            }
        </div>

    )
}