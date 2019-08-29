import React, { useEffect, useState } from 'react'
import BusinessAdd from './BusinessAdd'
import Axios from "axios";

import './business-creator.sass'

function BusinessCreator() {

    // The useState hook that will store the Business information
    const [BusinessInformation, setBusinessInformation] = useState([]);

    // useEffect hook that connects to the backend api
    // useEffect(() => {
    //     setTimeout(() => {
    //         const response = await Axios.get('https://supp2udev.herokuapp.com/')
    //         Axios.post('https://supp2udev.herokuapp.com/')
    //         .then((res) => {
    //             if (canceled) {
    //               return;
    //             }
    //             setState(res.data);
    //             return () => {
    //               canceled = true;
    //             }
    //           });
    //       setBusinessInformation([{
            
    //       }]);
          
    //     }, 1000);
    //   }, []);
    
    //   JSX for BusinessCreator component
    return (
        <>
    <h3>Create your business</h3>
    <div className="form"> 
        <form>

            <div className="input-box-type1">
                <label>Name of your business</label>
                <input
                    placeholder="business name..." />
            ....
            </div>
            <br/>
            {/* Here we bring in the address input, this is off in another component because of the extra frontend logic used to turn the address into a geocoordanate */}
            <BusinessAdd />
            <div className="input-box-type1">
                <label>Building number</label>
                <input
                    placeholder="Enter building number..." />
            </div>
            <div className="input-box-type1">
                <label>zipcode</label>
                <input
                    placeholder="zipcode..." />
            </div>
            <div className="input-box-type1">
                <label>City</label>
                <input
                    placeholder="City name..." />
            </div>
            
            <div className="input-box-type1">
                <label>zipcode</label>
                <input
                    placeholder="zipcode name..." />
            </div>
            <div className="input-box-type1">
                <label>Description</label>
                <textarea
                    placeholder="description of resturant..." />
            </div>

            {/* maybe turn this into a drop down */}
            <div className="input-box-type1">
                <label>Theme</label>
                <input
                    placeholder="Enter resturant theme..." />
            </div>
            
            {/* maybe turn this into a form of its own */}
            <div className="input-box-type1">
                <label>Hours of Operations</label>
                <input
                    placeholder="Enter open and close hours..." />
            </div>

        </form>
    </div>
    </>
    )
}

export default BusinessCreator
