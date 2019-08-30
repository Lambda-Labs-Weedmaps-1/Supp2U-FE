export default function Marker(map, positions) {
    if (positions) { 
        // check if there is an array of coordinates
        positions.forEach((position) => {
            let marker = new window.google.maps.Marker({
                position: {
                    lat: parseFloat(position.lat),
                    lng: parseFloat(position.long)
                },
                map: map,
            });
            marker.addListener("click", props => console.log("marker clicked", position));
        });
        console.log('position from Marker', positions);
    } else {
        // handle case if there is one obj of coordinates
        let marker = new window.google.maps.Marker({
            position: {
                lat: parseFloat(positions.lat),
                lng: parseFloat(positions.long)
            },
            map: map,
        });
        marker.addListener("click", props => console.log("marker clicked", positions));
    }
}
