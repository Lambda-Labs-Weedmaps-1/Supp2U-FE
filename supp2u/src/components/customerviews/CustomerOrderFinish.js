import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import './CustomerCart.sass'

function CustomerOrderFinish(props) {

  const [customer, setCustomer] = useState([{}]);
  
  
  let custy = localStorage.getItem("customer_id");
  let user_id = localStorage.getItem("user_id");

  useEffect(() => {


  }, [])


  let home = stuff => {
      window.location.href = "/home"
  }
  

  return (
    <div className="centerOrder">
      <div className="checkoutbox2">
        <h3>Order Complete</h3>
        <p>Go back to main page!</p>
        <button className="" onClick={home}>Go Back!</button>
      </div>
    </div>
  )
}

export default CustomerOrderFinish