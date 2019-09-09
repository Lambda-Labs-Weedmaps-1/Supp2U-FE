import React, { useState } from 'react'
import Axios from "axios"

import './schedule-creator.scss'



const ScheduleCreator = (props) => {

     //captures business_id 
    let business_id = localStorage.business_id;

    const [scheduleState, setScheduleState] = useState([{
       "sunday": "",
       "monday": "",
       "tuesday": "",
       "wednesday": "",
       "thursday": "",
       "friday": "",
       "saturday": "",

    }]);

    const changeHandler = event => {
        setScheduleState({ ...scheduleState, [event.target.name]: event.target.value });
    };

    const postHandler = event => {
        event.preventDefault()
        Axios.post(`${process.env.REACT_APP_BACKEND_URL}businesses/${business_id}/schedules`, scheduleState)
        .then(res => {
            console.log(res)
            window.location.href = '/menu/new'
        }).catch(err => {
            console.log(err)
        })

        setScheduleState({
            "sunday": "",
            "monday": "",
            "tuesday": "",
            "wednesday": "",
            "thursday": "",
            "friday": "",
            "saturday": "",
        })
    }


    return ( 
        <div className = "schedule-creation-wrapper">
            <h1> Hours of Operation </h1>

            <form onSubmit = {postHandler}>
                <input
                    type="text"
                    name="sunday"
                    value={scheduleState.sunday}
                    placeholder="Sunday..." 
                    onChange={changeHandler}
                    />

                <input
                    type="text"
                    name="monday"
                    value={scheduleState.monday}
                    placeholder="Monday..." 
                    onChange={changeHandler}
                    />

                <input
                    type="text"
                    name="tuesday"
                    value={scheduleState.tuesday}
                    placeholder="Tuesday..." 
                    onChange={changeHandler}
                    />

                <input
                    type="text"
                    name="wednesday"
                    value={scheduleState.wednesday}
                    placeholder="Wednesday..." 
                    onChange={changeHandler}
                    />

                <input
                    type="text"
                    name="thursday"
                    value={scheduleState.thursday}
                    placeholder="Thursday..." 
                    onChange={changeHandler}
                    />

                <input
                    type="text"
                    name="friday"
                    value={scheduleState.friday}
                    placeholder="Friday..." 
                    onChange={changeHandler}
                    />

                <input
                    type="text"
                    name="saturday"
                    value={scheduleState.saturday}
                    placeholder="Saturday..." 
                    onChange={changeHandler}
                    />

                <button> Submit </button>
            </form>
         
        </div>
     );
}
 
export default ScheduleCreator;