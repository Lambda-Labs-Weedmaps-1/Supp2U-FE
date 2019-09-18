import React, {useState, useEffect } from 'react';
import Axios from 'axios'
import ImageUploader from '../shared/ImageUploader.js';
import DeleteBusinessButton from './DeleteBusinessButton'
import './BusinessUpdater.sass'


const BusinessUpdater = (props) => {
    
    
    const [updateState, setUpdateState] = useState([{
        "name": "",
        "website": "",
        "city": "",
        "state": "",
        "street": " ",
        "zipcode": 0,
        "building_number": "",
        "theme": "",
        "description": "",
        "recommended": null,
        "long": "",
        "lat": "",
        "image": null
        }]);

    useEffect(() => {
        let businessId = props.match.params.id
        Axios.get(`${process.env.REACT_APP_BACKEND_URL}businesses/${businessId}`).then( res => {
            console.log(res.data)
            setUpdateState(res.data)
        }).catch(err => {
            console.error(err)
        })
    }, [])

    const selectImage = image => {
        setUpdateState({...updateState, "image": image})
    }

    const unselectImage = () => {
        setUpdateState({...updateState, "image": "" })
    }

    

    let updateHandler = (event, photoForm, state) => {
        let businessId = props.match.params.id;

        if(state.image !== null){
            photoForm.append("image", state.image)
            Axios.patch(`${process.env.REACT_APP_BACKEND_URL}businesses/${businessId}`,  
            photoForm,
            { headers: {'Content-Type': 'multipart/form-data' }}
            )
            .then(res => {
                 console.log(res)
                })
            .catch(error =>{
                console.log('ERROR POST\n',error);
        });
        } else {

            Axios.patch(`${process.env.REACT_APP_BACKEND_URL}businesses/${businessId}`, state)
                    .then(res => {
                         console.log(res)
                        })
                    .catch(error =>{
                        console.log('ERROR POST\n',error);
                });

        }

    }

    const changeHandler = event => {
        setUpdateState({ ...updateState, [event.target.name]: event.target.value });
    };

    const submit = e =>{
        e.preventDefault()
        const photoForm = new FormData(e.target);
        // Transmutes the address into a useable array
        if(updateState.street === undefined){console.log('Address is Required')}else{
        const newAddress = updateState.street
        const newAddressArray = newAddress.split(' ')
        //   address look up function
        Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${newAddressArray[0]}+${newAddressArray[1]}+${newAddressArray[2]},+${updateState.city},+${updateState.state}&key=${process.env.REACT_APP_GCOORDINATES}`)
        .then (res => {
        //     // sends location to updateState
           updateState.lat = res.data.results[0].geometry.location.lat.toString()
           updateState.long = res.data.results[0].geometry.location.lng.toString()

            //ensures that a lat and lng exist before posting
           if(updateState.lat && updateState.long){
               console.log('data to be sent to backend', updateState)
               updateHandler(e, photoForm, updateState)
           } else {
               console.log("There was an error finding a lat and long for your selected address")
           }

        })
        
    }}

    return ( 
    
    <div className="business-updater-wrapper">
        <h2> Update your desired business information...</h2>

        <ImageUploader
                image = {updateState.image}
                selectImage = {selectImage}
                unselectImage = {unselectImage}
                />

        <form onSubmit={submit} className="form">
            <input
                type="text"
                name="name"
                value={updateState.name}
                placeholder="business name..." 
                onChange={changeHandler}
                />

            <input
                type="text"
                name="street"
                placeholder="address"
                onChange={changeHandler}
                value={updateState.street}
                />

            <input
                placeholder="Enter building number..."
                type="integer"
                name="building_number"
                value={updateState.building_number}
                onChange={changeHandler}
                />

            <input
                placeholder="City name..." 
                type="text"
                name="city"
                value={updateState.city}
                onChange={changeHandler}
                />

            <input
                type="text"
                name="state"
                placeholder="Enter state"
                onChange={changeHandler}
                value={updateState.state}
                />

            <input
                placeholder="zipcode..."
                type="integer"
                name="zipcode"
                value={updateState.zipcode}
                onChange={changeHandler} 
                /> 

            <textarea
                placeholder="description of resturant..."
                type="text"
                name="description"
                value={updateState.description}
                onChange={changeHandler} />
            
            <input
                placeholder="Enter restaurant theme..."
                type="text"
                name="theme"
                value={updateState.theme}
                onChange={changeHandler} />

            <input
                placeholder="Enter website..."
                type="text"
                name="website"
                value={updateState.website}
                onChange={changeHandler} />
            <button> Update </button>

        </form>
        
        <DeleteBusinessButton bis_id={props.match.params.id} bis_info={updateState} />

    </div> );
}
 
export default BusinessUpdater;