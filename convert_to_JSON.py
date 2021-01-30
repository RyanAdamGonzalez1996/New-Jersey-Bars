import csv, json
import pandas as pd
# Read in the CSV files from our database tables
atlanticFilePath = "csv/Alantic_City_data.csv"


# Declare dictionaries to store tables
atlanticData = {}


    
from csv import DictReader
fieldnames = ("restaurant_name","bar_type","price_level","rating_list","address_list")

with open(atlanticFilePath, 'r') as fd:
  data = list(DictReader(fd, fieldnames))

with open("json/atlantic_city.json", 'w') as fd:
  json.dump(data, fd)