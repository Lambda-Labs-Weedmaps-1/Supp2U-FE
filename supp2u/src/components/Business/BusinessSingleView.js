import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import './businessSingleView.sass'
import MenuShowcase from '../Menu/MenuShowcase';

function BusinessSingleView() {

    // this sets the state to the information of the business called        
    const [info, setInfo] = useState([{}])
    // this sets the rating of the business
    const [rating, setRating] = useState({ "data":"loading..." })

    useEffect(() => {
        // api GET to bring in all the info for the business
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/1`)
        .then(res =>{
            console.log('bus info incoming', res.data);
            setInfo(res.data)
        })
        .catch(err =>{
            console.log('ERROR POST\n', err)
        })
        //api GET to bring in the rating
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/1/ratings`)
        .then(res =>{
            console.log('rating incoming', res.data);
            setRating(res)
        })
        .catch(err =>{
            console.log('ERROR POST\n', err)
        })
    }, [])


    return (
    <>
    <div className="business-header">
        <h2>{info.name}</h2>
        <div>
        {info.street}, {info.city}, {info.zipcode}, {info.state}
        </div>
        <div>
        Rating: {rating.data}
        </div>
    </div>
    <MenuShowcase />
    </>
    )
}

export default BusinessSingleView
