// Interactive Bar Map
// Want to input the location of each bar onto the leaflet app
// Will create markers with properties of :
// Hovering over: shows Bar description: (name, barType, address, hours, avgPrice, ratings)
// Clicking marker: Send you their website, if they have one.
// Layers to see bars based on ratings (<3, 3-4, 4+) and by avgPrice(intervals tbd)
// Layer to show by County
// Maybe: Markers depcit picture of type of bar, club, restuarant, pub

// Create a createMap Function

    // Create a tile Layer that will be the base 

    // Create a baseMap Object

    // Create an overlayMap object

    // Create the map object

    // Create a layer control, passing in the overlay maps


// Create a createMarkers Function

    // Pull the Bars from the JSON

    // Initalize an array to hold each layer (barMarker)
    // Might be able to do only one layer for the time being, if so at least get the rating
    // an array for each Rating interval

    // Loop Through the bars array

        // For each bar, create a marker and bind a popup with the bar description

        // Add the marker to the barMarker array
  
    // Create a Layer Group made from the barMarker array

// Create a createLegend Function: Maybe, only if doing pics for each marker
    
    // Create a Legend

    // Append a div element to the HTML to add the Legend

    // Add the Legend to the map

// Read in JSON and and pass parameters to the createMarker Function
// JSON is read from a view from the flask application querying the database that is returned as a JSON

// Add the Legend to the Map: Maybe