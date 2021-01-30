# New-Jersey-Bars
=======
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
