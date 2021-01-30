# Group 5 - New-Jersey-Bars

# Group Members
  - Delia Hellander
  - Raul Acosta
  - Ryan Gonzalez

# GitHub Pages
https://deliahellander.github.io/New-Jersey-Bars/

# Presentation
https://docs.google.com/presentation/d/1-f86qN85c_3apV2jniODS03RKxa45QwZiKuTr-gF0Pg/edit?usp=sharing

# Proposal
The main purpose of our project will be to create a refined version of Google Maps that specifically deals with bars, so that the user can find a new bar to try in New Jersey . The application will provide necessary data for each bar and allow the user to set parameters to help them find a bar to their liking.

https://docs.google.com/document/d/1UNK2ufW1AakQiwY8aykwzWT2JAURC6hCCWcsJ0p18hY/edit

# Data Sources
TripAdvisor - https://www.tripadvisor.com/

# Repository Contents
## css (folder)
  - Contains our css style file for the site
  
## csv (folder)
  - Contains the transformed csv files from the extract
  - Also contains the geocodio csv that contains the lat/long derived from the address
  
## Extract (folder)
  -  Contains the Jupyter Notebook files that scraped the data from TripAdvisor
  
## Images (folder)
  - Contains images used in the making of the webiste
  - Also contains images used in our presentation
  
## js (folder)
  - Contains the JavaScript files to run our visualizations
  - Alos contains the config.py file to hide our API via the .gitignore
  
## json (folder)
  - Contains a local JSON file extracted from the GeoCodio CSV used
  - Was made for testing until we get the flask.app working properly
  
## Resources (Folder)
  - Contains the CSV directly made from the Extract
  
## app.py
  - Our Flask application that will query our data base and host the URL of our JSON data
  - JSON data will sit in the "/dataset" route
  
## convert_to_JSON.py
  - Quick Python application to convert the GeoCodio CSV to a local JSON object in our json folder
  
## about.html
  - Contains the HTML code for the about page on our site
  
## index.html
  - Contains the HTML code for the main page of our site
  
## map.html
  - Contains the HTML code for the map visualization page on our site
  
## top_ten_bars.html
  - Contains the HTML code for the top ten visualization page on our site
  
## requirements.txt
  - A text file that lists all of the requirements needed to run this code
  
## ReadMe
  -  You're reading it now
  
# Assignment Details
  - Create an interactive site that displays information about all of the bars in New Jersey. The application will show the best bars in New Jersey. While also, allowing the user to user an interactive map that has all of the bar locations indicated by a marker, and by clicking that marker, information for that bar is shown in a tooltip. The map will also allow the user to filter by ratings to find the best bars around them. 

# Method
  ## How we created the application
  - Created the basis for our application using HTML and CSS
  - Scraped the data from TripAdvisor and uploaded it to a postgresSQL database
  - Exported the database tables to two CSV files for future use
  - Used a Flask application to read in the CSV files and convert them into a JSON object in our "/dataset" route
  - Load the Top Ten Bars Data Visualization
  - Used the JSON object in the "/dataset" route, to create the Leaflet application to finalize the interactive map.
  
# Screenshots of code in action
  - Can also be seen on our presentation slide: https://docs.google.com/presentation/d/1-f86qN85c_3apV2jniODS03RKxa45QwZiKuTr-gF0Pg/edit?usp=sharing

## Map Visualization 
(images/mapFinalMarkers.png)

## Map Visualization ToolTip
(images/mapFinal_toolTip.png)

## Top Ten Chart
(images/Chart.png)

# Database
## Tables
### bar_description
  - bar_id PK serial
  - bar_name varchar
  - bar_type varchar
  - avg_price varchar
  - ratings decimal
  - address varchar
  
# How to run Code
Two Options:
## Option 1
  - Clone the repository to a local folder
  - Run the index.html in a live server
    - Either a python http server
    - Or live server extension on Visual Studio Code
## Option 2
  - Click the link for GitHub Pages
  - https://deliahellander.github.io/New-Jersey-Bars/
  - Enjoy
  
# Issues we Encountered
## Data Scraping taking much longer than anticipated
  - The Scraping not only took a long time to iterate through the code, but the data was lacking from what we needed
  - We only did a framework of the rest of our assignment and didn't attempt to try a psuedo database for testing. Ended up waiting for the data and did not have ample time due to this
    - Looking back, getting a small dataset, like 10 bars, would have made the testing phase a lot more streamlined and would've allowed for ample time
    - Once we get that sample dataset working then we know our project is working and just have to make sure the scraping reflects any changes we would have made

## Getting the JSON format correct
  - Creating the JSON caused some issues initially as the formatting was off and we had to re-think the way we approached it
  
# Future Steps to Improve Project
## Flask.app fully online
  - Currently, our porject only works on Local Servers
  - We would like to get the Flask Application working 100% to query our already made database
    - Will have to revamp our database once more due to the usage of GeoCodio
  - We did not have time to really understand how to use our Flask Application to return a JSON object to our site
    - Currently, unsure of the exact way of performing this action, will have to do further research
    
## Live updates on new Bars
  - Not necessary, but will be much appreciated to have our site do a check with TripAdvisor to make sure the ratings are up-to-date and if there are any new bars
  - Main issue will be performing this scrape in the background while the user is on our website without affecting the performance of our site.
    - Can have a server do a seperate scrape and make the changes to our database seperately and just have our flask app do a fresh query whenever initiated

## More Detailed data along with all of NJ
  - We noticed that the layers we had should do more , most bars are above a rating of 3, so we should use more frequent intervals
  - Also would like to add additional layers, such as price, so that the user can refine their search
    - Attempted to do this, but it created 2 markers for each layergroup and caused a lot of unecessary clutter
    
## Polished Styling
  - The visualizations work, but the data isn't presented in the finest way. Thus making the user experience poor
  - Will go back and update the css files to properly format the visualizations when everything is working
  
