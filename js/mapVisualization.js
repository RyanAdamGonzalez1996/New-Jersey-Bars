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
    var lightMap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
        attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
        maxZoom: 18,
        id: "light-v10",
        accessToken: API_KEY
    });

    // Create a baseMap Object
    var baseMap = {
        "Light Map": lightMap
    };

    // Create an overlayMap object
    var overlayMap = {
        "Ratings: <3": barSubThree,
        "Ratings: 3-4": barThreeFour,
        "Ratigns: 4+": barAboveFour
    };

    // Create the map object
    var map = L.map("map", {
        // Center on NJ
        center: [40.06, -74.41],
        zoom: 12,
        layers: [lightMap, barSubThree, barThreeFour, barAboveFour]
    });

    // Create a layer control, passing in the overlay maps
    L.control.layers(baseMap, overlayMap, {
        collapsed: false
    }).addTo(map);
    

}
// Create a createMarkers Function
function createMarkers(response) {

    // Pull the Bars from the JSON
    // awaiting dataset
    var bars = response.feature;
    console.log(bars);
    var count = Object.keys(bars).length;
    console.log(count);
    
    // Initalize an array to hold each layer (barMarker)
    // Might be able to do only one layer for the time being, if so at least get the rating
    // an array for each Rating interval
    var barSubThree = [];
    var barThreeFour = [];
    var barAboveFour = [];

    // Loop Through the bars array
    for (var index = 0; index < count; index++) {
        var bar = bars[index];
        console.log(bar);
        console.log(bar_search());
        // For each bar, create a marker and bind a popup with the bar description
        var barMarker = L.marker([addr_search(bar)])
            .bindPopup("<h3>" + bar.restaurant_name + "<h3><h3>Type: " + bar.bar_type + 
            "<h3><h3>Address: " + bar.address_list + "<h3><h3>Average Price: " + bar.price_level + 
            "<h3><h3>Ratings: " + bar.rating_list + "</h3>");

        // Add the marker to the barMarker array corresponding to the rating interval
        if (bar.ratings < 3){
            barSubThree.push(barMarker);
        }else if (bar.rating_list >= 3  && bar.rating_list <= 4){
            barThreeFour.push(barMarker);
        }else {
            barAboveFour.push(barMarker);
        }
        

    }
    // Create a Layer Group made from the barMarker array and pass it to the createMap function
    createMap(L.layerGroup(barSubThree), L.layerGroup(barThreeFour), L.layerGroup(barAboveFour));

}

// Read in JSON and and pass parameters to the createMarker Function
// JSON is read from a view from the flask application querying the database that is returned as a JSON
filePath = "/../json/atlantic_city.json";
d3.json(filePath, createMarkers);
