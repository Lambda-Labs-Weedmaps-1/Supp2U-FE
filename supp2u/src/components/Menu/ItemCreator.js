import React ,{ useState } from 'react'
import Axios from 'axios'

import ImageUploader from '../shared/ImageUploader.js';
import './menu.sass'

// when used anywhere just pass the id of the menu you are trying to access from the parent component as a prop
function ItemCreator(props){

    const [item, setItem] = useState([{
       "item_name":"" ,
       "description":"",
        "price": 0, 
        "category":"",
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
                console.log('item added')
            }).catch(error =>{
                console.log('ERROR POST\n',error);
        });
        } else{
        Axios.post( `${process.env.REACT_APP_BACKEND_URL}menus/${props.props}/items`, item)
        .then(res => {
   
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
    // this function calls off inside the submit so we can clear the item creation from inputs and let the user know an item was added
    const resetInputField = () => {
        alert("Thank you. Your item has been added");
        setItem({
            "item_name":"" ,
            "description":"",
             "price": 0, 
             "category":"",
             "image": null})
      }

    let submit = e =>{
        e.preventDefault();
        //this adds the new data to the form
        const photoForm = new FormData(e.target);
        postItemHandler(e, photoForm , item)
        resetInputField();
    }

    return (
    <>
    <p className="create-menu-input">Add items to your menu</p>
          <br/>
    <div className="add-item-form-comp">
        <form id="form" onSubmit={submit} className="item-form">
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
            <label>Price <i>($)</i> <span className="required-span">*</span></label>
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
        <p className="required-span">* Required</p>
        <button className="add-item-button">Add Item</button>
        </form>
        <div className="image-uploader">
        <ImageUploader
                image = {item.image}
                selectImage = {selectImage}
                unselectImage = {unselectImage}
                />
        </div>

    </div>
    </>
    )
}

export default ItemCreator
