import React, { useState, useEffect } from "react";
import Axios from "axios";

const CustomerView = props => {
  const [customerView, setCustomerView] = useState([])
  let customerID = props.match.params.id;

  useEffect(() => {

    let fetchData = () => {
      Axios.get(
        // `${process.env.REACT_APP_BACKEND_URL}users/${customerID}/customers`
        `http://localhost:3001/api/v1/users/1/customers`
      )
        .then(res => {
          console.log("res", res);
          console.log(res.data)
          setCustomerView(res.data);
        })
        .catch(error => {
          alert(error);
        });
    }
    fetchData();  
  }, []);

  return (
    <>
      <h3>CustomerView</h3>
      <p> name: {customerView.user_id}</p>
    </>
  );
};

export default CustomerView;
