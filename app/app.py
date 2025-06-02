import os
import bcrypt
from flask import Flask, session, redirect, render_template, request, flash, url_for
from flask import current_app
from flask_session import Session
import atexit
import time
from pytz import timezone


# initialize the Flask application
app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


# for managing cache
@app.after_request
def after_request(response):
    response.headers["cache-control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["pragma"] = "no-cache"
    return response


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/index", methods=["GET", "POST"])
def cgpa():
     
     if request.method == "POST":
        return redirect(url_for("index"))

if __name__ == "__main__":
    app.run(debug=True)
    