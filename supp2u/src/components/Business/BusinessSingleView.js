import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import './businessSingleView.sass'
import MenuShowcase from '../Menu/MenuShowcase';

function BusinessSingleView() {

    // this sets the state to the information of the business called        
    const [info, setInfo] = useState([{}])

    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/1`)
        .then(res =>{
            console.log('bus info incoming', res.data);
            setInfo(res.data)
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
    </div>
    <MenuShowcase />
    </>
    )
}

export default BusinessSingleView
