'''
Main server file
'''

from flask import Flask
from db import DB
import logging

app = Flask(__name__)
db = DB()


@app.route('/')
def index():
    '''Dummy route for testing'''
    return 'Hello, World!'


@app.route('/api/registeruser', methods=['POST'])
def register_user(request):
    '''Registers a user'''
    user = request.form['user']
    email = request.form['email']
    password = request.form['password']
    fullname = request.form['fullname']
    phone = request.form['phone']

    # If email or password is missing, return error
    if not (email or password):
        return 'Missing email or password', 400

    if db.get_user(email):
        return 'Email already exists', 400

    # If email already exists, return error
    if db.get_user(email):
        return 'Email already exists', 400
    db.register_user({"user": user, "email": email,
                     "password": password, "fullname": fullname, "phone": phone})
    return 200


@app.route('/api/registerdriver', methods=['POST'])
def register_driver(request):
    '''Registers a driver to the databse'''
    email = request.form['email']
    password = request.form['password']
    fullname = request.form['fullname']
    phone = request.form['phone']
    vtype = request.form['vehicleType']
    vm = request.form['vM']
    ln = request.form['lN']

    try:
        db.register_driver({"email": email, "password": password,
                           "fullname": fullname, "phone": phone, "vtype": vtype, "vm": vm, "ln": ln})
    except Exception:
        return 'Error registering driver', 400
    return 200


@app.route('/api/login', methods=['POST'])
def login(request):
    email = request.form['email']
    password = request.form['password']
    if not (email or password):
        return 'Missing email or password', 400
    if not db.get_user(email):
        return 'Email does not exist', 400
    if db.get_user(email)['password'] != password:
        return 'Incorrect password', 400
    return 200


@app.route('/api/trips', methods=['GET'])
def get_trips():
    '''Returns all the trips'''
    return db.get_trips(), 200


@app.route('/api/add_trip', methods=['POST'])
def add_trip(request):
    '''Adds a trip'''
    pick = request.form['pickUp']
    drop = request.form['dropUp']
    try:
        db.add_trip({"pickUp": pick, "dropUp": drop})
    except Exception:
        return 'Error adding trip', 400
    return 'Trip added successfully', 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
