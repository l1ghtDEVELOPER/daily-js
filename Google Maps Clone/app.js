//mapbox map - account token
mapboxgl.accessToken = 'YOUR-ACCESS TOKEN';

//js asking for your location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
});

//function when we get the position
function successLocation(position) {
  console.log(position);
  setupMap([position.coords.longitude, position.coords.latitude]);
}

//function when we can't get the position - error
function errorLocation() {
  setupMap([-2.24, 53.48]); //Default: Manchester
}

//setting up the map
function setupMap(center) {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: center,
    zoom: 14,
  });

  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  var directions = new MapboxDirections({
    accessToken: 'YOUR-ACCESS-TOKEN',
  });

  map.addControl(directions, 'top-left');
}
