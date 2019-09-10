import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import MenuShowcase from './MenuShowcase'

import './menu.sass'

// this component will show menu so the user can decide if they like it or not
function MenuPreview() {

    // this holds the state of the diffrent responses from the /menus endpoint
    const [menuId, setMenuId] = useState()
    const [menuName, setMenuName] = useState()

    //these items are set and then mapped over
    const [item, setItem] = useState([{}])

    // this grabs the business id so we can use it in our axios call
    let business_id = localStorage.business_id;

    useEffect(() => {
        // axis to get the menus and their ids
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${business_id}/menus`)
        .then(response =>{
            setMenuId(response.data.id);
            setMenuName(response.data.name)
        }).catch(error =>{
            console.log('ERROR GETTING MENU ITEMS\n',error);
        });
        // axios call to ge the items from the menu
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}menus/${menuId}/items`)
        .then(res => {
            console.log(res)
        })
   
    }, [])

    const redirect = e =>{
        window.location.href = '/home'
      }

    return (
        <div>
            <h1>{menuName}</h1>
            <br />
            <MenuShowcase props={menuId}/>
            <button onClick={redirect}>I am done looking at my menu</button>
        </div>
    )
}

export default MenuPreview
