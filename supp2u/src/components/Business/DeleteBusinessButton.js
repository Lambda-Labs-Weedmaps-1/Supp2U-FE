import React from 'react'
import Axios from 'axios'

function DeleteBusinessButton(props) {
console.log(props)

    

    let deleteButton = () =>{
        // this prompts a conformation button 
        if (window.confirm('Are you sure you wish to delete your business?')); 
        props.confirm(
            Axios.delete(`${process.env.REACT_APP_BACKEND_URL}businesses/${props.bis_id}`, props.bis_info)
            .then(alert("Your business profile had been deleted"))
            .then(localStorage.removeItem("business_id"))
            .then( window.location.href = "/registration" )
            .catch(error =>{
                console.log('ERROR GETTING THE BUSINESS ID\n', error)
            })
            );
            // props.onCancel(window.location.reload());    
    }

    return (
        <button 
        className='delete-button' 
        onClick={deleteButton} >
             Delete Your Business 
        </button>
    )
}

export default DeleteBusinessButton
