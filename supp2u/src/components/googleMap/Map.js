import React, {useEffect , useState} from 'react'
import GoogleMaps from './GoogleMap'
import axios from 'axios'


function Map() {
    let position = [{lat: 23.118813,lng: -82.329933}, {lat: 23.118813,lng: -81.329936}]; // position should be an array of obj that hold info about {lng, lat}

    //Setting the lat and long for display
    const [coors, setCoors] = useState([{ 
                            lat: parseInt(""),
                            long: parseInt("") }])

    useEffect(() => {

        // hard coded user
        let user = 1;

        axios
        .get(`http://localhost:3000/api/v1/users/${user}/businesses`)
        .then(res => {
          setCoors({ lat: res.data[0].latitude , long:  res.data[0].longitude})
          console.log(res)
          console.log(coors)
        }).catch(err => console.log({err}))
    }, [])
    



    return (<GoogleMaps positions={position} /> )


}

export default Map
