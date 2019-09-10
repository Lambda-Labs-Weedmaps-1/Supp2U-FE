import React, {useEffect , useState} from 'react'
import Axios from 'axios'

import './menu.sass'

// this component renders all the items from a specified menu
// when used anywhere just pass the id of the menu you are trying to access from the parent component as a prop
function MenuShowcase(props) {
    //these items are set and then mapped over
    const [item, setItem] = useState([{
        "item_name":"menu item name" ,
        "description":"Write a little bit about the item...",
        "cals": NaN,
        "price": 0, 
        "category":"none",
    }])

    console.log(props)

    useEffect( () => {
         Axios.get(`${process.env.REACT_APP_BACKEND_URL}menus/${props.props}/items`)
        .then(res => {
            console.log(res.data)
         setItem(res.data)
        }).catch(error =>{
            // commenting this out because it runs until it finds an menu item so it will throw a lot of errors if a business has no menu
            console.log('ERROR GETTING MENU ITEMS\n',error);
        });
    }, [])


    return (
        <>
        <h1>Menu</h1>
        <div>
        {/* this code makes it so you have to create items before they display */}
      { item.item_name === "" ? 
      <p className="empty-menu-message">Add Items to your menu to see how your menu will look</p>: 
        <div  className="menu-showcase">
            {item.map( item =>(
                <div className="menu-item-box"> 
                <img className="image" src={item.image['url']} alt="item portrait" /> 
                <p>{item.item_name}</p>
                <p>{item.category}</p>
                <p>{item.description}</p>
                <p>${item.price}</p>
                {/* calories will only show up if intentailly added */}
                {item.cal === NaN ? null : <p>Calories: {item.cals}</p>}
                </div>
            ))}
        </div>
        }
        </div>
        </>
    )
}

export default MenuShowcase
