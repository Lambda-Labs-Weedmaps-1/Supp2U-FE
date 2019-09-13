import React, { useEffect, useState} from 'react'
import Axios from 'axios'

import './businessSingleView.sass'



function BusinessOrders(props) {
    
    let businy = props.match.params.id;
   
    const [info, setInfo] = useState([{}])
    
    

    useEffect(() => {
       
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}`)
        .then(res =>{
            setInfo(res.data)
        })
        .catch(err =>{
            console.log('ERROR GETTING BUSINESS\n', err)
        })
        
        
    }, [])


    const orderFrom = e =>{
        window.location.href = `/business/${businy}/order`
    }

    return (
        <div>
            <h3>{info.name} Orders</h3>
            <p>A placeholder obviously.</p>
        </div>
    
    )
}

export default BusinessOrders
