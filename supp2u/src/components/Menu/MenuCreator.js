import React, { useState } from 'react'
import Axios from 'axios'
import ItemCreator from './ItemCreator'
import MenuShowcase from './MenuShowcase'

import './menu.sass'

function MenuCreator(){

  //This creates a new menu
  const [menu, setMenu] = useState({"name":"untitled"})
  // this lets us know if the menu has been created in order to render the ablitiy to add items
    const [menuCreated, setMenuCreated] = useState(false)

  //this function changes the state for menu
  const changeHandlerMenu = event => {
      setMenu({ ...menu, [event.target.name]: event.target.value })
  };

  // This submit creates a new menu and is only called on the submit 
  const submitMenu = e => {
      e.preventDefault();
      //conditional that forces them to name their menu, maybe change this into an alert instead of just a console log
      if(menu.name === "untitled"){console.log("You need to name your menu")}
      else{
      Axios.post(`${process.env.REACT_APP_BACKEND_URL}businesses/1/menus`, menu)
              .then(res => {
                  console.log('sent menu', res)
                  }).catch(error =>{
                  console.log('ERROR POST\n',error);
              });
            setMenuCreated(true)
            }
  }
 console.log(menuCreated)

  const finishMenu = e =>{
    window.location.href = '/'
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
          <ItemCreator />
          <button onClick={finishMenu}>I am done creating my menu</button>
          <MenuShowcase />
        </div>
        // this will render if they have not created a menu yet
        :<p>Create Your menu</p>}


      </div>
  )
}


export default MenuCreator