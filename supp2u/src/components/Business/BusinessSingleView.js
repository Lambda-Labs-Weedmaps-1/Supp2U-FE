import React, { useEffect, useState} from 'react'
import Axios from 'axios'

import './businessSingleView.sass'
import MenuShowcase from '../Menu/MenuShowcase';
import ReviewPresentation from '../Reviews/list/ReviewList'
import BusinessHeader from './BusinessHeader'


function BusinessSingleView(props) {
    
    // this holds the id of the business
    let businy = props.match.params.id;
    // this sets the state to the information of the business called
    const [info, setInfo] = useState([{}])
    // this sets the rating of the business
    const [rating, setRating] = useState({ "data":"Business has not been rated yet" })
    //this sets the menus if
    const [menuId , setMenuId] = useState(null)
    //this holds the hours for the business
    const [hours, setHours] = useState([{}])

    useEffect(() => {
        // api GET to bring in all the info for the business
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}`)
        .then(res =>{
            setInfo(res.data)
        })
        .catch(err =>{
            console.log('ERROR GETTING BUSINESS\n', err)
        })
        //api GET to bring in the rating
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}/ratings`)
        .then(res =>{
            setRating(res)
        })
        .catch(err =>{
            console.log('ERROR GETTING RATINGS\n', err)
        })
        //api GET to bring in the menu
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}/menus`)
        .then(res =>{
            setMenuId(res.data.id)
        })
        .catch(err =>{
            console.log('ERROR GETTING MENU ID\n', err)
        })
        //api GET to grab the businesses hours of operations /
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}/schedules`)
        .then(res =>{
            setHours(res.data)
        })
        .catch(err =>{
            console.log('ERROR GETTING MENU ID\n', err)
        })
    }, [])


    const orderFrom = e =>{
        window.location.href = `/business/${businy}/order`
    }

    return (
    <div className="b-view">
    {/* here i am passing in 2 states as an array so on the component i can grab the data from the property of info (it will name the props array after the first passed state ) */}
    <BusinessHeader info={[info, rating, hours]}/>

    <button className="buttonA" onClick={orderFrom}>Place Order</button>

    <ReviewPresentation business_id={props.match.params.id} history={props.history}/>

    {/* here we are checking conditionally to see if there is a menu to show our user */}
    {menuId ===null ? <p>no menu avliable</p>:
    <div>
    <h1>Menu</h1>
    <MenuShowcase props={menuId} />
    </div>}
    </div>
    )
}

export default BusinessSingleView
