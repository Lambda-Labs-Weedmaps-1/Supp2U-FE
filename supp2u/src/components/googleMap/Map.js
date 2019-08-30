import React, {useEffect , useState} from 'react'
import GoogleMaps from './GoogleMap'
import axios from 'axios'


function Map() {
    
    //Setting the lat and long for display
    const [coors, setCoors] = useState([{lat: parseInt(""),long: parseInt("") }])
    
    useEffect(() => {
        
        // hard coded user
        let user = 1;
        
        axios
        .get(`http://localhost:3000/api/v1/users/${user}/businesses`)
        .then(res => {
            setCoors({ lat: res.data[0].latitude , long:  res.data[0].longitude})
        }).catch(err => console.log({err}))
    }, [])
    
    let Lat = coors.lat
    let Lon = coors.long
    
    let position = [23.118813, -82.329933]; // position should be an array of obj that hold info about {lng, lat}
    console.log('position',position)

    return (<GoogleMaps positions={position} /> )


}

export default Map
