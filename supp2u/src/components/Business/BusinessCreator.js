import React, { useState } from 'react'
import Axios from "axios";

import ImageUploader from '../shared/ImageUploader.js';

import './businessCreator.sass';

function BusinessCreator(props) {
    
    // The useState hook that will store the Business information
    const [businessInformation, setBusinessInformation] = useState([{
        "user_id": 0,
        "name": "",
        "website": "",
        "city": "",
        "state": "",
        "street": " ",
        "zipcode": 0,
        "building_number": "",
        "theme": "",
        "description": "",
        "recommended": null,
        "long": "",
        "lat": "",
        "image": null
        }]);

        //function that handles business creation via axios POST
        let postBusinessHandler = async (event, photoForm, state ) => {
            
            //captures user_id 
            let user_id = localStorage.user_id;
            let businy = 0
            

            await Axios.post(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/businesses`
            , businessInformation)
                .then(res => {
                    localStorage.setItem("business_id", res.data.id)
                    localStorage.removeItem("customer_id")
                    businy = res.data.id
                    })
                    // .then(res =>
                    //     businy = res.data.id
                    //     { window.location.href = '/schedule/create'}
                    //     )
                .catch(error =>{
                    console.log('ERROR POST\n',error);
            });

            businy = localStorage.getItem("business_id")
            
            // here we are checking if there is an image before we POST
            if(state.image !== null){
                photoForm.append("image", state.image)
                Axios.patch(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}`,  
                photoForm,
                { headers: {'Content-Type': 'multipart/form-data' }}
                )
                .then(res => {
                     console.log(res)
                     { window.location.href = '/schedule/create'}
                    })
                .catch(error =>{
                    console.log('ERROR POST\n',error);
            });
            } 

            // Axios.post(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/businesses`
            // , businessInformation)
            //     .then(res => {
            //         localStorage.setItem("business_id", res.data.id)
            //         localStorage.removeItem("customer_id")
            //         }).then(res =>
            //             { window.location.href = '/schedule/create'})
            //     .catch(error =>{
            //         console.log('ERROR POST\n',error);
            // });
        }
        

        
    const changeHandler = event => {
        setBusinessInformation({ ...businessInformation, [event.target.name]: event.target.value });
    };
    
    //   submit form function
    const submit = async (e) =>{
        e.preventDefault()
        const photoForm = new FormData(e.target);
        // Transmutes the address into a useable array
        if(businessInformation.street === undefined){console.log('Address in Required')}else{
        const newAddress = businessInformation.street
        const newAddressArray = newAddress.split(' ')
        //   address look up function
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=XXXXXXXXXXXXXXXXXXX`)
        await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${newAddressArray[0]}+${newAddressArray[1]}+${newAddressArray[2]},+${businessInformation.city},+${businessInformation.state}&key=${process.env.REACT_APP_GCOORDINATES}`)
        .then (res => {
        //     // sends location to businessInformation
           businessInformation.lat = res.data.results[0].geometry.location.lat.toString()
           businessInformation.long = res.data.results[0].geometry.location.lng.toString()

            //ensures that a lat and lng exist before posting
           if(businessInformation.lat && businessInformation.long){
                postBusinessHandler(e, photoForm, businessInformation)
                console.log('busy body', businessInformation)
                console.log('photoform', photoForm)
           } else {
                console.log("There was an error finding a lat and long for your selected address")
           }

        })
        console.log('data to be sent to backend', businessInformation)
        
    }}

    // These two functions handle the image processing in conjunction with the ImageUnloader component
    const selectImage = image => {
        setBusinessInformation({...businessInformation, "image": image})
    }

    const unselectImage = () => {
        setBusinessInformation({...businessInformation, "image": "" })
    }

    //   JSX for BusinessCreator component
    return (
        <>
    <h3>Create your business</h3>
    <div className="form"> 
        <form onSubmit={submit}>
            <div className="input-box-type1">
                <label>Name of business <span className="required-span">*</span></label>
                <input
                    id="test1"
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
                    placeholder="Enter restaurant theme..."
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

            
            {/* <StripeProvider piKey="pk_test_Lk7CkE4Yez5LYD3KvwJwoYN500AVGVDnfZ">
                <Elements> */}
                    <button className="create-business-button"> Create Business </button>
                {/* </Elements>
            </StripeProvider> */}

        </form>
        <ImageUploader
                image = {businessInformation.image}
                selectImage = {selectImage}
                unselectImage = {unselectImage}
                />
    </div>
    </>
    )
}

export default BusinessCreator
