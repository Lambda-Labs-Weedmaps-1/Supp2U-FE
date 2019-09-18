import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./customerView.sass";
import ShowReview from "../Reviews/show";

function CustomerOrders(props) {
  const [customer, setCustomer] = useState([{}]);
  const [orders, setOrders] = useState([{}]);

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
          `${process.env.REACT_APP_BACKEND_URL}customers/${res.data.id}/orders`
        )
          .then(res => {
            setOrders(res.data);
            console.log(res.data, "orders");
          })
          .catch(err => {
            console.log("ERROR GETTING REVIEWS\n", err);
          });
      })
      .catch(err => {
        console.log("ERROR GETTING CUSTOMER\n", err);
      });
  }, []);

   

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
        <h3>Your Orders</h3>
        {/* {review.map(review => (
          <div className="review-card">
            <p>{review.created_at}</p>
            <p>Rating: {review.rating}</p>
            <p>Review: {review.review}</p>
          </div>
        ))} */}
        {orders.map( order => {
          return (
            <div>
                <p>{order.id}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default CustomerOrders;
