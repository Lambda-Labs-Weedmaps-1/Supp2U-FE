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
                <h1>Business Creation Goes Here!</h1>
                
                <form onSubmit= {this.getLL}>
                    <input
                        type="text"
                        name="address"
                        placeholder="address"
                        onChange={this.handleAddress}
                        value={this.state.address}
                    />
                </form>

                <br></br><br></br>

                

                <br></br><br></br>

                

            </div>
        )
    }


}

export default BusinessAdd;