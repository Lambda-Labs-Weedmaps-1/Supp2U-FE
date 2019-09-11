import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import MenuShowcase from '../Menu/MenuShowcase';
import MenuOrder from './../Menu/MenuOrder';

function BusinessOrderFrom(props) {

    let businy = props.match.params.id;

    const [customer, setCustomer] = useState([{}])
    const [info, setInfo] = useState([{}])
    const [menuId , setMenuId] = useState(null)

    let user_id = localStorage.getItem("user_id");
    let custy = localStorage.getItem("customer_id");

  useEffect(() => {
    //api call to get the information on the users customer status
    Axios.get(`${process.env.REACT_APP_BACKEND_URL}users/${user_id}/customers`)
    .then(res =>{
        setCustomer(res.data)
    
    })
    .catch(err =>{
        console.log('ERROR GETTING CUSTOMER\n', err)
    })
    console.log(customer, 'id')

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
      <h1 className="name-box">
      {customer.custname}
      </h1>
      <div>
        
        <h1>{info.name} Menu</h1>
        {menuId ===null ? <p>You Cannot Order Online From This Location!</p>:
        <MenuOrder props={menuId} businy={businy} />}

      </div>
    </div>
  )
}

export default BusinessOrderFrom