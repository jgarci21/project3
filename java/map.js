<!DOCTYPE html>
<html>
  <body>
    <h1>Map</h1>
    <div id="map" style="width:400px;height:400px;background:yellow"></div>
    <script>
      function myMap() {
      var mapOptions = {
        center: new google.maps.LatLng(30.2574624,-97.7436018),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
                       }
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
                       }
    </script>
    <script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAh35vpbs9whGeqzT_4k9Joj3PelnvBqc&callback=myMap">
    </script>
</body>
</html>