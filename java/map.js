var map;
var tag;
var place;
var chicago={lat: 41.8338192, lng: -87.712234}
var place=["chicago"];
function gMap() {
  place={lat: 41.8338192, lng: -87.712234};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom:10,
  center: chicago});
  tag = new google.maps.Marker({
    position:chicago,
    animation:google.maps.Animation.DROP,
  map: map });
}