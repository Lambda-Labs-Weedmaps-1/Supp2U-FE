import React, { useState } from 'react'
import Axios from 'axios'
import ItemCreator from './ItemCreator'

import './menu.sass'

function MenuCreator(props){

  //This creates a new menu
  const [menu, setMenu] = useState({"name":"untitled"})
  // this lets us know if the menu has been created in order to render the ablitiy to add items
  const [menuCreated, setMenuCreated] = useState(false)
  // this sets the menu id so that we can display the menu as the user add items too it
  const [menuId, setMenuId] = useState({ id:null })

  //this function changes the state for menu
  const changeHandlerMenu = event => {
      setMenu({ ...menu, [event.target.name]: event.target.value })
  };

  //captures business_id 
  let business_id = localStorage.business_id;

  // This submit creates a new menu and is only called on the submit 
  const submitMenu = e => {
      e.preventDefault();
      //conditional that forces them to name their menu, maybe change this into an alert instead of just a console log
      if(menu.name === "untitled"){console.log("You need to name your menu")}
      else{
      Axios.post(`${process.env.REACT_APP_BACKEND_URL}businesses/${business_id}/menus`, menu)
              .then(res => {
                  console.log('sent menu', res)
                  setMenuId(res.data.id)
                  }).catch(error =>{
                  console.log('ERROR POST\n',error);
              });
            setMenuCreated(true)
            }
  }

  const finishMenu = e =>{
    window.location.href = '/menu/preview'
  }

  return (
      <div>
          {/* Welcome to Menu Creation Screen this original form will prompt the user to create a menu before they can add menu items */}
          <form onClick={submitMenu} className="create-menu">
          <input
                  className="create-menu-input"
                  type="text"
                  name="name"
                  value={menu.name}
                  placeholder="name of your menu" 
                  onChange={changeHandlerMenu}
                  />
        
            <button className="create-menu-button">Create Menu</button>
          </form>
        {/* conditional render to add items only if the menu exists first */}
        {menuCreated === true ? 
        <div>
          <ItemCreator props={menuId}/>
          <button onClick={finishMenu}>I am done adding items</button>
        </div>
        // this will render if they have not created a menu yet
        :<p>Create Your menu</p>}


      </div>
  )
}


export default MenuCreator