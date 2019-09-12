import React, { useState, useEffect } from 'react'
import Axios from 'axios'

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
    <div>
      <h3>Order Complete</h3>
      <p>Go back to main page!</p>
      <button onClick={home}>Go Back!</button>
    </div>
  )
}

export default CustomerOrderFinish