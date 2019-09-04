import React, { useState } from 'react'
import Axios from "axios";

import './businessCreator.sass'

function BusinessCreator(props) {

    console.log('prop', props);
    
    // The useState hook that will store the Business information
    const [businessInformation, setBusinessInformation] = useState([{
        "user_id": 0,
        "name": "",
        "website": "",
        "city": "",
        "state": "",
        "street": " ",
        "zipcode": 0,
        "building_number": 420,
        "theme": "",
        "description": "",
        "recommended": null,
        "long": "",
        "lat": ""}]);
        

        //function that handles business creation via axios POST
        let postBusinessHandler = () => {
            Axios.post(`${process.env.REACT_APP_BACKEND_URL}users/1/businesses`, businessInformation)
                .then(res => {
                     console.log(res)
                     console.log("HERE")
                    }).then(res =>
                       { console.log("I AM HERE")
                        window.location.href = '/menu/new'
                    }
                    )
                .catch(error =>{
                    console.log('ERROR POST\n',error);
            });
        }

        // hard coded user for test reasons
        let user = 1
        
    const changeHandler = event => {
        setBusinessInformation({ ...businessInformation, [event.target.name]: event.target.value });
    };
    
    //   submit form function
    const submit = e =>{
        e.preventDefault()
        // Transmutes the address into a useable array
        if(businessInformation.street === undefined){console.log('Address in Required')}else{
        const newAddress = businessInformation.street
        const newAddressArray = newAddress.split(' ')
        //   address look up function
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=XXXXXXXXXXXXXXXXXXX`)
        Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${newAddressArray[0]}+${newAddressArray[1]}+${newAddressArray[2]},+${businessInformation.city},+${businessInformation.state}&key=${process.env.REACT_APP_GCOORDINATES}`)
        .then (res => {
        //     // sends location to businessInformation
           businessInformation.lat = res.data.results[0].geometry.location.lat.toString()
           businessInformation.long = res.data.results[0].geometry.location.lng.toString()

            //ensures that a lat and lng exist before posting
           if(businessInformation.lat && businessInformation.long){
               postBusinessHandler()
           } else {
               console.log("There was an error finding a lat and long for your selected address")
           }

        })
        console.log('data to be sent to backend', businessInformation)
        
    }}


    //   JSX for BusinessCreator component
    return (
        <>
    <h3>Create your business</h3>
    <div className="form"> 
        <form onSubmit={submit}>

            <div className="input-box-type1">
                <label>Name of business <span className="required-span">*</span></label>
                <input
                    type="text"
                    name="name"
                    value={businessInformation.name}
                    placeholder="business name..." 
                    onChange={changeHandler}
                    />
            </div>
            <br/>
            
            <div className="input-box-type1">
                <label>Address <span className="required-span">*</span></label>
                <input
                        type="text"
                        name="street"
                        placeholder="address"
                        onChange={changeHandler}
                        value={businessInformation.street}
                    />
            </div>
            
            <div className="input-box-type1">
                <label>Building number </label>
                <input
                    placeholder="Enter building number..."
                    type="integer"
                    name="building_number"
                    value={businessInformation.building_number}
                    onChange={changeHandler}
                     />
            </div>
            <div className="input-box-type1">
                <label>City <span className="required-span">*</span></label>
                <input
                    placeholder="City name..." 
                    type="text"
                    name="city"
                    value={businessInformation.city}
                    onChange={changeHandler}/>
            </div>
            <div className="input-box-type1">
                <label>State <span className="required-span">*</span></label>
                <input
                        type="text"
                        name="state"
                        placeholder="Enter state"
                        onChange={changeHandler}
                        value={businessInformation.state}
                    />
            </div>
            <div className="input-box-type1">
                <label>zipcode<span className="required-span">*</span></label>
                <input
                    placeholder="zipcode..."
                    type="integer"
                    name="zipcode"
                    value={businessInformation.zipcode}
                    onChange={changeHandler} />
            </div>
            
            <div className="input-box-type1">
                <label>Description</label>
                <textarea
                    placeholder="description of resturant..."
                    type="text"
                    name="description"
                    value={businessInformation.description}
                    onChange={changeHandler} />
            </div>

            {/* maybe turn this into a drop down */}
            <div className="input-box-type1">
                <label>Theme</label>
                <input
                    placeholder="Enter resturant theme..."
                    type="text"
                    name="theme"
                    value={businessInformation.theme}
                    onChange={changeHandler} />
            </div>

            
            <div className="input-box-type1">
                <label>Website</label>
                <input
                    placeholder="Enter website..."
                    type="text"
                    name="website"
                    value={businessInformation.website}
                    onChange={changeHandler} />
            </div>
            <span className="required-span">* required</span>


            <button className="create-business-button"> Create Business </button>

        </form>
    </div>
    </>
    )
}

export default BusinessCreator
