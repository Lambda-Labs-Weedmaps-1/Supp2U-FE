import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import './reviews.sass'

function ReviewPresentation() {

    const [review, setReview] = useState([{
        
    }])

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/:business_id/reviews`)
        .then(res=>{
            setReview(res.data)
        })
        .catch(err=>{
            console.log('ERROR POST\n', err)
        })
    }, [])

    return (
        <div>
            {/* write a codntial render here */}
        </div>
    )
}

export default ReviewPresentation
