import React from 'react'

import './businessSingleView.sass'

function BusinessHeader(props) {

    console.log(props.info[0].image)

    return (
      <div className="business-header">
        <img source={props.info[0].image} alt="business" />
        <h2>{props.info[0].name}</h2>
        <div>
        {props.info[0].street}, {props.info[0].city}, {props.info[0].zipcode}, {props.info[0].state}
        </div>
        <div>
        Rating: {props.info[1].data}
        </div>
    </div>
    )
}

export default BusinessHeader
