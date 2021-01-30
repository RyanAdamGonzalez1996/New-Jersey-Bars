import csv, json

# Read in the CSV files from our database tables
atlanticCity = "csv/Alantic_City_data.csv"
flemington = "csv/Flemington_data.csv"
morristown = "csv/Morristown_data.csv"
newBrunswick = "csv/New_Brunswick_data.csv"
princeton = "csv/Princeton_data.csv"
somerville = "csv/Somerville_data.csv"
trenton = "csv/Trenton_data.csv"
allCity = "csv/allCity_Geocode.csv"

# All City
data2 = []

from csv import DictReader
fieldnames2 = ("restaurant_name","bar_type","price_level","rating_list","address_list","Latitude","Longitude")
with open(allCity, 'r') as fd:
  data2.append(list(DictReader(fd, fieldnames2)))

with open("json/allCity.json", 'w') as fd:
  json.dump(data2, fd)

