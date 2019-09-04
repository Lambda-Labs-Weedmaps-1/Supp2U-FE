import React, {useEffect , useState} from 'react'
import Axios from 'axios'

import './menu.sass'

// this component renders all the items from a specified menu
// when used anywhere just pass the id of the menu you are trying to access from the parent component as a prop
function MenuShowcase(props) {

    const [item, setItem] = useState([{
        "item_name":"Menu Item" ,
        "description":"Write a little bit about the item...",
        "cals": NaN,
        "price": 0, 
        "category":"none"
    }])
    
    useEffect(() => {
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}menus/${props}/items`)
        .then(res => {
         setItem(res.data)
        }).catch(error =>{
            console.log('ERROR GETTING MENU ITEMS\n',error);
        });
        console.log(item)
    }, [])

    return (
        <>
        <h1>Menu</h1>
        <div>
        {/* this code makes it so you have to create items before they display */}
      { item.item_name === "notSet" ? 
      <p className="empty-menu-message">Add Items to your menu to see how your menu will look</p>:     
        <div  className="menu-showcase">
            {item.map( item =>(
                <div className="menu-item-box">   
                <p>{item.item_name}</p>
                <p>{item.category}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
                <p>Calories: {item.cals}</p>
                </div>
            ))}
        </div>
        }
        </div>
        </>
    )
}

export default MenuShowcase
