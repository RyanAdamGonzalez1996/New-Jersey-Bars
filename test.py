import csv, json

# Read in the CSV files from our database tables
atlanticFilePath = "csv/atlantic_city_data.csv"


# Declare dictionaries to store tables
atlanticData = {}


# Load the tables into the dictionaries
with open(atlanticFilePath) as descCSV:
    csvReader = csv.DictReader(descCSV)
    for csvRow in csvReader:
        isbn = csvRow["restaurant_name"]
        atlanticData[isbn] = csvRow

              
# Create a complete data list that contains the two dictionaries


with open("json/atlantic_city.json", "w") as jsonFile:
    jsonFile.write(json.dumps(atlanticData))
    
print(atlanticData)