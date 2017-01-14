var GoogleMapsLoader = require('google-maps'); // only for common js environments

var options = {
  KEY = 'AIzaSyAZF0Fr7icVeD8UojoLFxG2fQkXRWkDcEM';
}

GoogleMapsLoader.load(function(google) {
    new google.maps.Map($("#map"), options);
});

console.log("hey!");
