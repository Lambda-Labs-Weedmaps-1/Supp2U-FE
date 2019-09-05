import React from 'react';
import DeleteButton from "../../../utils/DeleteButton";

export default ({review, routeReviewToEdit}) => {
    return (
        <div className="review-box">
            <h3>user: {review.customer_id}</h3>
            <p>Their Rating: {review.rating}</p>
            <p>{review.review}</p>
            {/*render edit or delete button for authenticated user*/}
            {review.customer_id === parseInt(localStorage.customer_id) ?
                <>
                    <button className={"btn"}
                            onClick={() => routeReviewToEdit(review.id)} >Edit
                    </button>
                    <DeleteButton deleteType={"reviews"} id={review.id} title={"Confirm to delete"}/>
                </>
                : null
            }
        </div>

    )
}