import React, { useEffect, useState} from 'react'
import Axios from 'axios'

import './businessSingleView.sass'
import MenuShowcase from '../Menu/MenuShowcase';
import ReviewPresentation from '../Reviews/list/ReviewPresentation'


function BusinessSingleView(props) {

    // this holds the id of the business
    let businy = props.match.params.id;
    // this sets the state to the information of the business called        
    const [info, setInfo] = useState([{}])
    // this sets the rating of the business
    const [rating, setRating] = useState({ "data":"loading..." })
    //this sets the menus if
    const [menuId , setMenuId] = useState({})
    // brought this in to try and mitigated the amount of api calls
    const [count, setCount] = useState(1)

    useEffect(() => {
        setCount(1)
        // api GET to bring in all the info for the business
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}`)
        .then(res =>{
            setInfo(res.data)
        })
        .catch(err =>{
            console.log('ERROR POST\n', err)
        })
        //api GET to bring in the rating
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}/ratings`)
        .then(res =>{
            setRating(res)
        })
        .catch(err =>{
            console.log('ERROR POST\n', err)
        })
        //api GET to bring in the menu
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}/menus`)
        .then(res =>{
            setMenuId(res.data.id)
        })
        .catch(err =>{
            console.log('ERROR POST\n', err)
        })
    }, [count])

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
    <ReviewPresentation props={props.match.params.id} />
    <MenuShowcase props={menuId} />
    </>
    )
}

export default BusinessSingleView
