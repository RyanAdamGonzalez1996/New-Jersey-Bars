// Interactive Bar Map
// Want to input the location of each bar onto the leaflet app
// Will create markers with properties of :
// Hovering over: shows Bar description: (name, barType, address, hours, avgPrice, ratings)
// Clicking marker: Send you their website, if they have one.
// Layers to see bars based on ratings (<3, 3-4, 4+) and by avgPrice(intervals tbd)
// Layer to show by County
// Maybe: Markers depcit picture of type of bar, club, restuarant, pub

// Create a createMap Function
function createMap(barSubThree, barThreeFour, barAboveFour){

    // Create a tile Layer that will be the base 
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
    });

    // Create a baseMap Object
    var baseMaps = {
        "Light Map": lightmap
    };

    // Create an overlayMap object
    var overlayMaps = {
        "Ratings: <3": barSubThree,
        "Ratings: 3-4": barThreeFour,
        "Ratigns: 4+": barAboveFour
    };

    // Create the map object
    var map = L.map("map-id", {
        // Center on NJ
        center: [40.06, -74.41],
        zoom: 12,
        layers: [lightmap, barSubThree, barThreeFour, barAboveFour]
    });

    // Create a layer control, passing in the overlay maps
    L.control.layers(baseMaps, overlayMaps{
        collapsed: false
    }).addTo(map);

}
// Create a createMarkers Function
function createMarkers(response) {

    // Pull the Bars from the JSON
    // awaiting dataset
    //var bars = response.

    // Initalize an array to hold each layer (barMarker)
    // Might be able to do only one layer for the time being, if so at least get the rating
    // an array for each Rating interval
    var barSubThree = [];
    var barThreeFour = [];
    var barAboveFour = [];

    // Loop Through the bars array
    for (var index = 0; index < bars.length, index++) {
        var bar = bar[index];

        // For each bar, create a marker and bind a popup with the bar description
        var barMarker = L.marker([//address/latlong])
            .bindPopup("<h3>" + bar.name + "<h3><h3>Type: " + bar.type + 
            "<h3><h3>Address: " + bar.address + "<h3><h3>Hours of Operation: " + bar.hours
            + "<h3><h3>Average Price: " + bar.avgPrice + "<h3><h3>Ratings: " + bar.ratings + "</h3>");

        // Add the marker to the barMarker array corresponding to the rating interval
        if (bar.ratings < 3){
            barSubThree.push(barMarker);
        }else if (bar.ratings >= 3 %% bar.ratings <= 4){
            barThreeFour.push(barMarker);
        }else {
            barAboveFour.push(barMarker);
        }

    }
    // Create a Layer Group made from the barMarker array and pass it to the createMap function
    createMap(L.layergroup(barSubThree), L.layergroup(barThreeFour), L.layergroup(barAboveFour));

}

// Read in JSON and and pass parameters to the createMarker Function
// JSON is read from a view from the flask application querying the database that is returned as a JSON
d3.json("", createMarkers);
