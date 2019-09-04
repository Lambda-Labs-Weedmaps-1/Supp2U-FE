import React, { useEffect, useState, useContext } from 'react'
import Axios from 'axios'

import './businessSingleView.sass'
import MenuShowcase from '../Menu/MenuShowcase';
import ReviewPresentation from '../Reviews/list/ReviewPresentation'

// function BusinessSingleView() {

//     console.log(this.match.params)

//     // this sets the state to the information of the business called        
//     const [info, setInfo] = useState([{}])
//     // this sets the rating of the business
//     const [rating, setRating] = useState({ "data":"loading..." })

//     useEffect(() => {
//         // api GET to bring in all the info for the business
//         Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/1`)
//         .then(res =>{
//             setInfo(res.data)
//         })
//         .catch(err =>{
//             console.log('ERROR POST\n', err)
//         })
//         //api GET to bring in the rating
//         Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/1/ratings`)
//         .then(res =>{
//             setRating(res)
//         })
//         .catch(err =>{
//             console.log('ERROR POST\n', err)
//         })
//     }, [])


//     return (
//     <>
//     <div className="business-header">
//         <h2>{info.name}</h2>
//         <div>
//         {info.street}, {info.city}, {info.zipcode}, {info.state}
//         </div>
//         <div>
//         Rating: {rating.data}
//         </div>
//     </div>
//     <ReviewPresentation />
//     <MenuShowcase />
//     </>
//     )
// }

function BusinessSingleView(props) {

    console.log('business number prop', props.match.params.id);

    let businy = props.match.params.id;

    // this sets the state to the information of the business called        
    const [info, setInfo] = useState([{}])
    // this sets the rating of the business
    const [rating, setRating] = useState({ "data":"loading..." })

    useEffect(() => {
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
    <ReviewPresentation />
    <MenuShowcase />
    </>
    )
}

export default BusinessSingleView
