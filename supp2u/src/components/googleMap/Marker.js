export default function Marker(map, positions) {
    if(positions.length){
        positions.forEach((position)=>{
            let marker = new window.google.maps.Marker({
                position: {
                    lat: parseFloat(position.lat),
                    lng: parseFloat(position.long)
                },
                map: map,
            });
            marker.addListener("click", props=> console.log("marker clicked", position));
        });
    }else {
        let marker = new window.google.maps.Marker({
            position: {
                lat: parseFloat(positions.lat),
                lng: parseFloat(positions.long)
            },
            map: map,
        });
        marker.addListener("click", props=> console.log("marker clicked", positions));
    }
    console.log('position from Marker', positions)
}