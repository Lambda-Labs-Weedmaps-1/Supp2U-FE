import React, { useEffect, useState} from 'react'
import Axios from 'axios'

import './businessSingleView.sass'
import MenuShowcase from '../Menu/MenuShowcase';
import ReviewList from '../Reviews/list/ReviewList'
import BusinessHeader from './BusinessHeader'
import SearchCard from "../../utils/SearchCard";
import DeleteBusinessButton from './DeleteBusinessButton'

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
            console.log('ERROR GETTING BUSINESS ID\n', err)
        })
    }, [])

    // function for the button that sends user to the orders form
    const orderFrom = () =>{
        window.location.href = `/business/${businy}/order`
    }
    // function for the button that allows user to update their business
    const goToUpdate = () =>{
        window.location.href = `/business/update/${businy}`
    }

    return (
    <div className="b-view">
    {/* these 2 buttons will only display if you are be owner of the business     */}
    {localStorage.getItem("business_id") != businy || localStorage.getItem("customer_id") ?
    null :
    <div> 
        <button onClick={goToUpdate}>Update Your Business</button>
        <DeleteBusinessButton bis_id={props.match.params.id} bis_info={info} />
    </div>}

    {/* here i am passing in 2 states as an array so on the component i can grab the data from the property of info (it will name the props array after the first passed state ) */}
    <BusinessHeader info={[info, rating, hours]}/>

    {/*<ReviewPresentation business_id={props.match.params.id} history={props.history}/>*/}
    {/* another ternary function that only lets this button appear for customers so businesses cant order! */}
    {localStorage.getItem("business_id") || !localStorage.getItem("customer_id") ? <p>Must be Customer to Order</p> :
        <button className="buttonA" onClick={orderFrom}>Place Order</button>}

    <SearchCard
        List={ReviewList}
        history={props.history}
        match={props.match}
        title={"Reviews"}
        limit={3}
    />

    {/* here we are checking conditionally to see if there is a menu to show our user */}
    {menuId ===null ? <p>no menu available</p>:
    <div>
    <h1>Menu</h1>
    <MenuShowcase props={menuId} />
    </div>}
    </div>
    )
}

export default BusinessSingleView
