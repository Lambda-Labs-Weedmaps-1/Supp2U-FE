import React from 'react'
import Axios from 'axios'

import './menu.sass'

function DeleteMenuButton(props) {
console.log(props.menu_id)

    let deleteButton = () =>{
        // this prompts a conformation button 
            Axios.delete(`${process.env.REACT_APP_BACKEND_URL}menus/${props.menu_id}` )
            .then(alert("Your menu had been deleted"))
            .then( window.location.href = `/menu/new`)
            .catch(error =>{
                console.log('ERROR GETTING THE BUSINESS ID\n', error)
            })
 
    }

    return (
        <button 
        className="buttony"
        onClick={deleteButton} >
            Delete Your Menu & Start Over
        </button>
    )
}

export default DeleteMenuButton