# Import necessary libraries
from flask import Flask, render_template, jsonify, redirect
import numpy as np
import datetime as dt

import json, csv

# Create instance of Flask app
app = Flask(__name__)

jsonDict = {}

# Create Routes
@app.route("/")
def init():
    # Create a connection to posgresql database
    conn = psycopg2.connect("dbname= Project2_Group5 user=Group5 password=group5!")

    cursor = conn.cursor()

    cursor.execute("SELECT * FROM bar_description")

    results = cursor.fetchall()
    
    jsonDict =
    conn.close()

    return jsonDict

if __name__ == "__main__":
    app.run(debug=True)
