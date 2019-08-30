import React, {useEffect , useState} from 'react'
import GoogleMaps from './GoogleMap'
import axios from 'axios'


function Map() {
    
    //Setting the lat and long for display
    const [coors, setCoors] = useState([{lat: 0, lng: 0 }]);
    
    useEffect(() => {
        
        // hard coded user
        let user = 1;
        
        axios
        .get(`http://localhost:4000/api/v1/users/1/businesses`)
        .then(res => {
            setCoors(res.data);
        }).catch(err => console.log({err}))
    }, []);
    

    
    // let position = [23.118813, -82.329933]; // position should be an array of obj that hold info about {lng, lat}

    return (<GoogleMaps positions={coors} /> )


}

export default Map
