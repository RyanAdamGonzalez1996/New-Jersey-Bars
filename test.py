import csv, json

# Read in the CSV files from our database tables
descriptionFilePath = "csv/mini_oprah.csv"
locationFilePath = "csv/new_york_times.csv"

# Declare dictionaries to store tables
descriptionData = {}
locationData = {}

# Load the tables into the dictionaries
with open(descriptionFilePath) as descCSV:
    csvReader = csv.DictReader(descCSV)
    for csvRow in csvReader:
        isbn = csvRow["isbn"]
        descriptionData[isbn] = csvRow

with open(locationFilePath) as locationCSV:
    csvReader = csv.DictReader(locationCSV)  
    for csvRow in csvReader:
        isbn = csvRow["isbn"]
        locationData[isbn] = csvRow
              
# Create a complete data list that contains the two dictionaries
data = [descriptionData, locationData]

with open("plswork.json", "w") as jsonFile:
    jsonFile.write(json.dumps(data))
    
print(data)