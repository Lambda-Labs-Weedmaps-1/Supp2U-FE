import React, { useState, useEffect } from 'react'
import Axios from 'axios'

import CustomerReviews from './CustomersReviews'

function CustomerView() {
// Sets the customer holds it in an object in an array so we can call the first object (users can only have 1 customer)
  const [customer, setCustomer] = useState([{}])
// This pulls the user_id from local storage
  let user_id = localStorage.getItem("user_id");

  useEffect(() => {
    //api call to get the information on the users customer status
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/customers`)
        .then(res =>{
            setCustomer(res.data)
        })
        .catch(err =>{
            console.log('ERROR POST\n', err)
        })
      }, [])

  return (
    <div>
      <div>
      {customer[0].custname}
      </div>
      <CustomerReviews customer_id={customer[0].id} />
    </div>
  )
}

export default CustomerView

