'''
Contains DB class, to communicate with the mongodb database.
'''

from pymongo import MongoClient


class DB:
    '''
    DB class, to communicate with the mongodb database.
    '''

    def __init__(self) -> None:
        self.client = MongoClient(
            'mongodb+srv://trabbler:Trabbler0@cluster0.mzyvofo.mongodb.net/?retryWrites=true&w=majority')
        self.Db = self.client['Cluster0']

    def get_db(self):
        '''Grabs the db connection'''
        return self.Db

    def get_collection(self, collection):
        '''Grabs a collection from the db'''
        # Dry code so don't have to repeat db[collection] everywhere
        # Maybe cache this?
        return self.Db[collection]

    def register_user(self, user):
        '''Puts a user into the database'''
        users = self.get_collection(user)
        users.insert_one(user)

    def register_driver(self, driver):
        '''Puts a driver into the database. User and driver reside in different collection'''
        # TODO: Register driver as user too
        drivers = self.get_collection("drivers")
        drivers.insert_one(driver)

    def get_user(self, email):
        '''Returns a user'''
        users = self.get_collection("users")
        users.find_one(email)
        return users.find_one()

    def add_trip(self, trip):
        '''Puts a trip into the database'''
        trips = self.get_collection('trips')
        trips.insert_one(trip)

    def get_trips(self):
        '''Returns all the trips'''
        trips = self.get_collection('trips')
        return trips.find()
