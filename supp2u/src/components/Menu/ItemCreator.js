import React ,{ useState } from 'react'
import Axios from 'axios'

import './menu.sass'

function ItemCreator() {

    const [item, setItem] = useState([{
       "item_name":"" ,
    //    "description":"",
        "price": 0, //make into a float on the back end
        "category":""
    }])

    const changeHandler = event => {
        setItem({ ...item, [event.target.name]: event.target.value })
    };

    const submit = event =>{
        event.preventDefault();
        Axios.post( `${process.env.REACT_APP_BACKEND_URL}menus/1/items`, item)
        .then(res => {
            console.log('sent item', res)
        }).catch(error =>{
            console.log('ERROR POST\n',error);
        });
    }


    return (
        <div>
        <h2>Add Items to your menu!</h2>
        <form onClick={submit}>
        <div>
            <label>Menu Item</label>
            <input
                placeholder="Enter item..."
                type="text"
                name="item_name"
                value={item.item_name}
                onChange={changeHandler} />
        </div>
        {/* need to add this to the database */}
        {/* <div>
            <label>Describe item</label>
            <input
                placeholder="Enter description..."
                type="text"
                name="description"
                value={item.description}
                onChange={changeHandler} />
        </div> */}
         <div>
            <label>Price</label>
            <input
                placeholder="Enter price..."
                type="integer"
                name="price"
                value={item.price}
                onChange={changeHandler} />
        </div>
        <div>
            <label>Item Category</label>
            <input
                placeholder="Enter category..."
                type="text"
                name="category"
                value={item.category}
                onChange={changeHandler} />
        </div>
        <button>add item</button>
        </form>
    </div>
    )
}

export default ItemCreator
