import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function CustomersReviews(props) {

    const [review, setReview] = useState([{}])

    let customer_id = props.customer_id

    useEffect(() => {
    // api call to get the reviews connect to the customer 
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}customers/${customer_id}/reviews`)
    .then(res =>{
        setReview(res.data)
        console.log(res, 'ifeowhfoeoifwhoewihfeoiw')
    })
    .catch(err =>{
        console.log('ERROR POST\n', err)
    })
    },[])

    return (
        <div>
            
        </div>
    )
}

export default CustomersReviews
