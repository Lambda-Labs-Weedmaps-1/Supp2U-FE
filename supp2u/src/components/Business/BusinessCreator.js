import React, { useState } from 'react'
import Axios from "axios";

import './business-creator.sass'

function BusinessCreator() {

    // The useState hook that will store the Business information
    const [businessInformation, setBusinessInformation] = useState([{
        "user_id": 0,
        "name": "",
        "website": "",
        "city": "",
        "state": "",
        "street": "",
        "zipcode": 0,
        "building_number": 420,
        "theme": "",
        "description": "",
        "hours": "",
        "recommended": null,
        "long": "",
        "lat": ""}]);
    
        // hard coded user for test reasons
    let user = 1

    const changeHandler = event => {
        setBusinessInformation({ ...businessInformation, [event.target.name]: event.target.value });
      };

    //   submit form function
      const submit = e =>{
          e.preventDefault()
          // Logs out what the current businessinfo is before it post it
        //   console.log('new data', businessInformation)
        // Transmutes the address into a useable array
        const newAddress = businessInformation.street.split(' ')
        //   address look up function
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=XXXXXXXXXXXXXXXXXXX`)
        Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${newAddress[0]}+${newAddress[1]}+${newAddress[2]},+${businessInformation.city},+${businessInformation.state}&key=${process.env.REACT_APP_GCOORDINATES}`)
        .then (res => {
            // sends location to businessInformation
            console.log("location", res.data.results[0].geometry.location);
           businessInformation.lat = res.data.results[0].geometry.location.lat
           businessInformation.long = res.data.results[0].geometry.location.lng 
        })
        setTimeout(() => {
            Axios.post(`https://supp2udev.herokuapp.com/api/v1/users/${user}/businesses`, businessInformation)
            .then((res, req) => { console.log('sent') })
            .catch(error =>{console.log('ERROR POST\n',error);
        }, 5000);
      })
    
    
    }

    //   REFRENCE FOR THE GEOCODE API
    //   const getLL = adde => {
    //     adde.preventDefault();
    //     // This is currently just a test address and not taking in the actual state address
    //     // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=XXXXXXXXXXXXXXXXXXX`)
    //     Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.REACT_APP_GCOORDINATES}`)
    //     .then (res => {
    //         console.log("res", res);
    //         console.log("res data", res.data)
    //     })
    // }
    
    //   JSX for BusinessCreator component
    return (
        <>
    <div className="form"> 
    <h3>Create your business</h3>
        <form onSubmit={submit}>

            <div className="input-box-type1">
                <label>Name of your business</label>
                <input
                    type="text"
                    name="name"
                    value={businessInformation.name}
                    placeholder="business name..." 
                    onChange={changeHandler}
                    />
            ....
            </div>
            <br/>
            {/* Here we bring in the address input, this is off in another component because of the extra frontend logic used to turn the address into a geocoordanate */}
            <div className="input-box-type1">
                <label>Address</label>
                <input
                        type="text"
                        name="street"
                        placeholder="address"
                        onChange={changeHandler}
                        value={businessInformation.street}
                    />
            </div>
            
            <div className="input-box-type1">
                <label>Building number</label>
                <input
                    placeholder="Enter building number..."
                    type="integer"
                    name="building_number"
                    value={businessInformation.building_number}
                    onChange={changeHandler}
                     />
            </div>
            <div className="input-box-type1">
                <label>zipcode</label>
                <input
                    placeholder="zipcode..."
                    type="integer"
                    name="zipcode"
                    value={businessInformation.zipcode}
                    onChange={changeHandler} />
            </div>
            <div className="input-box-type1">
                <label>City</label>
                <input
                    placeholder="City name..." 
                    type="text"
                    name="city"
                    value={businessInformation.city}
                    onChange={changeHandler}/>
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
            
            {/* maybe turn this into a form of its own */}
            <div className="input-box-type1">
                <label>Hours of Operations</label>
                <input
                    placeholder="Enter open and close hours..." 
                    type="text"
                    name="hours"
                    value={businessInformation.hours}
                    onChange={changeHandler}/>
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


            <button> Create Business </button>

        </form>
    </div>
    </>
    )
}

export default BusinessCreator
