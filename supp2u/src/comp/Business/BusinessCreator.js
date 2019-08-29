import React, { useState } from 'react'
import BusinessAdd from './BusinessAdd'
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
        "long": null,
        "lat": null}]);
    
        // hard coded user for test reasons
    let user = 1

    const changeHandler = event => {
        setBusinessInformation({ ...businessInformation, [event.target.name]: event.target.value });
      };

    //   submit form function
      const submit = e =>{
          e.preventDefault()
          console.log('new data', businessInformation)
                setTimeout(() => {
                Axios.post(`https://supp2udev.herokuapp.com/api/v1/users/${user}/businesses`)
            .then((res, req) => {
    
                res.data = businessInformation
                    
        
            }).catch(error =>{
            console.log('ERROR POST\n',error);
        }, 5000);
      })}

    
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
            <BusinessAdd />
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


            <button> ................... </button>

        </form>
    </div>
    </>
    )
}

export default BusinessCreator
