export default function Marker(map, positions) {
    positions.forEach((position)=>{
        let marker = new window.google.maps.Marker({
            position: position,
            map: map,
        });
        marker.addListener("click", props=> console.log("marker clicked", props));
    })
    console.log('position from Marker', positions)
}