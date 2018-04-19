var map;
var tag;
var places;
var chicago={lat: 41.8338192, lng: -87.712234}
var austin={lat: 30.3074624, lng: -98.0336018};
var dallas={lat: 32.8203525, lng: -97.0117414};
var place=["chicago","austin","dallas"];
function gMap() {
  places={lat: 41.8338192, lng: -87.712234};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom:10,
  center: chicago});
  tag = new google.maps.Marker({
    position:chicago,
    animation:google.maps.Animation.DROP,
  map: map });
}
function travel(location, spots) {
  map.panTo(location);
  map.setZoom(10);
  tag = new google.maps.Marker({
    position: location,
      animation:google.maps.Animation.DROP,
    map: map
  });
  if(spots==place[0]){
  }
  else if(spots==place[1]){
  }
  else if(spots==place[2]){
  }
  else {
  }
}	