import React, { useState } from 'react'
import Axios from "axios";

import '../Business/business-creator.sass'


function CustomerCreator() {
    
    // The useState hook that will store the Customer information
    const [customerInformation, setCustomerInformation] = useState([{
        "user_id": 0,
        "custname": ""}]);
        

        //function that handles Customer creation via axios POST
        let postCustomerHandler = () => {
            Axios.post(`${process.env.REACT_APP_BACKEND_URL}users/1/customers`, customerInformation)
                .then(res => {
                     console.log(res)
                     console.log("HERE customer")
                    }).then(res =>
                       { console.log("I AM HERE customer")
                        window.location.href = '/'
                    }
                    )
                .catch(error =>{
                    console.log('ERROR POST\n',error);
            });
        }

        // hard coded user for test reasons
        let user = 1
        
    const changeHandler = event => {
        setCustomerInformation({ ...customerInformation, [event.target.name]: event.target.value });
    };
    
    //   submit form function
    const submit = e =>{
        e.preventDefault()
        // 
        if(customerInformation.custname) {
            console.log('do the next thing now ;p', customerInformation.custname)
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
