'''
Main server file
'''

from flask import Flask
from db import DB

app = Flask(__name__)
db = DB()

@app.route('/')
def index():
    '''Dummy route for testing'''
    return 'Hello, World!'

@app.route('/api/register', methods=['POST'])
def register(request):
    '''Registers a user'''
    user = request.form['user']
    email = request.form['email']
    password = request.form['password']
    post = request.form['post']

    # If email or password is missing, return error
    if not(email or password):
        return 'Missing email or password', 400

    if db.get_user(email):
        return 'Email already exists', 400

    # If email already exists, return error
    if db.get_user(email):
        return 'Email already exists', 400
    if post == "driver":
        db.register_driver({"user": user, "email": email, "password": password}) 
        return 200
    db.register_user({"user": user, "email": email, "password": password})
    return 200

@app.route('/api/trips', methods=['GET'])
def get_trips():
    '''Returns all the trips'''
    return db.get_trips(), 200

