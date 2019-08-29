import React, { Component } from 'react';

import axios from 'axios';

class BusinessAdd extends Component {
    constructor() {
        super()

        // change this for business stuff later just placeholder starter
        this.state = {
            address: "",
            lat: "32342",
            lon: "23432",
        }

    }


    handleAddress = e => {
        this.setState({
          ...this.state,
          
          address: e.target.value
          
        });
      };

      getCoordinates = addy => {

      }



      getLL = addy => {
        addy.preventDefault();

        // This is currently just a test address and not taking in the actual state address
        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=XXXXXXXXXXXXXXXXXXX`)
    
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=${process.env.REACT_APP_GCOORDINATES}`)

        .then (res => {
            console.log("res", res);
            console.log("res data", res.data)
        })
        
    
    }



    render() {
        return (
            <div>
                
                
                <form onSubmit= {this.getLL}>
                    <div className="input-box-type1">
                    <label>Street</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="address"
                        onChange={this.handleAddress}
                        value={this.state.address}
                    />
                </div>
                </form>

                

            </div>
        )
    }


}

export default BusinessAdd;