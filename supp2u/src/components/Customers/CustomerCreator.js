import React, { useState } from 'react'
import Axios from "axios";


import '../Business/businessCreator.sass'


function CustomerCreator() {
    
    // The useState hook that will store the Customer information
    const [customerInformation, setCustomerInformation] = useState([{
        "user_id": 0,
        "custname": ""}]);
        
        let user_id = localStorage.user_id;

    //function that handles Customer creation via axios POST
    // needs to ADD ACTUAL User number once we have it stored from auth0

    // this does seem to be adding a new customer to the backend, but the
    // cust name shows as null, backend function for adding customer info
    // needs to be updated to actually take the info and input it to DB :)
    let postCustomerHandler = () => {
        Axios.post(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/customers`, customerInformation)
            .then(res => {
                    console.log(res)
                    console.log("HERE customer")
                    localStorage.setItem("customer_id", res.data.id)
                    localStorage.removeItem("business_id")
                }).then(res =>
                    { console.log("I AM HERE customer")
                    window.location.href = '/'
                }
                )
            .catch(error =>{
                console.log('ERROR POST\n',error);
        });
    }

        
    const changeHandler = event => {
        setCustomerInformation({ ...customerInformation, [event.target.name]: event.target.value });
    };
    
    //   submit form function
    const submit = e =>{
        e.preventDefault()
        // 
        if(customerInformation.custname) {
            console.log('do the next thing now ;p', customerInformation.custname)
            postCustomerHandler();
        }
        
        console.log('data to be sent to backend', customerInformation)
        
    }


    //   JSX for customerCreator component
    return (
        <>
    <h3>Create your customer</h3>
    <div className="form"> 
        <form onSubmit={submit}>

            <div className="input-box-type1">
                <label>Display name: <span className="required-span">*</span></label>
                <input
                    type="text"
                    name="custname"
                    value={customerInformation.custname}
                    placeholder="customer name..." 
                    onChange={changeHandler}
                    />
            </div>
            <br/>
            
            <span className="required-span">* required</span>


            <button className="create-business-button"> Create Customer Account </button>

        </form>
    </div>
    </>
    )
}

export default CustomerCreator
