import axios from 'axios';

export const getLL = addy => {
    
    // axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY`)

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${addy}=AIzaSyDtc3pDlAa_YG-MOK-irmjZAM_fFJbpEgg`)
    .then (res => {
        console.log(res);
        console.log(res.data)
    })
    

}