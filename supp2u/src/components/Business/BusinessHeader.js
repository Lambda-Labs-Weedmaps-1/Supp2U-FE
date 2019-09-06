import React from 'react'

import './businessSingleView.sass'

function BusinessHeader(props) {

    console.log(props.info)

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
        <div>
          <h4>Hours of Operation</h4>
        <p>Sunday {props.info[2].sunday}</p>
        <p>Monday {props.info[2].monday}</p>
        <p>Tuesday {props.info[2].tuesday}</p>
        <p>Wednesday {props.info[2].wednesday}</p>
        <p>Thursday {props.info[2].thursday}</p>
        <p>Friday {props.info[2].friday}</p>
        <p>Saturday {props.info[2].saturday}</p>
        </div>
    </div>
    )
}

export default BusinessHeader
