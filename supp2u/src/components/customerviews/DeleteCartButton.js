import React from 'react'
import Axios from 'axios'

import './CustomerCart.sass'

function DeleteCartButton(props) {
console.log(props.cart.id)

    let deleteButton = () =>{
        // this prompts a conformation button 
            Axios.delete(`${process.env.REACT_APP_BACKEND_URL}carts/${props.cart.id}`, props.cart )
            .then(alert("Your cart had been deleted"))
            .then( window.location.href = `/business/${props.bis_id} `)
            .catch(error =>{
                console.log('ERROR GETTING THE BUSINESS ID\n', error)
            })
 
    }

    return (
        <button 
        className="buttony"
        onClick={deleteButton} >
            Delete Your Cart
        </button>
    )
}

export default DeleteCartButton
