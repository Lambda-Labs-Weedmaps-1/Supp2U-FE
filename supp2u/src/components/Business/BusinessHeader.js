import React from 'react'

import './businessSingleView.sass'

function BusinessHeader(props) {

    console.log(props.info[2].saturday, 'hip')

    return (
      <div className="business-header">
        <img source={props.info[0].image} alt="business portrait" />
        <h2>{props.info[0].name}</h2>
        <div>
        {props.info[0].street}, {props.info[0].city}, {props.info[0].zipcode}, {props.info[0].state}
        </div>
        <div>
        Rating: {props.info[1].data}
        </div>
        {props.info[2] === null ? 
        <p>This business does not have any Hours of Operations set</p> :
        <div>
          <h4>Hours of Operation</h4>
        {props.info[2].sunday === null ? <p>Sunday: Closed</p>:  <p>Sunday: {props.info[2].sunday}</p>}
        {props.info[2].monday === null ? <p>Monday: Closed</p>:  <p>Monday: {props.info[2].monday}</p>}
        {props.info[2].tuesday === null ? <p>Tuesday: Closed</p>:  <p>Tuesday: {props.info[2].tuesday}</p>}
        {props.info[2].wednesday === null ? <p>Wednesday: Closed</p>:  <p>Wednesday: {props.info[2].wednesday}</p>}
        {props.info[2].thursday === null ? <p>Thursday: Closed</p>:  <p>Thursday: {props.info[2].thursday}</p>}
        {props.info[2].friday === null ? <p>Friday: Closed</p>:  <p>Friday: {props.info[2].friday}</p>}
        {props.info[2].saturday === null ? <p>Saturday: Closed</p>:  <p>Saturday: {props.info[2].saturday}</p>}
        </div>}
    </div>
    )
}

export default BusinessHeader
