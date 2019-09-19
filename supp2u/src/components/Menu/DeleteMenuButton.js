import React from 'react'
import Axios from 'axios'

import './menu.sass'

function DeleteMenuButton(props) {
console.log(props.menu_id)

function redirect(){
 window.location.href = `/menu/new`
}

    let deleteButton = () =>{
        Axios.delete(`${process.env.REACT_APP_BACKEND_URL}menus/${props.menu_id}` , props.menu )
            .then(res => {})
            .then(alert("Your menu had been deleted"))
            .catch(error =>{
                console.log('ERROR GETTING THE BUSINESS ID\n', error)
            })
        // needed to set a time out becasue the redirect was breaking the axios call as it was too slow to delete
        setTimeout(() => {   
            redirect();
        }, 1000);    
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