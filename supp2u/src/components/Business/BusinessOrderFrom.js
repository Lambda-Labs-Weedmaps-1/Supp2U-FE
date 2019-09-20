import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MenuOrder from './../Menu/MenuOrder';
import './BusinessOrderFrom.sass'

function BusinessOrderFrom(props) {

    let businy = props.match.params.id;

    const [setCustomer] = useState([{}])
    const [info, setInfo] = useState([{}])
    const [menuId , setMenuId] = useState(null)

    let user_id = localStorage.getItem("user_id");
    // let custy = localStorage.getItem("customer_id");

  useEffect(() => {
    //api call to get the information on the users customer status
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/customers`)
    .then(res =>{
        setCustomer(res.data)
    
    })
    .catch(err =>{
        console.log('ERROR GETTING CUSTOMER\n', err)
    })

    Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}/menus`)
    .then(res =>{
        setMenuId(res.data.id)
    })
    .catch(err =>{
        console.log('ERROR GETTING MENU ID\n', err)
    })

    Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businy}`)
    .then(res =>{
        setInfo(res.data)
    })

  }, [])

  return (
    <div>
      
      <div>
        
        <h1>{info.name} Menu</h1>
        <p>{info.street}</p>
        <p>{info.city} {info.state} {info.zipcode}</p>
        {menuId ===null ? <p>You Cannot Order Online From This Location!</p>:
        <MenuOrder props={menuId} businy={businy} />}

      </div>
    </div>
  )
}

export default BusinessOrderFrom