export default function Marker(map, positions) {
//due to a bug where the backend does not give you positions quick enough, which causes this function to break, I have added a if/else to find out if there are positions to test
 if(window.google === undefined){
     console.log('Don\'t worry, it may take a second for the map to load.');
 }
 else{

     if(positions.length){ // check if there is an array of coordinates
         positions.forEach((position)=>{
 
             // const Card = ({ title }) => (
             //     <div className="card">
             //       <div className="header">{title}</div>
             //       <div className="content">
             //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit autem
             //         sapiente labore architecto exercitationem optio quod dolor cupiditate
             //       </div>
             //     </div>
             //   );
 
             var infowindow =  new window.google.maps.InfoWindow({
                 content: `${position.name} \n ${position.street}`,                
                 
             });
             
             let marker = new window.google.maps.Marker({
                 position: {
                     lat: parseFloat(position.lat),
                     lng: parseFloat(position.long)
                 },
                 map: map,
             });
             
             marker.addListener("click", props=>  {
                 console.log("marker clicked", position )
                 window.location.href = `/business/${position.id}`
             });
 
             marker.addListener("mouseover", function() {
                 infowindow.open(map,this);
             });
             
             marker.addListener("mouseout", function() {
                 infowindow.close()
             })
 
 
 
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
     // this will send a console log of ALL marker being rendered to the map
     console.log('position from Marker', positions)
 }
}