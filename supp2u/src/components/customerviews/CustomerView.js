import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./customerView.sass";
import ShowReview from "../Reviews/show";

function CustomerView(props) {
  const [customer, setCustomer] = useState([{}]);
  const [review, setReview] = useState([{}]);

  // This pulls the user_id from local storage
  let user_id = localStorage.getItem("user_id");

  useEffect(() => {
    //api call to get the information on the users customer status
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/customers`)
      .then(res => {
        setCustomer(res.data);
        console.log(res.data, "customer");
        // api call to get the reviews connect to the customer it must be nested in order to get the id of the customer
        Axios.get(
          `${process.env.REACT_APP_BACKEND_URL}customers/${res.data.id}/reviews`
        )
          .then(res => {
            setReview(res.data);
            console.log(res.data, "review");
          })
          .catch(err => {
            console.log("ERROR GETTING REVIEWS\n", err);
          });
      })
      .catch(err => {
        console.log("ERROR GETTING CUSTOMER\n", err);
      });
  }, [user_id]);

  let deleteReview = (id) =>{
    setReview(review.filter(review => review.id !== id));
  };

  const routeReviewToEdit = (id) => {
    props.history.push(`/review/${id}`)
  };

  return (

    <div className="customer-view-container">
      <div className="customer-profile-info">
        <h1 className="name-box">{customer.custname}</h1>
        {customer.image === null || customer.image === undefined ? (
          <p>Image loading....</p>
        ) : (
          <img
            className="image"
            src={customer.image["url"]}
            alt="customer portrait"
          />
        )}
      </div>

      <div className="customer-profile-reviews">
        <h3>Your Reviews</h3>
        {/* {review.map(review => (
          <div className="review-card">
            <p>{review.created_at}</p>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.review}</p>
          </div>
        ))} */}
        {review.map(review => {
          return (
            <ShowReview key={review.id} review={review} routeReviewToEdit={routeReviewToEdit} deleteReview={deleteReview}/>
          )
        })}
      </div>
    </div>
  );
}

export default CustomerView;
