import csv, json

# Read in the CSV files from our database tables
atlanticCity = "csv/Alantic_City_data.csv"
flemington = "csv/Flemington_data.csv"
morristown = "csv/Morristown_data.csv"
newBrunswick = "csv/New_Brunswick_data.csv"
princeton = "csv/Princeton_data.csv"
somerville = "csv/Somerville_data.csv"
trenton = "csv/Trenton_data.csv"

files = [atlanticCity, flemington, morristown, newBrunswick, princeton, somerville,trenton]
data = []

from csv import DictReader
fieldnames = ("restaurant_name","bar_type","price_level","rating_list","address_list")
for file in files:
    with open(file, 'r') as fd:
        data.append(list(DictReader(fd, fieldnames)))

with open("json/atlantic_city.json", 'w') as fd:
  json.dump(data, fd)