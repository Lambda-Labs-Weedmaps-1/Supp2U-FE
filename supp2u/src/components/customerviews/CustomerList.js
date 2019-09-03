import React, { useState } from "react";
import Axios from "axios";

const CustomerList = () => {
  const [customerListView, setCustomerListView] = useState([{}]);

  let fetchData = () => {
    Axios.get(
      `${process.env.REACT_APP_BACKEND_URL}users/1/customers`
    )
      .then(res => {
        console.log('res', res);
      })
      .catch(error => {
        alert(error);
      });
  }
  fetchData();


  return (
    <>
      <h3>CustomersList</h3>
      <div></div>
    </>
  );
}

export default CustomerList;
