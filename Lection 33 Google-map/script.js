let geocoder;
let map;
let start = document.getElementById('start');
let end = document.getElementById('end');

let address = start.value;

function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: -34.397, lng: 150.644 }
    });
    directionsRenderer.setMap(map);
    geocoder = new google.maps.Geocoder();
    codeAddress(geocoder, map, address);
    // console.log(codeAddress(geocoder, map, address));

    const onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsRenderer);
    };

    let routeBtn = document.getElementById("route")
    //console.log(routeBtn)
    routeBtn.addEventListener("click", function () {
        onChangeHandler()
    })

}


function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
            origin: {
                query: start.value,
            },
            destination: {
                query: end.value,
            },
            travelMode: google.maps.TravelMode.WALKING,
        },
        (response, status) => {
            if (status === "OK") {
                directionsRenderer.setDirections(response);
            } else {
                window.alert("Directions request failed due to " + status);
            }
        }
    );
}

function codeAddress(geocoder, map, address) {
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            let marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

// function geocodeAddress(address) {
//     geocoder = new google.maps.Geocoder();
//     geocodeAddress(geocoder, map, address);
// }