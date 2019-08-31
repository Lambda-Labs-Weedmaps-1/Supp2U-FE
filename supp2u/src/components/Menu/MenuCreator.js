import React, { useState } from 'react'
import Axios from 'axios'

import './menu-creator.sass'

function MenuCreator(){

  //This creates a new menu
  const [menu, setMenu] = useState({"name":"untitled menu"})

  //this function changes the state for menu
  const changeHandlerMenu = event => {
      setMenu({ ...menu, [event.target.name]: event.target.value })
  };
  // This submit creates a new menu and is only called on the submit 
  const submitMenu = e => {
      e.preventDefault();
      Axios.post(`${process.env.REACT_APP_BACKEND_URL}businesses/1/menus`, menu)
              .then(res => {
                  console.log('sent', res)
                  }).catch(error =>{
                  console.log('ERROR POST\n',error);
              });
  }

  return (
      <div>
          {/* Welcome to Menu Creation Screen this original form will prompt the user to create a menu before they can add menu items */}
          <form onClick={submitMenu}>
          <input
                  type="text"
                  name="name"
                  value={menu.name}
                  placeholder="name of your menu" 
                  onChange={changeHandlerMenu}
                  />
        
            <button>Create Menu</button>
          </form>
          {/* Here we have JSX for entering an item being rendered condionally only if a menu has been created, it uses our defualt menu name to check this */}
          {menu.name != "untitled menu" ? 
          // this is where we add items to the menu
           <form>Enter menu item</form>: <p>please enter menu name, cannot be "untitled menu"</p > }
      </div>
  )
}


export default MenuCreator