import React from 'react'

import './businessHeader.sass'

function BusinessHeader(props) {

  // Within this component there is an array of 3 groups of props
  // [0] holds the info of the business table such as image, name, address
  // [1] holds the ratings
  // [2] holds the hours of operations separated by day

    console.log(props.info, 'hip')

    return (
    <>
      <div className="business-header">
      {props.info[0].image === null || props.info[0].image === undefined ? 
      <p className="loading">loading....</p> : 
      <img className="image" src={props.info[0].image['url']} alt="business portrait" />}
        <div className="info">
          <h2>{props.info[0].name}</h2>
          <div>
          {props.info[0].street}, {props.info[0].city}, {props.info[0].zipcode}, {props.info[0].state}
          </div>
          <div>
          Rating: {props.info[1].data}
          </div>
        </div>
      </div>
      <div>
        {props.info[2] === null ? 
        <p>This business does not have any Hours of Operations set</p> :
        <div className="hours">
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
    </>
    )
}

export default BusinessHeader