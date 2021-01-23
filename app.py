# Import necessary libraries
from flask import Flask, render_template, jsonify, redirect
import numpy as np
import datetime as dt

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

# Create instance of Flask app
app = Flask(__name__)

# Setup database
engine = create_engine("")
# Create Routes
@app.route("/")
def index():

@app.route("/map")
def interactiveMap():

@app.route("/top_ten_bars")
def apiPage():

#@app.route("/dataset")
#def rawData():