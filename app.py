# Import necessary libraries
from flask import Flask, render_template, jsonify, redirect
import numpy as np
import datetime as dt
import psycopg2

import json, csv

# Create instance of Flask app
app = Flask(__name__)

jsonDict = {}

# Create Routes
@app.route("/")
def init():
    hostname = "localhost"
    dbname = "Project2_Group5"
    user = "Group5"
    password = "group5!"

    conn = psycopg2.connect(host=hostname, dbname=dbname, user=user, password=password)

    cursor = conn.cursor()

    #with open('csv/alantic_City_data.csv', 'r') as f:
    #    next(f) # Skip the header row.
    #    cursor.copy_from(f,'bar_description')

    conn.commit()

    cursor.execute("SELECT * FROM bar_description")

    results = cursor.fetchall()

    return json.dumps(results)

if __name__ == "__main__":
    app.run(debug=True)
