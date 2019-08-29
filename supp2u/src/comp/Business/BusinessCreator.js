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
        <div className="form"> 
        <h3>Create your business</h3>
            <form>
            <input
                placeholder="business name..." />
            </form>
            <BusinessAdd />
        </div>
    )
}

export default BusinessCreator
