import React ,{ useState } from 'react'
import Axios from 'axios'

import ImageUploader from '../shared/ImageUploader.js';
import './menu.sass'

// when used anywhere just pass the id of the menu you are trying to access from the parent component as a prop
function ItemCreator(props){

    const [item, setItem] = useState([{
       "item_name":"notSet" ,
       "description":"notSet",
       "cals":1,
        "price": 0, 
        "category":"notSet",
        "image": null
    }])

    
    let postItemHandler = (event, photoForm , state) => {
        //This checks if there is an image before uploading
        if(state.image != null){
            // this adds the image to the business
            photoForm.append("image", state.image)
            Axios.post(`${process.env.REACT_APP_BACKEND_URL}menus/${props.props}/items`,  
            photoForm, item,
            { headers: {'Content-Type': 'multipart/form-data' }}
            ).then(res => {
                console.log('sent item', res)
            }).catch(error =>{
                console.log('ERROR POST\n',error);
        });
        } else{
        Axios.post( `${process.env.REACT_APP_BACKEND_URL}menus/${props.props}/items`, item)
        .then(res => {
            console.log('sent item', res)
        }).catch(error =>{
            console.log('ERROR POST\n',error);
        });}
    }

    const changeHandler = event => {
        setItem({ ...item, [event.target.name]: event.target.value })
    };

    // These two functions handle the image processing in conjunction with the ImageUnloader component
    const selectImage = image => {
        setItem({...item, "image": image})
    }

    const unselectImage = () => {
        setItem({...item, "image": "" })
    }

    const submit = e =>{
        e.preventDefault();
        //this adds the new data to the form
        const photoForm = new FormData(e.target);
        postItemHandler(e, photoForm , item)
    }

    return (
    <div className="add-item-form">
        <h2>Add Items to your menu</h2>
        <form onSubmit={submit}>
        <div className="item-input-box">
            <label>Menu Item <span className="required-span">*</span></label>
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
            <label>Price <span className="required-span">*</span></label>
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
        <p className="required-span">* Required</p>
        <button className="add-item-button">add item</button>
        </form>

        <ImageUploader
                image = {item.image}
                selectImage = {selectImage}
                unselectImage = {unselectImage}
                />

    </div>
    )
}

export default ItemCreator
