export default function Marker(map, positions) {
    if(positions.length){ // check if there is an array of coordinates
        positions.forEach((position)=>{
            let marker = new window.google.maps.Marker({
                position: {
                    lat: parseFloat(position.lat),
                    lng: parseFloat(position.long)
                },
                map: map,
            });
            // marker.addListener("onhover")
            marker.addListener("click", props=>  {
            console.log("marker clicked", position )
            window.location.href = `/business/${position.id}`
            }
            );
        });
    }else {// handle case if there is one obj of coordinates
        let marker = new window.google.maps.Marker({
            position: {
                lat: parseFloat(positions.lat),
                lng: parseFloat(positions.long)
            },
            map: map,
        });
        marker.addListener("click", props=> {
            console.log("marker clicked", positions)
            window.location.href = `/business/${positions.id}`
        });
    }
    console.log('position from Marker', positions)
}