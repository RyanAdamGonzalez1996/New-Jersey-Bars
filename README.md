# New-Jersey-Bars

# Steps to navigate through our data
1. Scrape the data from TripAdvisor and upload it to our database
2. Query the database with a Flask application to our "/dataset" route
  - Which transforms that data to a JSON by returning the query with jsonify
3. Use D3.json to read in the json data from the "/dataset" URL
  - Use this data to create a leaflet app to display an interactive map onto the "/map" html
