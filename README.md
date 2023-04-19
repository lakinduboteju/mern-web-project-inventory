# Example MERN Web Project

## Prerequisites

Before running backend NodeJS server, bring up a MongoDB server.

### Running a MongoDB server locally (using Docker)

``` bash
# M1 Mac
$ docker run --name mongodb -d -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=user -e MONGO_INITDB_ROOT_PASSWORD=pass arm64v8/mongo:5.0.16
```

### Running a MongoDB cluster on MongoDB Atlas

https://www.mongodb.com/docs/atlas/tutorial/deploy-free-tier-cluster/

### Initialize MongoDB with data

There is a JS script to initialize MongoDB with data `backend/init-mongodb.js`.

First, set MongoDB connection string in the script.

``` javascript
const mongoConnectionUri = '<mongodb connection string comes here>';
```

Then, run the script.

``` bash
$ cd backend

$ nvm use v18.13.0

$ node init-mongodb.js
```

-------------------------------------------------------------------------------------

## Running backend

Before running the backend, set MongoDB connection string in `backend/src/server.js`.

``` javascript
const config = {
    ...
    mongo: {
        connectionUri: '<mongodb connection string comes here>',
        ...
    },
};
```

Then start the backend server.

``` bash
$ cd backend

$ nvm use v18.13.0

$ npm run start
# or
$ node src/server.js
```

-------------------------------------------------------------------------------------

## Running frontend

``` bash
cd frontend

$ nvm use v18.13.0

$ npm run start
```

-------------------------------------------------------------------------------------