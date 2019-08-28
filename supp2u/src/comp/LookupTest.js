import React, { Component } from 'react';

import axios from 'axios';

class LookupTest extends Component {
    constructor() {
        super()

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

        // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY`)
    
        axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.address}=AIzaSyDtc3pDlAa_YG-MOK-irmjZAM_fFJbpEgg`)
        .then (res => {
            console.log("res", res);
            console.log("res data", res.data)
        })
        
    
    }



    render() {
        return (
            <div>
                <h1>LookupTest</h1>
                <p>Enter an address, to search for geocoordinates</p>
                
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

                <p>geocoordinates:</p>
                <p>Lat: {this.state.lat}</p>
                <p>Lon: {this.state.lon}</p>

                <br></br><br></br>

            </div>
        )
    }


}

export default LookupTest;