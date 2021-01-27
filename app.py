# Import necessary libraries
from flask import Flask, render_template, jsonify, redirect
import numpy as np
import datetime as dt

import json, csv

# Create instance of Flask app
app = Flask(__name__)

# Read in the CSV files from our database tables
descriptionFilePath = "/../csv/mini_oprah"
locationFilePath = "/../csv/new_york_times"

# Declare dictionaries to store tables
descriptionData = {}
locationData = {}

# Load the tables into the dictionaries
with open(descriptionFilePath) as descCSV:
    csvReader = csv.DictReader(open(descCSV))
    for csvRow in csvReader:
        isbn = csvRow["isbn"]
        descriptionData[isbn] = csvRow

with open(locationFilePath) as locationCSV:
    csvReader = csv.DictReader(open(locationCSV))  
    for csvRow in csvReader:
        isbn = csvRow["isbn"]
        locationData[isbn] = csvRow
              
# Create a complete data list that contains the two dictionaries
data = [descriptionData, locationData]

# Create Routes
@app.route("/")
def index():

@app.route("/map")
def interactiveMap():

@app.route("/top_ten_bars")
def apiPage():

# Contains the JSON data of our database
@app.route("/dataset")
def rawData():