function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(18.5236, 73.8478),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  setMarkers(map);
}
function getIssueLocations() {
  return [
    [18.5236, 73.8478],
    [18.5236, 73.8448],
    [18.5236, 73.8418],
    [18.5256, 73.8478],
    [18.5216, 73.8578],
    [18.5236, 73.8578]
  ]
}

function setMarkers(the_map) {
  var locations = getIssueLocations();
  for(i=0; i < locations.length; i++) {
    new google.maps.Marker({
      map:the_map,
      draggable:false,
      animation: google.maps.Animation.DROP,
      position: new google.maps.LatLng(locations[i][0], locations[i][1])
    });
  }
}
google.maps.event.addDomListener(window, 'load', initialize);
