import React ,{ useState } from 'react'
import Axios from 'axios'

import './menu.sass'

// when used anywhere just pass the id of the menu you are trying to access from the parent component as a prop
function ItemCreator(props){

    const [item, setItem] = useState([{
       "item_name":"notSet" ,
       "description":"notSet",
       "cals":1,
        "price": 0, 
        "category":"notSet"
    }])

    const changeHandler = event => {
        setItem({ ...item, [event.target.name]: event.target.value })
    };

    const submit = event =>{
        event.preventDefault();
        Axios.post( `${process.env.REACT_APP_BACKEND_URL}menus/${props.props}/items`, item)
        .then(res => {
            console.log('sent item', res)
        }).catch(error =>{
            console.log('ERROR POST\n',error);
        });
    }


    return (
    <div className="add-item-form">
        <h2>Add Items to your menu</h2>
        <form onClick={submit}>
        <div className="item-input-box">
            <label>Menu Item</label>
            <input
                placeholder="Enter item..."
                type="text"
                name="item_name"
                value={item.item_name}
                onChange={changeHandler} />
        </div>
        <div className="item-input-box">
            <label>Describe item</label>
            <input
                placeholder="Enter description..."
                type="text-box"
                name="description"
                value={item.description}
                onChange={changeHandler} />
        </div>
         <div className="item-input-box">
            <label>Price</label>
            <input
                placeholder="Enter price..."
                type="integer"
                name="price"
                value={item.price}
                onChange={changeHandler} />
        </div>
        <div className="item-input-box">
            <label>Item Category</label>
            <input
                placeholder="Enter category..."
                type="text"
                name="category"
                value={item.category}
                onChange={changeHandler} />
        </div>
        <div className="item-input-box">
            <label>Health</label>
            <input
                placeholder="Enter calories amount..."
                type="text"
                name="cals"
                value={item.cals}
                onChange={changeHandler} />
        </div>
        <button className="add-item-button">add item</button>
        </form>
    </div>
    )
}

export default ItemCreator
