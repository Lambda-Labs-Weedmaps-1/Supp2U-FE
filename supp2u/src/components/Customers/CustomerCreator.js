import React, { useState } from 'react'
import Axios from "axios";

import ImageUploader from '../shared/ImageUploader'
import './customerCreator.sass'


function CustomerCreator() {
    
    // The useState hook that will store the Customer information
    const [customerInformation, setCustomerInformation] = useState([{
        "user_id": 0,
        "custname": "",
        "image": null}]);
        
    //grabs the users ID from storage
    let user_id = localStorage.user_id;

    //function that handles Customer creation via axios POST
    // needs to ADD ACTUAL User number once we have it stored from auth0

    // this does seem to be adding a new customer to the backend, but the
    // cust name shows as null, backend function for adding customer info
    // needs to be updated to actually take the info and input it to DB :)
    let postCustomerHandler = (event, photoForm , state) => {

        if(state.image !== null){
            // this adds the image to the business
            photoForm.append("image", state.image)
            Axios.post(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/customers`,  
            photoForm, customerInformation,
            { headers: {'Content-Type': 'multipart/form-data' }}
            )
            .then(res => {
               localStorage.setItem("customer_id", res.data.id)
               localStorage.removeItem("business_id")
                }).then(res =>
                    { window.location.href = '/'})
            .catch(error =>{
                console.log('ERROR POST\n',error);
        });
        } else{

        Axios.post(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/customers`, customerInformation)
            .then(res => {
                    localStorage.setItem("customer_id", res.data.id)
                    localStorage.removeItem("business_id")
                }).then(res =>
                    {window.location.href = '/'})
            .catch(error =>{
                console.log('ERROR POST\n',error);
        });}
    }

        
    const changeHandler = event => {
        setCustomerInformation({ ...customerInformation, [event.target.name]: event.target.value });
    };
    
    //   submit form function for creating a customer
    const submit = e =>{
        e.preventDefault()
        const photoForm = new FormData(e.target);
        if(customerInformation.custname != "") {
            postCustomerHandler(e, photoForm, customerInformation);
        }else{
            console.log('Must have a name')
        }
        
        console.log('data to be sent to backend', customerInformation)
        
    }

    // These two functions handle the image processing in conjunction with the ImageUnloader component
    const selectImage = image => {
        setCustomerInformation({...customerInformation, "image": image})
    }

    const unselectImage = () => {
        setCustomerInformation({...customerInformation, "image": "" })
    }


    //   JSX for customerCreator component
    return (
        <>
    <h3>Create your customer</h3>
    <div className="form"> 
        <form onSubmit={submit}>

            <div className="input-box-type1">
                <h4>Display name: <span className="required-span">*</span></h4>
                <input
                    type="text"
                    name="custname"
                    value={customerInformation.custname}
                    placeholder="customer name..." 
                    onChange={changeHandler}
                    />
            <span className="required-span">* required</span>
            </div>
            <br/>

            <h4>Add a Profile Picture</h4>  

            <div className="image-uploader">
          
            </div>

            <button className="create-business-button"> Create Customer Account </button>

        </form>
          <ImageUploader
                className="image-uploader"
                image = {customerInformation.image}
                selectImage = {selectImage}
                unselectImage = {unselectImage}
                />
    </div>
    </>
    )
}

export default CustomerCreator
